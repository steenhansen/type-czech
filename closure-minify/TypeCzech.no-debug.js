/* eslint-disable block-scoped-var */
const VERS_NUM = 'v1.0 21-11-11';

let the_exports;
if (typeof exports === 'undefined') {
  the_exports = window; // for browser
} else {
  the_exports = exports; // for Node.js
}

// TYPE_CZECH_current_test_number is set by every test, so can find out which test is crashing in a certain function
// eslint-disable-next-line block-scoped-var, no-use-before-define
if (typeof TYPE_CZECH_current_test_number === 'undefined') {
  // eslint-disable-next-line no-var, vars-on-top
  var TYPE_CZECH_current_test_number = 'not-in-test-yet'; // global variable assigned in the test
}

// eslint-disable-next-line func-names
(function (export_tech_czech) { // TypeCzech object, browser or Node.Js
  // eslint-disable-next-line func-names,no-param-reassign
  export_tech_czech.TypeCzech = function () {
    if (arguments.length > 0) {
      // eslint-disable-next-line no-use-before-define, prefer-rest-params, no-param-reassign
      export_tech_czech.type_czech = _TypeCzech(...arguments);
    } else if (typeof export_tech_czech.TYPE_CZECH_COMMANDS !== 'undefined'
        && export_tech_czech.TYPE_CZECH_COMMANDS.length > 0) {
      // eslint-disable-next-line no-use-before-define, no-param-reassign
      export_tech_czech.type_czech = _TypeCzech(export_tech_czech.TYPE_CZECH_COMMANDS);
    } else {
      // eslint-disable-next-line no-param-reassign, no-unused-vars
      export_tech_czech.type_czech = { linkUp: (nop) => nop, isActive: (_) => false };
    }
    return export_tech_czech.type_czech;

    /*
    TypeCzech contains:
      - Douglas Crockford's Cycle.js for working with cyclic variables
        https://github.com/douglascrockford/JSON-js/blob/master/cycle.js

      - Evgeny Poberezkin and James Hallidays fast-json-stable-stringify
        https://github.com/epoberezkin/fast-json-stable-stringify

    These two packages make mutation checking possible, and are included
    directly in this code to make it easier to use.
    */

    /*
    This software is released under the MIT license:

    Copyright (c) 2021 Steen Hansen

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */

    function _TypeCzech(...the_parameters) { // type_czech = TypeCzech('LOG-ERRORS')
      // start TypeCzech variables
      let t_param_check_func; // reference to _ParametersCheck()
      let t_check_events = false; // sometimes set to TYPE_CZECH_EVENTS
      let t_do_param_checking = false; // look for errors?
      const t_reference_stacks = {}; // JSON copies of possible mutations
      const t_proxy_targets = new WeakSet(); // list of proxied things
      // end TypeCzech variables

      const PRE_FUNCTION_NO_THIS = 'PRE-FUNC:'; //         'PRE-FUNC-NO-THIS :: ';  information about this type was too much
      const PRE_FUNCTION_WITH_THIS = 'PRE-FUNC:'; //       'PRE-FUNC-THIS :: ';     but kept here in case
      const POST_FUNCTION_NO_THIS = 'POST-FUNC:'; //       'POST-FUNC-NO-THIS :: ';
      const POST_FUNCTION_WITH_THIS = 'POST-FUNC:'; //     'POST-FUNC-THIS :: ';
      const PRE_CONST_CLASS_NO_THIS = 'PRE-CLASS:'; //     'PRE-CLASS-NO-THIS :: ';
      const POST_CONST_CLASS_WITH_THIS = 'POST-CLASS:'; // 'POST-CLASS-THIS :: ';
      const PRE_OBJECT_NO_THIS = 'PRE-OBJ:'; //            'PRE-OBJ-NO-THIS :: ';
      const PRE_OBJECT_WITH_THIS = 'PRE-OBJ:'; //          'PRE-OBJ-THIS :: ';
      const POST_CONST_OBJECT_NO_THIS = 'POST-OBJ:'; //    'POST-OBJ-NO-THIS :: ';
      const POST_CONST_OBJECT_WITH_THIS = 'POST-OBJ:'; //  'POST-OBJ-THIS :: ';

      const BEFORE_APPLY_TYPE = '() ';

      // The check_type options to TypeCzech

      let OP_THROW_EXCEPTIONS = false; // 'THROW-EXCEPTIONS'
      let OP_NO_ERROR_MESSAGES = false; // 'NO-ERROR-MESSAGES'
      let OP_LOG_ERRORS = false; //       'LOG-ERRORS'   'NO-CHECKING' stops checking

      // 'UNDEF-OK' only affects check_type(), check_typeExtra(), check_typeEither(), and check_TypeExtra()
      let OP_UNDEF_OK = false; //            'UNDEF-OK'

      let OP_CONSOLE_COUNT = false; //       'CONSOLE-COUNT'
      let OP_DEBUG_ERROR_TAGS = false;//     'DEBUG-ERROR-TAGS' show "TC@123" for fast finding of bugs
      let OP_DEBUG_CONSOLE_TRACE = false; // 'DEBUG-CONSOLE-TRACE'

      const DIFF_BEGIN_LEN = 100;
      const DIFF_END_LEN = 50;
      const DIFF_BREAK_MIN = DIFF_BEGIN_LEN + DIFF_END_LEN + 10;
      const DIFF_SEPARATOR = '<<<~~~>>>'; // hide tonnes of diff text

      const MESS_TYPE_VARIADIC = 'check_typeVariadic()';
      const MESS_EMPTY_VARIADIC = 'check_emptyVariadic()';

      const MESS_OBJ_INTERFACE = 'check_interface()';
      const MESS_MUTATED = 'check_mutatedSnapshot()'; // which function call caused error

      const MESS_TYPE_VERIFY = 'check_type()';
      const MESS_TYPE_EXTRAS = 'check_typeExtra()';
      const MESS_TYPE_ONE_OF = 'check_typeEither()';

      const MESS_EMPTY_VERIFY = 'check_empty()';
      const MESS_EMPTY_EXTRAS = 'check_emptyExtra()';
      const MESS_EMPTY_ONE_OF = 'check_emptyEither()';

      const MESS_ASSERT_CHECK = 'assert_check()';

      const TRACE_COLORS = 'background: #ee0; color: #00F';
      const ERROR_COLORS = 'background: #ee0; color: #F00'; // background colors on check events
      const START_COLORS = 'background: #cc0; color: #080';

      const BLANK_REF_DIFF = "''"; // no difference indicator

      const CZECH_ERROR_INDENT = '\n\t\t';

      const PARAMS_OF_FUNCTION = /([^(]*\()([^)]*)/;

      const START_OF_FUNCTION_LEN = 30;

      const EMPTY_REGEXP = '/(?:)/';

      const EMPTY_OK = 'EMPTY-OK';
      const EMPTY_ER = 'EMPTY-ERROR';
      const EMPTY_IG = 'EMPTY-IGNORE';

      // Short empty types:  'OK',         'ER',         'IG'
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

      const PLAIN_UNDEFINED_STR_VALUE = 'Str_ify:und';
      const QUOTED_UNDEFINED_STR_VALUE = `"${PLAIN_UNDEFINED_STR_VALUE}"`; // temporary values

      const PLAIN_NULL_STR_VALUE = 'Str_ify:null';
      const QUOTED_NULL_STR_VALUE = `"${PLAIN_NULL_STR_VALUE}"`;

      const PLAIN_NAN_STR_VALUE = 'Str_ify:NaN';
      const QUOTED_NAN_STR_VALUE = `"${PLAIN_NAN_STR_VALUE}"`;

      const PLAIN_INFINITY_STR_VALUE = 'Str_ify:Inf';
      const QUOTED_INFINITY_STR_VALUE = `"${PLAIN_INFINITY_STR_VALUE}"`;

      const START_CHECK_COLOR = 'green';
      const DO_CHECK_COLOR = 'blue';
      const FAIL_CHECK_COLOR = 'red';

      const IS_INIT_CONSOLE = 'TypeCzech-init';

      const TYPE_CZECH_EVENTS = {
        bBlink: (back_color) => {
          document.body.style.background = back_color;
          setTimeout(() => { document.body.style.background = 'white'; }, 100);
        },
        onStart: () => TYPE_CZECH_EVENTS.bBlink(START_CHECK_COLOR),
        onCheck: () => TYPE_CZECH_EVENTS.bBlink(DO_CHECK_COLOR),
        onError: () => TYPE_CZECH_EVENTS.bBlink(FAIL_CHECK_COLOR),
      };

      function consolelog(...args) { // for complete debug tracing
        if (OP_DEBUG_CONSOLE_TRACE) {
          // eslint-disable-next-line no-console
          console.log(args);
        }
      }

      /*
type_czech._coloredConsole("_my colored text+", 'background: #000; color: #fff');
//my colored text
*/
      function _coloredConsole(the_args, the_css) {
        // eslint-disable-next-line no-use-before-define
        const args_str = _jsonStr(the_args);
        const the_text = args_str.substring(1, args_str.length - 1);
        // eslint-disable-next-line no-console
        console.log(`%c ${the_text}`, the_css);
      }

      /*
type_czech._doubleToSingleQuotes(` ['number','string",{"a":'number','B':"number"}]`);
//['number','string',{'a':'number','B':'number'}]
*/
      function _doubleToSingleQuotes(double_quotes) {
        
        const single_quotes = double_quotes.replace(/"/g, "'");
        
        return single_quotes;
      }

      /*
type_czech._isCollection([]);
//true
type_czech._isCollection({});
//true
type_czech._isCollection(12);
//false
*/
      function _isCollection(a_variable) {
        
        // eslint-disable-next-line no-use-before-define
        const a_type = _aTypeOf(a_variable);
        const a_collection = (a_type === 'array') ? true : a_type === 'object'; // only [] and {}
        
        return a_collection;
      }

      /*
type_czech._isScalar([]);
//false
type_czech._isScalar(12);
//true
*/
      function _isScalar(a_variable) {
        return !_isCollection(a_variable);
      }

      /*
type_czech._toStr(Infinity);
//Infinity
type_czech._toStr(NaN);
//NaN
type_czech._toStr(234n);
//234n
type_czech._toStr(undefined);
//undefined
type_czech._toStr(' my "double" quotes');
//my \"double\" quotes
type_czech._toStr({a:` ' " `});
//{a:\" ' \" \"}
type_czech._toStr({B:''});
//{B:\"\"}
type_czech._toStr([ "super", 'man' ]);
//[\"super\",\"man\"]
type_czech._toStr([186n]);
//[186n]
type_czech._toStr({big_int:187n});
//{big_int:187n}
type_czech._toStr([[[[[188n]]]]]);
//[[[[[188n]]]]]
type_czech._toStr({big_int:{big_int:{big_int:{big_int:{big_int:{big_int:{big_int:189n}}}}}}});
//{big_int:{big_int:{big_int:{big_int:{big_int:{big_int:{big_int:189n}}}}}}}
type_czech._toStr(Symbol('sym'))
//Symbol('sym')
type_czech._toStr({a:1, "b b":22, c:33});
//{a:1,\"b b\":22,c:33}
type_czech._toStr(Infinity)
//"Infinity"
type_czech._toStr("")
//''
*/
      function _toStr(maybe_undef) {
        
        let to_str;
        if (_isCollection(maybe_undef)) {
          // eslint-disable-next-line no-use-before-define
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
          // eslint-disable-next-line no-use-before-define
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

      /*
type_czech._stringifyReplacer('not-used', Infinity);
//Str_ify:Inf
type_czech._stringifyReplacer('not-used', 12n);
//12n
type_czech._stringifyReplacer('not-used', undefined);
//Str_ify:und
type_czech._stringifyReplacer('not-used', NaN);
//Str_ify:NaN
type_czech._stringifyReplacer('not-used', function(x,y,z){console.log(x,y,z)});
//function(x,y,z){console.log(x, ***
type_czech._stringifyReplacer('not-used', Symbol("sym"));
//Symbol('sym')
*/
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
          const func_start = no_new_lines.substring(0, START_OF_FUNCTION_LEN); // shorten function for display
          replaced_value = `${func_start} ***`;
        } else if (value && value.constructor === RegExp) { // NB mutations not shortened
          const regex_text = String(value);
          const regex_start = regex_text.substring(0, START_OF_FUNCTION_LEN); // shorten regex for display
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

      /*
type_czech._jsonStr(234n);
//234n
type_czech._jsonStr(Infinity);
//Infinity
type_czech._jsonStr(undefined);
//undefined
type_czech._jsonStr({a:1, b:22n, c:undefined, d:{e:'f', g:'h'}});
//{\"a\":1,\"b\":\"22n\",\"c\":\"Str_ify:und\",\"d\":{\"e\":\"f\",\"g\":\"h\"}}
type_czech._jsonStr([1n,[2n,[3n,[4n]]]]);
//[\"1n\",[\"2n\",[\"3n\",[\"4n\"]]]]
type_czech._jsonStr(Symbol("sym"))
//Symbol('sym')
type_czech._jsonStr("")
//''
type_czech._jsonStr({Infinity:Infinity, NaN: NaN, null:null, undefined:undefined})
//{\"Infinity\":\"Str_ify:Inf\",\"NaN\":\"Str_ify:NaN\",\"null\":\"Str_ify:null\",\"undefined\":\"Str_ify:und\"}
type_czech._jsonStr([Infinity, NaN, null, undefined])
//[\"Str_ify:Inf\",\"Str_ify:NaN\",\"Str_ify:null\",\"Str_ify:und\"]
*/
      function _jsonStr(an_object) {
        
        const json_str = JSON.stringify(an_object, _stringifyReplacer);
        const obj_str = _toStr(json_str);
        
        return obj_str;
      }

      /*
class Person {  constructor(){}  };
type_czech._className(Person);
//Person
class Car {  constructor(){}  };
a_car = Car;
type_czech._className(a_car);
//Car
type_czech._className(Object);
//''
*/
      function _className(a_var) {
        
        let class_name = '';
        const class_string = a_var.toString();
        if (class_string.startsWith('class ') && class_string.includes(' constructor(')) {
          class_name = a_var.name;
        }
        
        return class_name;
      }

      /*
function is_not_class(){};
type_czech._isAClass(is_not_class);
//false
is_class_func= (x) => x;
type_czech._isAClass(is_class_func);
//false
class SomeKlass{ constructor() {} }
type_czech._isAClass(SomeKlass);
//true
class First{ constructor() {} }
class Second extends First{ constructor() { super(...args) } }
type_czech._isAClass(Second);
//true
type_czech._isAClass([]);
//false
type_czech._isAClass({});
//false
type_czech._isAClass('a-string');
//false
type_czech._isAClass(77);
//false
type_czech._isAClass(123n);
//false
*/
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

      /*
type_czech._functionName(x=>x);
//""
type_czech._functionName(function aFunction(){});
//aFunction
*/
      function _functionName(a_var) {
        
        let function_name = '';
        const function_string = a_var.toString();
        if (function_string.startsWith('function ')) {
          function_name = a_var.name;
        }
        
        return function_name;
      }

      /*
type_czech._isBuiltInClass(85n);
//false
type_czech._isBuiltInClass('BigInt');
//true
type_czech._isBuiltInClass('bigint');
//false
type_czech._isBuiltInClass('Object');
//true
type_czech._isBuiltInClass('Array');
//true
type_czech._isBuiltInClass('Yojimbo');
//false
type_czech._isBuiltInClass([]);
//false
*/
      function _isBuiltInClass(a_type) {
        
        let is_built_in = false;
        if (typeof a_type === 'string') {
          if (CONSTRUCTOR_PROTOTYPES.includes(a_type)) {
            is_built_in = true;
          }
        }
        
        return is_built_in;
      }

      /*
type_czech._anObjectsType('a-string');
//String
type_czech._anObjectsType(x=>x);
//false
type_czech._anObjectsType({});
//object
type_czech._anObjectsType(function aFunction(){});
//false
class First{ constructor() {} }
type_czech._anObjectsType(First);
//false
class First{ constructor() {} }
var a_first = new First()
type_czech._anObjectsType(a_first);
//First
class TheFirst{ constructor() {} }
class TheSecond extends TheFirst{ constructor() { super() } }
var a_second = new TheSecond()
type_czech._anObjectsType(a_second);
//TheSecond
*/
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

      /*
type_czech._isaTypeOf('Number');
//false
type_czech._isaTypeOf('number');
//true
type_czech._isaTypeOf('object');
//true
*/
      function _isaTypeOf(lower_case_type_of) {
        
        let is_type_of = false;
        if (typeof lower_case_type_of === 'string') {
          if (SCALAR_TYPE_OFS.includes(lower_case_type_of)) {
            is_type_of = true;
          }
        }
        
        return is_type_of;
      }

      /*
type_czech.typeProtos(null);
//["null"]
type_czech.typeProtos(123);
//["Number"]
type_czech.typeProtos(new Date('1999-12-31'));
//["Date"]
type_czech.typeProtos(document.createElement('div'));
//[ "HTMLDivElement", "HTMLElement", "Element", "Node", "EventTarget", "object" ]
type_czech.typeProtos(new Object());
//[ "Object" ]
{ class First { constructor() { } }
  class Last extends First { constructor() { super() } }
  type_czech.typeProtos(new Last()); }
//[ "Last", "First", "object" ]
*/
      function typeProtos(a_var) {
        
        let the_prototypes = false;
        if (a_var !== null && typeof a_var !== 'undefined') {
          const proto_sequence = [];

          // eslint-disable-next-line no-inner-declarations
          function nextPrototype(an_object) {
            const current_proto = Object.getPrototypeOf(an_object);
            if (current_proto !== null) {
              const proto_type = current_proto.constructor.name;
              proto_sequence.push(proto_type);
              nextPrototype(current_proto); // recursive
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

      /*
type_czech.typeFinal(1999);
//number
type_czech.typeFinal(new Date('1999-12-31'));
//date
type_czech.typeFinal(document.createElement('div'));
//HTMLDivElement
{ class First { constructor() { } }
  class Last extends First { constructor() { super() } }
  type_czech.typeFinal(new Last()); }
//Last
*/
      function typeFinal(a_var) {
        
        // eslint-disable-next-line no-unused-vars
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

      /*
type_czech.typeIsA(null, 'null');
//true
type_czech.typeIsA(undefined, 'undefined');
//true
type_czech.typeIsA(Infinity, 'number');
//true
type_czech.typeIsA(NaN, 'number');
//true
type_czech.typeIsA(12, 'number');
//true
type_czech.typeIsA(11, 'Number');
//true
type_czech.typeIsA(11, 'NUMBER');
//false
type_czech.typeIsA([], 'array');
//true
type_czech.typeIsA([], 'Array');
//true
type_czech.typeIsA([], 'ARRAY');
//false
type_czech.typeIsA({}, 'object');
//true
type_czech.typeIsA({}, 'Object');
//true
type_czech.typeIsA(null, 'object');
//false
type_czech.typeIsA(null, 'Object');
//false
type_czech.typeIsA(document.createElement('div'), "HTMLDivElement");
//true
type_czech.typeIsA(document.createElement('div'), "EventTarget");
//true
*/
      function typeIsA(a_var, object_type) {
        
        // eslint-disable-next-line no-unused-vars
        const the_prototypes = typeProtos(a_var);
        let object_is_a = false;
        if (the_prototypes) {
          if (_isaTypeOf(object_type)) {
            // eslint-disable-next-line no-param-reassign
            object_type = TYPE_OF_TO_PROTO[object_type];
          }
          object_is_a = the_prototypes.includes(object_type);
        }
        
        return object_is_a;
      }

      /*
type_czech._aTypeOf(new Date('1999-12-31'));
//date
type_czech._aTypeOf(x=>x);
//function
type_czech._aTypeOf([]);
//array
type_czech._aTypeOf({});
//object
type_czech._aTypeOf(59n);
//bigint
type_czech._aTypeOf(NaN);
//number
type_czech._aTypeOf(Infinity);
//number
type_czech._aTypeOf(/d/);
//regexp
type_czech._aTypeOf(null);
//null
type_czech._aTypeOf(document.createElement('div'));
//"HTMLDivElement"
*/
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

      /*
type_czech._isPlainJsType("boolean");
//true
type_czech._isPlainJsType("Boolean");
//false
type_czech._isPlainJsType("Snuffleupagus");
//false
type_czech._isPlainJsType('bigint');
//true
type_czech._isPlainJsType('BigInt');
//false
type_czech._isPlainJsType('array');
//true
type_czech._isPlainJsType('object');
//true
type_czech._isPlainJsType([]);
//false
type_czech._isPlainJsType({});
//false
type_czech._isPlainJsType(document.createElement('div'));
//false
*/
      function _isPlainJsType(a_type) {
        
        let is_plain_js_type = false;
        if (TYPE_SET_SCALAR.has(a_type)) {
          is_plain_js_type = true; // date, string..... not null, not undef
        } else if (SHORT_TO_TYPE_OF[a_type]) {
          is_plain_js_type = true; //   d,s,n,b
        }
        
        return is_plain_js_type;
      }

      /*
type_czech._shortToLongType("y");
//symbol
type_czech._shortToLongType("Y");
//Y
type_czech._shortToLongType("n");
//number
type_czech._shortToLongType("n");
//N
*/
      function _shortToLongType(a_type) {
        
        if (SHORT_TO_TYPE_OF[a_type]) {
          // eslint-disable-next-line no-param-reassign
          a_type = SHORT_TO_TYPE_OF[a_type];
        }
        
        return a_type;
      }

      /*
type_czech._shortToLongEmpty("OK");
//EMPTY-OK
type_czech._shortToLongEmpty("EMPTY-ER");
//EMPTY-ER
type_czech._shortToLongEmpty("x-ray-delta");
//x-ray-delta
*/
      function _shortToLongEmpty(an_empty) {
        if (SHORT_EMPTIES[an_empty]) {
          return SHORT_EMPTIES[an_empty];
        }
        return an_empty;
      }

      /*
type_czech._collectionToStr({a_key: 'a-string'});
//{a_key:\"a-string\"}
type_czech._collectionToStr([199n]);
//[199n]
its_complicated = [ {arr_1:[      {k_2:[3n,   {k_4:['number']}   ] }
                                , {k_5:[6n,   {k_7:['number']}  ] }] },
                    [ ['string', 'array'], { k_8: 9n, k_10 :{k_11:2n, K_12:'object'}}]    ]
type_czech._collectionToStr(its_complicated);
//[{arr_1:[{k_2:[3n,{k_4:[\"number\"]}]},{k_5:[6n,{k_7:[\"number\"]}]}]},[[\"string\",\"array\"],{k_8:9n,k_10:{k_11:2n,K_12:\"object\"}}]]
type_czech._collectionToStr([1,2,3]);
//[1,2,3]
type_czech._collectionToStr({ 'a"a': 1});
//{'a\"a':1}
type_czech._collectionToStr({ "b b": 2});
//{\"b b\":1}
type_czech._collectionToStr({ "3c": 3});
//{\"3c\":3}
type_czech._collectionToStr({ 4: 4});
//{4:4}
type_czech._collectionToStr({ e: 5});
//{e:5}
type_czech._collectionToStr({ "f'f": 1});
//{"f'f":1}
*/
      function _collectionToStr(a_collection) {
        
        let collection_str;
        const collection_elems = [];
        if (Array.isArray(a_collection)) { // array to string
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
          // eslint-disable-next-line no-restricted-syntax
          for (const [key, value] of Object.entries(a_collection)) { // an object to string
            let out_key;
            if (key.match(/[^a-z\d_]/gi)) { // key has annoying chars
              if (key.match(/"/g)) {
                out_key = `'${key}'`; // has double quote
              } else {
                out_key = `"${key}"`; // no double quote
              }
            } else if (key.match(/^\d+[a-z_]/i)) {
              out_key = `"${key}"`; // starts with a digit - https://mothereff.in/js-properties
            } else {
              out_key = key;
            }
            const value_json = _toStr(value); // now for value
            let object_as_str;
            if (_aTypeOf(value) === 'string') {
              if (value_json === "''") {
                object_as_str = `${out_key}:""`;
              } else {
                object_as_str = `${out_key}:"${value_json}"`;
              }
            } else {
              object_as_str = `${out_key}:${value_json}`;
            }
            collection_elems.push(object_as_str);
          }
          collection_str = `{${collection_elems.join()}}`;
        }
        
        return collection_str;
      }

      /*
type_czech._consoleError("errorText", 'TheTAG');
//TheTAG - errorText
*/
      function _consoleError(error_text, error_tag) {
        if (OP_DEBUG_ERROR_TAGS && error_tag) {
          const debug_error = `${error_tag} - ${error_text}`;
          if (OP_DEBUG_CONSOLE_TRACE) {
            _coloredConsole(debug_error, ERROR_COLORS); // only if type_czech = TypeCzech('LOG-ERRORS')
          }
          return debug_error;
        }
        return error_text;
      }

      /*
type_czech._looksLikeType("ARRAY");
//TE@205 - The type 'ARRAY' is not a typeof() type, but it looks just like 'array'
type_czech._looksLikeType("Object");
//TE@205 - The type 'Object' is not a typeof() type, but it looks just like 'object'
type_czech._looksLikeType("date");
//''
*/
      function _looksLikeType(possible_badcase) {
        
        let error_string = '';
        const is_type_of = _isaTypeOf(possible_badcase);
        if (!is_type_of) {
          if (typeof possible_badcase === 'string') {
            const pos_lower_type = possible_badcase.toLowerCase(); // 'Number' should be 'number'
            if (TYPE_OF_TO_PROTO[pos_lower_type]) {
              const error_205 = `Type '${possible_badcase}' is not a typeof(), but looks like '${pos_lower_type}'`;
              error_string = _consoleError(error_205, 'TE@205');
            }
          }
        }
        
        return error_string;
      }

      /*
type_czech._missingKey({z:"symbol"});
//TE@216 - The key 'z', which has a type of 'symbol', is missing in the checked object
*/
      function _missingKey(extra_keys) {
        
        let missing_key;
        if (Object.keys(extra_keys).length > 0) {
          const [share_key, share_type] = Object.entries(extra_keys)[0];
          missing_key = _looksLikeType(share_type);
          if (!missing_key) {
            const share_type_str = _toStr(share_type);
            const error_216 = ` Key '${share_key}', which has a type of '${share_type_str}', is missing in the checked object`;
            missing_key = _consoleError(error_216, 'TE@216');
          }
        } else {
          missing_key = '';
        }
        
        return missing_key;
      }

      /*
type_czech._isEmpty(new Date(''));
//true
type_czech._isEmpty('');
//true
type_czech._isEmpty(' ');
//true
type_czech._isEmpty(0);
//false
type_czech._isEmpty(NaN);
//true
type_czech._isEmpty(Infinity);
//true
type_czech._isEmpty(null);
//true
type_czech._isEmpty(undefined);
//true
type_czech._isEmpty([]);
//true
type_czech._isEmpty([7]);
//false
type_czech._isEmpty({});
//true
type_czech._isEmpty({seven:11});
//false
type_czech._isEmpty(85n);
//false
*/
      function _isEmpty(a_variable) {
        
        let is_empty;
        if (a_variable instanceof Date) {
          // eslint-disable-next-line eqeqeq
          is_empty = (a_variable == 'Invalid Date'); // [], {}, NaN, Infinity, '', new Date(''), EMPTY_REGEXP, null, undefined
        } else if (a_variable instanceof RegExp) {
          const regExp_str = a_variable.toString();
          is_empty = (regExp_str === EMPTY_REGEXP);
        } else if (Number.isNaN(a_variable)) {
          is_empty = true; // NaN is an empty number, 0 is NOT-EMPTY!
        } else if (typeof a_variable === 'number' && !Number.isFinite(a_variable)) {
          is_empty = true; // Infinity is empty
        } else if (a_variable == null) {
          is_empty = true;
        } else {
          const empty_str_array = a_variable.length === 0;
          const empty_object = (typeof a_variable === 'object' && Object.keys(a_variable).length === 0);
          is_empty = empty_str_array || empty_object;
        }
        
        return is_empty;
      }

      /*
type_czech._canBeEmpty('array')
//true
type_czech._canBeEmpty('object')
//true
type_czech._canBeEmpty('string')
//true
type_czech._canBeEmpty(/ab+c/i)
//false
type_czech._canBeEmpty(85n)
//false
type_czech._canBeEmpty('boolean')
//false
*/
      const _canBeEmpty = (variable_type) => (variable_type === 'array' ? true // [] -- string types checked, not values
        : variable_type === 'object' ? true // {}
          : variable_type === 'string' ? true // ''
            : variable_type === 'regexp' ? true // new RegExp()
              : variable_type === 'date' ? true // new Date("")
                : variable_type === 'number'); // NaN or Infinity

      /*
type_czech._typeFromArray(['jj'], 99);
//jj
type_czech._typeFromArray([1,'uu'], 1);
//uu
type_czech._typeFromArray([0, 0, 2222], 2);
//2222
*/
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

      /*
type_czech._getParameters({0:'a', 1:'b', length:2});
//[ ["a","b"], false, false]
type_czech._getParameters([1]);
//[ 1, false, true]
type_czech._getParameters([1,2,3,4]);
//[ [1,2,3,4], false, false]
type_czech._getParameters(null);
//[null, false, true]
type_czech._getParameters('a-string');
//["a-string", false, true]
type_czech._getParameters();
//[undefined, false, true]
type_czech._getParameters({0:'zero', length:1});
//["zero", false, true]
type_czech._getParameters({length:0});
//[ [], true, true]
*/
      function _getParameters(parameters_obj) { // this does both PRE_check() and POST_check()s
        
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
            // this is an incoming PRE parameter check
          } else {
            // this is an outgoing post result check
          }
          the_params = [];
        } else if (parameters_obj.length === 1) {
          if (!Array.isArray(parameters_obj)) {
            // eslint-disable-next-line prefer-destructuring
            the_params = parameters_obj[0];
            // this is an incoming PRE parameter check
          } else {
            the_params = parameters_obj;
            // this is an outgoing post result check
          }
        } else {
          the_params = Array.from(parameters_obj); // a function with more than 1 arg
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

      /*
variable={bob:17, show:_=>_};
interface={bob:'number', show:'f'};
type_czech.check_interface(variable, interface);
//''

variable={bob:['number'], show:_=>_};
interface={bob:'number', show:'f'};
type_czech.check_interface(variable, interface);
//check_interface()
//IE@502 - actual type of 'bob' is 'array', with a value of '[\"number\"]', not the expected 'number' type
//{bob:\"number\",show:\"f\"}

variable={bob:{}, show:_=>_};
interface={bob:'object', show:'f'};
type_czech.check_interface(variable, interface);
//''

variable={bob:{}, show:_=>_};
interface={bob:{}, show:'f'};
type_czech.check_interface(variable, interface);
//check_interface()
//IE@502 - actual type of 'bob' is 'object', with a value of '{}', not the expected '{}' type
//{bob:{},show:\"f\"}

variable={bob:[], show:_=>_};
interface={bob:'array', show:'f'};
type_czech.check_interface(variable, interface);
//''

variable={bob:[], show:_=>_};
interface={bob:[], show:'f'};
type_czech.check_interface(variable, interface);
//check_interface()
//IE@502 - actual type of 'bob' is 'array', with a value of '[]', not the expected '[]' type
//{bob:[],show:\"f\"}

variable={bob:{a:12}, show:_=>_};
interface={bob:'object', show:'f'};
type_czech.check_interface(variable, interface);
//''
*/
      // eslint-disable-next-line consistent-return
      function check_interface(introspect_object, expected_interface) { // Not like Java methods only, can be anything
        if (t_param_check_func.p_call_traps) {
          
          // eslint-disable-next-line no-unused-vars
          const [interface_object, _no_parameters, _one_param] = _getParameters(introspect_object);
          
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
            // eslint-disable-next-line guard-for-in, no-restricted-syntax
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
                  const error_502 = `Actual type of '${test_key}' is '${introspect_type}', with a value `
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

      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      /*
type_czech._ParametersCheck(false);
//assert_check_: function assert_check_(error_mess, where_from, actual_value, expected_outcome))
//confirmParameters: function realConfirmParams(target_proxy, pre_checks, post_checks)
//countFails_: function countFails_()
//countTally_: function countTally_()
//disableChecks_: function disableChecks_()
//enableChecks_: function enableChecks_()
//p_call_traps: true

type_czech._ParametersCheck(type_czech.TYPE_CZECH_EVENTS);
//assert_check_: function assert_check_(error_mess, where_from, actual_value, expected_outcome)
//confirmParameters: function realConfirmParams(target_proxy, pre_checks, post_checks)
//countFails_: function countFails_()
//countTally_: function countTally_()
//disableChecks_: function disableChecks_()
//enableChecks_: function enableChecks_()
//p_call_traps: true
*/
      function _ParametersCheck(arg_check_events) {
        
        const num_parameters = arguments.length;
        if (num_parameters > 1) {
          const error_407 = `_ParametersCheck() needs 0 or 1 params, not ${num_parameters}`;
          const internal_error_407 = _consoleError(error_407, 'ME@407');
          throw internal_error_407;
        }
        let onParamCheck = () => ''; // console.log('default onParamCheck');
        let onParamError = () => ''; // console.log('default onParamError');

        // start _ParametersCheck variables
        let p_check_count = 0; //     count number of parameter checks
        let p_failure_count = 0; //   count errors so far
        let p_call_traps = false; //  turn parameter checking on/off
        // end _ParametersCheck variables

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
            p_call_traps = true; // default parameter checking is on
          }
        }

        function getCheckFailureCount() {
          return `${p_check_count} : ${p_failure_count}`;
        }

        function getHtmlTypes(list_of_parameters) {
           // DOM types, not JavaScript types
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

        // The error message generator
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
              // eslint-disable-next-line no-console
              console.log(exception_str);
            } else {
              // OP_NO_ERROR_MESSAGES to stop error spamming of console during testing, keep showing exceptions
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
            const arguments_error = `Param 'arguments' shadows arguments object : ${func_parts[0]})`;
            _coloredConsole(arguments_error, TRACE_COLORS);
          }
          
          return funct_params;
        }

        // Closures and functions have no this
        function applyNoThis(target_name, list_of_parameters, the_check) {
          
          const funct_params = argumentsParamWarn(the_check);
          // eslint-disable-next-line prefer-spread
          const the_errors = the_check.apply(null, list_of_parameters);
          outputCheck(the_errors, the_check.name, target_name, list_of_parameters, funct_params);
        }

        // Only classes and prototypes have a this
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

        /*

check_error=type_czech.check_typeEither(false,['number','string'])
error_location = 'thirdParty call'
actual_value = false
type_czech.assert_check(check_error, error_location, actual_value)
//Assert Location: thirdParty call()  TE@226 - The value 'false', which is a 'boolean', is not a 'number', TE@226 - The value 'false', which is a 'boolean', is not a 'string'
//check_typeEither()
//    ACTUAL TYPES 'boolean'
//    ACTUAL VALUE false
//   EXPECTED TYPE ["number","string"]
//CALLING FUNCTION TypeCzech.assert_check()

test_1999 = new Date('1999-12-12')
test_1999.setFullYear(2000);
test_year = test_1999.getFullYear()
if (type_czech.isActive()) {
  if (test_year !== 1999) {
    check_error = `TEST ERROR A-17, year was not 1999 but incorrectly ${test_year}`
    error_location = 'TESTING test_1999.getFullYear()'
    expected_outcome = 'Year should have been 1999'
    type_czech.assert_check(check_error, error_location, test_year, expected_outcome)
  }
}
//Assert Location: TESTING test_1999.getFullYear()
// Assert Message: TEST ERROR A-17, year was not 1999 but incorrectly 2000
//  TypeCzech.assert_check()
//      ACTUAL TYPES 'number'
//      ACTUAL VALUE 2000
//    EXPECTED Year should have been 1999
//  CALLING FUNCTION TypeCzech.assert_check()

test_1999 = new Date('1999-12-12')
test_1999.setFullYear(2000);
test_year = test_1999.getFullYear()
if (type_czech.isActive()) {
  if (test_year !== 1999) {
    check_error = `TEST ERROR A-17, year was not 1999 but incorrectly ${test_year}`
    error_location = 'TESTING test_1999.getFullYear()'
    type_czech.assert_check(check_error, error_location, test_year)
  }
}
//Assert Location: TESTING test_1999.getFullYear()
// Assert Message: TEST ERROR A-17, year was not 1999 but incorrectly 2000
//  TypeCzech.assert_check()
//      ACTUAL TYPES 'number'
//      ACTUAL VALUE 2000
//    EXPECTED
//  CALLING FUNCTION TypeCzech.assert_check()

check_error= {"a-b_c":"d-e_f"}
error_location =  {"h-h_i":"j-k_l"}
actual_value = {"m-n_o":"p-e_r"}
expected_outcome = {"s-t_u":"v-w_x"}
type_czech.assert_check(check_error, error_location, actual_value, expected_outcome)
//Assert Location: {h-h_i:"j-k_l"}
// Assert Message: {a-b_c:"d-e_f"}
//TypeCzech.assert_check()
//    ACTUAL TYPES 'object'
//    ACTUAL VALUE {m-n_o:"p-e_r"}
//  EXPECTED
//CALLING FUNCTION TypeCzech.assert_check()
*/
        // This flows into the TypeCzech error messages without being linkUp(), for promises
        function assert_check_(error_mess, where_from, actual_value, expected_outcome) {
          if (t_param_check_func.p_call_traps) {
            
            if (!Array.isArray(error_mess)) {
              // eslint-disable-next-line no-param-reassign
              error_mess = _toStr(error_mess);
              const new_message_error = `\n  Assert Message: ${error_mess} `;
              if (typeof expected_outcome === 'undefined') {
                // eslint-disable-next-line no-param-reassign
                expected_outcome = '';
              } else {
                // eslint-disable-next-line no-param-reassign
                expected_outcome = _toStr(expected_outcome);
              }
              // eslint-disable-next-line no-param-reassign
              error_mess = [MESS_ASSERT_CHECK, new_message_error, expected_outcome];
            }
            // eslint-disable-next-line no-param-reassign
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
            const error_102 = `Function to be checked by ${check_as_str} is 'undefined', maybe namespace issue`;
            const exception_102 = _consoleError(error_102, 'EX@102');
            throw exception_102;
          }
          if (target_proxy === the_check) {
            const error_103 = `_ParametersCheck you cannot use ${target_proxy.name}() to test`
                        + `${the_check.name}(), they must be different`;
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
            const error_105 = `1st param to linkUp(), target_proxy is not a function, but is instead ${target_str}`;
            const exception_105 = _consoleError(error_105, 'EX@105');
            throw exception_105;
          }
          if (pre_check) {
            // eslint-disable-next-line guard-for-in, no-restricted-syntax
            for (const pre_key in pre_check) {
              const a_pre_check = pre_check[pre_key];
              proxyUsed(target_proxy, a_pre_check);
              funcObjChecksOnly(a_pre_check, 'linkUp() 2nd param, PRE-CHECK()', 'EX@101');
            }
          }
          if (post_check) {
            // eslint-disable-next-line guard-for-in, no-restricted-syntax
            for (const post_key in post_check) {
              const a_post_check = post_check[post_key];
              proxyUsed(target_proxy, a_post_check);
              funcObjChecksOnly(a_post_check, 'linkUp() 3rd param, POST-CHECK()', 'EX@115');
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

        // This is where a bunch of methods gets all linked up
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
            // eslint-disable-next-line no-param-reassign, prefer-object-spread
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
                // eslint-disable-next-line no-param-reassign
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
            the_check = false; // NB, no checks from an empty PRE(s)
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
            apply() { }, // NB, class will not use apply
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
            const error_106 = `linkUp() needs 2 or 3 params, not ${num_params}`;
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

        // eslint-disable-next-line no-unused-vars
        const nopCheck = (function_to_check, _pre_check, _post_check) => function_to_check;

        const confirmParameters = t_do_param_checking ? realConfirmParams : nopCheck;

        init_ParametersCheck();

        const public_methods = {
          assert_check_, // called by assert_check()
          confirmParameters,
          countFails_, // called by countFails()
          countTally_, // called by countTally()
          disableChecks_, // called by disableChecks()
          enableChecks_, // called by enableChecks()
          p_call_traps, // call checking functions true or false
        };

        return public_methods;
      } // _ParametersCheck()

      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      /* eslint-disable */

    /*
    https://github.com/douglascrockford/JSON-js/blob/master/cycle.js

    // commit 8e8b0407e475e35942f7e9461dab81929fcc7321

var a = [];
a[0] = a;
type_czech._cycle_loops.decycle(a);
//[{"$ref":"$"}]

type_czech._cycle_loops.decycle({the_window:window});
//Object { the_window: {…} }

type_czech._cycle_loops.decycle(window);
///Object { close: close(), stop: stop(), focus: focus(), blur: blur(), open: open(), alert: alert(), confirm: confirm(), prompt: prompt(), print: print(), postMessage: postMessage(), … }

var a = [1n, 2n, 3n];
a[0] = a;
type_czech._cycle_loops.decycle(a);
//[{"$ref":"$"}, 2n, 3n]

    cycle.js
    2021-05-31

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    This code should be minified before deployment.
    See https://www.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
*/

// The file uses the WeakMap feature of ES6.

/*jslint eval */

/*property
    $ref, decycle, forEach, get, indexOf, isArray, keys, length, push,
    retrocycle, set, stringify, test
*/

const _cycle_loops = {};

////////////////////////////////////////////////////////////////////////////////if (typeof JSON.decycle !== "function") {
  _cycle_loops.decycle = function decycle(object, replacer) {
      "use strict";
// Make a deep copy of an object or array, assuring that there is at most
// one instance of each object or array in the resulting structure. The
// duplicate references (which might be forming cycles) are replaced with
// an object of the form

//      {"$ref": PATH}

// where the PATH is a JSONPath string that locates the first occurance.

// So,

//      var a = [];
//      a[0] = a;
//      return JSON.stringify(_cycle_loops.decycle(a));

// produces the string '[{"$ref":"$"}]'.

// If a replacer function is provided, then it will be called for each value.
// A replacer function receives a value and returns a replacement value.

// JSONPath is used to locate the unique object. $ indicates the top level of
// the object or array. [NUMBER] or [STRING] indicates a child element or
// property.

      var objects = new WeakMap();     // object to path mappings

      return (function derez(value, path) {

// The derez function recurses through the object, producing the deep copy.

          var old_path;   // The path of an earlier occurance of value
          var nu;         // The new object or array

// If a replacer function was provided, then call it to get a replacement value.

          if (replacer !== undefined) {
              value = replacer(value);
          }

// typeof null === "object", so go on if this value is really an object but not
// one of the weird builtin objects.

          if (
              typeof value === "object"
              && value !== null
              && !(value instanceof Boolean)
              && !(value instanceof Date)
              && !(value instanceof Number)
              && !(value instanceof RegExp)
              && !(value instanceof String)
          ) {

// If the value is an object or array, look to see if we have already
// encountered it. If so, return a {"$ref":PATH} object. This uses an
// ES6 WeakMap.

              old_path = objects.get(value);
              if (old_path !== undefined) {
                  return {$ref: old_path};
              }

// Otherwise, accumulate the unique value and its path.

              objects.set(value, path);

// If it is an array, replicate the array.

              if (Array.isArray(value)) {
                  nu = [];
                  value.forEach(function (element, i) {
                      nu[i] = derez(element, path + "[" + i + "]");
                  });
              } else {

// If it is an object, replicate the object.

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
////////////////////////////////////////////////////////////////////////////////}


//////////////////// Never used so commented out /////////if (typeof JSON.retrocycle !== "function") {
//   _cycle_loops.retrocycle = function retrocycle($) {
//       "use strict";

// // Restore an object that was reduced by decycle. Members whose values are
// // objects of the form
// //      {$ref: PATH}
// // are replaced with references to the value found by the PATH. This will
// // restore cycles. The object will be mutated.

// // The eval function is used to locate the values described by a PATH. The
// // root object is kept in a $ variable. A regular expression is used to
// // assure that the PATH is extremely well formed. The regexp contains nested
// // * quantifiers. That has been known to have extremely bad performance
// // problems on some browsers for very long strings. A PATH is expected to be
// // reasonably short. A PATH is allowed to belong to a very restricted subset of
// // Goessner's JSONPath.

// // So,
// //      var s = '[{"$ref":"$"}]';
// //      return _cycle_loops.retrocycle(JSON.parse(s));
// // produces an array containing a single element which is the array itself.

//       var px = /^\$(?:\[(?:\d+|"(?:[^\\"\u0000-\u001f]|\\(?:[\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*")\])*$/;

//       (function rez(value) {

// // The rez function walks recursively through the object looking for $ref
// // properties. When it finds one that has a value that is a path, then it
// // replaces the $ref object with a reference to the value that is found by
// // the path.

//           if (value && typeof value === "object") {
//               if (Array.isArray(value)) {
//                   value.forEach(function (element, i) {
//                       if (typeof element === "object" && element !== null) {
//                           var path = element.$ref;
//                           if (typeof path === "string" && px.test(path)) {
//                               value[i] = eval(path);
//                           } else {
//                               rez(element);
//                           }
//                       }
//                   });
//               } else {
//                   Object.keys(value).forEach(function (name) {
//                       var item = value[name];
//                       if (typeof item === "object" && item !== null) {
//                           var path = item.$ref;
//                           if (typeof path === "string" && px.test(path)) {
//                               value[name] = eval(path);
//                           } else {
//                               rez(item);
//                           }
//                       }
//                   });
//               }
//           }
//       }($));
//       return $;
//   };
////////////////////////////////////////////////////////////////////////////////}

      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     
    /*
type_czech._fast_json_stable_stringify({c:2, a:1, b:123n});
//{'a':1,'b':'123n','c':2}

type_czech._fast_json_stable_stringify({c:Infinity, a:NaN, e: Symbol('Y'), f:undefined, g:null, b:123n});
//{'a':NaN, 'b':'123n', 'c':Infinity, 'e':Symbol(Y), 'f':undefined, 'g':null} 

a_regex = new RegExp(/\d\d\d\d\d\d\d\d\d\d\d\dabcdefghijklmnopqrstuvwxyz/);
a_func = function (param_1,param_2,param_3) { return param_1 + param_2 + param_3; };
type_czech._fast_json_stable_stringify([a_regex, a_func]);
//[/\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d\\dabcdefghijklmnopqrstuvwxyz/,function (param_1,param_2,param_3) { return param_1 + param_2 + param_3; }]
    
    Used to check for mutation of function parameters in check_buildSnapshot() and check_mutatedSnapshot()

    https://github.com/epoberezkin/fast-json-stable-stringify

    https://github.com/epoberezkin/fast-json-stable-stringify/blob/master/index.js

    This software is released under the MIT license:

    Copyright (c) 2017 Evgeny Poberezkin
    Copyright (c) 2013 James Halliday

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

    */

    // commit 67f688f7441010cfef91a6147280cc501701e83b

    //module.exports = function (data, opts) {

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

// start of modifications for check_buildSnapshot() and check_mutatedSnapshot()
if (Number.isNaN(node)) return 'NaN';
if (typeof node === 'number' && !Number.isFinite(node)) return 'Infinity';
if (node === undefined) return 'undefined';
if (typeof node === 'bigint') return JSON.stringify(node + 'n');
if (typeof node === 'symbol') return node.toString();
if (typeof node === 'function') {
  return String(node);
}
if (node && node.constructor === RegExp) {
  return String(node);
}
// end of modifications

            //if (node === undefined) return;
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
      
      /* eslint-enable */
      /* eslint-disable block-scoped-var */

      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      /*
type_czech._errorClassName('NUMBER');
//TE@205 - Type 'NUMBER' is not a typeof(), but looks like 'number'
type_czech._errorClassName('[]');
//TE@222 - [] is not a type, not a signature, but a container. Try 'array' or ['string']
type_czech._errorClassName('{}');
//TE@223 - {} is container, not a type/signature. Try 'object' or {a:'string'}
type_czech._errorClassName('unknownClass');
//Type 'unknownClass' is unknown classname and not a scalar
*/
      function _errorClassName(scalar_type) {
        
        const no_spaces = scalar_type.replace(/\s+/g, '');
        let error_string = _looksLikeType(no_spaces);
        if (!error_string) {
          if (no_spaces === '[]') {
            const error_222 = "[] is a container, not a type/signature, try 'array' or ['string']";
            error_string = _consoleError(error_222, 'TE@222');
          } else if (no_spaces === '{}') {
            const error_223 = "{} is container, not a type/signature. Try 'object' or {a:'string'}";
            error_string = _consoleError(error_223, 'TE@223');
          } else {
            const error_202 = `Type '${scalar_type}' is unknown classname and not a scalar`;
            error_string = _consoleError(error_202, 'TE@202');
          }
        }
        
        return error_string;
      }

      /*
type_czech._shapeErrorMess([, , "boolean"], ["super", "man"])
//TE@221 - Element '2' is supposed to be a 'boolean', but is missing : ["super","man"]
*/
      function _shapeErrorMess(shallow_array, check_array) {
        
        const extra_shapes = Object.entries(shallow_array);
        const [extra_index, extra_type] = extra_shapes[0];
        const check_arr_str = _toStr(check_array);
        const error_221 = `Element '${extra_index}' is supposed to be a '${extra_type}', but is missing : ${check_arr_str}`;
        const error_string = _consoleError(error_221, 'TE@221');
        
        return error_string;
      }

      /*
type_czech._shapeContainer([456,789] , ["number"], 'TYPE-EXTRAS', 179);
//""
type_czech._shapeContainer([456,789] , ["is-bad"], 'TYPE-EXTRAS', 179);
//TE@215 - ELEMENT '0' is asserted to be a 'is-bad', but is fallaciously a 'number' : 456
type_czech._shapeContainer({X:33}, {r:'n'}, 'TYPE-EXTRAS', 179);
//TE@216 -  The key 'r', which has a type of 'n', is missing in the checked object
type_czech._shapeContainer({X:33}, {r:'number'}, 'TYPE-EXTRAS', 179);
//TE@216 -  Key 'r', which has a type of 'number', is missing in the checked object
type_czech._shapeContainer({X:33}, {X:'string'}, 'TYPE-EXTRAS', 179);
//TE@213 - Property 'X' is indicated to be a 'string', but is inaccurately a 'number' : 33
type_czech._shapeContainer({r:11}, ["number"], 'TYPE-VERIFY', 179);
//TE@207 - Param is meant to be 'array' but is of the wrong type of 'object':{"r":11}
type_czech._shapeContainer([456,789] , {X:'string'}, 'TYPE-VERIFY', 179);
//TE@207 - Param is meant to be 'object' but is of the wrong type of 'array':[456,789]
type_czech._shapeContainer([[456,789]] , [["number"]], 'TYPE-EXTRAS', 179);
//""
type_czech._shapeContainer( [456,789] , [["number"]], 'TYPE-EXTRAS', 179);
//''
type_czech._shapeContainer( [456,789] , [["number"], ['string']], 'TYPE-EXTRAS', 179);
//''
type_czech._shapeContainer( [[456,789], ['a','b'], 3] , [["number"], ['string'], "boolean"], 'TYPE-EXTRAS', 179);
//TE@214 -  ELEMENT '2' is assumed to be a 'boolean', but is mistakenly a 'number'
type_czech._shapeContainer( {a:1} , [["number"], ['string']], 'TYPE-EXTRAS', 179);
//''
type_czech._shapeContainer( [{a:1}, 'sdf'] , [{a:"number"}, ['string']], 'TYPE-EXTRAS', 179);
//''
type_czech._shapeContainer( [  [1], [2] ] , [["number"], ['number']], 'TYPE-EXTRAS', 179);
//''
type_czech._shapeContainer( [  [[1], [2]], [[1], ['a']] ] , [ [["number"]], [['number']] ], 'TYPE-EXTRAS', 179);
//TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'string'
type_czech._shapeContainer( [  [[1, false], [2, false]], [[1, false], [2, false]] ] , [ [["number", "b"]], [['number', "b"]] ], 'TYPE-EXTRAS', 179);
//''
type_czech._shapeContainer( [  [[1, false], [2, false]], [[1, false], [2, 2]] ] , [ [["number", "b"]], [['number', "b"]] ], 'TYPE-EXTRAS', 179);
//TE@214 -  ELEMENT '1' is assumed to be a 'boolean', but is mistakenly a 'number'
type_czech._shapeContainer({a:[1,2,3]}, {a:'object'}, 'TYPE-EXTRAS', 179);
//TE@207 - Param is meant to be 'object' but is of the wrong type of 'array':[1,2,3]
type_czech._shapeContainer([ 13, 14, 15 ], { r: "number" }, 'TYPE-EXTRAS', 179);
TE@207 - Param is meant to be 'object' but is of the wrong type of 'array':[13,14,15]
*/
      function _shapeContainer(check_container, container_shape, the_type) {
        
        let error_string = '';
        const object_type = _aTypeOf(check_container);
        const shape_type = _aTypeOf(container_shape);
        if (container_shape === undefined) {
          error_string = '';
        } else if (object_type !== shape_type) {
          if (object_type === container_shape) {
            // Here is where we run into {} === 'object'
          } else if (the_type !== TYPE_EXTRAS || shape_type !== 'array') {
            const check_str = _jsonStr(check_container);
            let print_type;
            if (_aTypeOf(container_shape) === 'string') {
              print_type = container_shape;
            } else {
              print_type = shape_type;
            }
            const error_207 = `Param is meant to be '${print_type}' but is`
                        + ` of the wrong type of '${object_type}':${check_str}`;
            error_string = _consoleError(error_207, 'TE@207');
          }
        } else if (shape_type === 'array') {
          // eslint-disable-next-line no-use-before-define
          error_string = _shapeArrayTypes(check_container, container_shape, the_type);
        } else if (shape_type === 'object') {
          // eslint-disable-next-line no-use-before-define
          error_string = _shapeCollectionTypes(check_container, container_shape, the_type);
        }
        
        return error_string;
      }

      /*
type_czech._arrayOfOneType([1,2,3], 'number', 'TYPE-EXTRAS');
//""
type_czech._arrayOfOneType([1,false,3], 'number', 'TYPE-VERIFY');
//TE@215 - ELEMENT '1' is asserted to be a 'number', but is fallaciously a 'boolean' : false
type_czech._arrayOfOneType(["as",false,3], 's', 'TYPE-VERIFY');
//TE@215 - ELEMENT '1' is asserted to be a 'string', but is fallaciously a 'boolean' : false
type_czech._arrayOfOneType('an-str', 'number', 'TYPE-EXTRAS');
//"TE@215 - ELEMENT '0' is asserted to be a 'number', but is fallaciously a 'string' : an-str"
*/
      const _arrayOfOneType = (check_array, array_type, the_type) => {
        
        let error_string = '';
        const type_of_array = _shortToLongType(array_type);
        if (!Array.isArray(check_array)) {
          // eslint-disable-next-line no-param-reassign
          check_array = [check_array];
        }
        check_array.forEach((check_element, element_index) => {
          if (error_string === '') {
            const variable_type = _aTypeOf(check_element);
            if (_isCollection(type_of_array)) {
              // eslint-disable-next-line no-use-before-define
              error_string = _shapeVariable(check_element, type_of_array, the_type);
            } else if (type_of_array !== variable_type) {
              if (OP_UNDEF_OK && variable_type === 'null') {
                // ingore nulls if OP_UNDEF_OK
              } else if (OP_UNDEF_OK && variable_type === 'undefined') {
                // ingore undefined if OP_UNDEF_OK
              } else {
                let error_local = _looksLikeType(type_of_array);
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

      /*
type_czech._wrongType('string', 0, 'date');
//TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'date'
type_czech._wrongType('Noomber', 0, 'number');
//TE@214 -  ELEMENT '0' is assumed to be a 'Noomber', but is mistakenly a 'number'
type_czech._wrongType(null, 2, 'number');
//TE@232 -  ELEMENT '2' type is not a string but instead null
type_czech._wrongType(undefined, 2, 'number');
//TE@232 -  ELEMENT '2' type is not a string but instead undefined
*/
      const _wrongType = (expected_type, element_index, real_type) => {
        
        let error_string = '';
        if (expected_type === 'null') {
          const error_204 = ` ELEMENT '${element_index}' type is 'null'`;
          error_string = _consoleError(error_204, 'TE@204');
        } else if (expected_type === 'undefined') {
          const error_229 = ` ELEMENT '${element_index}' type is 'undefined'`;
          error_string = _consoleError(error_229, 'TE@229');
        } else if (typeof expected_type !== 'string') {
          const bad_type = _toStr(expected_type);
          const error_232 = ` ELEMENT '${element_index}' type is not a string but instead ${bad_type}`;
          error_string = _consoleError(error_232, 'TE@232');
        }
        if (!error_string) {
          error_string = _looksLikeType(expected_type);
          if (!error_string) {
            const error_214 = ` ELEMENT '${element_index}' is assumed to be a '${expected_type}',`
            + ` but is mistakenly a '${real_type}'`;
            error_string = _consoleError(error_214, 'TE@214');
          }
        }
        
        return error_string;
      };

      /*
type_czech._shapeArrayTypes([ 13, 14, 15 ], ['number'], 'TYPE-VERIFY',0);
//""
type_czech._shapeArrayTypes([ 13, 14, 15 ], ['number', 'b', 'd'], 'TYPE-EXTRAS');
//TE@214 -  ELEMENT '1' is assumed to be a 'boolean', but is mistakenly a 'number'
type_czech._shapeArrayTypes(["bob", "newheart", 1 , 2], ["string", "string"], 'TYPE-EXTRAS');
//""
type_czech._shapeArrayTypes([], ['number'], 'TYPE-VERIFY');
//""
*/
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
                    // ingore extras elements at the end of array if we are checking loosely
                  } else if (OP_UNDEF_OK && variable_type === 'null') {
                    // ingore nulls if OP_UNDEF_OK
                  } else if (OP_UNDEF_OK && variable_type === 'undefined') {
                    // ingore undefined if OP_UNDEF_OK
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

      /*
type_czech._shapePropertyType({r:"n"}, 'r', 11);
//""
type_czech._shapePropertyType({r:"not-real"}, 'r', 11);
//TE@210 - The type 'not-real' is not check_type
type_czech._shapePropertyType({r:"n"}, 'r', undefined);
//TE@211 - Key 'r' was given to be a 'number' but is 'undefined'
type_czech._shapePropertyType({r:"n"}, 'r', null);
//TE@212 - Key 'r' was determined to be a 'number' but is 'null'
type_czech._shapePropertyType({r:"n"}, 'r', 'a-string');
//TE@213 - Property 'r' is indicated to be a 'number', but is inaccurately a 'string' : a-string
*/
      const _shapePropertyType = (property_type, property_key, check_variable) => {
        
        let error_string = '';
        const check_type_type = _shortToLongType(property_type[property_key]);
        if (!_isPlainJsType(check_type_type)) {
          error_string = _looksLikeType(check_type_type);
          if (!error_string) {
            const object_str = _jsonStr(check_type_type);
            const error_210 = `Type '${object_str}' is not a real type`;
            error_string = _consoleError(error_210, 'TE@210');
          }
        } else {
          const variable_type = _aTypeOf(check_variable);
          if (check_type_type !== variable_type) {
            if (OP_UNDEF_OK && variable_type === 'null') {
              // ingore nulls if OP_UNDEF_OK
            } else if (OP_UNDEF_OK && variable_type === 'undefined') {
              // ingore undefined if OP_UNDEF_OK
            } else if (typeof check_variable === 'undefined') {
              const error_211 = `Key '${property_key}' was given to be a '${check_type_type}' but is 'undefined'`;
              error_string = _consoleError(error_211, 'TE@211');
            } else if (variable_type === 'null') {
              const error_212 = `Key '${property_key}' was determined to be a '${check_type_type}' but is 'null'`;
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

      /*
type_czech._shapeCollectionTypes({a:123},  {a:"n"}, 'TYPE-VERIFY');
//""
type_czech._shapeCollectionTypes({a:123, b:789},  {a:"n"}, 'TYPE-VERIFY');
//TE@209 - Extra key in checked object - (b:789)
type_czech._shapeCollectionTypes({a:[123], b:[789]},  {a:["n"]}, 'TYPE-VERIFY');
//""
type_czech._shapeCollectionTypes({a:[123], b:[789]},  {a:["s"]}, 'TYPE-VERIFY');
//TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'number'
type_czech._shapeCollectionTypes({ X: 33 }, { r: "n" }, 'TYPE-EXTRAS');
//TE@216 -  Key 'r', which has a type of 'n', is missing in the checked object
*/
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
              let var_obj_str = _jsonStr(check_var_or_obj);
              if (_aTypeOf(check_var_or_obj) === 'string') {
                var_obj_str = `'${var_obj_str}'`;
              }
              const error_209 = `Extra key in checked object - (${check_key}:${var_obj_str})`;
              error_string = _consoleError(error_209, 'TE@209');
            }
          }
        });
        error_string += _missingKey(check_type_shallow);
        
        return error_string;
      }

      /*
type_czech._shapeScalar(17 ,"number");
//""
type_czech._shapeScalar(17 ,"string");
//TE@226 - The value '17', which is a 'number', is not a 'string'
type_czech._shapeScalar({} ,"object");
//""
type_czech._shapeScalar({} ,"capybara");
//TE@202 - Type 'capybara' is wrong classname or not a scalar
type_czech._shapeScalar(undefined, "n");
//TE@206 - The value 'undefined', is not a 'number'
type_czech._shapeScalar(null, "n");
//TE@226 - The value 'null', which is a 'null', is not a 'number'
type_czech._shapeScalar(4, 'null');
//TE@203 - The type 'null' is not a valid check_type(), check_typeEither(), or check_typeExtra() 2nd parameter type
*/
      function _shapeScalar(actual_value, expected_type) {
        
        const expected_long_type = _shortToLongType(expected_type);
        let error_string = '';
        if (expected_long_type === 'null' || expected_long_type === 'undefined') {
          const error_203 = `The type '${expected_long_type}' is not a valid check_type(), `
                          + 'check_typeEither(), or check_typeExtra() 2nd parameter type';
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
            const error_225 = `The value [], an 'array', is not a '${expected_long_type}'`;
            error_string = _consoleError(error_225, 'TE@225');
          } else if (variable_type === 'object') {
            const error_208 = `The value {}, an 'object', is not a '${expected_long_type}'`;
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

      /*
type_czech._shapeVariable([456,789] , ["number"], 'TYPE-EXTRAS');
//""

type_czech._shapeVariable([[456,789]] , [["number"]], 'TYPE-EXTRAS');
//""

type_czech._shapeVariable(17 ,"number", 'TYPE-VERIFY');
//""

type_czech._shapeVariable(17 ,"string", 'TYPE-VERIFY');
//IE@502 - The variable '17', which is a 'number', is not a 'string'

type_czech._shapeVariable({a:123, b:456}, {a:"number", b:"string"}, 'TYPE-VERIFY');
//TE@213 - Property 'b' is indicated to be a 'string', but is inaccurately a 'number' : 456

type_czech._shapeVariable(['hello', 'there'] , ["string"], 'TYPE-VERIFY');
//''
*/
      function _shapeVariable(check_variable, variable_type, the_type) {
        
        let error_string;
        if (_isCollection(variable_type)) {
          error_string = _shapeContainer(check_variable, variable_type, the_type);
        } else {
          error_string = _shapeScalar(check_variable, variable_type);
        }
        
        return error_string;
      }

      /*
type_czech._emptyErrorMess(['EMPTY-ERROR', 'EMPTY-OK'], ['first', 'middle', 'last']);
//EE@310 - ELEMENT '0' is promised to be a 'EMPTY-ERROR', but is missing : ["first","middle","last"]
*/
      function _emptyErrorMess(shallow_array, check_array) {
        
        let error_string;
        if (shallow_array.length === 0) {
          const error_316 = "Array with no empty type elems, [], should have at least one, like ['EMPTY-ERROR']";
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

      /*
type_czech._emptyError('EMPTY-ERROR', 'a-string', 0, ['a-string', 17], 'string', 'EMPTY-VERIFY');
//""
type_czech._emptyError('EMPTY-ERROR', '', 0, ['', 17], 'string', 'EMPTY-VERIFY');
//EE@311 - ELEMENT '0' is erroneously empty :
type_czech._emptyError('EMPTY-ERROR', false, 0, [false, 17], 'boolean', 'EMPTY-VERIFY');
//''
type_czech._emptyError('bad-EMPTY', 'a-string', 0, ['a-string', 17], 'string', 'EMPTY-VERIFY');
//EE@312 - ELEMENT '0' is incorrect type, 'bad-EMPTY', only [ER,EMPTY-ERROR,EMPTY-OK,OK,EMPTY-IGNORE,IG] allowed : ["a-string",17]
*/
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
          // eslint-disable-next-line no-use-before-define
          error_string = _emptyContainer(check_array[element_index], empty_type, the_type);
        } else if (_aTypeOf(empty_type) === 'string') {
          const error_312 = `ELEMENT '${element_index}' is incorrect type, '${empty_type}', only`
                      + ` [ER,EMPTY-ERROR,EMPTY-OK,OK,EMPTY-IGNORE,IG] allowed : ${check_str}`;
          error_string = _consoleError(error_312, 'EE@312');
        } else {
          // eslint-disable-next-line no-use-before-define
          error_string = _emptyContainer(check_array[element_index], empty_type, the_type);
        }
        
        return error_string;
      }

      /*
type_czech._emptyArrayInArray([[11], [13], [17]], ["ER"], 'EMPTY-VERIFY');
//""
type_czech._emptyArrayInArray([[11], [NaN], [17]], ["ER"], 'EMPTY-VERIFY');
//EE@311 - ELEMENT '0' is erroneously empty :  inside [1]
type_czech._emptyArrayInArray([["a-s", "", "c-s"], ["x-s",  "y-s", "z-s"]],   ["ER", "ER", "ER"], 'EMPTY-VERIFY');
//
type_czech._emptyArrayInArray([["a-s", "", "c-s"], ["x-s",  "y-s", "z-s"]],   [["ER", "ER", "ER"]], 'EMPTY-VERIFY');
//EE@307 - EMPTY-ERROR states 'string' must not be empty for the value ''
*/
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
                // eslint-disable-next-line no-use-before-define
                error_string = _emptyContainer(element, array_type, the_type);
              } else {
                // eslint-disable-next-line no-use-before-define
                error_string = _emptyContainer(element, array_type[array_index], the_type);
              }
            }
          });
        }
        
        return error_string;
      };

      function emptyArrayEmptyError(check_str) {
        const error_403 = `Param array ${check_str} is empty`;
        const error_string = _consoleError(error_403, 'ME@403');
        return error_string;
      }

      function emptyArrayElementsError(check_str, array_shape, check_length, shape_length) {
        const shape_str = _jsonStr(array_shape);
        const error_404 = `Param array ${check_str} does not have the same number of elems as ${shape_str}. `
                      + ` Different lengths ${check_length} !== ${shape_length}`;
        const error_string = _consoleError(error_404, 'ME@404');
        return error_string;
      }

      function emptyArrayNotArrayError(check_array, check_array_type, check_str) {
        const error_313 = `Variable '${check_array}' must be an array but is a '${check_array_type}', : ${check_str}`;
        const error_string = _consoleError(error_313, 'EE@313');
        return error_string;
      }

      /*
type_czech._arrayOfOneShape([1,2,3], 'EMPTY-ERROR', 'EMPTY-EXTRAS');
//""
type_czech._arrayOfOneShape([1, [ 1],3], 'EMPTY-ERROR', 'EMPTY-EXTRAS');
//""
type_czech._arrayOfOneShape([ [1,1], [2,2], [3,3] ], ['EMPTY-ERROR', 'EMPTY-OK'], 'EMPTY-EXTRAS');
//""
type_czech._arrayOfOneShape( [ [1,1], [2,2], ['', 3] ], ['EMPTY-ERROR', 'EMPTY-OK'], 'EMPTY-EXTRAS');
//EE@311 - ELEMENT '0' is erroneously empty :
*/
      const _arrayOfOneShape = (check_array, array_type, the_type) => {
        
        let error_string = '';
        const empty_of_array = _shortToLongEmpty(array_type);
        if (!Array.isArray(check_array)) {
          // eslint-disable-next-line no-param-reassign
          check_array = [check_array];
        }
        check_array.forEach((check_element, element_index) => {
          if (error_string === '') {
            const variable_empty = _isEmpty(check_element);
            if (_isCollection(empty_of_array)) {
              // eslint-disable-next-line no-use-before-define
              error_string = _emptyContainer(check_element, empty_of_array, the_type);
            } else if (variable_empty && empty_of_array === 'EMPTY-ERROR') {
              if (OP_UNDEF_OK && variable_empty === 'null') {
                // ingore nulls if OP_UNDEF_OK
              } else if (OP_UNDEF_OK && variable_empty === 'undefined') {
                // ingore undefined if OP_UNDEF_OK
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

      /*
type_czech._emptyArrayTypes([ 13, 14, 15 ], ['EMPTY-ERROR'], '_emptyArrayTypes');
//''
type_czech._emptyArrayTypes([ [13, [99]], 14, 15 ], ['EMPTY-ERROR'], '_emptyArrayTypes');
//''
type_czech._emptyArrayTypes([17], ['EMPTY-ERROR'], 'EMPTY-VERIFY');
//""
type_czech._emptyArrayTypes(['first', 'middle', ''], ['EMPTY-ERROR', 'EMPTY-OK', 'EMPTY-ERROR'], 'EMPTY-VERIFY');
//"EE@311 - ELEMENT '2' is erroneously empty :"
type_czech._emptyArrayTypes(['first', 'middle', 'last'], ['EMPTY-ERROR', "EMPTY-OK"], 'EMPTY-VERIFY');
//ME@404 - The parameter array ['first','middle','last'] does not have the same number of elements as ['EMPTY-ERROR','EMPTY-OK'].  Lengths are different 3 !== 2.
type_czech._emptyArrayTypes([''], ['EMPTY-OK', 'EMPTY-ERROR'], 'EMPTY-EXTRAS');
//""
type_czech._emptyArrayTypes(['', ''], ['EMPTY-OK', 'EMPTY-ERROR'], 'EMPTY-EXTRAS');
//EE@311 - ELEMENT '1' is erroneously empty :
type_czech._emptyArrayTypes(['an-str', 'an-str'], ['EMPTY-OK', 'EMPTY-ERROR'], 'EMPTY-EXTRAS');
//""
type_czech._emptyArrayTypes([],["EMPTY-ER"],"EMPTY-VERIFY");
//ME@403 - The parameter array [] is empty.
*/
      const _emptyArrayTypes = (check_array, array_shape, the_type) => {
        
        let error_string = '';
        if (!Array.isArray(check_array)) {
          // eslint-disable-next-line no-param-reassign
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
                    // eslint-disable-next-line no-use-before-define
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

      /*
type_czech._emptyKeysChecked('EMPTY-ERROR', 0, 'var-or-key-name');
//''
type_czech._emptyKeysChecked('EMPTY-ERROR', true, 'var-or-key-name');
//EE@302 - Type cannot be empty 'var-or-key-name' EMPTY-ER is a true :: boolean
type_czech._emptyKeysChecked('is_-RONG', true, 'var-or-key-name');
//EE@303 - Bad empty type key, 'is_-RONG', must be either 'EMPTY-OK','EMPTY-ER','EMPTY-IG','OK','ER','IG'
type_czech._emptyKeysChecked('EMPTY-ERROR', {}, 'var-or-key-name');
//EE@301 -  key 'var-or-key-name' is a 'object' which is reputed to be 'EMPTY-ERROR' but has a value of {}
*/
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
            const error_302 = `Type cannot be empty '${check_key}' ${long_empty} is a ${var_str} :: ${current_type}`;
            error_string = _consoleError(error_302, 'EE@302');
          }
        } else if (long_empty !== EMPTY_OK && long_empty !== EMPTY_IG) {
          const error_303 = `Bad empty type key, '${_toStr(long_empty)}', must be either 'EMPTY-OK','EMPTY-ER','EMPTY-IG','OK','ER','IG'`;
          error_string = _consoleError(error_303, 'EE@303');
        }
        
        return error_string;
      };

      /*
type_czech._emptyCollectionTypes({ r: '' }, { r: 'ER' }, 'EMPTY-VERIFY');
//EE@301 -  key 'r' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''

type_czech._emptyCollectionTypes({ r: 11 }, { r: 'ER' }, 'EMPTY-VERIFY');
//""

type_czech._emptyCollectionTypes([[]], [['ER']], 'EMPTY-VERIFY');
//EE@309 - Key '0' was understood to be 'EMPTY-ERROR' but was rather '[]'

type_czech._emptyCollectionTypes([1,2], ["ER"], 'EMPTY-VERIFY');
//EE@315 - Extra key in checked object - (1:2)

type_czech._emptyCollectionTypes([1,'2'], ["ER"], 'EMPTY-VERIFY');
//EE@315 - Extra key in checked object - (1:'2')

type_czech._emptyCollectionTypes([1,2], ["ER"], 'EMPTY-EXTRAS');
//""
*/
      const _emptyCollectionTypes = (check_object, object_shape, the_type) => {
        
        let error_string = '';
        const check_type_shallow = { ...object_shape };
        if (_isCollection(check_object)) {
          const check_entries = Object.entries(check_object);
          check_entries.forEach((empty_entry) => {
            if (error_string === '') {
              const [check_key, check_var_or_obj] = empty_entry;
              let var_obj_str = _jsonStr(check_var_or_obj);
              const empty_choice = _shortToLongEmpty(check_type_shallow[check_key]);
              if (_isCollection(check_var_or_obj)) {
                const correct_empty = object_shape[check_key];
                const long_empty = _shortToLongEmpty(correct_empty);
                if (_isEmpty(check_var_or_obj) && long_empty === 'EMPTY-ERROR') {
                  const error_26 = `Key '${check_key}' was understood to be '${long_empty}' but was rather '${var_obj_str}'`;
                  error_string = _consoleError(error_26, 'EE@309');
                } else {
                  // eslint-disable-next-line no-use-before-define
                  error_string += _emptyContainer(check_object[check_key], long_empty, the_type);
                }
                delete check_type_shallow[check_key];
              } else if (Object.prototype.hasOwnProperty.call(check_type_shallow, check_key)) {
                error_string = _emptyKeysChecked(empty_choice, check_var_or_obj, check_key);
                delete check_type_shallow[check_key];
              } else if (the_type === EMPTY_VERIFY) {
                if (_aTypeOf(check_var_or_obj) === 'string') {
                  var_obj_str = `'${var_obj_str}'`;
                }
                const error_27 = `Extra key in checked object - (${check_key}:${var_obj_str})`;
                error_string = _consoleError(error_27, 'EE@315');
              }
            }
          });
        }
        error_string += _missingKey(check_type_shallow);
        
        return error_string;
      };

      /*
type_czech._emptyContainer(["a-string"], ['EMPTY-ERROR'], 'EMPTY-VERIFY');
//""
type_czech._emptyContainer([""], ['EMPTY-ERROR'], 'EMPTY-VERIFY');
//EE@311 - ELEMENT '0' is erroneously empty :
type_czech._emptyContainer({zero:0}, ['EMPTY-ERROR'], 'EMPTY-VERIFY');
//EE@314 - Variable {zero:0} must be an array but is instead a 'object', : {zero:0}
type_czech._emptyContainer([''], ['EMPTY-OK', 'EMPTY-ERROR'], 'EMPTY-EXTRAS');
//''

type_czech.check_empty([''], ['EMPTY-OK', 'EMPTY-ERROR']);
//check_empty()
//ME@404 - Param array [""] does not have the same number of elems as ["EMPTY-OK","EMPTY-ERROR"].  Different lengths 1 !== 2
//['EMPTY-OK', 'EMPTY-ERROR']
*/
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
          // eslint-disable-next-line no-use-before-define
          error_string = _emptyScalar(check_container, empty_type);
        }
        
        return error_string;
      }

      /*
type_czech._emptyScalar(0, 'EMPTY-ERROR');
//''
type_czech._emptyScalar(true, 'EMPTY-ERROR');
//''
type_czech._emptyScalar(true, 'an-ERROR');
//EE@304 - Must 'EMPTY-OK' or 'EMPTY-ERROR' not 'an-ERROR'
*/
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
                // eslint-disable-next-line no-param-reassign
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

      /*
type_czech._emptyVariable(17, 'EMPTY-ERROR', 'EMPTY-VERIFY');
//""
type_czech._emptyVariable(0, 'EMPTY-ERROR', 'EMPTY-VERIFY');
//''
type_czech._emptyVariable(["a-string"], ['EMPTY-ERROR'], 'EMPTY-VERIFY');
//""
type_czech._emptyVariable([""], ['EMPTY-ERROR'], 'EMPTY-VERIFY');
//EE@311 - ELEMENT '0' is erroneously empty :
type_czech._emptyVariable({zero:0}, ['EMPTY-ERROR'], 'EMPTY-VERIFY');
//EE@314 - Variable {zero:0} must be an array but is instead a 'object', : {zero:0}
*/
      function _emptyVariable(check_variable, variable_type, the_type) {
        
        let error_string;
        if (_isCollection(variable_type)) {
          error_string = _emptyContainer(check_variable, variable_type, the_type);
        } else {
          error_string = _emptyScalar(check_variable, variable_type);
        }
        
        return error_string;
      }

      /*
type_czech._emptyCheck([12, false, 'a string'], ['EMPTY-OK'], 'EMPTY-VERIFY');
//EE@305 - Pointless as ['EMPTY-OK'] matches all
*/
      function _emptyCheck(check_variable, variable_type, the_type) {
        
        let error_string;
        if (variable_type.length === 1 && (variable_type[0] === EMPTY_OK || variable_type[0] === 'OK')) {
          const error_305 = "Pointless as ['EMPTY-OK'] matches all";
          error_string = _consoleError(error_305, 'EE@305');
        } else {
          error_string = _emptyVariable(check_variable, variable_type, the_type);
        }
        
        return error_string;
      }

      /*
type_czech._doEitherEmpty([[12, 0, 'not-checked'], [['ER','ER'],['ER','OK']]], 'EMPTY-EXTRAS');
//""
type_czech._doEitherEmpty([['',12], [['ER','ER'],['ER','OK']]], 'EMPTY-VERIFY');
//EE@311 - ELEMENT '0' is erroneously empty :
*/
      function _doEitherEmpty(type_parameters, the_type) {
        
        const [check_variable, empty_types] = type_parameters;
        let error_string = '';
        let empty_error = '';
        let found_empty = false;
        empty_types.forEach((empty_type) => {
          let check_empty_type = empty_type;
          if (empty_type === 'string') {
            // NB This function deals in arrays. So a type of single 'string' must be changed into a ['string'].
            //    But this must be checked by ensuring that there is only one element.
            //    Same as _doEitherShape(), 'string' means one string, ['string'] means a plain array of strings.
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

      /*
type_czech._doEitherShape([  {"X":"an-str","Y":1234},   [{"X":"s","Y":"s"},{"X":"s","Y":"n"}]  ], "TYPE-VERIFY");
//""
type_czech._doEitherShape([  {"X":"an-str","Y":1234},   [{"X":"s","Y":"s"},{"X":"s","Y":"d"}]  ], "TYPE-VERIFY");
//TE@213 - Property 'Y' is indicated to be a 'string', but is inaccurately a 'number' : 1234, TE@213 - Property 'Y' is indicated to be a 'date', but is inaccurately a 'number' : 1234
*/
      function _doEitherShape(type_parameters, the_type) {
        
        const [check_variable, var_types_shapes] = type_parameters;
        const shape_errors = [];
        let error_string;
        let found_shape = false;
        var_types_shapes.forEach((var_type) => {
          
          
          let variable_type = var_type;
          if (var_type === 'string') {
            // NB This function deals in arrays. So a type of single 'string' must be changed into a ['string'].
            //    But this must be checked by ensuring that there is only one element.
            //    Same as _doEitherEmpty(), 'string' means one string, ['string'] means a plain array of strings.
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
            error_string = `${first_error}, ${last_error}, plus ${shape_errors.length} more Either errors`;
          }
        }
        
        return error_string;
      }

      /*
type_czech._specParameters(["UNDEF-OK", "DEBUG-CONSOLE-TRACE", "what" ]);
//Uncaught EX@107 - Not THROW-EXCEPTIONS/LOG-ERRORS/UNDEF-OK/DEBUG-CONSOLE-TRACE/NO-CHECKING, unknown : what
*/
      function _specParameters(the_commands) {
        
        let the_options = the_commands;
        const first_param = the_commands[0];
        if (Array.isArray(first_param)) {
          the_options = first_param;
        }
        the_options.forEach((a_parameter) => { // option order is not important
          if (typeof a_parameter === 'object') {
            t_check_events = a_parameter;
          } else if (a_parameter === 'UNDEF-OK') {
            OP_UNDEF_OK = 'UNDEF-OK';
          } else if (a_parameter === 'DEBUG-CONSOLE-TRACE') {
            OP_DEBUG_CONSOLE_TRACE = 'DEBUG-CONSOLE-TRACE';
          } else if (a_parameter === 'THROW-EXCEPTIONS') {
            OP_THROW_EXCEPTIONS = 'THROW-EXCEPTIONS';
          } else if (a_parameter === 'NO-ERROR-MESSAGES') { // for testing, so don't get a million error messages in console
            OP_NO_ERROR_MESSAGES = 'NO-ERROR-MESSAGES';
          } else if (a_parameter === 'LOG-ERRORS') {
            OP_LOG_ERRORS = 'LOG-ERRORS';
          } else if (a_parameter === 'CONSOLE-COUNT') {
            OP_CONSOLE_COUNT = 'CONSOLE-COUNT';
          } else if (a_parameter === 'NO-CHECKING') {
            // this is the same as '', or nothing, but more informative
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

      /*
type_czech._twoArrays([ 'not-object', {an_object:'Boaty-McBoatFace'} ], 'fail-2');
//TE@201 - fail-2() called with '{}' against '!{}'. Contrasting a string type of value not-object, with '{\"an_object\":\"Boaty-McBoatFace\"}' an object !!! string <> object
type_czech._twoArrays([12, 'var-type-as-string'], 'ok-1');
//''
type_czech._twoArrays([['a-string'], 'string'], 'methodName');
//''

type_czech._twoArrays([ 'not-array', ['an-array'] ], 'fail-1');
//undefined
//TE@217 - Comparing 'string' parameter, with a value of not-array, in relation to expected shape of [\"an-array\"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'string's. Or same object keys
//["an-array"]

type_czech._twoArrays([       'a-string', ['string']            ], 'methodName');
//undefined
//TE@217 - Comparing 'string' parameter, with a value of a-string, in relation to expected shape of [\"string\"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'string's. Or same object keys
//['string']
*/
      function notArrayShape(parameters_list, shape_str) {
        
        const params_string = _toStr(parameters_list);
        const long_shape = _shortToLongType(shape_str);
        const error_219 = 'Comparing [] parameter, with a'
            + ` value of ${params_string}, against expected shape of ${long_shape}. They should be the same type.`
            + ` You cannot compare an array with a non-array; both []s, or both ${long_shape}s`;
        
        return error_219;
      }

      function notArrayType(parameters_list, param_type, shape_str) {
        
        const params_string = _toStr(parameters_list);
        const long_shape = _shortToLongType(shape_str);
        const error_217 = `Comparing '${param_type}' parameter,`
          + ` with a value of ${params_string}, in relation to expected shape of ${long_shape}. They should be the`
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
          err_mess = `${method_name}() called with 1st param of ${parameter_str} and 2nd shape param of undefined`;
          error_label = 'TE@218';
        } else if (shape_list === null) {
          err_mess = `${method_name}() called with 1st param of ${parameter_str} and 2nd shape param of null`;
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
          const error_401 = `${method_name}() has 2 argu-ments not ${list_of_2.length}`;
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
                const error_409 = 'There are no params to match array signature.';
                error_str_3arr = paramError(error_409, 'ME@409', shape_str, message_type_empty);
              }
              // no errors
            } else if (shape_type === 'object') {
              if (parameter_type !== 'object') {
                const error_201 = `${method_name}() called with '{}' against '!{}'.`
                + ` Contrasting a ${parameter_type} type of value ${param_value}, with '${shape_str}' an ${shape_type}`
                + ` !!! ${parameter_type} <> ${shape_type}`;
                error_str_3arr = _consoleError(error_201, 'TE@201');
              }
            } else if (shape_type !== 'string') {
              const error_224 = `${method_name}() called with 2nd param not a string such as 'number'.`
                          + ` Matching '${param_value}' with '${shape_str}'.`
                          + ` Preferably try ${method_name}(12, 'number')`;
              error_str_3arr = _consoleError(error_224, 'TE@224');
            }
          }
        }
        
        return error_str_3arr;
      }

      /*
type_czech._eitherChecks([1], 'fail-99');
//ME@406 - fail-99() needs 2 parameters, not 1
type_czech._eitherChecks([1, 2], 'fail-98');
//ME@402 - fail-98() called with a 2nd parameter as a non-array shape of 2
type_czech._eitherChecks([1, [2]], 'fail-97');
//UE@701 - fail-97()  needs at least 2 choices for an Either, not 1 of [2]
type_czech._eitherChecks([1, [2, 3]], 'pass-96');
//""
type_czech._eitherChecks(['a-str-or-num', ['string', 'number']], 'pass-95');
//""
type_czech._eitherChecks(['a-str-or-num-or-date', ['string', 'number', 'date']], 'pass-94');
//""
type_czech._eitherChecks([           ['a-str', 12345],   [  ['string','number'],['string','date']  ]              ], 'pass-93');
//""
type_czech._eitherChecks([   ['a-str', new Date('june 4, 1999')],   [  ['string','number'],['string','date']  ]              ], 'pass-92');
//""
*/
      function _eitherChecks(parameters_shapes, method_name) {
        
        let error_string = '';
        if (parameters_shapes.length !== 2) {
          const error_406 = `${method_name}() needs 2 parameters, not ${parameters_shapes.length}`;
          error_string = _consoleError(error_406, 'ME@406');
        } else {
          const shapes_lists = parameters_shapes[1];
          const exact_str = _jsonStr(shapes_lists);
          if (_aTypeOf(shapes_lists) !== 'array') {
            const error_402 = `${method_name}() called with a 2nd parameter`
                          + ` as a non-array shape of ${exact_str}`;
            error_string = _consoleError(error_402, 'ME@402');
          } else if (shapes_lists.length < 2) {
            const shapes_lists_str = _toStr(shapes_lists);
            const error_701 = `${method_name}()  needs at least 2 choices for an Either, not ${shapes_lists.length} of ${shapes_lists_str}`;
            error_string = _consoleError(error_701, 'UE@701');
          }
        }
        
        return error_string;
      }

      function isVariadic(parameters_obj, shape_list, one_param) {
        
        let is_variadic = false;
        if (!one_param) {
          if (!Array.isArray(parameters_obj)) { // NB not check_type(arguments, ...) but check_type([a,c], ...)
            if (Array.isArray(shape_list)) {
              if (shape_list.length === 1) {
                is_variadic = true;
              }
            }
          }
        }
        
        return is_variadic;
      }

      /*
type_czech.check_empty([12, 'a-string', false], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR']);
//''
type_czech.check_empty(['a', 'b', 'c'], ['EMPTY-ERROR']);
//""
type_czech.check_empty([12, [], 'a-string'], ['EMPTY-ERROR', 'EMPTY-OK', 'EMPTY-ERROR']);
//""
type_czech.check_empty({}, 'EMPTY-OK');
//

type_czech.check_empty([12, [], 'a-string'], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR']);
//check_empty()
//EE@311 - ELEMENT '1' is erroneously empty :
//['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR']

type_czech.check_empty([], ['EMPTY-ERROR']);
//check_empty()
//ME@403 - Param array [] is empty
//['EMPTY-ERROR']

type_czech.check_empty([], ['EMPTY-OK']);
//check_empty()
//EE@305 - Pointless as ['EMPTY-OK'] matches all
//['EMPTY-OK']

type_czech.check_empty(null, 'EMPTY-ERROR');
//check_empty()
//EE@308 - A 'null' cannot be empty, so the state of 'EMPTY-ERROR' is illegal for the value 'null'
//'EMPTY-ERROR'
*/
      // eslint-disable-next-line consistent-return
      function check_empty(parameters_obj, shape_list) {
        if (t_param_check_func.p_call_traps) {
          
          // eslint-disable-next-line no-unused-vars
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

      /*
type_czech.check_emptyVariadic('a', 'EMPTY-ERROR');
//check_emptyVariadic()
//VE@605 - Use check_emptyVariadic(a, ['EMPTY-ERROR']') instead of check_emptyVariadic(a, 'EMPTY-ERROR')
//EMPTY-ERROR

type_czech.check_emptyVariadic(['a', 'b'], 'EMPTY-ERROR');
//check_emptyVariadic()
//VE@605 - Use check_emptyVariadic(["a","b"], ['EMPTY-ERROR']') instead of check_emptyVariadic(["a","b"], 'EMPTY-ERROR')
//EMPTY-ERROR
type_czech.check_emptyVariadic(["a","b"], ['EMPTY-ERROR']);
//''

type_czech.check_emptyVariadic(['a', 99], ['EMPTY-ERROR', 'EMPTY-OK']);
//check_emptyVariadic()
//VE@606 - Use check_empty(["a",99], ["EMPTY-ERROR","EMPTY-OK"]) instead of check_emptyVariadic()
//Array [ "EMPTY-ERROR", "EMPTY-OK" ]
type_czech.check_empty(["a",99], ["EMPTY-ERROR","EMPTY-OK"])
//'

type_czech.check_emptyVariadic(['a', 'b','c'], ['EMPTY-ERROR']);
//""
*/
      // eslint-disable-next-line consistent-return
      function check_emptyVariadic(parameters_obj, shape_list) {
        if (t_param_check_func.p_call_traps) {
          
          // eslint-disable-next-line no-unused-vars, prefer-const
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

      /*
type_czech.check_type({}, 'an-object');
//check_type()
//TE@202 - Type 'an-object' is wrong classname or not a scalar
//an-object

type_czech.check_type({cyl:4, fuel:"gasoline", snuck:"extra"}, {cyl:"number", fuel:"string"});
//check_type()
//TE@209 - Extra key in checked object - (snuck:'extra')
//{cyl:\"number\",fuel:\"string\"}

type_czech.check_type({cyl:4, fuel:"gasoline"}, {cyl:"number", fuel:"string", snuck:"boolean"});
//check_type()
//TE@216 - The key 'snuck', which has a type of 'boolean', is missing in the checked object
//{cyl:\"number\",fuel:\"string\",snuck:\"boolean\"}

type_czech.check_type([1,2,3], ["n", "n"]);
//check_type()
//TE@232 -  ELEMENT '2' type is not a string but instead undefined
//["n", "n"]

type_czech.check_type([1,2], ["n", "n", "n"]);
//check_type()
//TE@221 - Element '2' is supposed to be a 'n', but is missing : [1,2]
//["n", "n", "n"]

type_czech.check_type([[['a']]], [["n"]]);
//check_type()
//TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'array'
//[['n']]

type_czech.check_type('a-string', ['string']);
//check_type()
//TE@217 - Comparing 'string' parameter, with a value of a-string, in relation to expected shape of [\"string\"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'string's. Or same object keys
//['string']

type_czech.check_type([1,2,3], ["n", "n", "n"]);
//""
type_czech.check_type({cyl:4, fuel:"gasoline"}, {cyl:"number", fuel:"string"});
//""
type_czech.check_type([], 'array');
//""
type_czech.check_type({}, 'object');
//""
type_czech.check_type(['a', 'b', 'c'], ['string']);
//""
type_czech.check_type(['a','b','c'], ['string']);
//''
type_czech.check_type(['a', 'c'], ['string']);
//''
type_czech.check_type(['a'], ['string']);
//''
type_czech.check_type('a', 'string');
//''
*/
      // eslint-disable-next-line consistent-return
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

      /*
type_czech.check_typeVariadic('a', 'string');
//check_typeVariadic()
//VE@601 - Use check_typeVariadic(a, ['string']') instead of check_typeVariadic(a, 'string')
//"string"

type_czech.check_typeVariadic(['a','b'], 'string');
//check_typeVariadic()
//VE@601 - Use check_typeVariadic(['a','b'], ['string']') instead of check_typeVariadic(['a','b'], 'string')
//"string"

type_czech.check_typeVariadic(['a', 99], ['string', 'number']);
//check_typeVariadic()
//VE@602 - Use check_type(['a',99], ['string','number']') instead of check_typeVariadic()
//Array [ "string", "number" ]

type_czech.check_typeVariadic('a', ['string']);
//''
type_czech.check_typeVariadic(['a', 'b','c'], ['string']);
//""
*/
      // eslint-disable-next-line consistent-return
      function check_typeVariadic(parameters_obj, shape_list) {
        if (t_param_check_func.p_call_traps) {
          
          // eslint-disable-next-line no-unused-vars, prefer-const
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
        
        // eslint-disable-next-line no-unused-vars
        const [parameters_array, _no_parameters, _one_param] = _getParameters(parameters_obj);
        let error_str_3arr;
        
        const type_error = _emptyCheck(parameters_array, shape_list, EMPTY_EXTRAS);
        if (type_error) {
          error_str_3arr = error3Array(MESS_EMPTY_EXTRAS, type_error, shape_list);
        } else {
          error_str_3arr = '';
        }
        
        return error_str_3arr;
      }

      /*
type_czech.check_emptyExtra([17, 'c'], 'EMPTY-ERROR');
//check_emptyExtra()
//TE@31 - check_emptyExtra([17,"c"], EMPTY-ERROR) needs 2 collections to work
//EMPTY-ERROR

type_czech.check_emptyExtra([17, 'c'], ['EMPTY-ERROR']);
//check_emptyExtra()
//TE@235 - check_emptyExtra([17,"c"], ["EMPTY-ERROR"]) try [EMPTY-ERROR, EMPTY-ERROR] as ["EMPTY-ERROR"] is prohibited.
//['EMPTY-ERROR']
type_czech.check_empty([17,"c"], ["EMPTY-ERROR"])
//''

type_czech.check_emptyExtra(17, ['EMPTY-ERROR', 'EMPTY-ERROR']);
//check_emptyExtra()
//EE@317 - check_emptyExtra(17, [\"EMPTY-ERROR\",\"EMPTY-ERROR\"]) needs 2 arrays to work
//['EMPTY-ERROR', 'EMPTY-ERROR']

type_czech.check_emptyExtra({a:17}, {a:'EMPTY-ERROR'});
//''
type_czech.check_emptyExtra([17, 'abc', true], ['EMPTY-ERROR', 'EMPTY-ERROR']);
//''
*/
      // eslint-disable-next-line consistent-return
      function check_emptyExtra(parameters_obj, shape_list) {
        if (t_param_check_func.p_call_traps) {
          
          const params_collection = _isCollection(parameters_obj);
          const shape_collection = _isCollection(shape_list);
          let error_str_3arr;
          const shape_str = _toStr(shape_list);
          // eslint-disable-next-line no-unused-vars
          const [parameters_array, _no_parameters, _one_param] = _getParameters(parameters_obj);
          const parameters_str = _toStr(parameters_array);
          if (Array.isArray(shape_list) && shape_list.length === 1) {
            const try_instead = `try check_empty(${parameters_str}, ${shape_str})`;
            let error_235 = `check_emptyExtra(${parameters_str}, ${shape_str}) ${try_instead} as ${shape_str} is prohibited.`;
            error_235 = _consoleError(error_235, 'TE@235');
            error_str_3arr = error3Array(MESS_TYPE_EXTRAS, error_235, shape_list);
          } else if (params_collection && shape_collection) {
            
            if (typeFinal(shape_list) === 'string') {
              error_str_3arr = extraEmptys(parameters_obj[0], shape_list);
            } else if (typeFinal(shape_list) === 'object') {
              error_str_3arr = extraEmptys(parameters_obj, shape_list);
            } else if (_aTypeOf(parameters_array) !== 'array' || _aTypeOf(shape_list) !== 'array') {
              let error_317 = `check_emptyExtra(${parameters_str}, ${shape_str}) needs 2 arrays to work`;
              error_317 = _consoleError(error_317, 'EE@317');
              error_str_3arr = error3Array(MESS_EMPTY_EXTRAS, error_317, shape_list);
            } else if (parameters_array.length < 2 || shape_list.length < 2) {
              let error_318 = `check_emptyExtra(${parameters_str}, ${shape_str}) needs each array to have at least 2 types to work`;
              error_318 = _consoleError(error_318, 'EE@318');
              error_str_3arr = error3Array(MESS_EMPTY_EXTRAS, error_318, shape_list);
            } else {
              error_str_3arr = extraEmptys(parameters_obj, shape_list);
            }
          } else {
            const para_obj_str = _toStr(parameters_obj);
            let error_231 = `check_emptyExtra(${para_obj_str}, ${shape_str}) needs 2 collections to work`;
            error_231 = _consoleError(error_231, 'TE@31');
            error_str_3arr = error3Array(MESS_EMPTY_EXTRAS, error_231, shape_list);
          }
          
          return error_str_3arr;
        }
      }

      function extraTypes(parameters_obj, shape_list) {
        
        // eslint-disable-next-line no-unused-vars
        const [parameters_array, _no_parameters, _one_param] = _getParameters(parameters_obj);
        let error_str_3arr;
        const type_error = _shapeVariable(parameters_array, shape_list, TYPE_EXTRAS);
        
        if (type_error) {
          error_str_3arr = error3Array(MESS_TYPE_EXTRAS, type_error, shape_list);
        } else {
          error_str_3arr = '';
        }
        
        return error_str_3arr;
      }

      /*
type_czech.check_typeExtra([17], ['number', 'number']);
//check_typeExtra()
//TE@228 - check_typeExtra([17], ["number","number"]) needs each array to have at least 2 types to work
//['number','number']

type_czech.check_typeExtra([17, 'abc'], ['number']);
//check_typeExtra()
//TE@234 - check_typeExtra([17,"abc"], ["number"]) try check_type([number, number], ["number"]) as ["number"] is illegal.
// "['number']"
type_czech.check_type([17, 12], ['number']);

type_czech.check_typeExtra([1,2], ["n", "n", "n"]);
//check_typeExtra()
//TE@221 - Element '2' is supposed to be a 'n', but is missing : [1,2]
//['n','n','n']

type_czech.check_typeExtra([17, 'abc'], ['n', 's']);
//''
type_czech.check_typeExtra(['a-string', 17, false], ['s', 'n']);
//''
type_czech.check_typeExtra([1,2,3], ["n", "n"]);
//''
type_czech.check_typeExtra([1,2,3], ["n", "n", "n"]);
//''
type_czech.check_typeExtra({0:'a', 1:'b', 2:'c', length:3}, ["s", "s"]);
//""
type_czech.check_typeExtra([ {funcOne: x=>x},2,3], [{ funcOne: 'function'}, "n"]);
//""
type_czech.check_typeExtra([ {funcOne: x=>x},2], [{ funcOne: 'function'}, "n"]);
//""
type_czech.check_typeExtra([ {funcOne: x=>x, funcTwo: y=>y},2], [{ funcOne: 'function'}, "n"]);
//""
type_czech.check_typeExtra([ {funcOne: x=>x, funcTwo: y=>y},2], [{ funcOne: 'f'}, "n"]);
//""
type_czech.check_typeExtra([17, 'abc', true], ['n', 's']);
//''
type_czech.check_typeExtra({a:17}, {a:'n'});
//''
type_czech.check_typeExtra({a:17, b:false}, {a:'n'});
//''

type_czech.check_typeExtra([17, 'c'], 'n');
//check_typeExtra()
//TE@227 - check_typeExtra([17,"c"], n) needs 2 collections to work
//n

type_czech.check_typeExtra([17, 'c'], ['n']);
//check_typeExtra()
//TE@234 - check_typeExtra([17,"c"], ["n"]) try [n, n] as ["n"] is illegal.
//['n']
type_czech.check_type([17, 16,], ['n']);
//''

type_czech.check_typeExtra(17, ['n','s']);
//check_typeExtra()
//TE@227 - check_typeExtra(17, ["n","s"]) needs 2 collections to work
//['n', 's']

type_czech.check_typeExtra([17], ['n', 's']);
//check_typeExtra()
//TE@228 - check_typeExtra([17], [\"n\",\"s\"]) needs each array to have at least 2 types to work
//['n', 's']

type_czech.check_typeExtra([17, 'abc', true], ['n', 's']);
//''
type_czech.check_typeExtra([17, 'c'], ['n', 's']);
//''
*/
      // eslint-disable-next-line consistent-return
      function check_typeExtra(parameters_obj, shape_list) {
        if (t_param_check_func.p_call_traps) {
          
          const params_collection = _isCollection(parameters_obj);
          const shape_collection = _isCollection(shape_list);
          let error_str_3arr;
          const shape_str = _toStr(shape_list);
          // eslint-disable-next-line no-unused-vars
          const [parameters_array, _no_parameters, _one_param] = _getParameters(parameters_obj);
          const parameters_str = _toStr(parameters_array);
          if (Array.isArray(shape_list) && shape_list.length === 1) {
            const single_shape = _toStr(shape_list[0]);
            const try_instead = `try check_type([${single_shape}, ${single_shape}], ${shape_str})`;
            let error_234 = `check_typeExtra(${parameters_str}, ${shape_str}) ${try_instead} as ${shape_str} is illegal.`;
            error_234 = _consoleError(error_234, 'TE@234');
            error_str_3arr = error3Array(MESS_TYPE_EXTRAS, error_234, shape_list);
          } else if (params_collection && shape_collection) {
            
            if (typeFinal(shape_list) === 'string') {
              error_str_3arr = extraTypes(parameters_obj[0], shape_list);
            } else if (typeFinal(shape_list) === 'object') {
              error_str_3arr = extraTypes(parameters_obj, shape_list);
            } else if (parameters_array.length < 2) {
              let error_228 = `check_typeExtra(${parameters_str}, ${shape_str}) needs each array to have at least 2 types to work`;
              error_228 = _consoleError(error_228, 'TE@228');
              error_str_3arr = error3Array(MESS_TYPE_EXTRAS, error_228, shape_list);
            } else {
              error_str_3arr = extraTypes(parameters_obj, shape_list);
            }
          } else {
            const para_obj_str = _toStr(parameters_obj);
            let error_227 = `check_typeExtra(${para_obj_str}, ${shape_str}) needs 2 collections to work`;
            error_227 = _consoleError(error_227, 'TE@227');
            error_str_3arr = error3Array(MESS_TYPE_EXTRAS, error_227, shape_list);
          }
          
          return error_str_3arr;
        }
      }

      /*
type_czech.check_emptyEither([12, false, 'a string'], 'EMPTY-OK');
//ME@402 - TypeCzech.check_emptyEither() called with a second parameter as a non-array shape of "EMPTY-OK"
type_czech.check_emptyEither([12, false, 'a string'], ['EMPTY-OK']);
//UE@701 - TypeCzech.check_emptyEither()  needs at least 2 choices for an Either, not 1 ["EMPTY-OK"]
type_czech.check_emptyEither( {a:0, b:12});
//ME@402 - TypeCzech.check_emptyEither() called with a second parameter as a non-array shape of undefined
type_czech.check_emptyEither([12, 0], [['ER','ER'],['ER','OK']]);
//""
type_czech.check_emptyEither( {a:92, b:Infinity}, [ {a:'ER', b:'ER'}, {a:'ER', b:'OK'}]);
//

type_czech.check_emptyEither([12, 0, 'is-error'], [['ER','ER'],['ER','OK']]);
//check_emptyEither()
//ME@404 - The parameter array [12,0,"is-error"] does not have the same number of elements as ["ER","OK"].  Lengths are different 3 !== 2
//[["ER","ER"],["ER","OK"]]

type_czech.check_emptyEither( {a:92, b:Infinity}, [ {a:'OK', b:'ER'}, {a:'OK', b:'ER'}]);
//check_emptyEither()
//EE@301 -  key 'b' is a 'number' which is reputed to be 'EMPTY-ERROR' but has a value of Infinity
//[{a:"OK",b:"ER"},{a:"OK",b:"ER"}]
*/
      // eslint-disable-next-line consistent-return
      function check_emptyEither(parameters_obj, shapes_lists) {
        if (t_param_check_func.p_call_traps) {
          
          // eslint-disable-next-line no-unused-vars
          const [parameters_array, _no_parameters, _one_param] = _getParameters(parameters_obj);
          
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

      /*
type_czech.check_typeEither(17, [ "string", "number" ]);
//""

type_czech.check_typeEither({a:17, b:false}, [{a:"number"}, {a:"string"}]);
//check_typeEither()
//TE@209 - Extra key in checked object - (b:'false'), TE@213 - Property 'a' is indicated to be a 'string', but is inaccurately a 'number' : 17
//[{a:"number"},{a:"string"}]

type_czech.check_typeEither({a:17, b:false}, [{a:"number", b:"boolean"}, {a:"string"}]);
//''
*/
      // eslint-disable-next-line consistent-return
      function check_typeEither(parameters_obj, possible_shapes) {
        if (t_param_check_func.p_call_traps) {
          
          // eslint-disable-next-line no-unused-vars
          const [parameters_array, _no_parameters, _one_param] = _getParameters(parameters_obj);
          
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

      /*
function check_func(a_num){ if (a_num>0) return 'only neg nums'}
function your_func(a_num){}
your_func = type_czech.linkUp(your_func, check_func);
your_func(54321)
//only neg nums

function check_func(a_num){return type_czech.check_type(a_num, 'string') }
function your_func(a_num){}
your_func = type_czech.linkUp(your_func, check_func);
your_func(54321)
//check_func() your_func() PRE-FUNC: TE@226 - The value '54321', which is a 'number', is not a 'string'
// check_type()
//     ACTUAL TYPES 'number'
//     ACTUAL VALUE 54321
//    EXPECTED TYPE string
// CALLING FUNCTION check_func(a_num)

function check_func(){return type_czech.check_type(arguments, 'string') }
function your_func(){}
your_func = type_czech.linkUp(your_func, check_func);
your_func(12345)
//check_func() your_func() PRE-FUNC: TE@226 - The value '54321', which is a 'number', is not a 'string'
// check_type()
//     ACTUAL TYPES 'number'
//     ACTUAL VALUE 54321
//    EXPECTED TYPE string
// CALLING FUNCTION check_func(a_num)
*/
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
        return t_param_check_func.disableChecks_(); // call _ParametersCheck()
      }
      function countFails() {
        return t_param_check_func.countFails_();
      }

      function assert_check(error_mess, where_from, actual_value, expected_mess) {
        if (t_param_check_func.p_call_traps && error_mess) {
          return t_param_check_func.assert_check_(error_mess, where_from, actual_value, expected_mess);
        }
        return ''; // No error, return nada
      }

      /*
long_str = '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
         + '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
type_czech._shrinkDiffs(long_str);
//"1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 <<<<<<~~~>>>>>> 12345678901234567890123456789012345678901234567890"
*/
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

      /*
type_czech._refDiff('', '')
//""

type_czech._refDiff('', '1')
//START-SAME ~ ''
//  PRE-DIFF ~ ''
// POST-DIFF ~ 1"

type_czech._refDiff('1', '')
//START-SAME ~ ''
//  PRE-DIFF ~ 1
// POST-DIFF ~ ''"

type_czech._refDiff('1', '1')
//""

type_czech._refDiff('123', '01234')
//START-SAME ~ ''
//  PRE-DIFF ~ 123
// POST-DIFF ~ 01234"

type_czech._refDiff('01234', '123')
//START-SAME ~ ''
//  PRE-DIFF ~ 01234
// POST-DIFF ~ 123"

type_czech._refDiff('[1,2,3]', '[1,X,3]');
//START-SAME ~ [1,
//  PRE-DIFF ~ 2,3]
// POST-DIFF ~ X,3]

type_czech._refDiff("{'3':3,'B':'B'}", "{'B':'B'}")
//START-SAME ~ {'
//  PRE-DIFF ~ 3':3,'B':'B'}
// POST-DIFF ~ b':'B'}"

type_czech._refDiff("{'B':'B'}", "{'3':3,'B':'B'}")
//START-SAME ~ {'
//  PRE-DIFF ~ b':'B'}
// POST-DIFF ~ 3':3,'B':'B'}"

type_czech._refDiff("{'B':'B','3':3}", "{'B':'B'}")
//START-SAME ~ {'B':'B'
//  PRE-DIFF ~ ,'3':3}
// POST-DIFF ~ }"

type_czech._refDiff("{'B':'B'}", "{'B':'B','3':3}")
//START-SAME ~ {'B':'B'
//  PRE-DIFF ~ }
// POST-DIFF ~ ,'3':3}"

type_czech._refDiff('123456789012345678901234567890123456789012345678901234567890',
                    '1234567890123456789012345678901234567_89012345678901234567890');
//START-SAME ~ 1234567890123456789012345678901234567
//  PRE-DIFF ~ 89012345678901234567890
// POST-DIFF ~ _89012345678901234567890"
*/
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

      /*
type_czech.check_buildSnapshot('my-func', 'my_array', 12);
//Uncaught EX@109 - TypeCzech.check_buildSnapshot()'s 3rd parameter is not an array/object but instead a 'number'

type_czech.check_buildSnapshot('my-func', 'my_array', [1,2,3]);
type_czech.check_buildSnapshot('my-func', 'my_array', [999,888,777]);
type_czech._mutateStacks();
//{"my-func-my_array":[
//  {"collection_ref":[1,2,3],      "func_name":"my-func","pre_collect_str":"[1,2,3]",      "var_name":"my_array"},
//  {"collection_ref":[999,888,777],"func_name":"my-func","pre_collect_str":"[999,888,777]","var_name":"my_array"}  ]}
*/
      // eslint-disable-next-line consistent-return
      function check_buildSnapshot(func_name, var_name, collection_ref) {
        if (t_param_check_func.p_call_traps) {
          
          const num_parameters = arguments.length;
          if (num_parameters !== 3) {
            const error_108 = `check_buildSnapshot() needs 3 params, not ${num_parameters}`;
            const exception_108 = _consoleError(error_108, 'EX@108');
            throw exception_108;
          } else if (!_isCollection(collection_ref)) {
            const collection_type = _aTypeOf(collection_ref);
            const error_109 = `check_buildSnapshot()'s 3rd param not array/object but a '${collection_type}'`;
            const exception_109 = _consoleError(error_109, 'EX@109');
            throw exception_109;
          } else if (typeof func_name !== 'string') {
            const error_110 = `1st check_buildSnapshot() param must be un-empty string, not ${_toStr(func_name)}`;
            const exception_110 = _consoleError(error_110, 'EX@110');
            throw exception_110;
          } else if (typeof var_name !== 'string') {
            const error_111 = `2nd check_buildSnapshot() param must be un-empty string, not ${_toStr(var_name)}`;
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

      // for debugging only, to view all the mutation states
      function _mutateStacks() {
        const ref_stacks_str = _fast_json_stable_stringify(t_reference_stacks);
        return ref_stacks_str;
      }

      /*
type_czech.check_mutatedSnapshot('func-name', 'var-name', 'error-param');
//Uncaught EX@112 - TypeCzech.check_mutatedSnapshot() needs 2 parameters, not 3

type_czech.check_mutatedSnapshot('noFunc', 'no_array');
//Uncaught EX@113 - No record of an entry for TypeCzech.check_mutatedSnapshot('noFunc', 'no_array', a_var)

var my_array = [1,2,3];
type_czech.check_buildSnapshot('my-func', 'my_array', my_array);
my_array.push(4);
type_czech.check_mutatedSnapshot('my-func', 'my_array');
//check_mutatedSnapshot()
//ME@405 - The reference variable 'my_array' in function 'my-func()' changed values
//from [1,2,3]
//  to [1,2,3,4]
//
//START-SAME ~ [1,2,3
//  PRE-DIFF ~ ]
// POST-DIFF ~ ,4]

var my_obj = {a:1, b:2, c:3};
type_czech.check_buildSnapshot('my-func', 'my_obj', my_obj);
delete my_obj.b;
my_obj.b=7;
type_czech.check_mutatedSnapshot('my-func', 'my_obj');
//check_mutatedSnapshot()
//ME@405 - The reference variable 'my_obj' in function 'my-func()' changed values
//from {"a":1,"b":2,"c":3}
//  to {"a":1,"b":7,"c":3}
//
//START-SAME ~ {"a":1,"b":
//  PRE-DIFF ~ 2,"c":3}
// POST-DIFF ~ 7,"c":3}

var my_obj = {a:1n, b:2n, c:3n};
type_czech.check_buildSnapshot('my-func', 'my_obj', my_obj);
delete my_obj.b;
my_obj.b=7;
type_czech.check_mutatedSnapshot('my-func', 'my_obj');
//check_mutatedSnapshot()
//ME@405 - The reference variable 'my_obj' in function 'my-func()' changed values
//from {"a":"1n","b":"2n","c":"3n"}
//  to {"a":"1n","b":7,"c":"3n"}
//
//START-SAME ~ {"a":"1n","b":
//  PRE-DIFF ~ "2n","c":"3n"}
// POST-DIFF ~ 7,"c":"3n"}

let my_arr = [1];
type_czech.check_buildSnapshot('my-func', 'my_arr', my_arr); // re-assignment, not mutation
my_arr = [2];
type_czech.check_mutatedSnapshot('my-func', 'my_arr');
//''
*/
      // eslint-disable-next-line consistent-return
      function check_mutatedSnapshot(func_name, var_name) {
        if (t_param_check_func.p_call_traps) {
          
          const func_str = _toStr(func_name);
          const var_str = _toStr(var_name);
          const func_varname = `${func_str}-${var_str}`;
          let error_mess = '';
          const have_varname = t_reference_stacks[func_varname];
          const num_parameters = arguments.length;
          if (num_parameters !== 2) {
            const error_112 = `check_mutatedSnapshot() needs 2 param, not ${num_parameters}`;
            const exception_112 = _consoleError(error_112, 'EX@112');
            throw exception_112;
          } else if (!have_varname) {
            const error_113 = `No record of check_mutatedSnapshot('${func_str}', '${var_str}', a_var)`;
            const exception_113 = _consoleError(error_113, 'EX@113');
            throw exception_113;
          } else {
            const newest_instance = t_reference_stacks[func_varname].pop();
            
            if (typeof newest_instance === 'undefined') {
              const error_114 = `check_mutatedSnapshot() has no matching entry for check_buildSnapshot('${func_str}', '${var_str}', a_var)`;
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
              const ref_change = `Ref var '${var_name}' in func '${func_name}()' changed`;

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

      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      // This is where TypeCzech starts executing

      // eslint-disable-next-line no-unused-vars
      const parameter_settings = _specParameters(the_parameters);

      if (t_check_events) {
        t_param_check_func = _ParametersCheck(t_check_events);
      } else {
        t_param_check_func = _ParametersCheck(false);
      }
      

      return {
        // START debugging access to internal functions, do not use
        _ParametersCheck, // The function that links functions/classes/objects to their PRE_check() and POST_check() functions

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
        _errorClassName,
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
        _looksLikeType,
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

        _cycle_loops, //                https://github.com/douglascrockford/JSON-js/blob/master/cycle.js
        _fast_json_stable_stringify, // https://github.com/epoberezkin/fast-json-stable-stringify

        // END debugging access to internal functions, do not use

        // START public usable functions

        TYPE_CZECH_EVENTS,

        assert_check, // type_czech.assert_check(  type_czech.check_typeEither(str_or_num, ['number', 'string'])  , 'strOrNumAPI', str_or_num)

        check_type, //         check_error = type_czech.check_type(arguments, ['number', 'string']);
        check_typeEither, //   check_error = type_czech.check_typeEither(arguments, [['number'], ['string']]);
        check_typeExtra, //    check_error = type_czech.check_typeExtra(arguments, ['number', 'string']);
        check_typeVariadic, // check_error = type_czech.check_typeVariadic(arguments, ['string']);

        check_empty, //         check_error = type_czech.check_empty(arguments, ['EMPTY-ERROR', 'EMPTY-OK']);
        check_emptyEither, //   check_error = type_czech.check_emptyEither(arguments, [['EMPTY-ERROR'], ['EMPTY-OK']]);
        check_emptyExtra, //    check_error = type_czech.check_emptyExtra(arguments, ['EMPTY-ERROR', 'EMPTY-OK']);
        check_emptyVariadic, // check_error = type_czech.check_emptyVariadic(arguments, ['EMPTY-ERROR']);

        check_interface, // check_error = type_czech.check_interface({log:x=>x, show:y=>y}, {log:'f', show:'f'});

        check_buildSnapshot, //   type_czech.check_buildSnapshot('yourFunc', 'your_array', [1,2,3]);
        check_mutatedSnapshot, // check_error = type_czech.check_mutatedSnapshot('Person-Obj-Arr', 'a_person');

        enableChecks, //  type_czech.enableChecks();
        disableChecks, // type_czech.disableChecks();

        countFails, // type_czech.countFails();
        countTally, // type_czech.countTally();

        isActive, // if(type_czech.isActive())
        linkUp, //   yourFunc = type_czech.linkUp(yourFunc, checkingFunc);

        typeFinal, //  type_final = type_czech.typeFinal(document); // HTMLDocument
        typeIsA, //    if (type_czech.typeIsA(document, 'Node')) {};
        typeProtos, // type_protos = type_czech.typeProtos(window);  // [ "Window", "EventTarget", "EventTarget", "object" ]
      };
    } // _TypeCzech()
  };
}(the_exports));
