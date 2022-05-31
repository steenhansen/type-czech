example-package.json

{
"name": "type-czech-prod-dev-toggle",
"description": "Automatic runtime type checking example",
"version": "1.0.0",
"scripts": {

    "make-tc-dev" : "node ./node_modules/type-czech/make_tc_dev.js",
    "make-tc-prod" : "node ./node_modules/type-czech/make_tc_prod.js",
    "dev": "npm run make-tc-dev && npm run server",
    "prod": "npm run make-tc-prod && npm run build && npm run server:prod",
