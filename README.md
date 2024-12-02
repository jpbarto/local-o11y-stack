# Local Observability Stack

This repository contains a Docker Compose file to run a full, single, deployment of Observability tooling for traces, logs, and metrics. Based on Grafana the stack uses Tempo, Prometheus, and Loki.

> Note: This stack is heavily based on the O11y stack created by Tracetest, available at https://github.com/kubeshop/tracetest. A special thanks to the creators of this stack!

> Note: This repository has also been adapted based on the opentelemetry-demo managed as part of the OpenTelemetry project at https://github.com/open-telemetry/opentelemetry-demo

## Using the stack

To run the stack in your local dev environment execute `docker compose up --force-recreate --remove-orphans`. In addition to the Grafana stack it will also launch an OpenTelemetry collector which can be used to send logs, metrics, and traces to the stack.

To access Grafana connect to http://0.0.0.0:3000
To access Jaeger connect to http://0.0.0.0:16686

The OpenTelemetry collector is listening on the standard ports for telemetry.

## Testing the stack
There is sample code to produce telemetry in the form of a NodeJS HTTP server app. To execute this app run `npm run with-telemetry` and then `curl http:/0.0.0.0:8080` on the web server. This will generate traces and metrics which can be reviewed in Grafana.

## Notes for development

Consider what can be used from microbs.io for demo code / Docker configuration
