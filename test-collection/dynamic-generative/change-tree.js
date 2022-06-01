/* eslint-disable no-console */

// eslint-disable-next-line func-names


if (typeof exports === 'undefined') {
  the_exports = window;
} else {
  the_exports = exports;
}

(function (the_exports) {
  the_exports.changeTree =  function changeTree() {

  const START_ELEMENT = /"abc/g;
  const END_ELEMENT = /XYZ"/g;
  const ABC_XYZ_TO_N = /"abc\d+XYZ"/g;

  const ARRAY_OF_2_NUMBERS = /\["number","number"\]/g;
  const ARRAY_OF_3_NUMBERS = /\["number","number","number"\]/g;
  const ARRAY_OF_4_NUMBERS = /\["number","number","number","number"\]/g;
  const ARRAY_OF_5_NUMBERS = /\["number","number","number","number","number"\]/g;
  const ARRAY_OF_6_NUMBERS = /\["number","number","number","number","number","number"\]/g;
  const ARRAY_OF_7_NUMBERS = /\["number","number","number","number","number","number","number"\]/g;

  // changeNumberToString('~~~function~~~ :1}  [2]  :3,  ,4,  ,5], [6, ~~~function~~~', 3);
  function changeNumberToString(tree_str, a_value) {
    let changed_tree;
    const colon_bracket = new RegExp(`:${a_value}}`);
    const square_square = new RegExp(`\\[${a_value}\\]`);
    const colon_comma = new RegExp(`:${a_value},`);
    const comma_comma = new RegExp(`,${a_value},`);
    const comma_square = new RegExp(`,${a_value}\\]`);
    const square_comma = new RegExp(`\\[${a_value},`);
    if (tree_str.match(colon_bracket)) {
      const semi_brack_value = `:"s-${a_value}"}`;
      changed_tree = tree_str.replace(colon_bracket, semi_brack_value);
    } else if (tree_str.match(square_square)) {
      const square_square_value = `["s-${a_value}"]`;
      changed_tree = tree_str.replace(square_square, square_square_value);
    } else if (tree_str.match(colon_comma)) {
      const semi_comma_value = `:"s-${a_value}",`;
      changed_tree = tree_str.replace(colon_comma, semi_comma_value);
    } else if (tree_str.match(comma_comma)) {
      const comma_comma_value = `,"s-${a_value}",`;
      changed_tree = tree_str.replace(comma_comma, comma_comma_value);
    } else if (tree_str.match(comma_square)) {
      const comma_square_value = `,"s-${a_value}"]`;
      changed_tree = tree_str.replace(comma_square, comma_square_value);
    } else if (tree_str.match(square_comma)) {
      const square_comma_value = `["s-${a_value}",`;
      changed_tree = tree_str.replace(square_comma, square_comma_value);
    } else {
      console.log('changeNumberToString() cannot find ', a_value, tree_str);
    }
    return changed_tree;
  }

  function noMergetreeType(tree_str) {
    const array_numbers = tree_str.replace(ABC_XYZ_TO_N, '"number"');
    const the_type = JSON.parse(array_numbers);
    return the_type;
  }

  function mergeTreeType(tree_str) {
    const array_numbers = tree_str.replace(ABC_XYZ_TO_N, '"number"');
    const single_7_arrs = array_numbers.replace(ARRAY_OF_7_NUMBERS, '["numbers"]');
    const single_6_arrs = single_7_arrs.replace(ARRAY_OF_6_NUMBERS, '["numbers"]');
    const single_5_arrs = single_6_arrs.replace(ARRAY_OF_5_NUMBERS, '["numbers"]');
    const single_4_arrs = single_5_arrs.replace(ARRAY_OF_4_NUMBERS, '["numbers"]');
    const single_3_arrs = single_4_arrs.replace(ARRAY_OF_3_NUMBERS, '["numbers"]');
    const single_2_arrs = single_3_arrs.replace(ARRAY_OF_2_NUMBERS, '["numbers"]');
    const the_type = JSON.parse(single_2_arrs);
    return the_type;
  }

  function treeAsArguments(tree_str) {
    const prop_nums_start = tree_str.replace(START_ELEMENT, '');
    const prop_nums_end = prop_nums_start.replace(END_ELEMENT, '');
    const the_arguments = JSON.parse(prop_nums_end);
//    const correct_args = [the_arguments];
    const correct_args = the_arguments;
    return correct_args;
  }

  function testNumToStr(tree_str, the_values) {
    // eslint-disable-next-line no-undef
    const prop_nums_start = tree_str.replace(START_ELEMENT, '');
    const prop_nums_end = prop_nums_start.replace(END_ELEMENT, '');
    const num_values = the_values.length;
    if (num_values > 1) {
      const rand_index = getRandomInt(num_values);
      const rand_value = the_values[rand_index];
      // console.log('rand', rand_value);
      const fail_str = changeNumberToString(prop_nums_end, rand_value);
      const the_arguments = JSON.parse(fail_str);
      const errored_args = [the_arguments];
      return errored_args;
    }
    return false;
  }

  //    changeKeytoX('xxxx "k5": xxx', "k5")
  function changeKeytoX(tree_str, a_key) {
    const key_num = a_key.substring(1);
    const k_key = `"${a_key}":`;
    const x_key = `"xXxXx${key_num}":`;
    const changed_tree = tree_str.replace(k_key, x_key);
    return changed_tree;
  }

  function kKeyToXArgs(tree_str, the_keys) {
    // eslint-disable-next-line no-undef
    const prop_nums_start = tree_str.replace(START_ELEMENT, '');
    const prop_nums_end = prop_nums_start.replace(END_ELEMENT, '');
    const num_keys = the_keys.length;
    if (num_keys > 1) {
      const rand_index = getRandomInt(num_keys);
      const rand_key = the_keys[rand_index];
      const fail_str = changeKeytoX(prop_nums_end, rand_key);
      const the_arguments = JSON.parse(fail_str);
      const errored_args = [the_arguments];
      return errored_args;
    }
    return false;
  }

  function badTreeType(tree_str, the_values) {
    const num_values = the_values.length;
    if (num_values > 1) {
      const rand_index = getRandomInt(num_values);
      const rand_value = the_values[rand_index];
      const long_number = `"abc${rand_value}XYZ"`;
      const tree_str_one_s = tree_str.replace(long_number, '"string"');
      const tree_types = tree_str_one_s.replace(ABC_XYZ_TO_N, '"number"');
      const the_type = JSON.parse(tree_types);
      return the_type;
    }
    return false;
  }

  function kKeyToXTypes(tree_str, the_keys) {
    const num_keys = the_keys.length;
    if (num_keys > 1) {
      const rand_index = getRandomInt(num_keys);
      const rand_key = the_keys[rand_index];
      const fail_str = changeKeytoX(tree_str, rand_key);

      const fail_str_22 = fail_str.replace(ABC_XYZ_TO_N, '"number"');

      const the_arguments = JSON.parse(fail_str_22);

      const errored_args = [the_arguments];
      return errored_args;
    }
    return false;
  }


  // eslint-disable-next-line object-curly-newline
  const change_tree = { treeAsArguments, noMergetreeType, mergeTreeType, testNumToStr, kKeyToXArgs, badTreeType, kKeyToXTypes };
  return change_tree;
  }



}(the_exports));