//  node --trace-uncaught test-node-generative.js

require('./node_includes.js');

global.TEST_total_checks = 0;
global.TEST_total_fails = 0;
global.TEST_show_random = false;
global.TEST_number_generatives = 120;
global.generative_pass_count = 0;

require('./dynamic-generative/random-signatures.js');

console.log('total fails = ', global.TEST_total_fails);
console.log('total generative checks = ', global.generative_pass_count);
