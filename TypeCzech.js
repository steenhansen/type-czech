/* eslint-disable no-use-before-define */

// eslint-disable-next-line no-unused-vars
function TypeCzech(...the_arguments) {
// The valid options to TypeCzech
  let OP_THROW_EXCEPTIONS = false; // 'THROW-EXCEPTIONS'
  let OP_LOG_ERRORS = false; // 'LOG-ERRORS'   'NO-CHECKING' stops checking
  // 'UNDEF-OK' only works with typeVerify(), typeExtras(), typeOneOf(), and typeOneOfExtras()
  let OP_UNDEF_OK = false; // 'UNDEF-OK'
  let OP_CONSOLE_COUNT = false; // 'CONSOLE-COUNT'

  const TRACE_COLORS = 'background: #ee0; color: #00F';
  const ERROR_COLORS = 'background: #ee0; color: #F00';
  const START_COLORS = 'background: #cc0; color: #080';

  // For debugging of library
  let OP_DEBUG_ERROR_TAGS = false; // 'DEBUG-ERROR-TAGS' show "SC@22" for fast finding
  let OP_DEBUG_CONSOLE_TRACE = false; // 'DEBUG-CONSOLE-TRACE'

  let OP_CHECK_EVENTS = false;

  const FAILURE_LOG_PREFIX = 'TypeCzech';

  let argument_check;

  const NEW_LINE_TAB_TAB = '\n\t\t';
  const REPLACE_NL_TAB_TAB = new RegExp(/\\n\\t\\t/g);
  const MATCH_NL_TAB_TAB = new RegExp(/\n\t\t/g);

  const START_OF_FUNCTION_LEN = 30;

  const CONSOLE_LOG_NEWLINE = '|';

  const EMPTY_REGEXP = '/(?:)/';

  const EMPTY_OK = 'EMPTY-OK';
  const EMPTY_ER = 'EMPTY-ER';
  const SHORT_EMPTIES = { 'EM-OK': EMPTY_OK, 'EM-ER': EMPTY_ER };

  const TYPE_EXTRAS = 'TYPE-EXTRAS';
  const TYPE_VERIFY = 'TYPE-VERIFY';
  const EMPTY_EXTRAS = 'EMPTY-EXTRAS';
  const EMPTY_VERIFY = 'EMPTY-VERIFY';

  let PARAMETER_CHECKING = false; // a varible

  const VALID_SET = new Set(['symbol', 'date', 'function', 'number', 'string', 'boolean', 'array', 'object', 'regexp']);
  let VALID_TYPES = VALID_SET;

  const SHORT_TYPES = {
    y: 'symbol', d: 'date', f: 'function', n: 'number', s: 'string', b: 'boolean', r: 'regexp',
  };

  const UNDEFINED_AS_STR = '-un-defined-';
  const NAN_AS_STR = '-NaN-';

  const START_CHECK_COLOR = 'green';
  const DO_CHECK_COLOR = 'blue';
  const FAIL_CHECK_COLOR = 'red';

  const IS_INIT_CONSOLE = 'ArgumentCheck-init';

  /* How to flash background green/blue/red easily
    var arg_check = type_czech.ArgumentCheck(type_czech.TYPE_CZECH_EVENTS);
    arg_check.checkArgs(program_function, checking_function);
  */
  const TYPE_CZECH_EVENTS = {
    backBlink: (back_color) => {
      document.body.style.background = back_color;
      setTimeout(() => { document.body.style.background = 'white'; }, 100);
    },
    onStart: () => TYPE_CZECH_EVENTS.backBlink(START_CHECK_COLOR),
    onCheck: () => TYPE_CZECH_EVENTS.backBlink(DO_CHECK_COLOR),
    onError: () => TYPE_CZECH_EVENTS.backBlink(FAIL_CHECK_COLOR),
  };

  /*
type_czech._isValidType("boolean");
true
    type_czech._isValidType("Snuffleupagus");
    false
  */
  function _isValidType(a_type) {
    if (VALID_TYPES.has(a_type)) return true; // date, string..... not null, not undef
    if (SHORT_TYPES[a_type]) return true; //   d,s,n,b.....
    return false;
  }

  /*
type_czech._shortToLongType("sy");
symbol
  */
  function _shortToLongType(a_type) {
    if (SHORT_TYPES[a_type]) {
      return SHORT_TYPES[a_type];
    }
    return a_type;
  }

  /*
type_czech._shortToLongEmpty("EM-OK");
EMPTY-OK
    type_czech._shortToLongEmpty("EMPTY-ER");
    EMPTY-ER
  */
  function _shortToLongEmpty(an_empty) {
    if (SHORT_EMPTIES[an_empty]) {
      return SHORT_EMPTIES[an_empty];
    }
    return an_empty;
  }

  function _doubleToSingleQuotes(double_quotes) {
    const dq_1 = double_quotes.replace(/{"/g, "{'");
    const dq_2 = dq_1.replace(/":/g, "':");
    const dq_3 = dq_2.replace(/","/g, "','");
    const dq_4 = dq_3.replace(/,"/g, ",'");

    const dq_5 = dq_4.replace(/\["/g, "['");
    const dq_6 = dq_5.replace(/"]/g, "']");
    const dq_7 = dq_6.replace(/],"/g, "],'");
    return dq_7;
  }

  /*
type_czech._toStr({a:1, b:22, c:33});
{'a':1,'b':22,'c':33}
    type_czech._toStr([ "super", "man" ]);
    ['super','man']
  */
  function _toStr(maybe_undef) {
    // consolelog('_toStr ENTER', maybe_undef);
    if (typeof maybe_undef === 'undefined') return UNDEFINED_AS_STR;
    if (typeof maybe_undef === 'string') {
      const no_double_quotes = maybe_undef.replace(/"/g, "'");
      return no_double_quotes;
    }
    const double_quotes = JSON.stringify(maybe_undef);
    if (typeof maybe_undef !== 'object') {
      return double_quotes;
    }
    const single_quotes = _doubleToSingleQuotes(double_quotes);
    return single_quotes;
  }

  function _stringifyReplacer(key, value) {
    if (typeof value === 'undefined') {
      return UNDEFINED_AS_STR;
    }
    if (Number.isNaN(value)) {
      return NAN_AS_STR;
    }
    if (typeof value === 'function' || (value && value.constructor === RegExp)) {
      const func_text = String(value);
      const func_start = func_text.substring(0, START_OF_FUNCTION_LEN);
      const short_text = `${func_start} ...`;
      return short_text;
    }
    return value;
  }

  /*
type_czech._jsonStr({a:1, b:22, c:undefined});
{'a':1,'b':22,'c':'un-defined'}
  */
  function _jsonStr(an_object) {
    const json_str = _toStr(JSON.stringify(an_object, _stringifyReplacer));
    return json_str;
  }

  /*
type_czech._aTypeOf(new Date('1999-12-31'));
date
    type_czech._aTypeOf(x=>x);
    function
type_czech._aTypeOf([]);
array
  */
  function _aTypeOf(a_variable) {
    return a_variable === null ? 'null'
      : a_variable instanceof Date ? 'date'
        : a_variable instanceof RegExp ? 'regexp'
          : Array.isArray(a_variable) ? 'array'
            : typeof a_variable;
  }

  /*
type_czech._isArguments([]);
false
    type_czech._isArguments({});
    false
type_czech._isArguments(12);
false
    type_czech._isArguments({length:'my-length'});
    false
type_czech._isArguments({length:-1});
false
    type_czech._isArguments({0:0, 1:1, length:0, callee:'callee'});
    true
  */
  function _isArguments(arguments_object) {
    const is_not_array = !Array.isArray(arguments_object);
    const is_object = typeof arguments_object === 'object';
    const num_length = typeof arguments_object.length === 'number';
    if (is_not_array && is_object && num_length) {
      const prop_names = Object.getOwnPropertyNames(arguments_object).join();
      if (prop_names === '0,1,length,callee') {
        return true;
      }
    }
    return false;
  }

  /*
type_czech._isCollection([]);
true
    type_czech._isCollection({});
    true
type_czech._aTypeOf(12);
false
  */
  function _isCollection(a_variable) {
    const a_type = _aTypeOf(a_variable);
    return a_type === 'array' ? true
      : a_type === 'object';
  }

  /*
type_czech._coloredConsole("colored text", 'background: #684; color: #f26');
colored text
  */
  function _coloredConsole(the_args, the_css) {
    // consolelog('_coloredConsole ENTER', the_args, the_css);
    const args_str = JSON.stringify(the_args);
    const the_text = args_str.substring(1, args_str.length - 1);
    // eslint-disable-next-line no-console
    console.log(`%c ${the_text}`, the_css);
  }

  // eslint-disable-next-line no-unused-vars
  function consolelog(...args) {
    if (OP_DEBUG_CONSOLE_TRACE) {
      // console.log(args)
      _coloredConsole(args, TRACE_COLORS);
    }
  }

  /*
type_czech._consoleError("errorText", 'TheTAG');
TheTAG - errorText
  */
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

  /*
type_czech._missingKey({z:"symbol"});
SC@46 - The key 'z', which has a type of 'symbol', is missing in the checked_object
  */
  function _missingKey(extra_keys) {
    // consolelog('_missingKey ENTER', extra_keys);
    if (Object.keys(extra_keys).length > 0) {
      const [share_key, share_type] = Object.entries(extra_keys)[0];
      let error_46 = `The key '${share_key}', which has a type of '${share_type}', is missing in the checked_object`;
      error_46 = _consoleError(error_46, 'SC@46');
      return error_46;
    }
    return '';
  }

  /*
type_czech._isEmpty(new Date(''));
true
    type_czech._isEmpty('');
    true
type_czech._isEmpty(0);
true
    type_czech._isEmpty(NaN);
    true
type_czech._isEmpty(null);
true
    type_czech._isEmpty(undefined);
    true
type_czech._isEmpty([]);
true
    type_czech._isEmpty({});
    true
  */
  function _isEmpty(a_variable) {
    if (a_variable instanceof Date) {
      // eslint-disable-next-line eqeqeq
      return a_variable == 'Invalid Date';
    }
    if (a_variable instanceof RegExp) {
      const regExp_str = a_variable.toString();
      const regExp_empty = (regExp_str === EMPTY_REGEXP);
      return regExp_empty;
    }
    if (Number.isNaN(a_variable)) return true; // NaN is an empty number, 0 is NOT-EMPTY!
    if (a_variable == null) return true;
    const empty_str_array = a_variable.length === 0;
    const empty_object = (typeof a_variable === 'object' && Object.keys(a_variable).length === 0);
    return empty_str_array || empty_object;
  }

  /*
  boolean, symbol, function    cannot be empty
type_czech._canBeEmpty('array')
true

type_czech._canBeEmpty(/ab+c/i)

*/
  const _canBeEmpty = (variable_type) => (variable_type === 'array' ? true // []
    : variable_type === 'object' ? true // {}
      : variable_type === 'string' ? true // ''
        : variable_type === 'regexp' ? true // new RegExp()
          : variable_type === 'date' ? true // new Date("invalid")     isNaN(new Date("invalid"))
            : variable_type === 'number');

  /*
type_czech._typeFromArray(['jj'], 99);
jj
    type_czech._typeFromArray([1,'uu'], 1);
    uu
  */
  function _typeFromArray(shallow_array, element_index) {
    // console.log('_typeFromArray ENTER', shallow_array, element_index);
    const shape_length = shallow_array.length;
    let element_type;
    if (shape_length === 1) {
      [element_type] = shallow_array;
    } else {
      element_type = shallow_array[element_index];
    }
    return element_type;
  }

  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /*
>>>>>>> Do nothing as not 'LOG-ERRORS' and not 'THROW-EXCEPTIONS'
argCheck_0=TypeCzech().ArgumentCheck().checkArgs(
x=> { return {my_x:x}; },                         // function to check
x=> { return x===11 ? 'Error x is 11': ''; }      // checking function
); console.log(argCheck_0(11), argCheck_0(22));
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Object { my_x: 11 }  Object { my_x: 22 }

  argCheck_1=TypeCzech('LOG-ERRORS').ArgumentCheck().checkArgs(
  x=> { return {my_x:x}; },
  x=> { return x===33 ? 'Error x is 33': ''; }
  ); console.log(argCheck_1(33), argCheck_1(44));
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "ArgumentCheck","LOG-ERRORS","","",{}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TypeCzech - () - Error x is 33
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Object { my_x: 33 } Object { my_x: 44 }

>>>>>>> Green start flash from TypeCzech().TYPE_CZECH_EVENTS
  argCheck_2=TypeCzech('LOG-ERRORS').ArgumentCheck(TypeCzech().TYPE_CZECH_EVENTS).checkArgs(
  x=> { return {my_x:x}; },
  x=> { return x===55 ? 'Error x is 55': ''; });

>>>>>>> Red error flash
  argCheck_3=TypeCzech('LOG-ERRORS').ArgumentCheck(TypeCzech().TYPE_CZECH_EVENTS).checkArgs(
  x=> { return {my_x:x}; },
  x=> { return x===66 ? 'Error x is 66': ''; }
  ); argCheck_3(66);
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "ArgumentCheck","LOG-ERRORS","","",{}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TypeCzech - () - Error x is 66
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Object { my_x: 66 }

>>>>>>> Blue run check flash
  argCheck_4=TypeCzech('LOG-ERRORS').ArgumentCheck(TypeCzech().TYPE_CZECH_EVENTS).checkArgs(
  x=> { return {my_x:x}; },
  x=> { return x===77 ? 'Error x is 77': ''; }
  ); argCheck_4(88);
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "ArgumentCheck","LOG-ERRORS","","",{}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Object { my_x: 88 }

>>>>>>> Thrown error
  argCheck_5=TypeCzech('THROW-EXCEPTIONS').ArgumentCheck().checkArgs(
  x=> { return {my_x:x}; },                         // function to check
  x=> { return x===99 ? 'Error x is 99': ''; }      // checking function
  ); argCheck_5(99);
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "ArgumentCheck","THROW-EXCEPTIONS","","",{}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Uncaught Error x is 99

  */
  function ArgumentCheck(arg_check_events) {
    if (arguments.length > 1) {
      let error_53 = `TypeCzech.checkArgs() needs 0 or 1 arguments, not ${arguments.length}`;
      error_53 = _consoleError(error_53, 'SC@53');
      throw error_53;
    }
    let onArgumentCheck = () => ''; // console.log('default onArgumentCheck');
    let onParamError = () => ''; // console.log('default onParamError');
    let check_count = 0; // count number of parameter checks to validate test count
    let check_errors = 0; // count errors so far
    let call_traps = false; // turn parameter checking on/off

    let return_types_ = false; // the Map() of return types

    function initArgumentCheck() {
      if (PARAMETER_CHECKING) {
        return_types_ = new Map();
        if (arg_check_events && _aTypeOf(arg_check_events) !== 'object') {
          const events_sentence = 'ArgumentCheck - arg_check_events is not an object'
                                 + ' with onStart(), onCheck(), onError() ';
          _coloredConsole([events_sentence, arg_check_events], ERROR_COLORS);
        }
        const throw_except = OP_THROW_EXCEPTIONS ? 'THROW-EXCEPTIONS' : '';
        const log_errors = OP_LOG_ERRORS ? 'LOG-ERRORS' : '';
        const undef_ok = OP_UNDEF_OK ? 'UNDEF-OK' : '';
        const console_count = OP_CONSOLE_COUNT ? 'CONSOLE-COUNT' : '';
        const options_array = [IS_INIT_CONSOLE, throw_except, log_errors, undef_ok, console_count, arg_check_events];
        _coloredConsole(options_array, START_COLORS);
        if (arg_check_events.onStart !== undefined) {
          arg_check_events.onStart();
        }
        if (arg_check_events.onCheck !== undefined) {
          onArgumentCheck = arg_check_events.onCheck;
        }
        if (arg_check_events.onError !== undefined) {
          onParamError = arg_check_events.onError;
        }
        call_traps = true; // default parameter checking is on
      }
    }

    function applyCheckFuncs(target_name, thisArg, argumentsList, predicatesFunc) {
      // consolelog('applyCheckFuncs ENTER', target_name, thisArg, argumentsList, predicatesFunc);
      check_count += 1;
      if (OP_CONSOLE_COUNT) {
        _coloredConsole([check_count], TRACE_COLORS);
      }
      const any_errors = predicatesFunc.apply(thisArg, argumentsList);
      if (any_errors) {
        check_errors += 1;
        onParamError();
        let exception_str = `${FAILURE_LOG_PREFIX} - ${target_name}() - `;
        if (typeof any_errors === 'string') {
          exception_str = any_errors;
        } else {
          const [shape_check, type_of_error, expected_shape] = any_errors;
          const arg_list_brackets = _jsonStr(argumentsList);
          const arg_list = arg_list_brackets.slice(1, -1); // delete start and end square brackets [ ]
          const expected_json = _jsonStr(expected_shape);
          exception_str += type_of_error;
          exception_str += NEW_LINE_TAB_TAB + shape_check;
          exception_str += `${NEW_LINE_TAB_TAB} ACTUAL VALUE ${arg_list}`;
          exception_str += `${NEW_LINE_TAB_TAB}EXPECTED TYPE ${expected_json}`;
        }
        if (OP_THROW_EXCEPTIONS) {
          throw exception_str;
        } else if (OP_LOG_ERRORS) {
          // eslint-disable-next-line no-console
          console.log(exception_str);
        }
      }
    }

    function errorRatio_() {
      return `${check_errors}/${check_count}`;
    }

    function checkCount_() {
      return check_count;
    }

    function errorCount_() {
      return check_errors;
    }

    function beginChecks_() {
      call_traps = true;
      check_count = 0;
      check_errors = 0;
    }

    function endChecks_() {
      call_traps = false;
    }

    function mustBeFuncs(target_proxy, predicate_funcs) {
      // consolelog('mustBeFuncs ENTER', target_proxy, predicate_funcs);
      let predicate_func;
      if (typeof predicate_funcs === 'object') {
        const create_name = target_proxy.name;
        predicate_func = predicate_funcs[create_name];
      } else {
        predicate_func = predicate_funcs;
      }
      if (typeof target_proxy !== 'function') {
        const target_str = _toStr(target_proxy);
        let error_6 = `TypeCzech.checkArgs target_proxy is not a function ${target_str}`;
        error_6 = _consoleError(error_6, 'SC@06');
        throw error_6;
      }
      if (predicate_func === undefined) {
        return () => ''; // console.log('EMPTY-OK =>', target_proxy.name);
      }
      return predicate_func;
    }

    function alreadyProxied(target_proxy, predicate_funcs) {
      // consolelog('alreadyProxied ENTER', target_proxy, predicate_funcs);
      let check_function_name;
      if (target_proxy === undefined) {
        let error_5 = 'ArgumentCheck The \'checked_function\' must be in the exact same scope as checked_function='
                      + `ArgumentCheck(checked_function) and ${predicate_funcs.name}() to be available for overriding`;
        error_5 = _consoleError(error_5, 'SC@05');
        throw error_5;
      }
      if (target_proxy.is_ArgumentCheck_Proxy !== undefined) {
        if (typeof predicate_funcs === 'object') {
          const func_name = (x) => `${x}()`;
          const func_list = (accum, cur) => `${accum}, ${cur}`;
          const object_methods = Object.keys(predicate_funcs).map(func_name).reduce(func_list);
          check_function_name = `{ ${object_methods} }`;
        } else {
          check_function_name = `${predicate_funcs.name}()`;
        }
        let error_4 = `ArgumentCheck ${target_proxy.name}() is already proxied with ${check_function_name}`;
        error_4 = _consoleError(error_4, 'SC@04');
        throw error_4;
      }
    }

    function checkProxy(target_proxy, predicate_funcs) {
      // consolelog('checkProxy ENTER', target_proxy, predicate_funcs);
      alreadyProxied(target_proxy, predicate_funcs); // cannot proxy an already proxied function
      const predicate_not_func_nor_obj = (typeof predicate_funcs !== 'function' && typeof predicate_funcs !== 'object');
      if (typeof target_proxy !== 'function' || predicate_not_func_nor_obj) {
        const target_str = _jsonStr(target_proxy);
        const predicate_str = _jsonStr(predicate_funcs);
        let error_38 = `ArgumentCheck both '${target_str}' and '${predicate_str}' must be functions`;
        error_38 = _consoleError(error_38, 'SC@38');
        throw error_38;
      }
      if (target_proxy === predicate_funcs) {
        let error_28 = `ArgumentCheck you cannot use ${target_proxy.name}() to test`
                     + `${predicate_funcs.name}(), they must be different functions`;
        error_28 = _consoleError(error_28, 'SC@28');
        throw error_28;
      }
      try {
        // eslint-disable-next-line no-param-reassign
        target_proxy.is_ArgumentCheck_Proxy = Symbol('is_ArgumentCheck_Proxy');
      } catch (error_e) {
        const error_47 = _consoleError(_toStr(error_e.message), 'SC@47');
        throw error_47;
      }
      const check_functions = mustBeFuncs(target_proxy, predicate_funcs);
      return check_functions;
    }

    function wireUpMethods(create_name, new_object, predicate_funcs) {
      // consolelog('wireUpMethods ENTER', create_name, new_object, predicate_funcs);
      if (typeof predicate_funcs === 'object') {
        // eslint-disable-next-line no-restricted-syntax
        for (const method_name in predicate_funcs) {
          if (method_name !== create_name) {
            const the_function = predicate_funcs[method_name];
            // eslint-disable-next-line no-param-reassign
            new_object[method_name] = checkArgs(new_object[method_name], the_function);
          }
        }
      }
      return new_object;
    }

    function checkResultType(function_result, proxy_name) {
      const result_type = _aTypeOf(function_result);
      if (return_types_.has(proxy_name)) {
        const expected_type = return_types_.get(proxy_name);
        if (expected_type !== result_type) {
          const result_str = _jsonStr(function_result);
          const output_mismatch = `The function '${proxy_name}' is improperly returning a`
                                 + ` result type of '${result_type}', ${NEW_LINE_TAB_TAB}`
                                + `Instead of the expected type of '${expected_type}'. ${NEW_LINE_TAB_TAB}`
                                + `${result_str}`;
          if (OP_THROW_EXCEPTIONS) {
            throw output_mismatch;
          } else if (OP_LOG_ERRORS) {
            // eslint-disable-next-line no-console
            console.log(output_mismatch);
          }
        }
      }
    }

    function only2Args(num_args) {
      if (num_args !== 2) {
        let error_52 = `TypeCzech.checkArgs() needs 2 arguments, not ${num_args}`;
        error_52 = _consoleError(error_52, 'SC@52');
        throw error_52;
      }
    }

    function realCheckArgs(target_proxy, predicate_funcs) {
      consolelog('realCheckArgs ENTER', target_proxy, predicate_funcs);
      only2Args(arguments.length);
      if (typeof predicate_funcs === 'undefined') {
        return target_proxy;
      }
      const check_functions = checkProxy(target_proxy, predicate_funcs);
      const is_constructor = typeof predicate_funcs === 'object';
      const proxy_name = target_proxy.name;
      const proxy_handler = {
        apply(target, thisArg, argumentsList) {
          onArgumentCheck();
          if (call_traps) {
            applyCheckFuncs(proxy_name, thisArg, argumentsList, check_functions);
          }
          const function_result = target.apply(thisArg, argumentsList);
          if (is_constructor) {
            const func_construct = wireUpMethods(proxy_name, function_result, predicate_funcs);
            return func_construct;
          }
          checkResultType(function_result, proxy_name);
          return function_result;
        },
        construct(Target, argumentsList) {
          onArgumentCheck();
          if (call_traps) {
            applyCheckFuncs(proxy_name, undefined, argumentsList, check_functions);
          }
          const class_result = new Target(...argumentsList);
          const class_construct = wireUpMethods(proxy_name, class_result, predicate_funcs);
          return class_construct;
        },
      };
      return new Proxy(target_proxy, proxy_handler);
    }

    const noCheckArgs = (function_to_check) => function_to_check;

    // eslint-disable-next-line no-use-before-define
    const checkArgs = PARAMETER_CHECKING ? realCheckArgs : noCheckArgs;
    initArgumentCheck();

    const public_methods = {
      checkArgs,
      return_types_,
      checkCount_,
      beginChecks_,
      endChecks_,
      errorCount_,
      errorRatio_,
    };

    return public_methods;
  } // ArgumentCheck()

  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /*
  type_czech._shapeErrorMess([, , "boolean"], ["super", "man"])
  >> SC@03 - Index '2' is supposed to be a 'boolean', but is missing : ['super','man']
  */
  function _shapeErrorMess(shallow_array, check_array) {
    consolelog('_shapeErrorMess ENTER', shallow_array, check_array);
    const extra_shapes = Object.entries(shallow_array);
    const [extra_index, extra_type] = extra_shapes[0];
    const check_arr_str = _toStr(check_array);
    const error_3 = `Index '${extra_index}' is supposed to be a '${extra_type}', but is missing : ${check_arr_str}`;
    const error_string = _consoleError(error_3, 'SC@03');
    consolelog('_shapeErrorMess EXIT', error_string);
    return error_string;
  }

  /*
type_czech._shapeArrayInArray([ ["Harley-Davidson", "Electra-Glide"], {cyl:2, stroke:4},     [2000, "red"], {percent:75, max:500}  ],
                                [ ["s"],                              {cyl:"n", stroke:"n"}, ["n", "s"],    {percent:"n", max:"n"} ],
                                  'TYPE-EXTRAS');
''
    type_czech._shapeArrayInArray([[123,456]], ["n"], 'TYPE-EXTRAS');
    ''
type_czech._shapeArrayInArray([[[123,456]]], [["n"]], 'TYPE-EXTRAS');
''
  */
  const _shapeArrayInArray = (check_array, array_type, check_type) => {
    consolelog('_shapeArrayInArray ENTER', check_array, array_type, check_type);
    let error_string;
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const array_index in check_array) {
      error_string = '';
      if (array_type.length === 1) {
        error_string += _shapeContainer(check_array[array_index], array_type, check_type);
      } else {
        error_string += _shapeContainer(check_array[array_index], array_type[array_index], check_type); // harley
      }
    }
    consolelog('_shapeArrayInArray EXIT', error_string);
    return error_string;
  };

  /*

                       q*bert

type_czech._shapeContainer([456,789] , ["number"], 'TYPE-EXTRAS');
''
    type_czech._shapeContainer({r:11}, {r:"number"}, 'TYPE-VERIFY');
    ''
type_czech._shapeContainer([13,14,15], ["number"], 'TYPE-VERIFY');
''
    type_czech._shapeContainer({r:11}, ["number"], 'TYPE-VERIFY');
    SC@36 - Parameter is supposed to be 'array' but is of the wrong type of 'object':{'r':11}
type_czech._shapeContainer([[456,789]] , [["number"]], 'TYPE-EXTRAS')   Q*bert  BAD CALL
''
  */
  function _shapeContainer(check_container, container_shape, check_type) {
    consolelog('_shapeContainer ENTER', check_container, container_shape, check_type);
    let error_string = '';
    const object_type = _aTypeOf(check_container);
    const shape_type = _aTypeOf(container_shape);
    if (container_shape === undefined) {
      error_string = '';
    } else if (object_type !== shape_type) {
      const check_str = _jsonStr(check_container);
      const error_36 = `Parameter is meant to be '${shape_type}' but is`
                   + ` of the wrong type of '${object_type}':${check_str}`;
      error_string = _consoleError(error_36, 'SC@36');
    } else if (shape_type === 'array') {
      if (_aTypeOf(container_shape[0]) === 'array') {
        if (container_shape.length === 1) {
          error_string = _shapeArrayInArray(check_container, container_shape[0], check_type);
        } else {
          error_string = _shapeArrayInArray(check_container, container_shape, check_type);
        }
      }
      error_string = _shapeArrayTypes(check_container, container_shape, check_type);
    } else if (shape_type === 'object') {
      error_string = _shapeCollectionTypes(check_container, container_shape, check_type);
    }
    consolelog('_shapeContainer EXIT', error_string);
    return error_string;
  }

  /*
type_czech._shapeObjectInArray([{r:11}, {r:22}, {r:33}], {r:"n"}, 'TYPE-VERIFY');
''
    type_czech._shapeObjectInArray([{r:11}, {X:22}, {r:33}], {r:"n"}, 'TYPE-VERIFY');
   SC@01 - Index '1' - SC@39 - Extra key in checked_object - (X:'22')
type_czech._shapeObjectInArray([{r:11}, {r:22}, {r:33}], {Y:"n"}, 'TYPE-VERIFY');
SC@01 - Index '0' - SC@39 - Extra key in checked_object - (r:'11')
    type_czech._shapeObjectInArray([{r:11}, "bob", {r:33}], {r:"n"}, 'TYPE-VERIFY');
    SC@01 - Index '1' - SC@36 - Parameter is supposed to be 'object' but is of the wrong type of 'string':'bob'
type_czech._shapeObjectInArray([{r:11}, {r:22}, {r:33}], "n", 'TYPE-VERIFY');
SC@02 - Index '0' is supposed to be a 'n', but is incorrectly a 'object' : [{'r':11},{'r':22},{'r':33}]
    type_czech._shapeObjectInArray([{r:11}, {r:22}, {r:33}], {r:"n"}, 'TYPE-EXTRAS');
    ''
type_czech._shapeObjectInArray([{r:11}, {X:22}, {r:33}], {r:"n"}, 'TYPE-EXTRAS');
SC@01 - Index '1' - SC@46 - The key 'r', which has a type of 'n', is missing in the checked_object
    type_czech._shapeObjectInArray([{r:11}, {r:22}, {r:33}], {Y:"n"}, 'TYPE-EXTRAS');
    SC@01 - Index '0' - SC@46 - The key 'Y', which has a type of 'n', is missing in the checked_object
type_czech._shapeObjectInArray([{r:11}, "bob", {r:33}], {r:"n"}, 'TYPE-EXTRAS');
SC@01 - Index '1' - SC@36 - Parameter is supposed to be 'object' but is of the wrong type of 'string':'bob'
    type_czech._shapeObjectInArray([{r:11}, {r:22}, {r:33}], "n", 'TYPE-EXTRAS');
    SC@02 - Index '0' is supposed to be a 'n', but is incorrectly a 'object' : [{'r':11},{'r':22},{'r':33}]
type_czech._shapeObjectInArray({c:{r:11}, d:{r:22}, e:{r:33}}, "n", 'TYPE-EXTRAS');
SC@02 - Index 'c' is supposed to be a 'n', but is incorrectly a 'object' : {'c':{'r':11},'d':{'r':22},'e':{'r':33}}
*/
  const _shapeObjectInArray = (check_array, object_type, check_type) => {
    consolelog('_shapeObjectInArray ENTER', check_array, object_type, check_type);
    let error_string = '';
    const array_element_type = _aTypeOf(object_type);
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const element_index in check_array) {
      const check_element = check_array[element_index];
      const element_type = _aTypeOf(check_element);
      if (array_element_type === 'object') {
        const an_error = _shapeContainer(check_element, object_type, check_type);
        if (an_error) {
          const error_1 = `Index '${element_index}' - ${an_error}`;
          error_string = _consoleError(error_1, 'SC@01');
          break;
        }
      } else if (object_type !== element_type) {
        const check_str = _toStr(check_array);
        const error_2 = `Index '${element_index}' is presumed to be a '${object_type}',`
                    + ` but is incorrectly a '${element_type}' : ${check_str}`;
        error_string = _consoleError(error_2, 'SC@02');
        break;
      }
    }
    consolelog('_shapeObjectInArray EXIT', error_string);
    return error_string;
  };

  /*
type_czech._arrayOfOneType([1,2,3], 'number', 'TYPE-EXTRAS');
''
    type_czech._arrayOfOneType([1,false,3], 'number', 'TYPE-VERIFY');
    SC@45 - INDEX '1' is supposed to be a 'number', but is incorrectly a 'boolean' : false
type_czech._arrayOfOneType(["as",false,3], 's', 'TYPE-VERIFY');
SC@45 - INDEX '1' is supposed to be a 'string', but is incorrectly a 'boolean' : false
  */
  const _arrayOfOneType = (check_array, array_type, check_type) => {
    consolelog('_arrayOfOneType ENTER', check_array, array_type, check_type);
    let error_string = '';
    const type_of_array = _shortToLongType(array_type);
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const element_index in check_array) {
      const check_element = check_array[element_index];
      const variable_type = _aTypeOf(check_element);
      if (_isCollection(type_of_array)) {
        error_string += _shapeVariable(check_element, type_of_array, check_type);
      } else if (type_of_array !== variable_type) {
        const show_element = _toStr(check_element);
        const error_45 = `INDEX '${element_index}' is asserted to be a '${type_of_array}',`
                     + ` but is fallaciously a '${variable_type}' : ${show_element}`;
        error_string = _consoleError(error_45, 'SC@45');
        break;
      }
    }
    consolelog('_arrayOfOneType EXIT', error_string);
    return error_string;
  };

  /*
type_czech._shapeArrayTypes([ 13, 14, 15 ], ['number'], 'TYPE-EXTRAS');
''

    type_czech._shapeArrayTypes([ 13, 14, 15 ], ['number', 'b', 'd'], 'TYPE-EXTRAS');
    SC@44 - INDEX '1' is supposed to be a 'boolean', but is incorrectly a 'number' : 14

type_czech._shapeArrayTypes(["bob", "newheart", 1 , 2], ["string", "string"], 'TYPE-EXTRAS');
''
type_czech._shapeArrayTypes([], ['number'], 'TYPE-VERIFY');
''
  */
  const _shapeArrayTypes = (check_array, array_shape, check_type) => {
    consolelog('_shapeArrayTypes ENTER', check_array, array_shape, check_type);
    let error_string = '';
    if (array_shape.length === 1 && check_array.length > 1) {
      error_string = _arrayOfOneType(check_array, array_shape[0], check_type);
    } else {
      const shallow_array = Array.from(array_shape);
      const shape_length = shallow_array.length;
      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (const element_index in check_array) {
        const check_element = check_array[element_index];
        const variable_type = _aTypeOf(check_element);
        const container_type = _typeFromArray(shallow_array, element_index);
        if (_isCollection(container_type)) {
          error_string += _shapeContainer(check_array[element_index], container_type, check_type);
        } else {
          const element_type = _shortToLongType(_typeFromArray(shallow_array, element_index));
          if (element_type !== variable_type) {
            if (check_type === TYPE_EXTRAS && element_type === undefined) {
              // ingore extras elements at the end of array if we are checking loosely
            } else if (OP_UNDEF_OK && variable_type === 'null') {
              // ingore nulls if OP_UNDEF_OK
            } else if (OP_UNDEF_OK && variable_type === 'undefined') {
              // ingore undefined if OP_UNDEF_OK
            } else {
              const error_44 = `INDEX '${element_index}' is assumed to be a '${element_type}',`
              + ` but is mistakenly a '${variable_type}'`;
              error_string = _consoleError(error_44, 'SC@44');
              break;
            }
          }
        }
        delete shallow_array[element_index];
      }
      if (shape_length !== 1 && check_array.length < shape_length) {
        error_string = _shapeErrorMess(shallow_array, check_array);
      }
    }
    consolelog('_shapeArrayTypes EXIT', error_string);
    return error_string;
  };

  /*
type_czech._shapePropertyType({r:"n"}, 'r', 11);
''
    type_czech._shapePropertyType({r:"not-real"}, 'r', 11);
    SC@40 - The type 'not-real' is not valid
type_czech._shapePropertyType({r:"n"}, 'r', undefined);
SC@41 - Key 'r' was supposed to be a 'number' but was instead 'undefined'
    type_czech._shapePropertyType({r:"n"}, 'r', null);
    SC@42 - Key 'r' was supposed to be a 'number' but was instead 'null'
type_czech._shapePropertyType({r:"n"}, 'r', 'a-string');
SC@43 - Property 'r' is supposed to be a 'number', but is incorrectly a 'string' : a-string
  */
  const _shapePropertyType = (property_type, property_key, check_variable) => {
    consolelog('_shapePropertyType ENTER', property_type, property_key, check_variable);
    let error_string = '';
    const valid_type = _shortToLongType(property_type[property_key]);
    if (!_isValidType(valid_type)) {
      const error_40 = `The type '${valid_type}' is not valid`;
      error_string = _consoleError(error_40, 'SC@40');
    } else {
      const variable_type = _aTypeOf(check_variable);
      if (valid_type !== variable_type) {
        if (typeof check_variable === 'undefined') {
          const error_41 = `Key '${property_key}' was given to be a '${valid_type}' but was instead 'undefined'`;
          error_string = _consoleError(error_41, 'SC@41');
        } else if (variable_type === 'null') {
          const error_42 = `Key '${property_key}' was determined to be a '${valid_type}' but was instead 'null'`;
          error_string = _consoleError(error_42, 'SC@42');
        } else {
          const check_str = _toStr(check_variable);
          const error_43 = `Property '${property_key}' is indicated to be a '${valid_type}',`
                      + ` but is inaccurately a '${variable_type}' : ${check_str}`;
          error_string = _consoleError(error_43, 'SC@43');
        }
      }
    }
    consolelog('_shapePropertyType EXIT', error_string);
    return error_string;
  };

  /*
type_czech._shapeCollectionTypes({a:123},  {a:"n"}, 'TYPE-VERIFY');
''
    type_czech._shapeCollectionTypes({a:123, b:789},  {a:"n"}, 'TYPE-VERIFY');
    SC@39 - Extra key in checked_object - (b:'789')
type_czech._shapeCollectionTypes({a:[123], b:[789]},  {a:["n"]}, 'TYPE-VERIFY');
''
    type_czech._shapeCollectionTypes({a:[123], b:[789]},  {a:["s"]}, 'TYPE-VERIFY');
    SC@44 - INDEX '0' is supposed to be a 'string', but is incorrectly a 'number' : 123
type_czech._shapeCollectionTypes({a:{ccc:123}, b:{ddd:789}},  {a:{ccc:"n"}, b:{ddd:"n"}}, 'TYPE-VERIFY');
''
  */
  const _shapeCollectionTypes = (check_object, object_shape, check_type) => {
    consolelog('_shapeCollectionTypes ENTER', check_object, object_shape, check_type);
    let error_string = '';
    const valid_shallow = { ...object_shape };
    const check_entries = Object.entries(check_object);
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const [check_key, check_var_or_obj] of check_entries) {
      if (_isCollection(check_var_or_obj)) {
        const correct_shape = object_shape[check_key];
        error_string += _shapeContainer(check_object[check_key], correct_shape, check_type);
        delete valid_shallow[check_key];
      } else if (Object.prototype.hasOwnProperty.call(valid_shallow, check_key)) {
        error_string += _shapePropertyType(valid_shallow, check_key, check_var_or_obj);
        delete valid_shallow[check_key];
      } else if (check_type === TYPE_VERIFY) {
        const error_39 = `Extra key in checked_object - (${check_key}:'${check_var_or_obj}')`;
        error_string = _consoleError(error_39, 'SC@39');
      } else {
        // console.log('NO ERROR shapesCheck');
      }
    }
    error_string += _missingKey(valid_shallow);
    consolelog('_shapeCollectionTypes EXIT', error_string);
    return error_string;
  };

  /*
type_czech._shapeScalar(17 ,"number");
''
    type_czech._shapeScalar(17 ,"string");
    SC@35 - The variable '17', which is a 'number', is not a 'string'
type_czech._shapeScalar({} ,"object");
''
    type_czech._shapeScalar({} ,"capybara");
    SC@33 - The type 'capybara' is not valid
type_czech._shapeScalar(undefined, "n");
SC@34 - The variable 'undefined', is not a 'n'
    type_czech._shapeScalar(null, "n");
    SC@35 - The variable 'null', which is a 'null', is not a 'n'
  */
  function _shapeScalar(check_variable, valid_type) {
    consolelog('_shapeScalar ENTER', check_variable, valid_type);
    let variable_str;
    let error_string = '';
    if (!_isValidType(valid_type)) {
      const error_33 = `The type '${valid_type}' is not valid`;
      error_string = _consoleError(error_33, 'SC@33');
    } else {
      const variable_type = _aTypeOf(check_variable);
      if (variable_type === valid_type) {
        error_string = '';
      } else if (variable_type === 'array') {
        variable_str = '[]';
        error_string = `The variable '[]', which is a 'array', is not a '${valid_type}'`;
      } else if (variable_type === 'object') {
        variable_str = '{}';
        error_string = `The variable '{}', which is a 'object', is not a '${valid_type}'`;
      } else if (variable_type === 'undefined') {
        const error_34 = `The variable '${variable_str}', is not a '${valid_type}'`;
        error_string = _consoleError(error_34, 'SC@34');
      } else {
        variable_str = check_variable;
        error_string = `The variable '${variable_str}', which is a '${variable_type}', is not a '${valid_type}'`;
      }
    }
    consolelog('_shapeScalar EXIT', error_string);
    return error_string;
  }

  /*
type_czech._shapeVariable([456,789] , ["number"], 'TYPE-EXTRAS');
''
    type_czech._shapeVariable([[456,789]] , [["number"]], 'TYPE-EXTRAS'); ;;;;;;;;;;;;;;;;;;;;;  Q*bert
    ''
type_czech._shapeVariable(17 ,"number", 'TYPE-VERIFY');
''
    type_czech._shapeVariable(17 ,"string", 'TYPE-VERIFY');
    SC@35 - The variable '17', which is a 'number', is not a 'string'
type_czech._shapeVariable({a:123, b:456}, {a:"number", b:"string"}, 'TYPE-VERIFY');
SC@43 - Property 'b' is supposed to be a 'string', but is incorrectly a 'number' : 456
    type_czech._shapeVariable(['hello', 'there'] , ["string"], 'TYPE-VERIFY');
    ''
  */
  function _shapeVariable(check_variable, variable_type, check_type) {
    consolelog('_shapeVariable ENTER', check_variable, variable_type, check_type);
    let error_string;
    if (_isCollection(variable_type)) {
      error_string = _shapeContainer(check_variable, variable_type, check_type);
    } else {
      error_string = _shapeScalar(check_variable, variable_type);
    }
    consolelog('_shapeVariable EXIT', error_string);
    return error_string;
  }

  /*
type_czech._shapeCheck([1,2,3], ["n", "n", "n"], 'TYPE-VERIFY');
''
    type_czech._shapeCheck([1,2,3], ["n", "n", "n"], 'TYPE-EXTRAS');
    ''
type_czech._shapeCheck([456, 789], ["number"], 'TYPE-EXTRAS');
''
    type_czech._shapeCheck([[456, 789]], [["number"]], 'TYPE-EXTRAS');
    ''
  */
  function _shapeCheck(check_variable, variable_type, check_type) {
    consolelog('_shapeCheck ENTER', check_variable, variable_type, check_type);
    VALID_TYPES = VALID_SET;
    if (OP_UNDEF_OK) {
      VALID_TYPES.add('null');
      VALID_TYPES.add('undefined');
    }
    const error_string = _shapeVariable(check_variable, variable_type, check_type);
    consolelog('_shapeCheck EXIT', error_string);
    return error_string;
  }

  /*
type_czech._emptyErrorMess(['EMPTY-ER', 'EMPTY-OK'], ['first', 'middle', 'last']);
SC@29 - INDEX '0' is supposed to be a 'EMPTY-ER', but is missing : ['first','middle','last']
   */
  function _emptyErrorMess(shallow_array, check_array) {
    consolelog('_emptyErrorMess ENTER', shallow_array, check_array);
    const extra_shapes = Object.entries(shallow_array);
    const [extra_index, extra_type] = extra_shapes[0];
    const check_str = _jsonStr(check_array);
    const error_29 = `INDEX '${extra_index}' is promised to be a '${extra_type}', but is missing : ${check_str}`;
    const error_string = _consoleError(error_29, 'SC@29');
    consolelog('_emptyErrorMess EXIT', error_string);
    return error_string;
  }

  /*
type_czech._emptyError('EMPTY-ER', 'a-string', 0, ['a-string', 17], 'string', 'EMPTY-VERIFY');
''
    type_czech._emptyError('EMPTY-ER', '', 0, ['', 17], 'string', 'EMPTY-VERIFY');
    SC@30 - INDEX '0' is incorrectly empty : ['',17]
type_czech._emptyError('EMPTY-ER', false, 0, [false, 17], 'boolean', 'EMPTY-VERIFY');
SC@31 - INDEX '0' is a boolean, 'false', not an array/object/string/date, it cannot by empty : [false,17]
    type_czech._emptyError('bad-EMPTY', 'a-string', 0, ['a-string', 17], 'string', 'EMPTY-VERIFY');
    SC@32 - INDEX '0' is wrong type, 'bad-EMPTY', only [EM-ER, EMPTY-ER, EMPTY-OK, EM-OK] allowed  : ['a-string',17]
  */
  function _emptyError(empty_type, check_element, element_index, check_array, variable_type, check_type) {
    consolelog('_emptyError ENTER', empty_type, check_element, element_index, check_array, variable_type, check_type);
    let error_string;
    const check_str = _jsonStr(check_array);
    if (empty_type === 'EMPTY-ER' || empty_type === 'EM-ER') {
      if (_isEmpty(check_element)) {
        const error_30 = `INDEX '${element_index}' is erroneously empty : `;
        error_string = _consoleError(error_30, 'SC@30');
      } else {
        error_string = '';
      }
    } else if (empty_type === 'EMPTY-OK' || empty_type === 'EM-OK') {
      error_string = _emptyContainer(check_array[element_index], empty_type, check_type);
    } else if (_aTypeOf(empty_type) === 'string') {
      const error_32 = `INDEX '${element_index}' is incorrect  type, '${empty_type}', only`
                   + ` [EM-ER, EMPTY-ER, EMPTY-OK, EM-OK] allowed  : ${check_str}`;
      error_string = _consoleError(error_32, 'SC@32');
    } else {
      error_string = _emptyContainer(check_array[element_index], empty_type, check_type);
    }
    consolelog('_emptyError EXIT', error_string);
    return error_string;
  }

  /*
type_czech._emptyArrayInArray([[11], [13], [17]], ["EM-ER"], 'EMPTY-VERIFY');
''
    type_czech._emptyArrayInArray([[11], [0], [17]], ["EM-ER"], 'EMPTY-VERIFY');
    SC@30 - INDEX '0' is incorrectly empty : [0] inside [1]
type_czech._emptyArrayInArray([["a-s", "", "c-s"], ["x-s",  "y-s", "z-s"]],   [["EM-ER", "EM-ER", "EM-ER"]], 'EMPTY-VERIFY');
SC@24 - EMPTY-ER states 'string' must not be empty for the value '' inside [0]
  */
  const _emptyArrayInArray = (check_array, array_type, check_type) => {
    consolelog('_emptyArrayInArray ENTER', check_array, array_type, check_type);
    let error_string = '';
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const array_index in check_array) {
      if (array_type.length === 1) {
        let error_28 = _emptyContainer(check_array[array_index], array_type, check_type);
        if (error_28) {
          error_28 += ` inside [${array_index}]`;
        }
        error_string += error_28;
      } else {
        error_string += _emptyContainer(check_array[array_index], array_type[array_index], check_type);
      }
    }
    consolelog('_emptyArrayInArray EXIT', error_string);
    return error_string;
  };

  /*
type_czech._emptyArrayTypes([17], ['EMPTY-ER'], 'EMPTY-VERIFY');
''
    type_czech._emptyArrayTypes(['first', 'middle', ''], ['EMPTY-ER', 'EMPTY-OK', 'EMPTY-ER'], 'EMPTY-VERIFY');
    SC@30 - INDEX '2' is incorrectly empty : ['first','middle','']
type_czech._emptyArrayTypes(['first', 'middle', 'last'], ['EMPTY-ER', "EMPTY-OK"], 'EMPTY-VERIFY');
SC@29 - INDEX '0' is supposed to be a 'EMPTY-ER', but is missing : ['first','middle','last']
    type_czech._emptyArrayTypes([''], ['EMPTY-OK', 'EMPTY-ER'], 'EMPTY-EXTRAS');
    SC@20 - The parameter array [''] does not have the same number of elements as ['EMPTY-OK','EMPTY-ER'].  Lengths are different 1 !== 2.
type_czech._emptyArrayTypes(['', ''], ['EMPTY-OK', 'EMPTY-ER'], 'EMPTY-EXTRAS');
SC@30 - INDEX '1' is erroneously empty :
    type_czech._emptyArrayTypes(['an-str', 'an-str'], ['EMPTY-OK', 'EMPTY-ER'], 'EMPTY-EXTRAS');
    ''

 type_czech._emptyArrayTypes([],["EMPTY-ER"],"EMPTY-VERIFY");
"The parameter array [] is empty."

  */
  const _emptyArrayTypes = (check_array, array_shape, check_type) => {
    consolelog('_emptyArrayTypes ENTER', check_array, array_shape, check_type);
    let error_string = '';
    const check_length = check_array.length;
    const shape_length = array_shape.length;
    const check_str = _toStr(JSON.stringify(check_array));
    if (check_length === 0) {
      const error_19 = `The parameter array ${check_str} is empty.`;
      error_string = _consoleError(error_19, 'SC@19');
    } else if (check_type !== 'EMPTY-EXTRAS' && shape_length > 1 && shape_length !== check_length) {
      const shape_str = _toStr(JSON.stringify(array_shape));
      const error_20 = `The parameter array ${check_str} does not have the same number of elements as ${shape_str}. `
                     + ` Lengths are different ${check_length} !== ${shape_length}.`;
      error_string = _consoleError(error_20, 'SC@20');
    } else {
      const shallow_array = Array.from(array_shape);
      const shallow_length = shallow_array.length;
      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (const element_index in check_array) {
        const check_element = check_array[element_index];
        const var_type = _aTypeOf(check_element);
        const element_type = _typeFromArray(shallow_array, element_index);
        if (_isCollection(element_type)) {
          error_string += _emptyContainer(check_array[element_index], element_type, check_type);
        } else if (shallow_length !== 1) {
          delete shallow_array[element_index];
        }
        const empty_err = _emptyError(element_type, check_element, element_index, check_array, var_type, check_type);
        if (empty_err) {
          error_string = empty_err;
          break;
        }
      }
      if (shallow_length !== 1 && check_type !== EMPTY_EXTRAS) {
        if (check_array.length !== shallow_length) {
          error_string = _emptyErrorMess(array_shape, check_array);
        }
      }
    }
    consolelog('_emptyArrayTypes EXIT', error_string);
    return error_string;
  };

  /*
type_czech._emptyKeysChecked('EMPTY-ER', 0, 'var-or-key-name');
SC@08 - 'var-or-key-name' is a 'number' which is supposed to be 'EMPTY-ER' but has a value of 0
    type_czech._emptyKeysChecked('EMPTY-ER', true, 'var-or-key-name');
    SC@09 - Cannot be empty 'var-or-key-name' EMPTY-ER' is a true :: boolean
type_czech._emptyKeysChecked('is_-RONG', true, 'var-or-key-name');
SC@10 - bad empty key 'is_-RONG', must be either EMPTY-OK/EM-OK or EMPTY-ER/EM-ER
    type_czech._emptyKeysChecked('EMPTY-ER', {}, 'var-or-key-name');
    SC@08 - 'var-or-key-name' is a 'object' which is supposed to be 'EMPTY-ER' but has a value of {}
  */
  const _emptyKeysChecked = (empty_choice, check_var_or_obj, check_key) => {
    consolelog('_emptyCollectionTypes ENTER', empty_choice, check_var_or_obj, check_key);
    let error_string = '';
    const long_empty = _shortToLongEmpty(empty_choice);
    if (long_empty === EMPTY_ER) {
      const current_type = _aTypeOf(check_var_or_obj);
      const is_empty_able = _canBeEmpty(current_type);
      if (is_empty_able) {
        const is_empty = _isEmpty(check_var_or_obj);
        if (is_empty) {
          const var_str = _jsonStr(check_var_or_obj);
          const error_8 = `'${check_key}' is a '${current_type}' which is reputed `
                      + `to be '${long_empty}' but has a value of ${var_str}`;
          error_string = _consoleError(error_8, 'SC@08');
        }
      } else {
        const error_9 = `Cannot be invalid '${check_key}' ${long_empty}' is a ${check_var_or_obj} :: ${current_type}`;
        error_string = _consoleError(error_9, 'SC@09');
      }
    } else if (long_empty !== EMPTY_OK) {
      const error_10 = `bad invalid key '${_toStr(long_empty)}', must be either EMPTY-OK/EM-OK or EMPTY-ER/EM-ER`;
      error_string = _consoleError(error_10, 'SC@10');
    }
    consolelog('_emptyCollectionTypes EXIT', error_string);
    return error_string;
  };

  /*
type_czech._emptyCollectionTypes({ r: 11 }, { r: 'EM-ER' }, 'EMPTY-VERIFY');
''
    type_czech._emptyCollectionTypes([[]], [['EM-ER']], 'EMPTY-VERIFY');
    SC@26 - Key '0' was supposed to be 'EMPTY-ER' but was instead '[]'
type_czech._emptyCollectionTypes([1,2], ["EM-ER"], 'EMPTY-VERIFY');
SC@27 - Extra key in checked_object - (1:'2')
    type_czech._emptyCollectionTypes([1,2], ["EM-ER"], 'EMPTY-EXTRAS');
    ''
  */
  const _emptyCollectionTypes = (check_object, object_shape, check_type) => {
    consolelog('_emptyCollectionTypes ENTER', check_object, object_shape, check_type);
    let error_string = '';
    const valid_shallow = { ...object_shape };
    const check_entries = Object.entries(check_object);
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const [check_key, check_var_or_obj] of check_entries) {
      const empty_choice = _shortToLongEmpty(valid_shallow[check_key]);
      if (_isCollection(check_var_or_obj)) {
        const correct_empty = object_shape[check_key];
        const long_empty = _shortToLongEmpty(correct_empty);
        if (_isEmpty(check_var_or_obj)) {
          const show_empty = _jsonStr(check_var_or_obj);
          const error_26 = `Key '${check_key}' was understood to be '${long_empty}' but was instead '${show_empty}'`;
          error_string = _consoleError(error_26, 'SC@26');
          break;
        }
        error_string += _emptyContainer(check_object[check_key], long_empty, check_type);
        delete valid_shallow[check_key];
      } else if (Object.prototype.hasOwnProperty.call(valid_shallow, check_key)) {
        const not_sure_err = _emptyKeysChecked(empty_choice, check_var_or_obj, check_key);
        if (not_sure_err) {
          error_string = not_sure_err;
          break;
        }
        delete valid_shallow[check_key];
      } else if (check_type === EMPTY_VERIFY) {
        const error_27 = `Extra key in checked_object - (${check_key}:'${check_var_or_obj}')`;
        error_string = _consoleError(error_27, 'SC@27');
        break;
      } else {
        // console.log('NO ERROR empty-check');
      }
    }
    error_string += _missingKey(valid_shallow);
    consolelog('_emptyCollectionTypes EXIT', error_string);
    return error_string;
  };

  /*
type_czech._emptyContainer(["a-string"], ['EMPTY-ER'], 'EMPTY-VERIFY');
''
    type_czech._emptyContainer([""], ['EMPTY-ER'], 'EMPTY-VERIFY');
    SC@30 - INDEX '0' is incorrectly empty : ['']
type_czech._emptyContainer({zero:0}, ['EMPTY-ER'], 'EMPTY-VERIFY');
SC@30 - INDEX 'zero' is incorrectly empty : {'zero':0}
    type_czech._emptyContainer([''], ['EMPTY-OK', 'EMPTY-ER'], 'EMPTY-EXTRAS');
    SC@20 - The parameter array [\"\"] does not have the same number of elements as [\"EMPTY-OK\",\"EMPTY-ER\"].  Lengths are different 1 !== 2.
  */
  function _emptyContainer(check_container, empty_type, check_type) {
    consolelog('_emptyContainer ENTER', check_container, empty_type, check_type);
    let error_string;
    const shape_type = _aTypeOf(empty_type);
    if (empty_type === undefined) {
      error_string = '';
    } else if (shape_type === 'array') {
      if (_aTypeOf(empty_type[0]) === 'array') {
        if (empty_type.length === 1) {
          error_string = _emptyArrayInArray(check_container, empty_type[0], check_type);
        }
        error_string = _emptyArrayInArray(check_container, empty_type, check_type);
      }
      error_string = _emptyArrayTypes(check_container, empty_type, check_type);
    } else if (shape_type === 'object') {
      error_string = _emptyCollectionTypes(check_container, empty_type, check_type);
    } else {
      error_string = _emptyScalar(check_container, empty_type);
    }
    consolelog('_emptyContainer EXIT', error_string);
    return error_string;
  }

  /*
type_czech._emptyScalar(0, 'EMPTY-ER');
SC@24 - EMPTY-ER states 'number' must not be empty for the value '0'
    type_czech._emptyScalar(true, 'EMPTY-ER');
    SC@25 - A 'boolean' cannot be empty, so the state of 'EMPTY-ER' is illegal for the value 'true'
type_czech._emptyScalar(true, 'an-ERROR');
SC@11 - Must 'EMPTY-OK' or 'EMPTY-ER' not 'an-ERROR'
  */
  function _emptyScalar(check_variable, empty_type) {
    consolelog('_emptyScalar ENTER', check_variable, empty_type);
    let error_string = '';
    const empty_long = _shortToLongEmpty(empty_type);
    const variable_type = _aTypeOf(check_variable);
    if (empty_long === EMPTY_ER) {
      const current_type = _aTypeOf(check_variable);
      const is_empty_able = _canBeEmpty(current_type);
      if (is_empty_able) {
        const is_empty = _isEmpty(check_variable);
        if (is_empty) {
          const error_24 = `${empty_long} states '${variable_type}' must not `
                       + `be empty for the value '${check_variable}'`;
          error_string = _consoleError(error_24, 'SC@24');
        }
      } else {
        const error_25 = `A '${variable_type}' cannot be empty, so the state`
                   + ` of '${empty_long}' is illegal for the value '${check_variable}'`;
        error_string = _consoleError(error_25, 'SC@25');
      }
    } else if (empty_long !== EMPTY_OK) {
      const error_11 = `Must 'EMPTY-OK' or 'EMPTY-ER' not '${empty_long}'`;
      error_string = _consoleError(error_11, 'SC@11');
    }
    consolelog('_emptyScalar EXIT', error_string);
    return error_string;
  }
  /*
type_czech._emptyVariable(17, 'EMPTY-ER', 'EMPTY-VERIFY');
''
    type_czech._emptyVariable(0, 'EMPTY-ER', 'EMPTY-VERIFY');
    SC@24 - EMPTY-ER states 'number' must not be empty for the value '0'
type_czech._emptyVariable(["a-string"], ['EMPTY-ER'], 'EMPTY-VERIFY');
''
    type_czech._emptyVariable([""], ['EMPTY-ER'], 'EMPTY-VERIFY');
    SC@30 - INDEX '0' is incorrectly empty : ['']
type_czech._emptyVariable({zero:0}, ['EMPTY-ER'], 'EMPTY-VERIFY');
SC@30 - INDEX 'zero' is incorrectly empty : {'zero':0}
  */
  function _emptyVariable(check_variable, variable_type, check_type) {
    consolelog('_emptyVariable ENTER', check_variable, variable_type, check_type);
    let error_string;
    if (_isCollection(variable_type)) {
      error_string = _emptyContainer(check_variable, variable_type, check_type);
    } else {
      error_string = _emptyScalar(check_variable, variable_type);
    }
    consolelog('_emptyVariable EXIT', error_string);
    return error_string;
  }

  /*
type_czech._emptyCheck([12, false, 'a string'], ['EMPTY-OK'], 'EMPTY-VERIFY');
SC@12 - Completely pointless as checking with ['EM-OK'] or ['EMPTY-OK'] matches everything
  */
  function _emptyCheck(check_variable, variable_type, check_type) {
    consolelog('_emptyCheck ENTER', check_variable, variable_type, check_type);
    let error_string;
    if (variable_type.length === 1 && (variable_type[0] === EMPTY_OK || variable_type[0] === 'EM-OK')) {
      const error_12 = "Completely pointless as checking with ['EM-OK'] or ['EMPTY-OK'] matches everything";
      error_string = _consoleError(error_12, 'SC@12');
    } else {
      error_string = _emptyVariable(check_variable, variable_type, check_type);
    }
    consolelog('_emptyCheck EXIT', error_string);
    return error_string;
  }

  /*
type_czech._oneOfEmptyError( [['EM-ER','EM-ER'],['EM-ER','EM-OK']], [12, 0, 'not-checked']);
SC@23 - No empty entries in the list match the 'array'
  */
  function _oneOfEmptyError(check_variable) {
    consolelog('_oneOfEmptyError ENTER', check_variable);
    const check_type = _aTypeOf(check_variable);
    const error_23 = `No empty entries in the list match the '${check_type}'`;
    const error_string = _consoleError(error_23, 'SC@23');
    consolelog('_oneOfEmptyError EXIT', error_string);
    return error_string;
  }

  /*
type_czech._doOneOfEmpty('EMPTY-EXTRAS', [[12, 0, 'not-checked'], [['EM-ER','EM-ER'],['EM-ER','EM-OK']]]); ////// OK AS [12,0] matches ['EM-ER','EM-OK']
''
    type_czech._doOneOfEmpty('EMPTY-VERIFY', [[12, 0, 'not-checked'], [['EM-ER','EM-ER'],['EM-ER','EM-OK']]]);
    SC@23 - The variable
    ~~~~~'[12,0,'not-checked']'
    wrong             which is a 'array', does not match any in the list
    ~~~~~['EM-ER','EM-ER'],
    ~~~~~['EM-ER','EM-OK']
  */
  function _doOneOfEmpty(check_type, type_parameters) {
    consolelog('_doOneOfEmpty ENTER', check_type, type_parameters);
    const [check_variable, var_types] = type_parameters;
    let error_string = '';
    let possible_error = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const var_type of var_types) {
      possible_error = _emptyCheck(check_variable, var_type, check_type);
      if (possible_error === '') {
        consolelog('*** MATCH OneOfEmpty', check_variable);
        consolelog('*** MATCH OneOfEmpty', var_type);
        break;
      }
    }
    if (possible_error !== '') {
      error_string = _oneOfEmptyError(check_variable);
    }
    consolelog('_doOneOfEmpty EXIT', error_string);
    return error_string;
  }

  /*
type_czech._oneOfShapeError(["string", "number"], false);
SC@22 - No type shapes in the list match the 'array'
  */
  function _oneOfShapeError(check_variable) {
    consolelog('_oneOfShapeError ENTER', check_variable);
    const check_type = _aTypeOf(check_variable);
    const error_22 = `No type shapes in the list match the '${check_type}'`;
    const error_string = _consoleError(error_22, 'SC@22');
    consolelog('_oneOfShapeError EXIT', error_string);
    return error_string;
  }

  /*
type_czech._doOneOfShape("TYPE-VERIFY", [  {"X":"an-str","Y":1234},   [{"X":"s","Y":"s"},{"X":"s","Y":"n"}]  ]);
''
    type_czech._doOneOfShape("TYPE-VERIFY", [  {"X":"an-str","Y":1234},   [{"X":"s","Y":"s"},{"X":"s","Y":"d"}]  ]);
    SC@22 - The variable
    ~~~~~{'X':'an-str','Y':1234}
    wrong                  , which is a 'object', is not in the list
    ~~~~~{'X':'s','Y':'s'},
    ~~~~~{'X':'s','Y':'d'}
  */
  function _doOneOfShape(check_type, type_parameters) {
    consolelog('_doOneOfShape ENTER', check_type, type_parameters);
    const [check_variable, var_types_shapes] = type_parameters;
    // console.log('var_shape_types', var_types_shapes)
    let error_string = '';
    let possible_error = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const var_type of var_types_shapes) {
      possible_error = _shapeCheck(check_variable, var_type, check_type);
      if (possible_error === '') {
        consolelog('*** MATCH OneOfShape', check_variable);
        consolelog('*** MATCH OneOfShape', var_type);
        break;
      }
    }
    if (possible_error !== '') {
      error_string = _oneOfShapeError(check_variable);
    }
    consolelog('_doOneOfShape EXIT', error_string);
    return error_string;
  }

  /*
type_czech._specParameters(["UNDEF-OK", "DEBUG-CONSOLE-TRACE", "what" ]);
SC@21 - Not THROW-EXCEPTIONS/LOG-ERRORS/UNDEF-OK/DEBUG-CONSOLE-TRACE, unknown argument : 'what'
  */
  function _specParameters(the_options) {
    consolelog('_specParameters ENTER', the_options);
    // eslint-disable-next-line no-restricted-syntax
    for (const an_argument of the_options) {
      if (typeof an_argument === 'object') {
        OP_CHECK_EVENTS = an_argument;
      } else if (an_argument === 'UNDEF-OK') {
        OP_UNDEF_OK = 'UNDEF-OK';
      } else if (an_argument === 'DEBUG-CONSOLE-TRACE') {
        OP_DEBUG_CONSOLE_TRACE = 'DEBUG-CONSOLE-TRACE';
      } else if (an_argument === 'THROW-EXCEPTIONS') {
        OP_THROW_EXCEPTIONS = 'THROW-EXCEPTIONS';
      } else if (an_argument === 'LOG-ERRORS') {
        OP_LOG_ERRORS = 'LOG-ERRORS';
      } else if (an_argument === 'CONSOLE-COUNT') {
        OP_CONSOLE_COUNT = 'CONSOLE-COUNT';
      } else if (an_argument === 'NO-CHECKING') {
        // this is the same as '', but more informative
      } else if (an_argument === 'DEBUG-ERROR-TAGS') {
        OP_DEBUG_ERROR_TAGS = 'DEBUG-ERROR-TAGS';
      } else if (an_argument !== '') {
        const arg_str = _jsonStr(an_argument);
        let error_21 = `Not THROW-EXCEPTIONS/LOG-ERRORS/UNDEF-OK/DEBUG-CONSOLE-TRACE/NO-CHECKING, unknown : ${arg_str}`;
        error_21 = _consoleError(error_21, 'SC@21');
        throw error_21;
      }
    }
    PARAMETER_CHECKING = !!(OP_THROW_EXCEPTIONS || OP_LOG_ERRORS);
  }

  /*
type_czech._twoArrays([ 'not-array', ['an-array'] ], 'fail-1');
SC@49 - TypeCzech.fail-1() called with '[]' versus '![]'. Comparing '"string"' with '["an-array"]'.

type_czech._twoArrays([ 'not-object', {an_object:'Boaty-McBoatFace'} ], 'fail-2');
SC@07 - TypeCzech.fail-2() called with '{}' against '!{}'. Comparing '"string"' with '{"an_object":"Boaty-McBoatFace"}'.

type_czech._twoArrays([12, 'var-type-as-string'], 'ok-1');
''

type_czech._twoArrays([['a-string'], 'string'], 'methodName');
SC@58 - TypeCzech.methodName() comparing actual [] parameter, with a value of ['a-string'], against the expected shape of "string". They should be the same type; both []s, or both "string"s.

type_czech._twoArrays([       'a-string', ['string']            ], 'methodName');
SC@49 - TypeCzech.methodName() comparing actual 'string' parameter, with a value of 'a-string', against the expected shape of ["string"].They should be the same type, both arrays, or both 'string'.
  */
  function _twoArrays(list_of_2, method_name) {
    consolelog('_twoArrays ENTER', list_of_2, method_name);
    let error_string = '';
    if (list_of_2.length !== 2) {
      const error_14 = `TypeCzech.${method_name}() has 2 arguments not ${list_of_2.length}`;
      error_string = _consoleError(error_14, 'SC@14');
    } else {
      const [parameters_list, shape_list] = list_of_2;
      const parameter_type = _aTypeOf(parameters_list);
      const shape_type = _aTypeOf(shape_list);
      const parameter_str = JSON.stringify(parameter_type);
      const shape_str = JSON.stringify(shape_list);
      if (parameter_type === 'array' && shape_type !== 'array') {
        const error_58 = `TypeCzech.${method_name}() comparing actual [] parameter, with a`
        + ` value of ['${parameters_list}'], against the expected shape of ${shape_str}.`
        + ` They should be the same type; both []s, or both ${shape_str}s.`;
        error_string = _consoleError(error_58, 'SC@58');
      } else if (shape_type === 'array' && parameter_type !== 'array') {
        const error_49 = `TypeCzech.${method_name}() comparing actual '${parameter_type}' parameter, with a`
                    + ` value of '${parameters_list}', opposed to the expected shape of ${shape_str}.`
                    + ` They should be the same type; both []s, or both '${parameter_type}'s.`;
        error_string = _consoleError(error_49, 'SC@49');
      } else if (shape_type === 'array') {
        // no errors
      } else if (shape_type === 'object') {
        if (parameter_type !== 'object') {
          const error_7 = `TypeCzech.${method_name}() called with '{}' against '!{}'.`
                      + ` Contrasting '${parameter_str}' with '${shape_str}'.`;
          error_string = _consoleError(error_7, 'SC@07');
        }
      } else if (shape_type !== 'string') {
        const error_50 = `TypeCzech.${method_name}() called with 'a-variable' and 'not-a-variable type'.`
                    + ` Matching '${parameter_str}' with '${shape_str}'.`
                    + ` Instead try TypeCzech.${method_name}(12, 'number')`;
        error_string = _consoleError(error_50, 'SC@50');
      }
    }
    consolelog('_twoArrays EXIT', error_string);
    return error_string;
  }

  /*
type_czech._oneOfChecks([1], 'fail-99');
SC@51 - TypeCzech.fail-99() needs 2 arguments, not 1
    type_czech._oneOfChecks([1, 2], 'fail-98');
    SC@15 - TypeCzech.fail-98() called with a second parameter as a non-array shape of 2
type_czech._oneOfChecks([1, [2]], 'fail-97');
SC@61 - TypeCzech.fail-97() needs at least 2 choices for an either, not 1 [2] in the second parameter
    type_czech._oneOfChecks([1, [2, 3]], 'pass-96');
    ''
  */
  function _oneOfChecks(parameters_shapes, method_name) {
    consolelog('_oneOfChecks ENTER', parameters_shapes, method_name);
    let error_string = '';
    if (parameters_shapes.length !== 2) {
      const error_51 = `TypeCzech.${method_name}() needs 2 arguments, not ${parameters_shapes.length}`;
      error_string = _consoleError(error_51, 'SC@51');
    } else {
      const shapes_lists = parameters_shapes[1];
      const exact_str = JSON.stringify(shapes_lists);
      if (_aTypeOf(shapes_lists) !== 'array') {
        const error_15 = `TypeCzech.${method_name}() called with a second parameter`
                       + ` as a non-array shape of ${exact_str}`;
        error_string = _consoleError(error_15, 'SC@15');
      }
    }
    consolelog('_oneOfChecks EXIT', error_string);
    return error_string;
  }

  /*

*/
  function _getArguments(arguments_obj) {
    consolelog('_getArguments ENTER', arguments_obj);
    let arguments_params;
    const odd_arguments = arguments_obj === null
                       || arguments_obj === undefined
                       || typeof arguments_obj.length === 'undefined'
                       || typeof arguments_obj === 'string';
    if (odd_arguments) {
      arguments_params = arguments_obj;
    } else if (arguments_obj.length === 1) {
      [arguments_params] = arguments_obj;
    } else {
      arguments_params = [...arguments_obj];
    }
    consolelog('_getArguments EXIT', arguments_params);
    return arguments_params;
  }

  /*
type_czech.emptyVerify([12, 'a-string', false], ['EMPTY-ER', 'EMPTY-ER', 'EMPTY-ER']);
SC@31 - INDEX '2' is a boolean, 'false', not an array/object/string/date, it cannot by empty : [12,'a-string',false]
    type_czech.emptyVerify([12, [], 'a-string'], ['EMPTY-ER', 'EMPTY-ER', 'EMPTY-ER']);
    SC@30 - INDEX '1' is erroneously empty : [12,[],'a-string']
type_czech.emptyVerify([12, [], 'a-string'], ['EMPTY-ER', 'EMPTY-OK', 'EMPTY-ER']);
''
    type_czech.emptyVerify([], ['EMPTY-ER']);
    SC@16 - Array contains no elements
type_czech.emptyVerify({}, 'EMPTY-OK');
''
    type_czech.emptyVerify([], ['EMPTY-OK']);
    SC@12 - Completely pointless as checking with ['EM-OK'] or ['EMPTY-OK'] matches everything
  */

  function emptyVerify(arguments_obj, shape_list) {
    consolelog('emptyVerify ENTER', arguments_obj, shape_list);
    const arguments_array = _getArguments(arguments_obj);
    consolelog('emptyVerify START', arguments_array, shape_list);
    _twoArrays([arguments_array, shape_list], 'emptyVerify');
    const invalid_error = _emptyCheck(arguments_array, shape_list, EMPTY_VERIFY);
    const error_string = invalid_error ? ['emptyVerify(arguments, expected_emptys)', invalid_error, shape_list] : '';
    consolelog('emptyVerify EXIT', arguments_obj, shape_list);
    return error_string;
  }
  /*

  problem is that the first parameter is always the arguments of a function, []

type_czech.typeVerify({}, 'an-object');
SC@33 - The type 'an-object' is not valid
    type_czech.typeVerify({cyl:4, fuel:"gasoline", snuck:"extra"}, {cyl:"number", fuel:"string"});
    SC@39 - Extra key in checked_object - (snuck:'extra')
type_czech.typeVerify({cyl:4, fuel:"gasoline"}, {cyl:"number", fuel:"string", snuck:"boolean"});
SC@46 - The key 'snuck', which has a type of 'boolean', is missing in the checked_object
    type_czech.typeVerify({cyl:4, fuel:"gasoline"}, {cyl:"number", fuel:"string"});
    ''
type_czech.typeVerify([1,2,3], ["n", "n"]);
SC@44 - INDEX '2' is assumed to be a 'undefined', but is mistakenly a 'number' : 3
    type_czech.typeVerify([1,2,3], ["n", "n", "n"]);
    ''
type_czech.typeVerify([1,2], ["n", "n", "n"]);
SC@03 - Index '2' is supposed to be a 'n', but is missing : [1,2]
    type_czech.typeVerify([[['a']]], [["n"]]);
    SC@44 - INDEX '0' is assumed to be a 'number', but is mistakenly a 'array' : ['a']
type_czech.typeVerify([], 'array');
''
    type_czech.typeVerify({}, 'object');
    ''
q*bert

    type_czech.typeVerify('a-string', ['string']);
    ''
  */
  function typeVerify(arguments_obj, shape_list) {
    consolelog('typeVerify ENTER', arguments_obj, shape_list);
    const arguments_array = _getArguments(arguments_obj);
    consolelog('typeVerify START', arguments_array, shape_list);
    _twoArrays([arguments_array, shape_list], 'typeVerify');
    const type_error = _shapeCheck(arguments_array, shape_list, TYPE_VERIFY);
    const error_string = type_error ? ['typeVerify(arguments, expected_types)', type_error, shape_list] : '';
    consolelog('typeVerify EXIT', error_string);
    return error_string;
  }

  /*
type_czech.emptyExtras([12, 'a-string', false], ['EMPTY-ER', 'EMPTY-ER']);
''
  */
  function emptyExtras(arguments_obj, shape_list) {
    consolelog('emptyExtras ENTER', arguments_obj, shape_list);
    const arguments_array = _getArguments(arguments_obj);
    consolelog('emptyExtras START', arguments_array, shape_list);
    _twoArrays([arguments_array, shape_list], 'emptyExtras');
    const invalid_error = _emptyCheck(arguments_array, shape_list, EMPTY_EXTRAS);
    const error_string = invalid_error ? ['emptyExtras(arguments, expected_emptys)', invalid_error, shape_list] : '';
    consolelog('emptyExtras ENTER', error_string);
    return error_string;
  }

  /*
type_czech.typeExtras({}, 'object');
''
    type_czech.typeExtras({cyl:4, fuel:"gasoline", snuck:"extra"}, {cyl:"number", fuel:"string"});
    ''
type_czech.typeExtras({cyl:4, fuel:"gasoline"}, {cyl:"number", fuel:"string", snuck:"boolean"});
    SC@46 - The key 'snuck', which has a type of 'boolean', is missing in the checked_object
type_czech.typeExtras({cyl:4, fuel:"gasoline"}, {cyl:"number", fuel:"string"});
''
    type_czech.typeExtras([1,2,3], ["n", "n"]);
    ''
type_czech.typeExtras([1,2,3], ["n", "n", "n"]);
''
    type_czech.typeExtras([1,2], ["n", "n", "n"]);
    SC@03 - Index '2' is supposed to be a 'n', but is missing : [1,2]
  */
  function typeExtras(arguments_obj, shape_list) {
    consolelog('typeExtras ENTER', arguments_obj, shape_list);
    const arguments_array = _getArguments(arguments_obj);
    _twoArrays([arguments_array, shape_list], 'typeExtras');
    consolelog('typeExtras START', arguments_array, shape_list);
    const type_error = _shapeCheck(arguments_array, shape_list, TYPE_EXTRAS);
    const error_string = type_error ? ['typeExtras(arguments, expected_types)', type_error, shape_list] : '';
    consolelog('typeExtras EXIT', error_string);
    return error_string;
  }

  /*
type_czech.emptyOneOf([12, false, 'a string'], 'EMPTY-OK');
SC@15 - TypeCzech.emptyOneOf() called with a second parameter as a non-array shape of "EMPTY-OK"
    type_czech.emptyOneOf([12, false, 'a string'], ['EMPTY-OK']);
    SC@61 - TypeCzech.emptyOneOf() needs at least 2 choices for an either, not 1 ["EMPTY-OK"] in the second parameter
type_czech.emptyOneOf([12, 0, 'is-error'], [['EM-ER','EM-ER'],['EM-ER','EM-OK']]);
SC@23 - The variable \n~~~~~'[12,0,'is-error']'\nwhich is a 'array', does not match any in the list \n~~~~~['EM-ER','EM-ER'], \n~~~~~['EM-ER','EM-OK']
    type_czech.emptyOneOf([12, 0], [['EM-ER','EM-ER'],['EM-ER','EM-OK']]);
    ''
type_czech.emptyOneOf( {a:0, b:12}, [ {a:'EM-ER', b:'EM-ER'}, {a:'EM-ER', b:'EM-OK'}]);
SC@23 - The variable \n~~~~~'{'a':0,'b':12}'\nwhich is a 'object', does not match any in the list \n~~~~~{'a':'EM-ER','b':'EM-ER'}, \n~~~~~{'a':'EM-ER','b':'EM-OK'}
    type_czech.emptyOneOf( {a:0, b:12});
    SC@51 - TypeCzech.emptyOneOf() needs 2 arguments, not 1
  */

  function emptyOneOf(arguments_obj, shapes_lists) {
    consolelog('emptyOneOf ENTER', arguments_obj, shapes_lists);
    const arguments_array = _getArguments(arguments_obj);
    consolelog('emptyOneOf START', arguments_array, shapes_lists);
    let error_string = _oneOfChecks([arguments_array, shapes_lists], 'emptyOneOf');
    if (error_string === '') {
      const exact_error = _doOneOfEmpty(EMPTY_VERIFY, [arguments_array, shapes_lists]);
      error_string = exact_error ? ['emptyOneOf(arguments, expected_emptys)', exact_error, shapes_lists] : '';
    }
    consolelog('emptyOneOf EXIT', error_string);
    return error_string;
  }

  /*
type_czech.typeOneOf(17, [ "string", "number" ]);
''
    type_czech.typeOneOf({a:17, b:false}, [{a:"number"}, {a:"string"}]);
    SC@22 - The variable \n~~~~~{'a':17,'b':false}\n, which is a 'object', is not in the list \n~~~~~{'a':'number'}, \n~~~~~{'a':'string'}
  */
  function typeOneOf(arguments_obj, possible_shapes) {
    consolelog('typeOneOf ENTER', arguments_obj, possible_shapes);
    const arguments_array = _getArguments(arguments_obj);
    consolelog('typeOneOf START', arguments_array, possible_shapes);
    let error_string = _oneOfChecks([arguments_array, possible_shapes], 'typeOneOf');
    if (error_string === '') {
      const exact_error = _doOneOfShape(TYPE_VERIFY, [arguments_array, possible_shapes]);
      error_string = exact_error ? ['typeOneOf(arguments, expected_types)', exact_error, possible_shapes] : '';
    }
    consolelog('typeOneOf ENTER', error_string);
    return error_string;
  }

  /*
type_czech.emptyOneOfExtras([12, false, 'a string'], 'EMPTY-OK');
SC@15 - TypeCzech.emptyOneOfExtras() called with a second parameter as a non-array shape of "EMPTY-OK"

    type_czech.emptyOneOfExtras([12, false, 'a string'], ['EMPTY-OK']);
    SC@61 - TypeCzech.emptyOneOfExtras() needs at least 2 choices for an either, not 1 ["EMPTY-OK"] in the second parameter

    type_czech.emptyOneOfExtras([12, 0, 'not-checked'], [['EM-ER','EM-ER'],['EM-ER','EM-OK']]);
''     // OK AS [12,0] matches ['EM-ER','EM-OK']
  */

  function emptyOneOfExtras(arguments_obj, shapes_lists) {
    consolelog('emptyOneOfExtras ENTER', arguments_obj, shapes_lists);
    const arguments_array = _getArguments(arguments_obj);
    consolelog('emptyOneOfExtras START', arguments_array, shapes_lists);
    let error_string = _oneOfChecks([arguments_array, shapes_lists], 'emptyOneOfExtras');
    if (error_string === '') {
      const loose_error = _doOneOfEmpty(EMPTY_EXTRAS, [arguments_array, shapes_lists]);
      error_string = loose_error ? ['emptyOneOfExtras(arguments, expected_emptys)', loose_error, shapes_lists] : '';
    }
    consolelog('emptyOneOfExtras EXIT', error_string);
    return error_string;
  }
  /*
type_czech.typeOneOfExtras(17, [ "string", "number" ]);
''
    type_czech.typeOneOfExtras({a:17, b:false}, [{a:"number"}, {a:"string"}]);
    ''
type_czech.typeOneOfExtras(17, [ "string", "boolean" ]);

  */
  function typeOneOfExtras(arguments_obj, possible_shapes) {
    consolelog('typeOneOfExtras ENTER', arguments_obj, possible_shapes);
    const arguments_array = _getArguments(arguments_obj);
    consolelog('typeOneOfExtras START', arguments_array, possible_shapes);
    let error_string = _oneOfChecks([arguments_array, possible_shapes], 'typeOneOfExtras');
    if (error_string === '') {
      const loose_error = _doOneOfShape(TYPE_EXTRAS, [arguments_array, possible_shapes]);
      error_string = loose_error ? ['typeOneOfExtras(arguments, expected_types)', loose_error, possible_shapes] : '';
    }
    consolelog('typeOneOfExtras EXIT', error_string);
    return error_string;
  }

  /*
  type_czech._isArguments({0:0, 1:1, length:0, callee:'callee'});
''

type_czech.hasInterface({my_method: x=> x*2, my_prop:'abc'}, {my_method:'function', my_prop:'string'});
''
type_czech.hasInterface({my_method: x=> x*2, my_prop:'abc'}, {my_method:'function', my_prop:'number'});
''

type_czech.hasInterface({0:0, 1:1, length:0, callee:'callee'}, {my_method:'function', my_prop:'number'});
"TypeCzech.hasInterface() incorrectly called with a first parameter as 'arguments'.  The first parameter should look something like {my-func:a_func, my-int:12} instead."

type_czech.hasInterface(97, 98);
"TypeCzech.hasInterface() incorrectly called, both parameters should be objects.  The first data parameter should look something like {my-func:a_func, my-int:12} instead. The second interface parameter should look something like {my-func:'function', my-int:'number'} instead."
*/
  function hasInterface(data_object, shape_list) {
    consolelog('hasInterface ENTER', data_object, shape_list);
    let error_string;
    if (_isArguments(data_object)) {
      const error_13 = 'TypeCzech.hasInterface() incorrectly called with a first parameter as "arguments".'
                     + ' The first parameter should look something like {my-func:a_func, my-int:12} instead.';
      error_string = _consoleError(error_13, 'SC@13');
    } else if (_aTypeOf(data_object) === 'object' && _aTypeOf(shape_list) === 'object') {
      _twoArrays([data_object, shape_list], 'hasInterface');
      const type_error = _shapeCheck(data_object, shape_list, TYPE_EXTRAS);
      error_string = type_error ? ['hasInterface(arguments, expected_types)', type_error, shape_list] : '';
    } else {
      const error_17 = 'TypeCzech.hasInterface() incorrectly called, both parameters should be objects.'
      + ' The first data parameter should look something like {my-func:a_func, my-int:12} instead.'
      + ' The second interface parameter should look something like {my-func:"function", my-int:"number"} instead.';
      error_string = _consoleError(error_17, 'SC@17');
    }
    consolelog('hasInterface EXIT', error_string);
    return error_string;
  }

  function setReturnType(proxy_name, return_type) {
    const num_args = arguments.length;
    if (num_args !== 2) {
      let error_18 = `TypeCzech.returnType('${proxy_name}', '${return_type}') needs 2 arguments, not ${num_args}`;
      error_18 = _consoleError(error_18, 'SC@18');
      throw error_18;
    } else if (typeof proxy_name !== 'string') {
      let error_59 = `TypeCzech.returnType('${proxy_name}', '${return_type}') first argument, the checked function's`
                   + ' name, must be a string';
      error_59 = _consoleError(error_59, 'SC@59');
      throw error_59;
    } else if (typeof return_type === 'string' && VALID_SET.has(return_type)) {
      argument_check.return_types_.set(proxy_name, return_type);
    } else {
      const valid_types = [...VALID_SET].join();
      let error_60 = `TypeCzech.returnType('${proxy_name}', '${return_type}') second argument, the checked function's`
                   + ` return type, must be one of [${valid_types}]`;
      error_60 = _consoleError(error_60, 'SC@60');
      throw error_60;
    }
  }

  function precedeCheck(user_function, checking_function) {
    return argument_check.checkArgs(user_function, checking_function);
  }

  function checkCount() {
    return argument_check.checkCount_();
  }
  function beginChecks() {
    return argument_check.beginChecks_();
  }
  function endChecks() {
    return argument_check.endChecks_();
  }
  function errorCount() {
    return argument_check.errorCount_();
  }
  function errorRatio() {
    return argument_check.errorRatio_();
  }
  _specParameters(the_arguments);

  if (OP_CHECK_EVENTS) {
    argument_check = ArgumentCheck(OP_CHECK_EVENTS);
  } else {
    argument_check = ArgumentCheck(false);
  }
  return {
    _arrayOfOneType,
    _aTypeOf,
    _canBeEmpty,
    _coloredConsole,
    _consoleError,
    _doOneOfEmpty,
    _doOneOfShape,
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
    _isArguments,
    _isCollection,
    _isEmpty,
    _isValidType,
    _jsonStr,
    _missingKey,
    _oneOfChecks,
    _oneOfEmptyError,
    _oneOfShapeError,
    _shapeArrayInArray,
    _shapeArrayTypes,
    _shapeCheck,
    _shapeCollectionTypes,
    _shapeContainer,
    _shapeErrorMess,
    _shapeObjectInArray,
    _shapePropertyType,
    _shapeScalar,
    _shapeVariable,
    _shortToLongEmpty,
    _shortToLongType,
    _specParameters,
    _toStr,
    _twoArrays,
    _typeFromArray,
    TYPE_CZECH_EVENTS, // arg_check = type_czech.ArgumentCheck(type_czech.TYPE_CZECH_EVENTS)
    REPLACE_NL_TAB_TAB,
    MATCH_NL_TAB_TAB,
    CONSOLE_LOG_NEWLINE,
    ArgumentCheck,
    // typeVerify(actual_arguments, expected_type)
    // typeExtras(actual_arguments, expected_type)
    // typeOneOf(actual_arguments, possible_types)
    // typeOneOfExtras(actual_arguments, possible_types)
    typeVerify, // works with 'UNDEF-OK'
    typeExtras, // works with 'UNDEF-OK'
    typeOneOf, // works with 'UNDEF-OK'
    typeOneOfExtras, // works with 'UNDEF-OK'

    setReturnType,
    hasInterface,
    // emptyVerify(actual_arguments, expected_empty)
    // emptyExtras(actual_arguments, expected_empty)
    // emptyOneOf(actual_arguments, expected_empty)
    // emptyOneOfExtras(actual_arguments, expected_empty)
    emptyVerify,
    emptyExtras,
    emptyOneOf,
    emptyOneOfExtras,
    // //////////////////////////
    precedeCheck,
    checkCount,
    beginChecks,
    endChecks,
    errorCount,
    errorRatio,
  };
} // TypeCzech()
