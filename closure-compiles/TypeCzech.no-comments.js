
const VERS_NUM = 'ver 1.0.0 nov-01-2021';

let the_exports;
if (typeof exports === 'undefined') {
  the_exports = window;
} else {
  the_exports = exports;
}



if (typeof TYPE_CZECH_current_test_number === 'undefined') {
  
  var TYPE_CZECH_current_test_number = 'no test number assigned yet';
}


(function (export_tech_czech) {
  
  export_tech_czech.TypeCzech = function () {
    if (arguments.length > 0) {
      
      export_tech_czech.type_czech = _TypeCzech(...arguments);
    } else if (typeof export_tech_czech.TYPE_CZECH_COMMANDS !== 'undefined'
        && export_tech_czech.TYPE_CZECH_COMMANDS.length > 0) {
      
      export_tech_czech.type_czech = _TypeCzech(export_tech_czech.TYPE_CZECH_COMMANDS);
    } else {
      
      export_tech_czech.type_czech = { linkUp: (nop) => nop, isActive: (_) => false };
    }
    return export_tech_czech.type_czech;

    

    

    function _TypeCzech(...the_parameters) {
      

      let t_param_check_func;
      let t_check_events = false;
      let t_do_param_checking = false;
      const t_reference_stacks = {};
      const t_proxy_targets = new WeakSet();

      

      const PRE_FUNCTION_NO_THIS = 'PRE-FUNC:'; 
      const PRE_FUNCTION_WITH_THIS = 'PRE-FUNC:'; 
      const POST_FUNCTION_NO_THIS = 'POST-FUNC:'; 
      const POST_FUNCTION_WITH_THIS = 'POST-FUNC:'; 
      const PRE_CONST_CLASS_NO_THIS = 'PRE-CLASS:'; 
      const POST_CONST_CLASS_WITH_THIS = 'POST-CLASS:'; 
      const PRE_OBJECT_NO_THIS = 'PRE-OBJ:'; 
      const PRE_OBJECT_WITH_THIS = 'PRE-OBJ:'; 
      const POST_CONST_OBJECT_NO_THIS = 'POST-OBJ:'; 
      const POST_CONST_OBJECT_WITH_THIS = 'POST-OBJ:'; 

      const BEFORE_APPLY_TYPE = '() ';

      

      let OP_THROW_EXCEPTIONS = false; 
      let OP_NO_ERROR_MESSAGES = false; 
      let OP_LOG_ERRORS = false; 

      
      let OP_UNDEF_OK = false; 

      let OP_CONSOLE_COUNT = false; 
      let OP_DEBUG_ERROR_TAGS = false;
      let OP_DEBUG_CONSOLE_TRACE = false; 

      const DIFF_BEGIN_LEN = 100;
      const DIFF_END_LEN = 50;
      const DIFF_BREAK_MIN = DIFF_BEGIN_LEN + DIFF_END_LEN + 10;
      const DIFF_SEPARATOR = '<<<<<<~~~>>>>>>';

      
      const ARGU_MENTS = 'argu' + 'ments';

      const MESS_TYPE_VARIADIC = `check_typeVariadic(${ARGU_MENTS}, expected_types)`;
      const MESS_EMPTY_VARIADIC = `check_emptyVariadic(${ARGU_MENTS}, expected_types)`;

      const MESS_OBJ_INTERFACE = `check_interface(${ARGU_MENTS}, expected_types)`;
      const MESS_MUTATED = `check_mutatedSnapshot(${ARGU_MENTS}, expected_types)`;

      const MESS_TYPE_VERIFY = `check_type(${ARGU_MENTS}, expected_types)`;
      const MESS_TYPE_EXTRAS = `check_typeExtra(${ARGU_MENTS}, expected_types)`;
      const MESS_TYPE_ONE_OF = `check_typeEither(${ARGU_MENTS}, expected_types)`;

      const MESS_EMPTY_VERIFY = `check_empty(${ARGU_MENTS}, expected_emptys)`;
      const MESS_EMPTY_EXTRAS = `check_emptyExtra(${ARGU_MENTS}, expected_emptys)`;
      const MESS_EMPTY_ONE_OF = `check_emptyEither(${ARGU_MENTS}, expected_emptys)`;

      const MESS_ASSERT_CHECK = 'TypeCzech.assert_check()';

      const TRACE_COLORS = 'background: #ee0; color: #00F';
      const ERROR_COLORS = 'background: #ee0; color: #F00';
      const START_COLORS = 'background: #cc0; color: #080';

      const BLANK_REF_DIFF = "''";

      const CZECH_ERROR_INDENT = '\n\t\t';

      const PARAMS_OF_FUNCTION = /([^(]*\()([^)]*)/;

      const START_OF_FUNCTION_LEN = 30;

      const EMPTY_REGEXP = '/(?:)/';

      const EMPTY_OK = 'EMPTY-OK';
      const EMPTY_ER = 'EMPTY-ERROR';
      const EMPTY_IG = 'EMPTY-IGNORE';

      const SHORT_EMPTIES = { OK: EMPTY_OK, ER: EMPTY_ER, IG: EMPTY_IG };

      const TYPE_EXTRAS = 'TYPE-EXTRAS';
      const TYPE_VERIFY = 'TYPE-VERIFY';
      const EMPTY_EXTRAS = 'EMPTY-EXTRAS';
      const EMPTY_VERIFY = 'EMPTY-VERIFY';

      const CONSTRUCTOR_PROTOTYPES = ['Array', 'BigInt', 'Boolean', 'Date', 'Function',
        'Number', 'Object', 'RegExp', 'String', 'Symbol'];

      const TYPE_OF_TO_PROTO = {
        array: 'Array',
        bigint: 'BigInt',
        boolean: 'Boolean',
        date: 'Date',
        function: 'Function',
        number: 'Number',
        object: 'Object',
        regexp: 'RegExp',
        string: 'String',
        symbol: 'Symbol',
      };

      const SCALAR_TYPE_OFS = ['array', 'bigint', 'boolean', 'date', 'function',
        'number', 'object', 'regexp', 'string', 'symbol'];

      const TYPE_SET_SCALAR = new Set(SCALAR_TYPE_OFS);

      const SHORT_TO_TYPE_OF = {
        a: 'array',
        i: 'bigint',
        b: 'boolean',
        d: 'date',
        f: 'function',
        n: 'number',
        o: 'object',
        r: 'regexp',
        s: 'string',
        y: 'symbol',
      };

      const UNDEFINED_AS_STR = 'undefined';
      const NULL_AS_STR = 'null';
      const NAN_AS_STR = 'NaN';
      const INFINITY_AS_STR = 'Infinity';

      const UNDEFINED_STR_VALUE = 'TypeCzech-undefined-Stringify-Value';
      const PLAIN_UNDEFINED_STR_VALUE = `${UNDEFINED_STR_VALUE}:undefined`;
      const QUOTED_UNDEFINED_STR_VALUE = `"${PLAIN_UNDEFINED_STR_VALUE}"`;

      const NULL_STR_VALUE = 'TypeCzech-null-Stringify-Value';
      const PLAIN_NULL_STR_VALUE = `${NULL_STR_VALUE}:null`;
      const QUOTED_NULL_STR_VALUE = `"${PLAIN_NULL_STR_VALUE}"`;

      const NAN_STR_VALUE = 'TypeCzech-NaN-Stringify-Value';
      const PLAIN_NAN_STR_VALUE = `${NAN_STR_VALUE}:NaN`;
      const QUOTED_NAN_STR_VALUE = `"${PLAIN_NAN_STR_VALUE}"`;

      const INFINITY_STR_VALUE = 'TypeCzech-Infinity-Stringify-Value';
      const PLAIN_INFINITY_STR_VALUE = `${INFINITY_STR_VALUE}:Infinity`;
      const QUOTED_INFINITY_STR_VALUE = `"${PLAIN_INFINITY_STR_VALUE}"`;

      const START_CHECK_COLOR = 'green';
      const DO_CHECK_COLOR = 'blue';
      const FAIL_CHECK_COLOR = 'red';

      const IS_INIT_CONSOLE = 'TypeCzech-init';

      
      const TYPE_CZECH_EVENTS = {
        backBlinkUp: (back_color) => {
          document.body.style.background = back_color;
          setTimeout(() => { document.body.style.background = 'white'; }, 100);
        },
        onStart: () => TYPE_CZECH_EVENTS.backBlink(START_CHECK_COLOR),
        onCheck: () => TYPE_CZECH_EVENTS.backBlink(DO_CHECK_COLOR),
        onError: () => TYPE_CZECH_EVENTS.backBlink(FAIL_CHECK_COLOR),
      };

      function consolelog(...args) {
        if (OP_DEBUG_CONSOLE_TRACE) {
          
          console.log(args);
        }
      }

      
      function _coloredConsole(the_args, the_css) {
        
        const args_str = _jsonStr(the_args);
        const the_text = args_str.substring(1, args_str.length - 1);
        
        console.log(`%c ${the_text}`, the_css);
      }

      
      function _doubleToSingleQuotes(double_quotes) {
        
        const single_quotes = double_quotes.replace(/"/g, "'");
        
        return single_quotes;
      }

      
      function _isCollection(a_variable) {
        
        
        const a_type = _aTypeOf(a_variable);
        const a_collection = (a_type === 'array') ? true : a_type === 'object';
        
        return a_collection;
      }

      function _isScalar(a_variable) {
        return !_isCollection(a_variable);
      }

      

      function _toStr(maybe_undef) {
        
        let to_str;
        if (_isCollection(maybe_undef)) {
          
          to_str = _collectionToStr(maybe_undef);
        } else if (typeof maybe_undef === 'undefined') {
          to_str = UNDEFINED_AS_STR;
        } else if (typeof maybe_undef === 'bigint') {
          to_str = `${maybe_undef}n`;
        } else if (typeof maybe_undef === 'string') {
          if (maybe_undef === QUOTED_NULL_STR_VALUE) {
            to_str = NULL_AS_STR;
          } else if (maybe_undef === QUOTED_UNDEFINED_STR_VALUE) {
            to_str = UNDEFINED_AS_STR;
          } else if (maybe_undef === QUOTED_NAN_STR_VALUE) {
            to_str = NAN_AS_STR;
          } else if (maybe_undef === QUOTED_INFINITY_STR_VALUE) {
            to_str = INFINITY_AS_STR;
          } else {
            let no_string_postfix = maybe_undef.replace(/"/g, '"');
            if (no_string_postfix.startsWith('"{') && no_string_postfix.endsWith('}"')) {
              const bracket_end = no_string_postfix.length - 1;
              to_str = no_string_postfix.substring(1, bracket_end);
            } else {
              no_string_postfix = no_string_postfix.replace(/"$/g, '');
              no_string_postfix = no_string_postfix.replace(/^"/g, '');
              if (no_string_postfix.length === 0) {
                no_string_postfix = "''";
              }
              to_str = no_string_postfix;
            }
          }
        } else if (typeof maybe_undef === 'symbol') {
          to_str = maybe_undef.toString();
          to_str = to_str.replace(/\(/g, "('");
          to_str = to_str.replace(/\)/g, "')");
        } else {
          
          const double_quotes = _jsonStr(maybe_undef);
          if (typeof maybe_undef === 'object') {
            const single_quotes = _doubleToSingleQuotes(double_quotes);
            to_str = single_quotes;
          } else {
            to_str = double_quotes;
          }
        }
        
        return to_str;
      }

      
      function _stringifyReplacer(_key, value) {
        
        let replaced_value;
        if (typeof value === 'bigint') {
          replaced_value = `${value}n`;
        } else if (value === null) {
          replaced_value = PLAIN_NULL_STR_VALUE;
        } else if (typeof value === 'undefined') {
          replaced_value = PLAIN_UNDEFINED_STR_VALUE;
        } else if (Number.isNaN(value)) {
          replaced_value = PLAIN_NAN_STR_VALUE;
        } else if (typeof value === 'number' && !Number.isFinite(value)) {
          replaced_value = PLAIN_INFINITY_STR_VALUE;
        } else if (typeof value === 'function') {
          const func_text = String(value);
          const no_new_lines = func_text.replace(/\s+/g, ' ');
          const func_start = no_new_lines.substring(0, START_OF_FUNCTION_LEN);
          replaced_value = `${func_start} ***`;
        } else if (value && value.constructor === RegExp) {
          const regex_text = String(value);
          const regex_start = regex_text.substring(0, START_OF_FUNCTION_LEN);
          replaced_value = `${regex_start} +++`;
        } else if (typeof value === 'string') {
          replaced_value = value;
        } else if (typeof value === 'symbol') {
          replaced_value = _toStr(value);
        } else {
          replaced_value = value;
        }
        
        return replaced_value;
      }

      
      function _jsonStr(an_object) {
        
        const json_str = JSON.stringify(an_object, _stringifyReplacer);
        const obj_str = _toStr(json_str);
        
        return obj_str;
      }

      
      function _className(a_var) {
        
        let class_name = '';
        const class_string = a_var.toString();
        if (class_string.startsWith('class ') && class_string.includes(' constructor(')) {
          class_name = a_var.name;
        }
        
        return class_name;
      }

      
      function _isAClass(a_var) {
        
        let is_class = false;
        if (a_var !== null && typeof a_var !== 'undefined') {
          const vars_prototype = Object.getPrototypeOf(a_var);
          const type_prototype = typeof vars_prototype;
          if (type_prototype === 'function') {
            const a_var_prototype_type = typeof a_var.prototype;
            if (a_var_prototype_type === 'object') {
              const class_name = _className(a_var);
              if (class_name) {
                is_class = true;
              }
            }
          }
        }
        
        return is_class;
      }

      
      function _functionName(a_var) {
        
        let function_name = '';
        const function_string = a_var.toString();
        if (function_string.startsWith('function ')) {
          function_name = a_var.name;
        }
        
        return function_name;
      }

      

      
      
      function _isBuiltInClass(a_type) {
        
        let is_built_in = false;
        if (typeof a_type === 'string') {
          if (CONSTRUCTOR_PROTOTYPES.includes(a_type)) {
            is_built_in = true;
          }
        }
        
        return is_built_in;
      }

      
      function _anObjectsType(a_var) {
        
        let is_a_class_type = false;
        if (a_var !== null && typeof a_var !== 'undefined') {
          const vars_prototype = Object.getPrototypeOf(a_var);
          const type_prototype = typeof vars_prototype;
          if (type_prototype === 'object') {
            const variable_constructor = a_var.constructor;
            const class_name = _className(variable_constructor);
            if (class_name) {
              is_a_class_type = class_name;
            } else {
              const function_name = _functionName(variable_constructor);
              is_a_class_type = function_name;
            }
          }
        }
        if (_isBuiltInClass(is_a_class_type)) {
          is_a_class_type = is_a_class_type.toLowerCase();
        }
        
        return is_a_class_type;
      }

      

      function _isaTypeOf(lower_case_type_of) {
        
        let is_type_of = false;
        if (typeof lower_case_type_of === 'string') {
          if (SCALAR_TYPE_OFS.includes(lower_case_type_of)) {
            is_type_of = true;
          }
        }
        
        return is_type_of;
      }

      
      function typeProtos(a_var) {
        
        let the_prototypes = false;
        if (a_var !== null && typeof a_var !== 'undefined') {
          const proto_sequence = [];
          
          function nextPrototype(an_object) {
            const current_proto = Object.getPrototypeOf(an_object);
            if (current_proto !== null) {
              const proto_type = current_proto.constructor.name;
              proto_sequence.push(proto_type);
              nextPrototype(current_proto);
            }
          }

          const first_proto = Object.getPrototypeOf(a_var);
          const first_type = first_proto.constructor.name;

          if (first_type !== 'object' && CONSTRUCTOR_PROTOTYPES.includes(first_type)) {
            the_prototypes = [first_type];
          } else {
            nextPrototype(a_var);
            the_prototypes = proto_sequence;
          }
        } else if (a_var === null) {
          the_prototypes = [NULL_AS_STR];
        } else {
          the_prototypes = [UNDEFINED_AS_STR];
        }
        
        return the_prototypes;
      }

      
      function typeFinal(a_var) {
        
        
        const the_prototypes = typeProtos(a_var);
        let child_type = false;
        if (the_prototypes) {
          child_type = the_prototypes.shift();
          if (_isBuiltInClass(child_type)) {
            child_type = child_type.toLowerCase();
          }
        }
        if (!child_type) {
          if (typeof a_var === 'undefined') {
            child_type = UNDEFINED_AS_STR;
          } else {
            child_type = NULL_AS_STR;
          }
        }
        
        return child_type;
      }

      
      function typeIsA(a_var, object_type) {
        
        
        const the_prototypes = typeProtos(a_var);
        let object_is_a = false;
        if (the_prototypes) {
          if (_isaTypeOf(object_type)) {
            
            object_type = TYPE_OF_TO_PROTO[object_type];
          }
          object_is_a = the_prototypes.includes(object_type);
        }
        
        return object_is_a;
      }

      
      function _aTypeOf(a_variable) {
        
        let a_type_of = '';
        const is_html_var = typeFinal(a_variable);
        if (is_html_var) {
          a_type_of = is_html_var;
        } else if (a_variable === null) {
          a_type_of = 'null';
        } else if (a_variable instanceof Date) {
          a_type_of = 'date';
        } else if (a_variable instanceof RegExp) {
          a_type_of = 'regexp';
        } else if (Array.isArray(a_variable)) {
          a_type_of = 'array';
        } else {
          a_type_of = typeof a_variable;
        }
        
        return a_type_of;
      }

      
      function _isPlainJsType(a_type) {
        
        let is_plain_js_type = false;
        if (TYPE_SET_SCALAR.has(a_type)) {
          is_plain_js_type = true; 
        } else if (SHORT_TO_TYPE_OF[a_type]) {
          is_plain_js_type = true; 
        }
        
        return is_plain_js_type;
      }

      
      function _shortToLongType(a_type) {
        
        if (SHORT_TO_TYPE_OF[a_type]) {
          
          a_type = SHORT_TO_TYPE_OF[a_type];
        }
        
        return a_type;
      }

      
      function _shortToLongEmpty(an_empty) {
        if (SHORT_EMPTIES[an_empty]) {
          return SHORT_EMPTIES[an_empty];
        }
        return an_empty;
      }

      
      function _collectionToStr(a_collection) {
        
        let collection_str;
        const collection_elems = [];
        if (Array.isArray(a_collection)) {
          a_collection.forEach((an_element) => {
            const array_json = _toStr(an_element);
            if (_aTypeOf(an_element) === 'string') {
              if (array_json === "''") {
                collection_elems.push('""');
              } else {
                collection_elems.push(`"${array_json}"`);
              }
            } else {
              collection_elems.push(array_json);
            }
          });
          collection_str = `[${collection_elems.join()}]`;
        } else {
          
          for (const [key, value] of Object.entries(a_collection)) {
            const value_json = _toStr(value);
            let object_as_str;
            if (_aTypeOf(value) === 'string') {
              if (value_json === "''") {
                object_as_str = `${key}:""`;
              } else {
                object_as_str = `${key}:"${value_json}"`;
              }
            } else {
              object_as_str = `${key}:${value_json}`;
            }
            collection_elems.push(object_as_str);
          }
          collection_str = `{${collection_elems.join()}}`;
        }
        
        return collection_str;
      }

      
      function _consoleError(error_text, error_tag) {
        if (OP_DEBUG_ERROR_TAGS && error_tag) {
          const debug_error = `${error_tag} - ${error_text}`;
          if (OP_DEBUG_CONSOLE_TRACE) {
            _coloredConsole(debug_error, ERROR_COLORS);
          }
          return debug_error;
        }
        return error_text;
      }

      function looksLikeType(possible_badcase) {
        
        let error_string = '';
        const is_type_of = _isaTypeOf(possible_badcase);
        if (!is_type_of) {
          if (typeof possible_badcase === 'string') {
            const pos_lower_type = possible_badcase.toLowerCase();
            if (TYPE_OF_TO_PROTO[pos_lower_type]) {
              const error_205 = `The type '${possible_badcase}' is not a typeof() type, but it looks just like '${pos_lower_type}'`;
              error_string = _consoleError(error_205, 'TE@205');
            }
          }
        }
        
        return error_string;
      }

      
      function _missingKey(extra_keys) {
        
        let missing_key;
        if (Object.keys(extra_keys).length > 0) {
          const [share_key, share_type] = Object.entries(extra_keys)[0];
          missing_key = looksLikeType(share_type);
          if (!missing_key) {
            const share_type_str = _toStr(share_type);
            const error_216 = ` The key '${share_key}', which has a type of '${share_type_str}', is missing in the checked object`;
            missing_key = _consoleError(error_216, 'TE@216');
          }
        } else {
          missing_key = '';
        }
        
        return missing_key;
      }

      
      function _isEmpty(a_variable) {
        
        let is_empty;
        if (a_variable instanceof Date) {
          
          is_empty = (a_variable == 'Invalid Date');
        } else if (a_variable instanceof RegExp) {
          const regExp_str = a_variable.toString();
          is_empty = (regExp_str === EMPTY_REGEXP);
        } else if (Number.isNaN(a_variable)) {
          is_empty = true; 
        } else if (typeof a_variable === 'number' && !Number.isFinite(a_variable)) {
          is_empty = true; 
        } else if (a_variable == null) {
          is_empty = true;
        } else {
          const empty_str_array = a_variable.length === 0;
          const empty_object = (typeof a_variable === 'object' && Object.keys(a_variable).length === 0);
          is_empty = empty_str_array || empty_object;
        }
        
        return is_empty;
      }

      
      const _canBeEmpty = (variable_type) => (variable_type === 'array' ? true 
        : variable_type === 'object' ? true 
          : variable_type === 'string' ? true 
            : variable_type === 'regexp' ? true 
              : variable_type === 'date' ? true 
                : variable_type === 'number');

      
      function _typeFromArray(shallow_array, element_index) {
        
        const shape_length = shallow_array.length;
        let element_type;
        if (shape_length === 1) {
          [element_type] = shallow_array;
        } else {
          element_type = shallow_array[element_index];
        }
        
        return element_type;
      }

      
      function _getParameters(parameters_obj) {
        
        let the_params;
        const odd_parameters = parameters_obj === null
                            || parameters_obj === undefined
                            || typeof parameters_obj.length === 'undefined'
                            || typeof parameters_obj === 'string';
        let no_parameters = false;
        let one_param = true;
        if (odd_parameters) {
          the_params = parameters_obj;
        } else if (parameters_obj.length === 0) {
          if (!Array.isArray(parameters_obj)) {
            no_parameters = true;
            
          } else {
            
          }
          the_params = [];
        } else if (parameters_obj.length === 1) {
          if (!Array.isArray(parameters_obj)) {
            
            the_params = parameters_obj[0];
            
          } else {
            the_params = parameters_obj;
            
          }
        } else {
          the_params = Array.from(parameters_obj); 
          one_param = false;
        }
        const params_flags = [the_params, no_parameters, one_param];
        
        return params_flags;
      }

      
      function error3Array(command_type, incheck_type_error, shape_list) {
        
        const shape_list_str = _toStr(shape_list);
        const error_3_array = [command_type, incheck_type_error, shape_list_str];
        
        return error_3_array;
      }

      
      
      function check_interface(introspect_object, expected_interface) {
        if (t_param_check_func.p_call_traps) {
          
          
          const [interface_object, no_parameters, one_param] = _getParameters(introspect_object);
          
          const signature_type = _aTypeOf(expected_interface);
          let error_mess = '';
          const is_not_object = !typeIsA(interface_object, 'Object');
          if (is_not_object) {
            let error_505 = 'Function argument is not an object.';
            error_505 = _consoleError(error_505, 'IE@505');
            error_mess = error3Array(MESS_OBJ_INTERFACE, error_505, expected_interface);
          } else if (signature_type !== 'object') {
            let error_504 = 'Signature is not an object.';
            error_504 = _consoleError(error_504, 'IE@504');
            error_mess = error3Array(MESS_OBJ_INTERFACE, error_504, expected_interface);
          } else if (Object.keys(expected_interface).length === 0) {
            let error_503 = 'Signature is empty object.';
            error_503 = _consoleError(error_503, 'IE@503');
            error_mess = error3Array(MESS_OBJ_INTERFACE, error_503, expected_interface);
          } else {
            
            for (const test_key in expected_interface) {
              if (!error_mess) {
                const expected_short = expected_interface[test_key];
                const expected_type = _shortToLongType(expected_short);
                const introspect_value = interface_object[test_key];
                const introspect_type = _aTypeOf(introspect_value);
                if (typeof introspect_value === 'undefined') {
                  const error_501 = `Interface missing key '${test_key}' in checked object`;
                  error_mess = _consoleError(error_501, 'IE@501');
                } else if (expected_type !== introspect_type) {
                  const str_intro_value = _toStr(introspect_value);
                  const str_expt_type = _toStr(expected_type);
                  const error_502 = `actual type of '${test_key}' is '${introspect_type}', with a value `
                                  + `of '${str_intro_value}', not the expected '${str_expt_type}' type`;
                  error_mess = _consoleError(error_502, 'IE@502');
                }
              }
            }
            if (error_mess) {
              error_mess = error3Array(MESS_OBJ_INTERFACE, error_mess, expected_interface);
            }
          }
          
          return error_mess;
        }
      }

      
      
      
      

      
      function _ParametersCheck(arg_check_events) {
        
        const num_parameters = arguments.length;
        if (num_parameters > 1) {
          const error_407 = `TypeCzech._ParametersCheck() - Internal - needs 0 or 1 parameters, not ${num_parameters}`;
          const internal_error_407 = _consoleError(error_407, 'ME@407');
          throw internal_error_407;
        }
        let onParamCheck = () => ''; 
        let onParamError = () => ''; 

        let p_check_count = 0; 
        let p_failure_count = 0; 
        let p_call_traps = false; 

        function init_ParametersCheck() {
          if (t_do_param_checking) {
            if (arg_check_events && _aTypeOf(arg_check_events) !== 'object') {
              const events_sentence = '_ParametersCheck - arg_check_events is not an Object'
                                    + ' with onStart(), onCheck(), onError() ';
              _coloredConsole([events_sentence, arg_check_events], ERROR_COLORS);
            }
            if (typeof window !== 'undefined') {
              const throw_except = OP_THROW_EXCEPTIONS ? 'THROW-EXCEPTIONS' : '';
              const log_errors = OP_LOG_ERRORS ? 'LOG-ERRORS' : '';
              const no_error_mess = OP_NO_ERROR_MESSAGES ? 'LOG-ERRORS' : '';
              const undef_ok = OP_UNDEF_OK ? 'UNDEF-OK' : '';
              const console_count = OP_CONSOLE_COUNT ? 'CONSOLE-COUNT' : '';
              const EVENTS = arg_check_events;
              const options_array = [IS_INIT_CONSOLE, VERS_NUM, throw_except, log_errors, no_error_mess, undef_ok, console_count, EVENTS];
              _coloredConsole(options_array, START_COLORS);
            }
            if (arg_check_events.onStart !== undefined) {
              arg_check_events.onStart('Start');
            }
            if (arg_check_events.onCheck !== undefined) {
              onParamCheck = arg_check_events.onCheck;
            }
            if (arg_check_events.onError !== undefined) {
              onParamError = arg_check_events.onError;
            }
            p_call_traps = true; 
          }
        }

        function getCheckFailureCount() {
          return `${p_check_count} : ${p_failure_count}`;
        }

        function getHtmlTypes(list_of_parameters) {
          
          const real_types = [];
          list_of_parameters.forEach((a_variable) => {
            const is_html_type = typeFinal(a_variable);
            if (is_html_type) {
              real_types.push(`'${is_html_type}'`);
            } else {
              const json_form = _jsonStr(a_variable);
              real_types.push(json_form);
            }
          });
          
          return real_types;
        }

        function actualVsExpected(list_of_parameters, exception_str, any_errors, func_name_params) {
          
          const [shape_check, type_of_error, expected_shape] = any_errors;
          
          let arg_list = getHtmlTypes(list_of_parameters);
          let param_values;
          if (arg_list.length > 1) {
            arg_list = `[${arg_list}]`;
            param_values = _toStr(list_of_parameters);
          } else {
            const param_with_brackets = _toStr(list_of_parameters);
            param_values = param_with_brackets.substring(1, param_with_brackets.length - 1);
          }
          let new_exception = exception_str + type_of_error;
          new_exception += CZECH_ERROR_INDENT + shape_check;
          const actual_types = '    ACTUAL TYPES';
          const actual_text = '    ACTUAL VALUE';
          let expected_text = ' EMPTY ASSERTION';
          const called_function = 'CALLING FUNCTION';
          if (shape_check === MESS_TYPE_VERIFY
                || shape_check === MESS_TYPE_VARIADIC
                || shape_check === MESS_TYPE_EXTRAS
                || shape_check === MESS_TYPE_ONE_OF) {
            expected_text = '   EXPECTED TYPE';
          } else if (shape_check === MESS_MUTATED) {
            expected_text = '';
          } else if (shape_check === MESS_ASSERT_CHECK) {
            expected_text = '  EXPECTED';
          }
          new_exception += `${CZECH_ERROR_INDENT}${actual_types} ${arg_list}`;
          new_exception += `${CZECH_ERROR_INDENT}${actual_text} ${param_values}`;
          if (expected_text) {
            new_exception += `${CZECH_ERROR_INDENT}${expected_text} ${expected_shape}`;
          }
          new_exception += `${CZECH_ERROR_INDENT}${called_function} ${func_name_params}`;
          new_exception += CZECH_ERROR_INDENT;
          
          return new_exception;
        }

        function outputCheck(any_errors, checking_name, target_name, list_of_parameters, func_name_params) {
          
          p_check_count += 1;
          if (OP_CONSOLE_COUNT) {
            _coloredConsole([p_check_count], TRACE_COLORS);
          }
          if (any_errors) {
            p_failure_count += 1;
            onParamError(getCheckFailureCount());
            let exception_str;
            if (func_name_params === MESS_ASSERT_CHECK) {
              exception_str = ` ${checking_name}`;
            } else {
              exception_str = ` ${checking_name}() ${target_name} `;
            }
            if (typeof any_errors === 'string') {
              exception_str = any_errors;
            } else {
              exception_str = actualVsExpected(list_of_parameters, exception_str, any_errors, func_name_params);
            }
            if (OP_THROW_EXCEPTIONS) {
              throw new Error(exception_str);
            } else if (OP_LOG_ERRORS) {
              
              console.log(exception_str);
            } else {
              
            }
          }
        }

        function argumentsParamWarn(check_function) {
          
          const func_str = check_function.toString();
          const func_parts = func_str.match(PARAMS_OF_FUNCTION);
          const func_name_params = `${func_parts[0]})`;
          const funct_params = func_name_params.replace(/^function /, '');
          const param_names = func_parts[2];
          const param_array = param_names.split(', ');
          if (param_array.includes('arguments')) {
            const arguments_error = `Parameter 'arguments' shadows arguments object : ${func_parts[0]})`;
            _coloredConsole(arguments_error, TRACE_COLORS);
          }
          
          return funct_params;
        }

        function applyNoThis(target_name, list_of_parameters, the_check) {
          
          const funct_params = argumentsParamWarn(the_check);
          
          const the_errors = the_check.apply(null, list_of_parameters);
          outputCheck(the_errors, the_check.name, target_name, list_of_parameters, funct_params);
        }

        function applyWithThis(target_name, this_arg, list_of_parameters, the_check) {
          
          const funct_params = argumentsParamWarn(the_check);
          const the_errors = the_check.apply(this_arg, list_of_parameters);
          outputCheck(the_errors, the_check.name, target_name, list_of_parameters, funct_params);
        }

        function countTally_() {
          return p_check_count;
        }

        function countFails_() {
          return p_failure_count;
        }

        function enableChecks_() {
          p_call_traps = true;
          t_do_param_checking = true;
          p_check_count = 0;
          p_failure_count = 0;
        }

        function disableChecks_() {
          p_call_traps = false;
          t_do_param_checking = false;
        }

        

        function assert_check_(error_mess, where_from, actual_value, expected_outcome) {
          if (t_param_check_func.p_call_traps) {
            
            if (!Array.isArray(error_mess)) {
              
              error_mess = _toStr(error_mess);
              const new_message_error = `\n  Assert Message: ${error_mess} `;
              if (typeof expected_outcome === 'undefined') {
                
                expected_outcome = '';
              } else {
                
                expected_outcome = _toStr(expected_outcome);
              }
              
              error_mess = [MESS_ASSERT_CHECK, new_message_error, expected_outcome];
            }
            
            where_from = _toStr(where_from);
            const location_where = `Assert Location: ${where_from} : `;
            const list_of_parameters = [actual_value];
            outputCheck(error_mess, location_where, '', list_of_parameters, MESS_ASSERT_CHECK);
          }
        }

        function checkFuncAsStr(the_check) {
          
          let check_as_str;
          if (typeof the_check === 'object') {
            const func_name = (x) => `${x}()`;
            const func_list = (accum, cur) => `${accum}, ${cur}`;
            const object_methods = Object.keys(the_check).map(func_name).reduce(func_list);
            check_as_str = `{ ${object_methods} }`;
          } else {
            check_as_str = `${the_check.name}()`;
          }
          
          return check_as_str;
        }

        function funcObjChecksOnly(the_check, whence_error, error_id) {
          if (typeof the_check !== 'function' && typeof the_check !== 'object') {
            const check_str = _toStr(the_check);
            const error_101_115 = `${whence_error}, is a not a function or an object that has a value of '${check_str}'`;
            const exception_101_115 = _consoleError(error_101_115, error_id);
            throw exception_101_115;
          }
        }

        function proxyUsed(target_proxy, the_check) {
          
          const check_as_str = checkFuncAsStr(the_check);
          if (target_proxy === undefined) {
            const error_102 = `The function to be checked by ${check_as_str} is 'undefined', maybe namespace issue`;
            const exception_102 = _consoleError(error_102, 'EX@102');
            throw exception_102;
          }
          if (target_proxy === the_check) {
            const error_103 = `_ParametersCheck you cannot use ${target_proxy.name}() to test`
                        + `${the_check.name}(), they must be different functions`;
            const exception_103 = _consoleError(error_103, 'EX@103');
            throw exception_103;
          }
          
        }

        function proxyApprove(target_proxy, pre_check, post_check) {
          
          if (t_proxy_targets.has(target_proxy)) {
            const error_104 = `${target_proxy.name}() is already proxied with ${target_proxy.name}`;
            const exception_104 = _consoleError(error_104, 'EX@104');
            throw exception_104;
          }
          if (typeof target_proxy !== 'function') {
            const target_str = _toStr(target_proxy);
            const error_105 = `The first parameter to TypeCzech.linkUp(), target_proxy is not a function, but is instead ${target_str}`;
            const exception_105 = _consoleError(error_105, 'EX@105');
            throw exception_105;
          }
          if (pre_check) {
            
            for (const pre_key in pre_check) {
              const a_pre_check = pre_check[pre_key];
              proxyUsed(target_proxy, a_pre_check);
              funcObjChecksOnly(a_pre_check, 'TypeCzech.linkUp() 2nd parameter, PRE-CHECK()', 'EX@101');
            }
          }
          if (post_check) {
            
            for (const post_key in post_check) {
              const a_post_check = post_check[post_key];
              proxyUsed(target_proxy, a_post_check);
              funcObjChecksOnly(a_post_check, 'TypeCzech.linkUp() 3rd parameter, POST-CHECK()', 'EX@115');
            }
          }
          
        }

        function proxyFunction(target_proxy, pre_check, post_check) {
          
          const function_name = target_proxy.name;
          const proxy_handler = {
            apply(target_function, this_arg, parameter_list) {
              onParamCheck(getCheckFailureCount());
              if (p_call_traps && pre_check) {
                if (typeof this_arg === 'undefined') {
                  const apply_type = `${function_name}${BEFORE_APPLY_TYPE}${PRE_FUNCTION_NO_THIS}`;
                  applyNoThis(apply_type, parameter_list, pre_check);
                } else {
                  const apply_type = `${function_name}${BEFORE_APPLY_TYPE}${PRE_FUNCTION_WITH_THIS}`;
                  applyWithThis(apply_type, this_arg, parameter_list, pre_check);
                }
              }
              const function_result = target_function.apply(this_arg, parameter_list);
              if (p_call_traps && post_check) {
                if (typeof this_arg === 'undefined') {
                  const apply_type = `${function_name}${BEFORE_APPLY_TYPE}${POST_FUNCTION_NO_THIS}`;
                  applyNoThis(apply_type, [function_result], post_check);
                } else {
                  const apply_type = `${function_name}${BEFORE_APPLY_TYPE}${POST_FUNCTION_WITH_THIS}`;
                  applyWithThis(apply_type, this_arg, [function_result], post_check);
                }
              }
              return function_result;
            },
          };
          
          return new Proxy(target_proxy, proxy_handler);
        }

        function proxyMethods(class_name, class_object, pre_checks, post_checks) {
          
          const proxied_methods = new Set();
          if (pre_checks) {
            Object.keys(pre_checks).forEach((pre_method) => proxied_methods.add(pre_method));
          }
          if (post_checks) {
            Object.keys(post_checks).forEach((post_method) => proxied_methods.add(post_method));
          }
          let was_frozen = false;
          if (Object.isFrozen(class_object)) {
            was_frozen = true;
            
            class_object = Object.assign({}, class_object);
          }
          proxied_methods.forEach((method_name) => {
            if (method_name !== class_name) {
              let pre_check = false;
              if (pre_checks) {
                pre_check = pre_checks[method_name] || false;
              }
              let post_check = false;
              if (post_checks) {
                post_check = post_checks[method_name] || false;
              }
              if (class_object[method_name]) {
                
                class_object[method_name] = proxyFunction(class_object[method_name], pre_check, post_check);
              }
            }
          });
          if (was_frozen) {
            Object.freeze(class_object);
          }
          
          return class_object;
        }

        function getPrePostCheck(pre_post_checks, class_name) {
          
          let the_check;
          if (typeof pre_post_checks === 'function') {
            the_check = pre_post_checks;
          } else if (typeof pre_post_checks === 'undefined') {
            the_check = false; 
          } else {
            the_check = pre_post_checks[class_name];
          }
          
          return the_check;
        }

        function proxyClass(class_proxy, pre_checks, post_checks) {
          
          const class_name = class_proxy.name;
          const class_pre = getPrePostCheck(pre_checks, class_name);
          const class_post = getPrePostCheck(post_checks, class_name);
          const proxy_handler = {
            apply() { }, 
            construct(Target_class, parameter_list, new_target) {
              let class_object;
              onParamCheck(getCheckFailureCount());
              if (p_call_traps && class_pre) {
                const apply_type = `${class_name}${BEFORE_APPLY_TYPE}${PRE_CONST_CLASS_NO_THIS}`;
                applyNoThis(apply_type, parameter_list, class_pre);
              }
              class_object = Reflect.construct(Target_class, parameter_list, new_target);
              class_object = proxyMethods(class_name, class_object, pre_checks, post_checks);
              if (p_call_traps && class_post) {
                const apply_type = `${class_name}${BEFORE_APPLY_TYPE}${POST_CONST_CLASS_WITH_THIS}`;
                applyWithThis(apply_type, class_object, [class_object], class_post);
              }
              return class_object;
            },
          };
          const new_proxy = new Proxy(class_proxy, proxy_handler);
          
          return new_proxy;
        }

        function proxyObject(target_proxy, pre_checks, post_checks) {
          
          const object_name = target_proxy.name;
          const object_pre = getPrePostCheck(pre_checks, object_name);
          const object_post = getPrePostCheck(post_checks, object_name);
          const proxy_handler = {
            apply(target_closure, this_arg, parameter_list) {
              onParamCheck(getCheckFailureCount());
              if (p_call_traps && object_pre) {
                const apply_type = `${object_name}${BEFORE_APPLY_TYPE}${PRE_OBJECT_NO_THIS}`;
                applyNoThis(apply_type, parameter_list, object_pre);
              }
              let closure_object = target_closure.apply(this_arg, parameter_list);
              closure_object = proxyMethods(object_name, closure_object, pre_checks, post_checks);
              if (p_call_traps && object_post) {
                const apply_type = `${object_name}${BEFORE_APPLY_TYPE}${PRE_OBJECT_WITH_THIS}`;
                applyNoThis(apply_type, [closure_object], post_checks[object_name]);
              }
              return closure_object;
            },
            construct(Target_class, parameter_list) {
              onParamCheck(getCheckFailureCount());
              if (p_call_traps && object_pre) {
                const apply_type = `${object_name}${BEFORE_APPLY_TYPE}${POST_CONST_OBJECT_NO_THIS}`;
                applyNoThis(apply_type, parameter_list, object_pre);
              }
              let class_object = new Target_class(...parameter_list);
              class_object = proxyMethods(object_name, class_object, pre_checks, post_checks);
              if (p_call_traps && object_post) {
                const apply_type = `${object_name}${BEFORE_APPLY_TYPE}${POST_CONST_OBJECT_WITH_THIS}`;
                applyWithThis(apply_type, class_object, [class_object], object_post);
              }
              return class_object;
            },
          };
          
          const new_proxy = new Proxy(target_proxy, proxy_handler);
          
          return new_proxy;
        }

        function realConfirmParams(target_proxy, pre_checks, post_checks) {
          
          const num_params = arguments.length;
          if (num_params !== 2 && num_params !== 3) {
            const error_106 = `TypeCzech.linkUp() needs 2 or 3 parameters, not ${num_params}`;
            const exception_106 = _consoleError(error_106, 'EX@106');
            throw exception_106;
          }
          proxyApprove(target_proxy, pre_checks, post_checks);
          let proxied_thing;
          const is_class = _isAClass(target_proxy);
          if (is_class) {
            proxied_thing = proxyClass(target_proxy, pre_checks, post_checks);
          } else {
            const pre_check_type = _aTypeOf(pre_checks);
            const post_check_type = _aTypeOf(post_checks);
            if (pre_check_type === 'object' || post_check_type === 'object') {
              proxied_thing = proxyObject(target_proxy, pre_checks, post_checks);
            } else {
              proxied_thing = proxyFunction(target_proxy, pre_checks, post_checks);
            }
          }
          t_proxy_targets.add(proxied_thing);
          
          return proxied_thing;
        }

        
        const nopCheck = (function_to_check, _pre_check, _post_check) => function_to_check;

        const confirmParameters = t_do_param_checking ? realConfirmParams : nopCheck;

        init_ParametersCheck();

        const public_methods = {
          confirmParameters,
          enableChecks_,
          countTally_,
          disableChecks_,
          countFails_,
          assert_check_,
          p_call_traps,
        };

        return public_methods;
      } 

      
      
      
      

      

    

    
    








const _cycle_loops = {};


  _cycle_loops.decycle = function decycle(object, replacer) {
      "use strict";
























      var objects = new WeakMap();     

      return (function derez(value, path) {



          var old_path;   
          var nu;         



          if (replacer !== undefined) {
              value = replacer(value);
          }




          if (
              typeof value === "object"
              && value !== null
              && !(value instanceof Boolean)
              && !(value instanceof Date)
              && !(value instanceof Number)
              && !(value instanceof RegExp)
              && !(value instanceof String)
          ) {





              old_path = objects.get(value);
              if (old_path !== undefined) {
                  return {$ref: old_path};
              }



              objects.set(value, path);



              if (Array.isArray(value)) {
                  nu = [];
                  value.forEach(function (element, i) {
                      nu[i] = derez(element, path + "[" + i + "]");
                  });
              } else {



                  nu = {};
                  Object.keys(value).forEach(function (name) {
                      nu[name] = derez(
                          value[name],
                          path + "[" + JSON.stringify(name) + "]"
                      );
                  });
              }
              return nu;
          }
          return value;
      }(object, "$"));
  };


































































      
      
      
      
     
    

    

    

      function _fast_json_stable_stringify(data, opts) {
        if (!opts) opts = {};
        if (typeof opts === 'function') opts = { cmp: opts };
        var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

        var cmp = opts.cmp && (function (f) {
            return function (node) {
                return function (a, b) {
                    var aobj = { key: a, value: node[a] };
                    var bobj = { key: b, value: node[b] };
                    return f(aobj, bobj);
                };
            };
        })(opts.cmp);

        var seen = [];
        return (function stringify (node) {
            if (node && node.toJSON && typeof node.toJSON === 'function') {
                node = node.toJSON();
            }



if (Number.isNaN(node)) return 'NaN';
if (typeof node === 'number' && !Number.isFinite(node)) return 'Infinity';
if (node === undefined) return 'undefined';
if (typeof node === 'bigint') return JSON.stringify(node + 'n');
if (typeof node === 'symbol') return node.toString();
if (typeof node === 'function') {
  const func_text = String(node);
  const func_start = func_text.substring(0, START_OF_FUNCTION_LEN);
  replaced_value = `${func_start} ***`;
  return replaced_value;
}
if (node && node.constructor === RegExp) {
  const func_text = String(node);
  const func_start = func_text.substring(0, START_OF_FUNCTION_LEN);
  replaced_value = `${func_start} +++`;
  return replaced_value;
}



            
            if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
            if (typeof node !== 'object') return JSON.stringify(node);

            var i, out;
            if (Array.isArray(node)) {
                out = '[';
                for (i = 0; i < node.length; i++) {
                    if (i) out += ',';
                    out += stringify(node[i]) || 'null';
                }
                return out + ']';
            }

            if (node === null) return 'null';

            if (seen.indexOf(node) !== -1) {
              if (cycles) return JSON.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }

            var seenIndex = seen.push(node) - 1;
            var keys = Object.keys(node).sort(cmp && cmp(node));
            out = '';
            for (i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node[key]);
                if (!value) continue;
                if (out) out += ',';
              out += JSON.stringify(key) + ':' + value;
            }
            seen.splice(seenIndex, 1);
            return '{' + out + '}';
        })(data);
    };
      
      
      

      
      
      
      

      

      function _errorClassName(scalar_type) {
        
        const no_spaces = scalar_type.replace(/\s+/g, '');
        let error_string = looksLikeType(no_spaces);
        if (!error_string) {
          if (no_spaces === '[]') {
            const error_222 = "The construct '[]' is not a real type, only a container, thus it cannot"
                            + " serve as a signature for EXPECTED TYPE. Try 'array' or ['string'].";
            error_string = _consoleError(error_222, 'TE@222');
          } else if (no_spaces === '{}') {
            const error_223 = "The construct '{}' is not a real type, only a container, thus it cannot"
                           + " serve as a signature for EXPECTED TYPE. Try 'object' or {a:'string'}.";
            error_string = _consoleError(error_223, 'TE@223');
          } else {
            const error_202 = `The type '${scalar_type}' is not the correct classname or not a scalar type`;
            error_string = _consoleError(error_202, 'TE@202');
          }
        }
        
        return error_string;
      }

      
      function _shapeErrorMess(shallow_array, check_array) {
        
        const extra_shapes = Object.entries(shallow_array);
        const [extra_index, extra_type] = extra_shapes[0];
        const check_arr_str = _toStr(check_array);
        const error_221 = `Element '${extra_index}' is supposed to be a '${extra_type}', but is missing : ${check_arr_str}`;
        const error_string = _consoleError(error_221, 'TE@221');
        
        return error_string;
      }

      

      function _shapeContainer(check_container, container_shape, the_type) {
        
        let error_string = '';
        const object_type = _aTypeOf(check_container);
        const shape_type = _aTypeOf(container_shape);
        if (container_shape === undefined) {
          error_string = '';
        } else if (object_type !== shape_type) {
          if (object_type === container_shape) {
            
          } else if (the_type !== TYPE_EXTRAS || shape_type !== 'array') {
            
            const check_str = _jsonStr(check_container);
            let print_type;
            if (_aTypeOf(container_shape) === 'string') {
              print_type = container_shape;
            } else {
              print_type = shape_type;
            }
            const error_207 = `Parameter is meant to be '${print_type}' but is`
                        + ` of the wrong type of '${object_type}':${check_str}`;
            error_string = _consoleError(error_207, 'TE@207');
          }
        } else if (shape_type === 'array') {
          
          error_string = _shapeArrayTypes(check_container, container_shape, the_type);
        } else if (shape_type === 'object') {
          
          error_string = _shapeCollectionTypes(check_container, container_shape, the_type);
        }
        
        return error_string;
      }

      
      const _arrayOfOneType = (check_array, array_type, the_type) => {
        
        let error_string = '';
        const type_of_array = _shortToLongType(array_type);
        if (!Array.isArray(check_array)) {
          
          check_array = [check_array];
        }
        check_array.forEach((check_element, element_index) => {
          if (error_string === '') {
            const variable_type = _aTypeOf(check_element);
            if (_isCollection(type_of_array)) {
              
              error_string = _shapeVariable(check_element, type_of_array, the_type);
            } else if (type_of_array !== variable_type) {
              if (OP_UNDEF_OK && variable_type === 'null') {
                
              } else if (OP_UNDEF_OK && variable_type === 'undefined') {
                
              } else {
                let error_local = looksLikeType(type_of_array);
                if (!error_local) {
                  const show_element = _toStr(check_element);
                  const error_215 = `ELEMENT '${element_index}' is asserted to be a '${type_of_array}',`
                                + ` but is fallaciously a '${variable_type}' : ${show_element}`;
                  error_local = _consoleError(error_215, 'TE@215');
                }
                error_string = error_local;
              }
            }
          }
        });
        
        return error_string;
      };

      
      const _wrongType = (expected_type, element_index, real_type) => {
        
        let error_string = '';
        if (expected_type === 'null') {
          const error_204 = ` ELEMENT '${element_index}' type is invalid 'null'`;
          error_string = _consoleError(error_204, 'TE@204');
        } else if (expected_type === 'undefined') {
          const error_229 = ` ELEMENT '${element_index}' type is invalid 'undefined'`;
          error_string = _consoleError(error_229, 'TE@229');
        } else if (typeof expected_type !== 'string') {
          const bad_type = _toStr(expected_type);
          const error_232 = ` ELEMENT '${element_index}' type is invalid as it is not a string but instead ${bad_type}`;
          error_string = _consoleError(error_232, 'TE@232');
        }
        if (!error_string) {
          error_string = looksLikeType(expected_type);
          if (!error_string) {
            const error_214 = ` ELEMENT '${element_index}' is assumed to be a '${expected_type}',`
            + ` but is mistakenly a '${real_type}'`;
            error_string = _consoleError(error_214, 'TE@214');
          }
        }
        
        return error_string;
      };

      
      function _shapeArrayTypes(check_array, array_shape, the_type) {
        
        let error_string = '';
        if (array_shape.length === 1 && check_array.length > 1) {
          const single_type = array_shape[0];
          error_string = _arrayOfOneType(check_array, single_type, the_type);
        } else {
          const shallow_array = Array.from(array_shape);
          const shape_length = shallow_array.length;
          check_array.forEach((check_element, element_index) => {
            if (error_string === '') {
              const variable_type = _aTypeOf(check_element);
              const container_type = _typeFromArray(shallow_array, element_index);
              if (_isCollection(container_type)) {
                error_string = _shapeContainer(check_element, container_type, the_type);
              } else {
                const element_type = _shortToLongType(_typeFromArray(shallow_array, element_index));
                if (element_type !== variable_type) {
                  if (the_type === TYPE_EXTRAS && element_type === undefined) {
                    
                  } else if (OP_UNDEF_OK && variable_type === 'null') {
                    
                  } else if (OP_UNDEF_OK && variable_type === 'undefined') {
                    
                  } else {
                    error_string = _wrongType(element_type, element_index, variable_type);
                  }
                }
              }
              delete shallow_array[element_index];
            }
          });
          if (!error_string) {
            if (shape_length !== 1 && check_array.length < shape_length) {
              error_string = _shapeErrorMess(shallow_array, check_array);
            }
          }
        }
        
        return error_string;
      }

      
      const _shapePropertyType = (property_type, property_key, check_variable) => {
        
        let error_string = '';
        const check_type_type = _shortToLongType(property_type[property_key]);
        if (!_isPlainJsType(check_type_type)) {
          error_string = looksLikeType(check_type_type);
          if (!error_string) {
            const object_str = _jsonStr(check_type_type);
            const error_210 = `The type '${object_str}' is not a real type`;
            error_string = _consoleError(error_210, 'TE@210');
          }
        } else {
          const variable_type = _aTypeOf(check_variable);
          if (check_type_type !== variable_type) {
            if (OP_UNDEF_OK && variable_type === 'null') {
              
            } else if (OP_UNDEF_OK && variable_type === 'undefined') {
              
            } else if (typeof check_variable === 'undefined') {
              const error_211 = `Key '${property_key}' was given to be a '${check_type_type}' but was instead 'undefined'`;
              error_string = _consoleError(error_211, 'TE@211');
            } else if (variable_type === 'null') {
              const error_212 = `Key '${property_key}' was determined to be a '${check_type_type}' but was instead 'null'`;
              error_string = _consoleError(error_212, 'TE@212');
            } else {
              const check_str = _toStr(check_variable);
              const error_213 = `Property '${property_key}' is indicated to be a '${check_type_type}',`
                          + ` but is inaccurately a '${variable_type}' : ${check_str}`;
              error_string = _consoleError(error_213, 'TE@213');
            }
          }
        }
        
        return error_string;
      };

      
      function _shapeCollectionTypes(check_object, object_shape, the_type) {
        
        let error_string = '';
        const check_type_shallow = { ...object_shape };
        const check_entries = Object.entries(check_object);
        check_entries.forEach((shape_entry) => {
          if (error_string === '') {
            const [check_key, check_var_or_obj] = shape_entry;
            if (_isCollection(check_var_or_obj)) {
              const correct_shape = object_shape[check_key];
              error_string = _shapeContainer(check_object[check_key], correct_shape, the_type);
              delete check_type_shallow[check_key];
            } else if (Object.prototype.hasOwnProperty.call(check_type_shallow, check_key)) {
              error_string = _shapePropertyType(check_type_shallow, check_key, check_var_or_obj);
              delete check_type_shallow[check_key];
            } else if (the_type === TYPE_VERIFY) {
              const error_209 = `Extra key in checked object - (${check_key}:'${check_var_or_obj}')`;
              error_string = _consoleError(error_209, 'TE@209');
            }
          }
        });
        error_string += _missingKey(check_type_shallow);
        
        return error_string;
      }

      
      function _shapeScalar(actual_value, expected_type) {
        
        const expected_long_type = _shortToLongType(expected_type);
        let error_string = '';
        if (expected_long_type === 'null' || expected_long_type === 'undefined') {
          const error_203 = `The type '${expected_long_type}' is not a valid check_type(), `
                          + 'check_typeEither(), or check_typeExtra() second parameter type';
          error_string = _consoleError(error_203, 'TE@203');
        } else if (!_isPlainJsType(expected_long_type)) {
          const actual_type = _anObjectsType(actual_value);
          if (actual_type !== expected_long_type) {
            if (_aTypeOf(expected_long_type) === 'string') {
              error_string = _errorClassName(expected_long_type);
            } else {
              const incorrect_type = _toStr(expected_long_type);
              const error_230 = `The type '${incorrect_type}' is invalid`;
              error_string = _consoleError(error_230, 'TE@230');
            }
          }
        } else {
          const variable_type = _aTypeOf(actual_value);
          
          if (variable_type === expected_long_type) {
            error_string = '';
          } else if (variable_type === 'array') {
            const error_225 = `The value '[]', which is a 'array', is not a '${expected_long_type}'`;
            error_string = _consoleError(error_225, 'TE@225');
          } else if (variable_type === 'object') {
            const error_208 = `The value '{}', which is a 'object', is not a '${expected_long_type}'`;
            error_string = _consoleError(error_208, 'TE@208');
          } else if (variable_type === 'undefined') {
            const error_206 = `The value 'undefined', is not a '${expected_long_type}'`;
            error_string = _consoleError(error_206, 'TE@206');
          } else {
            const variable_str = _toStr(actual_value);
            const error_226 = `The value '${variable_str}', which is a '${variable_type}', is not a '${expected_long_type}'`;
            error_string = _consoleError(error_226, 'TE@226');
          }
        }
        
        return error_string;
      }

      
      function _shapeVariable(check_variable, variable_type, the_type) {
        
        let error_string;
        if (_isCollection(variable_type)) {
          error_string = _shapeContainer(check_variable, variable_type, the_type);
        } else {
          error_string = _shapeScalar(check_variable, variable_type);
        }
        
        return error_string;
      }

      
      function _emptyErrorMess(shallow_array, check_array) {
        
        let error_string;
        if (shallow_array.length === 0) {
          const error_316 = "Array with with no empty type elements, [], should have at least one empty type element like, ['EMPTY-ERROR']";
          error_string = _consoleError(error_316, 'EE@316');
        } else {
          const extra_shapes = Object.entries(shallow_array);
          const [extra_index, extra_type] = extra_shapes[0];
          const check_str = _jsonStr(check_array);
          const error_310 = `ELEMENT '${extra_index}' is promised to be a '${extra_type}', but is missing : ${check_str}`;
          error_string = _consoleError(error_310, 'EE@310');
        }
        
        return error_string;
      }

      
      function _emptyError(empty_type, check_element, element_index, check_array, variable_type, the_type) {
        
        
        let error_string;
        const check_str = _jsonStr(check_array);
        if (empty_type === 'EMPTY-ERROR' || empty_type === 'ER') {
          if (_isEmpty(check_element)) {
            const error_311 = `ELEMENT '${element_index}' is erroneously empty :`;
            error_string = _consoleError(error_311, 'EE@311');
          } else {
            error_string = '';
          }
        } else if (empty_type === 'EMPTY-OK' || empty_type === 'OK'
                || empty_type === 'EMPTY-IGNORE' || empty_type === 'IG') {
          
          error_string = _emptyContainer(check_array[element_index], empty_type, the_type);
        } else if (_aTypeOf(empty_type) === 'string') {
          const error_312 = `ELEMENT '${element_index}' is incorrect  type, '${empty_type}', only`
                      + ` [ER, EMPTY-ERROR, EMPTY-OK, OK, EMPTY-IGNORE, IG] allowed  : ${check_str}`;
          error_string = _consoleError(error_312, 'EE@312');
        } else {
          
          error_string = _emptyContainer(check_array[element_index], empty_type, the_type);
        }
        
        return error_string;
      }

      
      const _emptyArrayInArray = (check_array, array_type, the_type) => {
        
        let error_string = '';
        const check_array_type = _aTypeOf(check_array);
        if (check_array_type !== 'array') {
          const check_str = _toStr(check_array);
          const error_314 = `Variable ${check_str} must be an array but is instead a '${check_array_type}', : ${check_str}`;
          error_string = _consoleError(error_314, 'EE@314');
        } else {
          check_array.forEach((element, array_index) => {
            if (error_string === '') {
              if (array_type.length === 1) {
                
                error_string = _emptyContainer(element, array_type, the_type);
              } else {
                
                error_string = _emptyContainer(element, array_type[array_index], the_type);
              }
            }
          });
        }
        
        return error_string;
      };

      

      function emptyArrayEmptyError(check_str) {
        const error_403 = `The parameter array ${check_str} is empty`;
        const error_string = _consoleError(error_403, 'ME@403');
        return error_string;
      }

      function emptyArrayElementsError(check_str, array_shape, check_length, shape_length) {
        const shape_str = _jsonStr(array_shape);
        const error_404 = `The parameter array ${check_str} does not have the same number of elements as ${shape_str}. `
                      + ` Lengths are different ${check_length} !== ${shape_length}`;
        const error_string = _consoleError(error_404, 'ME@404');
        return error_string;
      }

      function emptyArrayNotArrayError(check_array, check_array_type, check_str) {
        const error_313 = `Variable '${check_array}' must be an array but is a '${check_array_type}', : ${check_str}`;
        const error_string = _consoleError(error_313, 'EE@313');
        return error_string;
      }

      
      const _arrayOfOneShape = (check_array, array_type, the_type) => {
        
        let error_string = '';
        const empty_of_array = _shortToLongEmpty(array_type);
        if (!Array.isArray(check_array)) {
          
          check_array = [check_array];
        }
        check_array.forEach((check_element, element_index) => {
          if (error_string === '') {
            const variable_empty = _isEmpty(check_element);
            if (_isCollection(empty_of_array)) {
              
              error_string = _emptyContainer(check_element, empty_of_array, the_type);
            } else if (variable_empty && empty_of_array === 'EMPTY-ERROR') {
              if (OP_UNDEF_OK && variable_empty === 'null') {
                
              } else if (OP_UNDEF_OK && variable_empty === 'undefined') {
                
              } else {
                const show_element = _toStr(check_element);
                const error_306 = `ELEMENT '${element_index}' is asserted to be a '${empty_of_array}',`
                                + ` but is really 'EMPTY' : ${show_element}`;
                error_string = _consoleError(error_306, 'EE@306');
              }
            }
          }
        });
        
        return error_string;
      };

      
      const _emptyArrayTypes = (check_array, array_shape, the_type) => {
        
        let error_string = '';
        if (!Array.isArray(check_array)) {
          
          check_array = [check_array];
        }
        if (array_shape.length === 1 && check_array.length > 1) {
          const single_empty = array_shape[0];
          error_string = _arrayOfOneShape(check_array, single_empty, the_type);
        } else {
          let check_length;
          if (Array.isArray(check_array)) {
            check_length = check_array.length;
          } else {
            check_length = 0;
          }
          const shape_length = array_shape.length;
          const check_str = _jsonStr(check_array);
          if (check_length === 0) {
            error_string = emptyArrayEmptyError(check_str);
          } else if (the_type !== 'EMPTY-EXTRAS' && shape_length > 1 && shape_length !== check_length) {
            error_string = emptyArrayElementsError(check_str, array_shape, check_length, shape_length);
          } else {
            const shallow_array = Array.from(array_shape);
            const shallow_length = shallow_array.length;
            const check_array_type = _aTypeOf(check_array);
            if (check_array_type !== 'array') {
              error_string = emptyArrayNotArrayError(check_array, check_array_type, check_str);
            } else {
              check_array.forEach((check_element, element_index) => {
                if (error_string === '') {
                  const var_type = _aTypeOf(check_element);
                  const element_type = _typeFromArray(shallow_array, element_index);
                  if (_isCollection(element_type)) {
                    
                    error_string = _emptyContainer(check_array[element_index], element_type, the_type);
                  } else if (shallow_length !== 1) {
                    delete shallow_array[element_index];
                  }
                  const empty_err = _emptyError(element_type, check_element, element_index, check_array, var_type, the_type);
                  if (empty_err) {
                    error_string = empty_err;
                  }
                }
              });
            }
            if (shallow_length !== 1 && the_type !== EMPTY_EXTRAS && check_array.length !== shallow_length) {
              error_string = _emptyErrorMess(array_shape, check_array);
            }
          }
        }
        
        return error_string;
      };

      

      const _emptyKeysChecked = (empty_choice, check_var_or_obj, check_key) => {
        
        let error_string = '';
        const long_empty = _shortToLongEmpty(empty_choice);
        if (long_empty === EMPTY_ER) {
          const current_type = _aTypeOf(check_var_or_obj);
          const is_empty_able = _canBeEmpty(current_type);
          const var_str = _jsonStr(check_var_or_obj);
          if (is_empty_able) {
            const is_empty = _isEmpty(check_var_or_obj);
            if (is_empty) {
              const error_301 = ` key '${check_key}' is a '${current_type}' which is reputed `
                          + `to be '${long_empty}' but has a value of ${var_str}`;
              error_string = _consoleError(error_301, 'EE@301');
            }
          } else {
            const error_302 = `Type cannot be empty '${check_key}' ${long_empty}' is a ${var_str} :: ${current_type}`;
            error_string = _consoleError(error_302, 'EE@302');
          }
        } else if (long_empty !== EMPTY_OK && long_empty !== EMPTY_IG) {
          const error_303 = `Bad empty type key, '${_toStr(long_empty)}', must be either 'EMPTY-OK', 'EMPTY-ER', 'EMPTY-IG', 'OK', 'ER', or 'IG'`;
          error_string = _consoleError(error_303, 'EE@303');
        }
        
        return error_string;
      };

      
      const _emptyCollectionTypes = (check_object, object_shape, the_type) => {
        
        let error_string = '';
        const check_type_shallow = { ...object_shape };
        if (_isCollection(check_object)) {
          const check_entries = Object.entries(check_object);
          check_entries.forEach((empty_entry) => {
            if (error_string === '') {
              const [check_key, check_var_or_obj] = empty_entry;
              const empty_choice = _shortToLongEmpty(check_type_shallow[check_key]);
              if (_isCollection(check_var_or_obj)) {
                const correct_empty = object_shape[check_key];
                const long_empty = _shortToLongEmpty(correct_empty);
                if (_isEmpty(check_var_or_obj) && long_empty === 'EMPTY-ERROR') {
                  const show_empty = _jsonStr(check_var_or_obj);
                  const error_26 = `Key '${check_key}' was understood to be '${long_empty}' but was rather '${show_empty}'`;
                  error_string = _consoleError(error_26, 'EE@309');
                } else {
                  
                  error_string += _emptyContainer(check_object[check_key], long_empty, the_type);
                }
                delete check_type_shallow[check_key];
              } else if (Object.prototype.hasOwnProperty.call(check_type_shallow, check_key)) {
                error_string = _emptyKeysChecked(empty_choice, check_var_or_obj, check_key);
                delete check_type_shallow[check_key];
              } else if (the_type === EMPTY_VERIFY) {
                const error_27 = `Extra key in checked object - (${check_key}:'${check_var_or_obj}')`;
                error_string = _consoleError(error_27, 'EE@315');
              }
            }
          });
        }
        error_string += _missingKey(check_type_shallow);
        
        return error_string;
      };

      
      function _emptyContainer(check_container, empty_type, the_type) {
        
        let error_string;
        const shape_type = _aTypeOf(empty_type);
        if (empty_type === undefined) {
          error_string = '';
        } else if (shape_type === 'array') {
          if (_aTypeOf(empty_type[0]) === 'array') {
            if (empty_type.length === 1) {
              error_string = _emptyArrayInArray(check_container, empty_type[0], the_type);
            } else {
              error_string = _emptyArrayInArray(check_container, empty_type, the_type);
            }
          } else {
            const check_type_container = _aTypeOf(check_container);
            if (check_type_container === 'array') {
              error_string = _emptyArrayTypes(check_container, empty_type, the_type);
            } else {
              error_string = _emptyArrayInArray(check_container, empty_type, the_type);
            }
          }
        } else if (shape_type === 'object') {
          error_string = _emptyCollectionTypes(check_container, empty_type, the_type);
        } else {
          
          error_string = _emptyScalar(check_container, empty_type);
        }
        
        return error_string;
      }

      
      function _emptyScalar(check_variable, empty_type) {
        
        let error_string = '';
        const empty_long = _shortToLongEmpty(empty_type);
        const variable_type = _aTypeOf(check_variable);
        if (empty_long === EMPTY_ER) {
          const current_type = _aTypeOf(check_variable);
          const is_empty_able = _canBeEmpty(current_type);
          if (is_empty_able) {
            const is_empty = _isEmpty(check_variable);
            if (is_empty) {
              if (variable_type === 'object') {
                
                check_variable = '{ }';
              }
              const variable_str = _toStr(check_variable);
              const error_307 = `${empty_long} states '${variable_type}' must not `
                          + `be empty for the value ${variable_str}`;
              error_string = _consoleError(error_307, 'EE@307');
            }
          } else if (variable_type === 'null' || variable_type === 'undefined') {
            const error_308 = `A '${variable_type}' cannot be empty, so the state`
                      + ` of '${empty_long}' is illegal for the value '${check_variable}'`;
            error_string = _consoleError(error_308, 'EE@308');
          }
        } else if (empty_long !== EMPTY_OK && empty_long !== EMPTY_IG) {
          const error_304 = `Must 'EMPTY-OK' or 'EMPTY-ERROR' not '${empty_long}'`;
          error_string = _consoleError(error_304, 'EE@304');
        }
        
        return error_string;
      }

      
      function _emptyVariable(check_variable, variable_type, the_type) {
        
        let error_string;
        if (_isCollection(variable_type)) {
          error_string = _emptyContainer(check_variable, variable_type, the_type);
        } else {
          error_string = _emptyScalar(check_variable, variable_type);
        }
        
        return error_string;
      }

      
      function _emptyCheck(check_variable, variable_type, the_type) {
        
        let error_string;
        if (variable_type.length === 1 && (variable_type[0] === EMPTY_OK || variable_type[0] === 'OK')) {
          const error_305 = "Completely pointless as checking with ['OK'] or ['EMPTY-OK'] matches everything";
          error_string = _consoleError(error_305, 'EE@305');
        } else {
          error_string = _emptyVariable(check_variable, variable_type, the_type);
        }
        
        return error_string;
      }

      
      function _doEitherEmpty(type_parameters, the_type) {
        
        const [check_variable, empty_types] = type_parameters;
        let error_string = '';
        let empty_error = '';
        let found_empty = false;
        empty_types.forEach((empty_type) => {
          let check_empty_type = empty_type;
          if (empty_type === 'string') {
            
            
            
            const is_a_single_entity = (check_variable.length === 1);
            if (is_a_single_entity) {
              check_empty_type = [empty_type];
            }
          }
          const possible_error = _emptyCheck(check_variable, check_empty_type, the_type);
          if (possible_error === '') {
            found_empty = true;
            
            
          } else {
            empty_error = possible_error;
          }
        });
        if (!found_empty) {
          error_string = empty_error;
        }
        
        return error_string;
      }

      
      function _doEitherShape(type_parameters, the_type) {
        
        const [check_variable, var_types_shapes] = type_parameters;
        const shape_errors = [];
        let error_string;
        let found_shape = false;
        var_types_shapes.forEach((var_type) => {
          
          
          let variable_type = var_type;
          if (var_type === 'string') {
            
            
            
            let is_a_single_entity = false;
            if (Array.isArray(check_variable)) {
              if (check_variable.length === 1) {
                is_a_single_entity = true;
              }
            }
            if (is_a_single_entity) {
              variable_type = [var_type];
            }
          }
          const possible_error = _shapeVariable(check_variable, variable_type, the_type);

          if (possible_error === '') {
            found_shape = true;
            
            
          } else {
            shape_errors.push(possible_error);
          }
        });
        if (found_shape) {
          error_string = '';
        } else {
          const first_error = shape_errors.shift();
          const last_error = shape_errors.pop();
          if (shape_errors.length === 0) {
            error_string = `${first_error}, ${last_error}`;
          } else if (shape_errors.length === 1) {
            error_string = `${first_error}, ${last_error}, plus 1 more Either error`;
          } else {
            error_string = `${first_error}, ${last_error}, plus  ${shape_errors.length} more Either errors`;
          }
        }
        
        return error_string;
      }

      
      function _specParameters(the_commands) {
        
        let the_options = the_commands;
        const first_param = the_commands[0];
        if (Array.isArray(first_param)) {
          the_options = first_param;
        }
        the_options.forEach((a_parameter) => {
          if (typeof a_parameter === 'object') {
            t_check_events = a_parameter;
          } else if (a_parameter === 'UNDEF-OK') {
            OP_UNDEF_OK = 'UNDEF-OK';
          } else if (a_parameter === 'DEBUG-CONSOLE-TRACE') {
            OP_DEBUG_CONSOLE_TRACE = 'DEBUG-CONSOLE-TRACE';
          } else if (a_parameter === 'THROW-EXCEPTIONS') {
            OP_THROW_EXCEPTIONS = 'THROW-EXCEPTIONS';
          } else if (a_parameter === 'NO-ERROR-MESSAGES') {
            OP_NO_ERROR_MESSAGES = 'NO-ERROR-MESSAGES';
          } else if (a_parameter === 'LOG-ERRORS') {
            OP_LOG_ERRORS = 'LOG-ERRORS';
          } else if (a_parameter === 'CONSOLE-COUNT') {
            OP_CONSOLE_COUNT = 'CONSOLE-COUNT';
          } else if (a_parameter === 'NO-CHECKING') {
            
          } else if (a_parameter === 'DEBUG-ERROR-TAGS') {
            OP_DEBUG_ERROR_TAGS = 'DEBUG-ERROR-TAGS';
          } else if (a_parameter !== '') {
            const arg_str = _jsonStr(a_parameter);
            const error_107 = `Not THROW-EXCEPTIONS/LOG-ERRORS/UNDEF-OK/DEBUG-CONSOLE-TRACE/NO-CHECKING, unknown : ${arg_str}`;
            const exception_107 = _consoleError(error_107, 'EX@107');
            throw exception_107;
          }
        });
        t_do_param_checking = !!(OP_THROW_EXCEPTIONS || OP_LOG_ERRORS || OP_NO_ERROR_MESSAGES);
        const param_results = [
          OP_THROW_EXCEPTIONS, OP_LOG_ERRORS, OP_NO_ERROR_MESSAGES, OP_UNDEF_OK, OP_DEBUG_CONSOLE_TRACE, OP_CONSOLE_COUNT, OP_DEBUG_ERROR_TAGS,
        ];
        
        return param_results;
      }

      

      function notArrayShape(parameters_list, shape_str) {
        
        const params_string = _toStr(parameters_list);
        const long_shape = _shortToLongType(shape_str);
        const error_219 = 'Comparing actual [] parameter, with a'
            + ` value of ${params_string}, against the expected shape of ${long_shape}. They should be the same type.`
            + ` You cannot compare an array with a non-array; both []s, or both ${long_shape}s`;
        
        return error_219;
      }

      function notArrayType(parameters_list, param_type, shape_str) {
        
        const params_string = _toStr(parameters_list);
        const long_shape = _shortToLongType(shape_str);
        const error_217 = `Comparing actual '${param_type}' parameter,`
          + ` with a value of ${params_string}, in relation to the expected shape of ${long_shape}. They should be the`
          + ` same type. You cannot compare an array with a non-array; both []s, or both '${param_type}'s. Or same object keys`;
        
        return error_217;
      }

      function paramError(err_mess, error_label, shape_str, message_type_empty) {
        const the_error = _consoleError(err_mess, error_label);
        const shape_str_fixed = _doubleToSingleQuotes(shape_str);
        const error_str_3arr = error3Array(message_type_empty, the_error, shape_str_fixed);
        return error_str_3arr;
      }

      function undefOrNullShape(parameter_str, shape_list, shape_str, method_name, message_type_empty) {
        
        let error_str_3arr = '';
        let err_mess = '';
        let error_label = '';
        if (typeof shape_list === 'undefined') {
          err_mess = `TypeCzech.${method_name}() called with a first parameter of ${parameter_str} and a second shape parameter of undefined`;
          error_label = 'TE@218';
        } else if (shape_list === null) {
          err_mess = `TypeCzech.${method_name}() called with a first parameter of ${parameter_str} and a second shape parameter of null`;
          error_label = 'TE@220';
        }
        if (err_mess !== '') {
          error_str_3arr = paramError(err_mess, error_label, shape_str, message_type_empty);
        }
        
        return error_str_3arr;
      }

      function _twoArrays(list_of_2, method_name, message_type_empty, no_parameters) {
        
        let error_str_3arr = '';
        if (list_of_2.length !== 2) {
          const error_401 = `TypeCzech.${method_name}() has 2 ${ARGU_MENTS} not ${list_of_2.length}`;
          error_str_3arr = _consoleError(error_401, 'ME@401');
        } else {
          const [parameters_list, shape_list] = list_of_2;
          const parameter_type = _aTypeOf(parameters_list);
          const shape_type = _aTypeOf(shape_list);
          const parameter_str = _jsonStr(parameter_type);
          let shape_str;
          if (typeof shape_list === 'string') {
            shape_str = shape_list;
          } else {
            shape_str = _jsonStr(shape_list);
          }
          error_str_3arr = undefOrNullShape(parameter_str, shape_list, shape_str, method_name, message_type_empty);
          if (error_str_3arr === '') {
            const param_value = _toStr(parameters_list);
            if (parameter_type === 'array' && shape_type !== 'array') {
              const not_empty_array = parameters_list.length > 1;
              const not_array_shape = (shape_list !== 'array') && (shape_list !== 'a');
              if (not_array_shape && not_empty_array) {
                const error_219 = notArrayShape(parameters_list, shape_str);
                error_str_3arr = paramError(error_219, 'TE@219', shape_str, message_type_empty);
              } else if (no_parameters) {
                const error_408 = 'There are no parameters.';
                error_str_3arr = paramError(error_408, 'ME@408', shape_str, message_type_empty);
              }
            } else if (shape_type === 'array' && parameter_type !== 'array') {
              const error_217 = notArrayType(parameters_list, parameter_type, shape_str);
              error_str_3arr = paramError(error_217, 'TE@217', shape_str, message_type_empty);
            } else if (shape_type === 'array') {
              if (no_parameters) {
                const error_409 = 'There are no parameters to match array signature.';
                error_str_3arr = paramError(error_409, 'ME@409', shape_str, message_type_empty);
              }
              
            } else if (shape_type === 'object') {
              if (parameter_type !== 'object') {
                const error_201 = `TypeCzech.${method_name}() called with '{}' against '!{}'.`
                + ` Contrasting a ${parameter_type} type of value ${param_value}, with '${shape_str}' an ${shape_type}`
                + ` !!! ${parameter_type} <> ${shape_type}`;
                error_str_3arr = _consoleError(error_201, 'TE@201');
              }
            } else if (shape_type !== 'string') {
              const error_224 = `TypeCzech.${method_name}() called with second parameter not a string such as 'number'.`
                          + ` Matching '${param_value}' with '${shape_str}'.`
                          + ` Preferably try TypeCzech.${method_name}(12, 'number')`;
              error_str_3arr = _consoleError(error_224, 'TE@224');
            }
          }
        }
        
        return error_str_3arr;
      }

      
      function _eitherChecks(parameters_shapes, method_name) {
        
        let error_string = '';
        if (parameters_shapes.length !== 2) {
          const error_406 = `TypeCzech.${method_name}() needs 2 parameters, not ${parameters_shapes.length}`;
          error_string = _consoleError(error_406, 'ME@406');
        } else {
          const shapes_lists = parameters_shapes[1];
          const exact_str = _jsonStr(shapes_lists);
          if (_aTypeOf(shapes_lists) !== 'array') {
            const error_402 = `TypeCzech.${method_name}() called with a second parameter`
                          + ` as a non-array shape of ${exact_str}`;
            error_string = _consoleError(error_402, 'ME@402');
          } else if (shapes_lists.length < 2) {
            const shapes_lists_str = _toStr(shapes_lists);
            const error_701 = `TypeCzech.${method_name}()  needs at least 2 choices for an Either, not ${shapes_lists.length} of ${shapes_lists_str}`;
            error_string = _consoleError(error_701, 'UE@701');
          }
        }
        
        return error_string;
      }

      function isVariadic(parameters_obj, shape_list, one_param) {
        
        let is_variadic = false;
        if (!one_param) {
          if (!Array.isArray(parameters_obj)) { 
            if (Array.isArray(shape_list)) {
              if (shape_list.length === 1) {
                is_variadic = true;
              }
            }
          }
        }
        
        return is_variadic;
      }

      

      
      function check_empty(parameters_obj, shape_list) {
        if (t_param_check_func.p_call_traps) {
          
          
          const [parameters_array, no_parameters, one_param] = _getParameters(parameters_obj);
          const parameters_str = _toStr(parameters_array);
          const shape_str = _toStr(shape_list);

          
          
          let error_str_3arr = _twoArrays([parameters_array, shape_list], 'check_empty', MESS_EMPTY_VERIFY, no_parameters);
          const is_variadic = isVariadic(parameters_obj, shape_list, one_param);
          if (is_variadic) {
            return [MESS_EMPTY_VERIFY,
              `VE@604 - Use check_emptyVariadic([${parameters_str}], ['${shape_str}']') instead of check_empty()`,
              shape_list];
          }
          if (error_str_3arr === '') {
            const incheck_type_error = _emptyCheck(parameters_array, shape_list, EMPTY_VERIFY);
            if (incheck_type_error) {
              error_str_3arr = error3Array(MESS_EMPTY_VERIFY, incheck_type_error, shape_list);
            } else {
              error_str_3arr = '';
            }
          }
          
          return error_str_3arr;
        }
      }

      
      
      function check_emptyVariadic(parameters_obj, shape_list) {
        if (t_param_check_func.p_call_traps) {
          
          
          let [parameters_array, no_parameters, one_param] = _getParameters(parameters_obj);
          const parameters_str = _toStr(parameters_array);
          const shape_str = _toStr(shape_list);
          let error_str_3arr;
          if (!Array.isArray(shape_list)) {
            error_str_3arr = [MESS_EMPTY_VARIADIC,
              `VE@605 - Use check_emptyVariadic(${parameters_str}, ['${shape_str}']') instead of check_emptyVariadic(${parameters_str}, '${shape_str}')`,
              shape_list];
          } else if (shape_list.length !== 1) {
            error_str_3arr = [MESS_EMPTY_VARIADIC,
              `VE@606 - Use check_empty(${parameters_str}, ${shape_str}) instead of check_emptyVariadic()`,
              shape_list];
          } else {
            if (one_param) {
              parameters_array = [parameters_array];
            }
            
            error_str_3arr = _twoArrays([parameters_array, shape_list], 'check_empty', MESS_EMPTY_VARIADIC, no_parameters);
            if (error_str_3arr === '') {
              const incheck_type_error = _emptyCheck(parameters_array, shape_list, EMPTY_VERIFY);
              if (incheck_type_error) {
                error_str_3arr = error3Array(MESS_EMPTY_VARIADIC, incheck_type_error, shape_list);
              } else {
                error_str_3arr = '';
              }
            }
          }
          
          return error_str_3arr;
        }
      }

      
      
      function check_type(parameters_obj, shape_list) {
        if (t_param_check_func.p_call_traps) {
          
          const [parameters_array, no_parameters, one_param] = _getParameters(parameters_obj);
          const parameters_str = _toStr(parameters_array);
          const shape_str = _toStr(shape_list);
          
          let error_str_3arr = _twoArrays([parameters_array, shape_list], 'check_type', MESS_TYPE_VERIFY, no_parameters);
          if (error_str_3arr === '') {
            const is_variadic = isVariadic(parameters_obj, shape_list, one_param);
            if (is_variadic) {
              error_str_3arr = [MESS_TYPE_VERIFY,
                `VE@603 - Use check_typeVariadic(${parameters_str}, ${shape_str}) instead of check_type()`,
                shape_list];
            }
            if (error_str_3arr === '') {
              const type_error = _shapeVariable(parameters_array, shape_list, TYPE_VERIFY);
              if (type_error) {
                error_str_3arr = error3Array(MESS_TYPE_VERIFY, type_error, shape_list);
              } else {
                error_str_3arr = '';
              }
            }
          }
          
          return error_str_3arr;
        }
      }

      
      
      function check_typeVariadic(parameters_obj, shape_list) {
        if (t_param_check_func.p_call_traps) {
          
          
          let [parameters_array, no_parameters, one_param] = _getParameters(parameters_obj);
          const parameters_str = _toStr(parameters_array);
          const shape_str = _toStr(shape_list);
          let error_str_3arr;
          if (!Array.isArray(shape_list)) {
            let error_601 = `Use check_typeVariadic(${parameters_str}, ['${shape_str}']') instead of check_typeVariadic(${parameters_str}, '${shape_str}')`;
            error_601 = _consoleError(error_601, 'VE@601');
            error_str_3arr = [MESS_TYPE_VARIADIC, error_601, shape_list];
          } else if (shape_list.length !== 1) {
            let error_602 = `Use check_type(${parameters_str}, ${shape_str}) instead of check_typeVariadic()`;
            error_602 = _consoleError(error_602, 'VE@602');
            error_str_3arr = [MESS_TYPE_VARIADIC, error_602, shape_list];
          } else {
            if (one_param) {
              parameters_array = [parameters_array];
            }
            
            error_str_3arr = _twoArrays([parameters_array, shape_list], 'check_type', MESS_TYPE_VARIADIC, no_parameters);
            if (error_str_3arr === '') {
              const type_error = _shapeVariable(parameters_array, shape_list, TYPE_VERIFY);
              if (type_error) {
                error_str_3arr = error3Array(MESS_TYPE_VARIADIC, type_error, shape_list);
              } else {
                error_str_3arr = '';
              }
            }
          }
          
          return error_str_3arr;
        }
      }

      function extraEmptys(parameters_obj, shape_list) {
        
        
        const [parameters_array, no_parameters, one_param] = _getParameters(parameters_obj);
        let error_str_3arr;
        
        const type_error = _emptyCheck(parameters_array, shape_list, EMPTY_EXTRAS);
        if (type_error) {
          error_str_3arr = error3Array(MESS_EMPTY_EXTRAS, type_error, shape_list);
        } else {
          error_str_3arr = '';
        }
        
        return error_str_3arr;
      }

      
      
      function check_emptyExtra(parameters_obj, shape_list) {
        if (t_param_check_func.p_call_traps) {
          
          const params_collection = _isCollection(parameters_obj);
          const shape_collection = _isCollection(shape_list);
          let error_str_3arr;
          const shape_str = _toStr(shape_list);
          
          const [parameters_array, no_parameters, one_param] = _getParameters(parameters_obj);
          const parameters_str = _toStr(parameters_array);
          if (Array.isArray(shape_list) && shape_list.length === 1) {
            const single_shape = _toStr(shape_list[0]);
            const try_instead = `try [${single_shape}, ${single_shape}]`;
            let error_235 = `TypeCzech.check_emptyExtra(${parameters_str}, ${shape_str}) ${try_instead} as ${shape_str} is prohibited.`;
            error_235 = _consoleError(error_235, 'TE@235');
            error_str_3arr = error3Array(MESS_TYPE_EXTRAS, error_235, shape_list);
          } else if (params_collection && shape_collection) {
            
            if (typeFinal(shape_list) === 'string') {
              error_str_3arr = extraEmptys(parameters_obj[0], shape_list);
            } else if (typeFinal(shape_list) === 'object') {
              error_str_3arr = extraEmptys(parameters_obj, shape_list);
            } else if (_aTypeOf(parameters_array) !== 'array' || _aTypeOf(shape_list) !== 'array') {
              let error_317 = `TypeCzech.check_emptyExtra(${parameters_str}, ${shape_str}) needs two arrays to work`;
              error_317 = _consoleError(error_317, 'EE@317');
              error_str_3arr = error3Array(MESS_EMPTY_EXTRAS, error_317, shape_list);
            } else if (parameters_array.length < 2 || shape_list.length < 2) {
              let error_318 = `TypeCzech.check_emptyExtra(${parameters_str}, ${shape_str}) needs each array to have at least two types to work`;
              error_318 = _consoleError(error_318, 'EE@318');
              error_str_3arr = error3Array(MESS_EMPTY_EXTRAS, error_318, shape_list);
            } else {
              error_str_3arr = extraEmptys(parameters_obj, shape_list);
            }
          } else {
            const para_obj_str = _toStr(parameters_obj);
            let error_231 = `TypeCzech.check_emptyExtra(${para_obj_str}, ${shape_str}) needs two collections to work`;
            error_231 = _consoleError(error_231, 'TE@31');
            error_str_3arr = error3Array(MESS_EMPTY_EXTRAS, error_231, shape_list);
          }
          
          return error_str_3arr;
        }
      }

      
      function extraTypes(parameters_obj, shape_list) {
        
        
        const [parameters_array, no_parameters, one_param] = _getParameters(parameters_obj);
        let error_str_3arr;
        const type_error = _shapeVariable(parameters_array, shape_list, TYPE_EXTRAS);
        
        if (type_error) {
          error_str_3arr = error3Array(MESS_TYPE_EXTRAS, type_error, shape_list);
        } else {
          error_str_3arr = '';
        }
        
        return error_str_3arr;
      }

      
      
      function check_typeExtra(parameters_obj, shape_list) {
        if (t_param_check_func.p_call_traps) {
          
          const params_collection = _isCollection(parameters_obj);
          const shape_collection = _isCollection(shape_list);
          let error_str_3arr;
          const shape_str = _toStr(shape_list);
          
          const [parameters_array, no_parameters, one_param] = _getParameters(parameters_obj);
          const parameters_str = _toStr(parameters_array);
          if (Array.isArray(shape_list) && shape_list.length === 1) {
            const single_shape = _toStr(shape_list[0]);
            const try_instead = `try [${single_shape}, ${single_shape}]`;
            let error_234 = `TypeCzech.check_typeExtra(${parameters_str}, ${shape_str}) ${try_instead} as ${shape_str} is illegal.`;
            error_234 = _consoleError(error_234, 'TE@234');
            error_str_3arr = error3Array(MESS_TYPE_EXTRAS, error_234, shape_list);
          } else if (params_collection && shape_collection) {
            
            if (typeFinal(shape_list) === 'string') {
              error_str_3arr = extraTypes(parameters_obj[0], shape_list);
            } else if (typeFinal(shape_list) === 'object') {
              error_str_3arr = extraTypes(parameters_obj, shape_list);
            } else if (parameters_array.length < 2) {
              let error_228 = `TypeCzech.check_typeExtra(${parameters_str}, ${shape_str}) needs each array to have at least two types to work`;
              error_228 = _consoleError(error_228, 'TE@228');
              error_str_3arr = error3Array(MESS_TYPE_EXTRAS, error_228, shape_list);
            } else {
              error_str_3arr = extraTypes(parameters_obj, shape_list);
            }
          } else {
            const para_obj_str = _toStr(parameters_obj);
            let error_227 = `TypeCzech.check_typeExtra(${para_obj_str}, ${shape_str}) needs two collections to work`;
            error_227 = _consoleError(error_227, 'TE@227');
            error_str_3arr = error3Array(MESS_TYPE_EXTRAS, error_227, shape_list);
          }
          
          return error_str_3arr;
        }
      }

      
      
      function check_emptyEither(parameters_obj, shapes_lists) {
        if (t_param_check_func.p_call_traps) {
          
          
          const [parameters_array, no_parameters, one_param] = _getParameters(parameters_obj);
          
          let error_str_3arr = _eitherChecks([parameters_array, shapes_lists], 'check_emptyEither');
          if (error_str_3arr === '') {
            const exact_error = _doEitherEmpty([parameters_array, shapes_lists], EMPTY_VERIFY);
            if (exact_error) {
              error_str_3arr = error3Array(MESS_EMPTY_ONE_OF, exact_error, shapes_lists);
            } else {
              error_str_3arr = '';
            }
          }
          
          return error_str_3arr;
        }
      }
      
      
      function check_typeEither(parameters_obj, possible_shapes) {
        if (t_param_check_func.p_call_traps) {
          
          
          const [parameters_array, no_parameters, one_param] = _getParameters(parameters_obj);
          
          let error_str_3arr = _eitherChecks([parameters_array, possible_shapes], 'check_typeEither');
          if (error_str_3arr === '') {
            const exact_error = _doEitherShape([parameters_array, possible_shapes], TYPE_VERIFY);
            if (exact_error) {
              error_str_3arr = error3Array(MESS_TYPE_ONE_OF, exact_error, possible_shapes);
            } else {
              error_str_3arr = '';
            }
          }
          
          return error_str_3arr;
        }
      }

      
      function linkUp(user_function, pre_check, post_check) {
        
        let check_result;
        if (typeof post_check === 'undefined') {
          check_result = t_param_check_func.confirmParameters(user_function, pre_check, false);
        } else {
          check_result = t_param_check_func.confirmParameters(user_function, pre_check, post_check);
        }
        
        return check_result;
      }

      function countTally() {
        return t_param_check_func.countTally_();
      }
      function enableChecks() {
        return t_param_check_func.enableChecks_();
      }
      function disableChecks() {
        return t_param_check_func.disableChecks_();
      }
      function countFails() {
        return t_param_check_func.countFails_();
      }

      function assert_check(error_mess, where_from, actual_value, expected_mess) {
        if (t_param_check_func.p_call_traps && error_mess) {
          return t_param_check_func.assert_check_(error_mess, where_from, actual_value, expected_mess);
        }
        return '';
      }

      
      function _shrinkDiffs(long_diff) {
        let short_diff;
        if (long_diff.length < DIFF_BREAK_MIN) {
          short_diff = long_diff;
        } else {
          const start_diff = long_diff.substring(0, DIFF_BEGIN_LEN);
          const end_diff = long_diff.substring(long_diff.length - DIFF_END_LEN);
          short_diff = `${start_diff} ${DIFF_SEPARATOR} ${end_diff}`;
        }
        return short_diff;
      }

      function diffMessage(same_text, pre_diff, post_diff) {
        const same_shrunk = _shrinkDiffs(same_text);
        const pre_shrunk = _shrinkDiffs(pre_diff);
        const post_shrunk = _shrinkDiffs(post_diff);
        const share_begin = _toStr(`${CZECH_ERROR_INDENT}START-SAME ~ ${same_shrunk}`);
        const pre_changed = _toStr(`${CZECH_ERROR_INDENT}  PRE-DIFF ~ ${pre_shrunk}`);
        const post_changed = _toStr(`${CZECH_ERROR_INDENT} POST-DIFF ~ ${post_shrunk}`);
        const first_difference = `${share_begin}${pre_changed}${post_changed}`;
        return first_difference;
      }

      

      function firstDiff(pre_str, post_str) {
        let start_same = 0;
        let hit_end = false;
        while (pre_str[start_same] === post_str[start_same]) {
          if (start_same === pre_str.length || start_same === post_str.length) {
            hit_end = true;
            break;
          }
          start_same += 1;
        }
        return [start_same, hit_end];
      }

      function _refDiff(pre_str, post_str) {
        
        let first_difference = '';
        if (pre_str !== post_str) {
          const [start_same, hit_end] = firstDiff(pre_str, post_str);
          const pre_len = pre_str.length;
          const post_len = post_str.length;
          let same_text;
          let pre_diff;
          let post_diff;
          if (hit_end) {
            if (pre_len > post_len) {
              same_text = (post_len === 0) ? BLANK_REF_DIFF : post_str;
              pre_diff = pre_str.substring(start_same);
              post_diff = BLANK_REF_DIFF;
            } else {
              same_text = (pre_len === 0) ? BLANK_REF_DIFF : pre_str;
              pre_diff = BLANK_REF_DIFF;
              post_diff = pre_str.substring(start_same);
            }
          } else {
            same_text = (start_same === 0) ? BLANK_REF_DIFF : pre_str.substring(0, start_same);
            pre_diff = (pre_len === 0) ? BLANK_REF_DIFF : pre_str.substring(start_same);
            post_diff = (post_len === 0) ? BLANK_REF_DIFF : post_str.substring(start_same);
          }
          first_difference = diffMessage(same_text, pre_diff, post_diff);
        }
        
        return first_difference;
      }

      
      
      function check_buildSnapshot(func_name, var_name, collection_ref) {
        if (t_param_check_func.p_call_traps) {
          
          const num_parameters = arguments.length;
          if (num_parameters !== 3) {
            const error_108 = `TypeCzech.check_buildSnapshot() needs 3 parameters, not ${num_parameters}`;
            const exception_108 = _consoleError(error_108, 'EX@108');
            throw exception_108;
          } else if (!_isCollection(collection_ref)) {
            const collection_type = _aTypeOf(collection_ref);
            const error_109 = `TypeCzech.check_buildSnapshot()'s 3rd parameter is not an array/object but instead a '${collection_type}'`;
            const exception_109 = _consoleError(error_109, 'EX@109');
            throw exception_109;
          } else if (typeof func_name !== 'string') {
            const error_110 = `First TypeCzech.check_buildSnapshot() parameter must be an un-empty string, not ${_toStr(func_name)}`;
            const exception_110 = _consoleError(error_110, 'EX@110');
            throw exception_110;
          } else if (typeof var_name !== 'string') {
            const error_111 = `Second TypeCzech.check_buildSnapshot() parameter must be an un-empty string, not ${_toStr(var_name)}`;
            const exception_111 = _consoleError(error_111, 'EX@111');
            throw exception_111;
          }
          const func_varname = `${func_name}-${var_name}`;
          const no_cycles = _cycle_loops.decycle(collection_ref);
          const pre_collect_str = _fast_json_stable_stringify(no_cycles);
          const ref_instance = {
            func_name, var_name, collection_ref, pre_collect_str,
          };
          const have_varname = t_reference_stacks[func_varname];
          if (have_varname) {
            t_reference_stacks[func_varname].push(ref_instance);
          } else {
            t_reference_stacks[func_varname] = [ref_instance];
          }
          
          return '';
        }
      }

      function _mutateStacks() {
        const ref_stacks_str = _fast_json_stable_stringify(t_reference_stacks);
        return ref_stacks_str;
      }

      
      
      function check_mutatedSnapshot(func_name, var_name) {
        if (t_param_check_func.p_call_traps) {
          
          const func_str = _toStr(func_name);
          const var_str = _toStr(var_name);
          const func_varname = `${func_str}-${var_str}`;
          let error_mess = '';
          const have_varname = t_reference_stacks[func_varname];
          const num_parameters = arguments.length;
          if (num_parameters !== 2) {
            const error_112 = `TypeCzech.check_mutatedSnapshot() needs 2 parameters, not ${num_parameters}`;
            const exception_112 = _consoleError(error_112, 'EX@112');
            throw exception_112;
          } else if (!have_varname) {
            const error_113 = `No record of an entry for TypeCzech.check_mutatedSnapshot('${func_str}', '${var_str}', a_var)`;
            const exception_113 = _consoleError(error_113, 'EX@113');
            throw exception_113;
          } else {
            const newest_instance = t_reference_stacks[func_varname].pop();
            
            if (typeof newest_instance === 'undefined') {
              const error_114 = `TypeCzech.check_mutatedSnapshot() has no current matching entry for check_buildSnapshot('${func_str}', '${var_str}', a_var)`;
              const exception_114 = _consoleError(error_114, 'EX@114');
              throw exception_114;
            }
            const { collection_ref, pre_collect_str } = newest_instance;
            const no_cycles = _cycle_loops.decycle(collection_ref);
            const post_collect_str = _fast_json_stable_stringify(no_cycles);
            if (pre_collect_str === post_collect_str) {
              
            } else {
              const pre_str_quotes = _toStr(pre_collect_str);
              const post_str_quotes = _toStr(post_collect_str);
              const ref_change = `The reference variable '${var_name}' in function '${func_name}()' changed values`;

              const pre_shrunk = _shrinkDiffs(pre_str_quotes);
              const post_shrunk = _shrinkDiffs(post_str_quotes);

              const pre_val = `${CZECH_ERROR_INDENT}from ${pre_shrunk}`;
              const post_val = `${CZECH_ERROR_INDENT}  to ${post_shrunk} ${CZECH_ERROR_INDENT}`;
              const the_diffs = _refDiff(pre_collect_str, post_collect_str);
              const error_405 = `${ref_change}${pre_val}${post_val}${the_diffs}`;
              const error_string = _consoleError(error_405, 'ME@405');
              error_mess = error3Array(MESS_MUTATED, error_string, '');
            }
          }
          const no_cycles_stacks = _cycle_loops.decycle(t_reference_stacks);
          const ref_stacks_str = _fast_json_stable_stringify(no_cycles_stacks);
          
          return error_mess;
        }
      }

      function isActive() {
        return t_do_param_checking;
      }

      
      
      
      

      

      
      const parameter_settings = _specParameters(the_parameters);

      if (t_check_events) {
        t_param_check_func = _ParametersCheck(t_check_events);
      } else {
        t_param_check_func = _ParametersCheck(false);
      }
      

      return {
        
        _ParametersCheck,
        _anObjectsType,
        _arrayOfOneShape,
        _arrayOfOneType,
        _aTypeOf,
        _canBeEmpty,
        _className,
        _collectionToStr,
        _coloredConsole,
        _consoleError,
        _doEitherEmpty,
        _doEitherShape,
        _doubleToSingleQuotes,
        _eitherChecks,
        _emptyArrayInArray,
        _emptyArrayTypes,
        _emptyCheck,
        _emptyCollectionTypes,
        _emptyContainer,
        _emptyError,
        _emptyErrorMess,
        _emptyKeysChecked,
        _emptyScalar,
        _emptyVariable,
        _functionName,
        _getParameters,
        _isAClass,
        _isBuiltInClass,
        _isCollection,
        _isEmpty,
        _isScalar,
        _isaTypeOf,
        _isPlainJsType,
        _jsonStr,
        _missingKey,
        _mutateStacks,
        _refDiff,
        _shapeArrayTypes,
        _shapeCollectionTypes,
        _shapeContainer,
        _shapeErrorMess,
        _shapePropertyType,
        _shapeScalar,
        _shapeVariable,
        _shortToLongEmpty,
        _shortToLongType,
        _shrinkDiffs,
        _specParameters,
        _stringifyReplacer,
        _toStr,
        _twoArrays,
        _typeFromArray,
        _wrongType,

        _cycle_loops, 
        _fast_json_stable_stringify, 
        TYPE_CZECH_EVENTS,

        assert_check, 

        check_type, 
        check_typeEither, 
        check_typeExtra, 
        check_typeVariadic, 

        check_empty, 
        check_emptyEither, 
        check_emptyExtra, 
        check_emptyVariadic, 

        check_interface, 

        check_buildSnapshot, 
        check_mutatedSnapshot, 

        enableChecks, 
        disableChecks, 

        countFails, 
        countTally, 

        isActive, 
        linkUp, 

        typeFinal, 
        typeIsA, 
        typeProtos, 
      };
    } 
  };
}(the_exports));
