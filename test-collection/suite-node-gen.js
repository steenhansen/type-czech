//  node --trace-uncaught suite-node-gen.js

require('./node_includes.js');

global.TEST_total_checks = 0;
global.TEST_total_fails = 0;
global.TEST_show_random = false;
global.TEST_number_generatives = 234;

require('./dynamic-generative/random-signatures.js');

console.log('total fails = ', global.TEST_total_fails);
console.log('total checks = ', global.TEST_total_checks);
