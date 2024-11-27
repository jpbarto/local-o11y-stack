# Local Observability Stack

This repository contains a Docker Compose file to run a full, single, deployment of Observability tooling for traces, logs, and metrics. Based on Grafana the stack uses Tempo, Prometheus, and Loki.

> Note: This stack is heavily based on the O11y stack created by Tracetest, available at https://github.com/kubeshop/tracetest. A special thanks to the creators of this stack!

## Using the stack

To run the stack in your local dev environment execute `docker compose up`. In addition to the Grafana stack it will also launch an OpenTelemetry collector which can be used to send logs, metrics, and traces to the stack.

The OpenTelemetry collector is listening on the standard ports for telemetry.

## Notes for development

Consider what can be used from microbs.io for demo code / Docker configuration
