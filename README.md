# example-node-api

Example API in Node.js using Service Template Node

## Purpose

This application is an example of creating a minimal service with [Service Template Node](https://www.mediawiki.org/wiki/ServiceTemplateNode) and deploying it to the WMF infrastructure.

This Example API removes much of the Service Template Node boilerplate code, to show what a minimal service looks like and how it can be deployed. If you are looking for an example of how to do a particular thing, check Service Template Node.

## Installation

To get the code and prepare for local execution/testing

1) clone the repository

```
git clone "https://gerrit.wikimedia.org/r/mediawiki/services/example-node-api"
```

2) install the dependencies

```
cd mediawiki-services-example-node-api
npm install
```

## Execxution

To try the service locally

1) launch the service

```
npm start
```

2) invoke the "hello" endpoint (either in your browser or via something like curl)

```
http://localhost:6927/hello
```

### Tests

The Example Node API includes tests from Service Template Node, as well as its own test.
To execute tests, run:

```
npm test
```

### Troubleshooting

You can solve many issues by recreating the `node_modules` directory:

```
rm -r node_modules
npm install
```

