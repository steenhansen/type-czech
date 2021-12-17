/* eslint-disable no-console */

//  node --trace-uncaught test-signatures-node.js

const type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE');
const change_tree = changeTree();

let  { treeAsArguments, noMergetreeType, mergeTreeType, 
  testNumToStr, kKeyToXArgs, badTreeType, kKeyToXTypes } =change_tree;

function reflectTree(tree_str, show_data) {
  const the_arguments = treeAsArguments(tree_str);
//  console.log('dddddddd', tree_str)
  const no_merge_type = noMergetreeType(tree_str);
 if (show_data) {
    console.log('Random Generated Tree:', tree_str);
    console.log();
    console.log('Values:', JSON.stringify(the_arguments));
    console.log();
    console.log('       Types:', JSON.stringify(no_merge_type));
    console.log();
}
  //const test_no_merge = type_czech_test.checkParam_type(the_arguments, no_merge_type);
  var [test_no_merge, _, _] = type_czech_test.checkParam_type(the_arguments, no_merge_type);


  return test_no_merge;
}

function mutliNumTypeToSingleNum(tree_str, show_data) {
  const the_arguments = treeAsArguments(tree_str);
  const no_merge_type = noMergetreeType(tree_str);
  const merge_type = mergeTreeType(tree_str);

  const no_merge_str = JSON.stringify(no_merge_type);
  const merge_str = JSON.stringify(merge_type);
  if (no_merge_str.length !== merge_str.length) {

    if (show_data && typeof process !== 'undefined') {
      process.stdout.write('-M-');
    }
    
    if (show_data) {
      console.log();
      console.log('Multi Merged:', JSON.stringify(merge_type));
      console.log();
    }
  } else if (show_data) {
    console.log();
    console.log('Multi Same, not merged');
    console.log();
  }

  the_error = type_czech_test.checkParam_type(the_arguments, merge_type);
  return the_error;
}

function numberArgToString(tree_str, the_values, show_data) {
  const bad_arguments = testNumToStr(tree_str, the_values);
  if (bad_arguments) {
    if (show_data) {
      console.log('bad_arguments with one "s-123" value:', JSON.stringify(bad_arguments));
      console.log();
    }
    const merge_type = noMergetreeType(tree_str);
    var [num_to_str_value_error, _, _] = type_czech_test.checkParam_type(bad_arguments, merge_type);
    if (num_to_str_value_error === '') {
      return 'numberArgToString() failed, as there was no error on the change from a number to string VALUE?';
    }
  }
  return '';
}

function keyRenameKtoXinArgs(tree_str, the_keys, show_data) {
  const bad_arguments = kKeyToXArgs(tree_str, the_keys);
  if (bad_arguments) {
    if (show_data) {
      console.log('bad_arguments with one "x123" key:', JSON.stringify(bad_arguments));
      console.log();
    }
    const merge_type = noMergetreeType(tree_str);
    var [key_k_now_x_error, _, _] = type_czech_test.checkParam_type(bad_arguments, merge_type);
    if (key_k_now_x_error === '') {
      return 'keyRenameKtoXinArgs() failed, as there was no error on the change of a key of "k" to "x" in VALUES?';
    }
  }
  return '';
}

function numberTypeToStringType(tree_str, the_values, show_data) {
  const bad_types = badTreeType(tree_str, the_values);
  if (bad_types) {
    if (show_data) {
      console.log('bad_types with one "S" value:', JSON.stringify(bad_types));
      console.log();
    }
    const the_arguments = treeAsArguments(tree_str);
    var [num_to_str_type_error, _, _] = type_czech_test.checkParam_type(the_arguments, bad_types);
    if (num_to_str_type_error === '') {
      return 'numberTypeToStringType() failed, as there was no error on the change from a number to string TYPE?';
    }
  }
  return '';
}

function keyRenameKtoXinTypes(tree_str, the_keys, show_data) {
  const the_arguments = treeAsArguments(tree_str);
  const merge_type = kKeyToXTypes(tree_str, the_keys);
  if (merge_type) {
    if (show_data) {
      console.log('merge_type with one "x123" key:', JSON.stringify(merge_type));
      console.log();
    }
    var [key_k_now_x_error, _, _]  = type_czech_test.checkParam_type(the_arguments, merge_type);
    if (key_k_now_x_error === '') {
      return 'keyRenameKtoXinArgs() failed, as there was no error on the change of a key of "k" to "x" in TYPES?';
    }
  }
  return '';
}

function generativeTest(stop_index, show_data = false) {
  generative_pass_count += 1;
  const [tree_str, the_keys, the_values] = makeTree(stop_index);
  if (show_data) {
    if (typeof process !== 'undefined') {
      process.stdout.write(`${stop_index},`);
    }
  }

  // check un-changed tree is un-changed
  const reflect_error = reflectTree(tree_str, show_data);

  if (reflect_error) throw new Error(`Reflect Error:${reflect_error}`);

  // ['N', 'N', 'N'] => ['N']       multiple array TYPES fold into one
  const merge_array_error = mutliNumTypeToSingleNum(tree_str, show_data);
  if (merge_array_error) throw new Error(`Merge Array Error:${merge_array_error}`);

  // {k1:1, k2:2, k3:3} => {k1:1, k2:'s-2', k3:3}         one VALUE changes to string
  const num_to_str_err = numberArgToString(tree_str, the_values, show_data);
  if (num_to_str_err) throw new Error(`Value Number to String Error${num_to_str_err}`);

  // {k1:1, k2:2, k3:3} => {k1:1, X2:2, k3:3}          one key VALUE changes to 'X'
  const change_key_err = keyRenameKtoXinArgs(tree_str, the_keys, show_data);
  if (change_key_err) throw new Error(`Value Key Change Error:${change_key_err}`);

  // {k1:'N', k2:'N', k3:'N'} => {k1:'N', k2:'S', k3:'N'}       one TYPE changes to string
  const N_type_to_S_type = numberTypeToStringType(tree_str, the_values, show_data);
  if (N_type_to_S_type) throw new Error(`Type Change Error:${N_type_to_S_type}`);

  // {k1:'N', k2:'N', k3:'N'} => {k1:'N', X2:'N', k3:'N'}      one TYPE key changes to 'X'
  const k_key_to_X_type = keyRenameKtoXinTypes(tree_str, the_keys, show_data);
  if (k_key_to_X_type) throw new Error(`Type Key Change Error:${k_key_to_X_type}`);
}

generativeTest(TEST_number_generatives, TEST_show_random);



 for (let i = 0; i < TEST_number_generatives; i += 1) {
   generativeTest(i);
 }
