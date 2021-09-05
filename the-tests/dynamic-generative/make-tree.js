/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */

// eslint-disable-next-line func-names
module.exports = function (getRandomInt) {
  function makeTree(stop_index) {
    /*  0 > 1
        1 > []
        2 > {}
        3 > [2]
        4 > {km:3}
        5 > [4, 5]
        6 > {km:6, kn:7}
        7 > [leaf]
        8 > {km:leaf}
        9 > [leaf, leaf]
        10 > {km:leaf, kn:leaf}
      else > leaf
    */
    let current_index = 1;
    const the_keys = [];
    const the_values = [];

    const START_NUMBER = 'abc';
    const END_NUMBER = 'XYZ';

    function recordKey(key_index) {
      const the_key = `k${key_index}`;
      the_keys.push(the_key);
      return the_key;
    }

    function recordValue(a_value) {
      the_values.push(a_value);
    }

    const currentNumElem = () => { // 0 > 1
      recordValue(current_index);
      const element_str = `${START_NUMBER}${current_index}${END_NUMBER}`;
      current_index += 1;
      // console.log('currentNumElem == ', current_index, element_str);
      return element_str;
    };

    const arrayEmpty = () => { // 1 > []
      const an_array = [];
      current_index += 1;
      // console.log('arrayEmpty == ', current_index, an_array);
      return an_array;
    };

    const objectEmpty = () => { // 2 > {}
      const an_object = {};
      current_index += 1;
      // console.log('objectEmpty == ', current_index, an_object);
      return an_object;
    };

    const array1Elem = () => { // 3 > [2]
      recordValue(current_index);
      const element_str = `${START_NUMBER}${current_index}${END_NUMBER}`;
      const an_array = [element_str];
      current_index += 1;
      // console.log('array1Elem == ', current_index, an_array);
      return an_array;
    };

    const object1Prop = () => { // 4 > {km:3}
      recordValue(current_index);
      const element_str = `${START_NUMBER}${current_index}${END_NUMBER}`;
      const an_object = {};
      const the_key = recordKey(current_index);
      an_object[the_key] = element_str;
      current_index += 1;
      // console.log('object1Prop == ', current_index, an_object);
      return an_object;
    };

    const array2Elems = () => { // 5 > [4, 5]
      recordValue(current_index);
      const first_str = `${START_NUMBER}${current_index}${END_NUMBER}`;
      current_index += 1;
      recordValue(current_index);
      const second_str = `${START_NUMBER}${current_index}${END_NUMBER}`;
      const an_array = [first_str, second_str];
      current_index += 1;
      // console.log('array2Elems == ', current_index, an_array);
      return an_array;
    };

    const object2Props = () => { // 6 > {km:6, kn:7}
      recordValue(current_index);
      const an_object = {};
      const key_1 = recordKey(current_index);
      const first_str = `${START_NUMBER}${current_index}${END_NUMBER}`;
      an_object[key_1] = first_str;
      current_index += 1;
      recordValue(current_index);
      const key_2 = recordKey(current_index);
      const second_str = `${START_NUMBER}${current_index}${END_NUMBER}`;
      an_object[key_2] = second_str;
      current_index += 1;
      // console.log('object2Props == ', current_index, an_object);
      return an_object;
    };

    const array1leaf = () => { // 7 > [leaf]
      const random_leaf = randomLeaves();
      const an_array = [random_leaf];
      current_index += 1;
      // console.log('array1leaf == ', current_index, an_array);
      return an_array;
    };

    const object1leaf = () => { // 8 > {km:leaf}
      const current_start = current_index;
      const random_leaf = randomLeaves();
      const an_object = {};
      const the_key = recordKey(current_start);
      an_object[the_key] = random_leaf;
      current_index += 1;
      // console.log('object1leaf == ', current_index, an_object);
      return an_object;
    };

    const array2leaves = () => { // 9 > [leaf, leaf]
      const random_leaf_1 = randomLeaves();
      current_index += 1;
      const random_leaf_2 = randomLeaves();
      const an_array = [random_leaf_1, random_leaf_2];
      current_index += 1;
      // console.log('array2leaves == ', current_index, an_array);
      return an_array;
    };

    const object2leaves = () => { // 10 > {km:leaf, kn:leaf}
      const current_1 = current_index;
      const random_leaf_1 = randomLeaves();
      const current_2 = current_index;
      const random_leaf_2 = randomLeaves();
      const an_object = {};
      const key_1 = recordKey(current_1);
      an_object[key_1] = random_leaf_1;
      const key_2 = recordKey(current_2);
      an_object[key_2] = random_leaf_2;
      current_index += 1;
      // console.log('object2leaves == ', current_index, an_object);
      return an_object;
    };

    const objectBranch = () => {
      const num_leaves = getRandomInt(10);
      const an_object = {};
      for (let i = 0; i < num_leaves; i += 1) {
        const current_1 = current_index;
        const random_leaf = randomLeaves();
        const the_key = recordKey(current_1);
        an_object[the_key] = random_leaf;
        current_index += 1;
      }
      // console.log('objectBranch == ', current_index, an_object);
      return an_object;
    };

    const arrayBranch = () => {
      const num_leaves = getRandomInt(10);
      const an_array = [];
      for (let i = 0; i < num_leaves; i += 1) {
        const random_leaf = randomLeaves();
        an_array.push(random_leaf);
      }
      current_index += 1;
      // console.log('arrayBranch == ', current_index, an_array);
      return an_array;
    };

    const aBranch = () => { // else > branch
      const object_or_array = getRandomInt(2);
      let a_branch;
      if (object_or_array === 0) {
        a_branch = objectBranch();
      } else {
        a_branch = arrayBranch();
      }
      current_index += 1;
      // console.log('aBranch == ', current_index, a_branch);
      return a_branch;
    };

    function randomLeaves() {
      current_index += 1;
      const container_type = getRandomInt(100);
      //  console.log('container_type == ', current_index, container_type)
      let a_leaf;
      if (current_index > stop_index || container_type === 0) { // 0 > 1
        a_leaf = currentNumElem();
      } else if (container_type === 1) { // 1 > []
        a_leaf = arrayEmpty();
      } else if (container_type === 2) { // 2 > {}
        a_leaf = objectEmpty();
      } else if (container_type === 3) { // 3 > [2]
        a_leaf = array1Elem();
      } else if (container_type === 4) { // 4 > {km:3}
        a_leaf = object1Prop();
      } else if (container_type === 5) { // 5 > [4, 5]
        a_leaf = array2Elems();
      } else if (container_type === 6) { // 6 > {km:6, kn:7}
        a_leaf = object2Props();
      } else if (container_type === 7) { // 7 > [leaf]
        a_leaf = array1leaf();
      } else if (container_type === 8) { // 8 > {km:leaf}
        a_leaf = object1leaf();
      } else if (container_type === 9) { // 9 > [leaf, leaf]
        a_leaf = array2leaves();
      } else if (container_type === 10) { // 10 > {km:leaf, kn:leaf}
        a_leaf = object2leaves();
      } else { // else > leaf
        a_leaf = aBranch();
      }
      current_index += 1;
      return a_leaf;
    }

    const random_tree = randomLeaves();
    const the_tree_str = JSON.stringify(random_tree);
    return [the_tree_str, the_keys, the_values];
  }

  const make_tree = { makeTree };

  return make_tree;
};
