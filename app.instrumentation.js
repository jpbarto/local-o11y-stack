const { NodeSDK, tracing, logs } = require('@opentelemetry/sdk-node')
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node')
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc')
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-grpc')
const { PeriodicExportingMetricReader } = require('@opentelemetry/sdk-metrics')
const { PinoInstrumentation } = require('@opentelemetry/instrumentation-pino')
const grpc = require('@grpc/grpc-js')

const exporterConfig = {
  url: 'localhost:4317',
  credentials: grpc.ChannelCredentials.createInsecure()
}

const sdk = new NodeSDK({
  spanProcessor: new tracing.SimpleSpanProcessor(new tracing.ConsoleSpanExporter()),
  logRecordProcessor: new logs.SimpleLogRecordProcessor(new logs.ConsoleLogRecordExporter()),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter(exporterConfig)
  }),
  traceExporter: new OTLPTraceExporter(exporterConfig),
  instrumentations: [
    getNodeAutoInstrumentations(),
    new PinoInstrumentation({
      logHook: (span, record) => {
        record['resource.service.name'] = span.instrumentationLibrary.name
        record['resource.service.version'] = span.instrumentationLibrary.version
      }
    }),
  ],
  serviceName: 'simple-express-app',
})
sdk.start()
