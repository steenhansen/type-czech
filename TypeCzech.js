/* eslint-disable block-scoped-var */
let the_exports;
if (typeof exports === 'undefined') {
  the_exports = window;
} else {
  the_exports = exports;
}

// TYPE_CZECH_current_test_number is set by every test, so can find out which test is crashing in a certain function
// eslint-disable-next-line block-scoped-var, no-use-before-define
if (typeof TYPE_CZECH_current_test_number === 'undefined') {
  // eslint-disable-next-line no-var, vars-on-top
  var TYPE_CZECH_current_test_number = 'no test number assigned yet';
}

// eslint-disable-next-line func-names
(function (export_tech_czech) {
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
      // eslint-disable-next-line no-param-reassign
      export_tech_czech.type_czech = { check: (nop) => nop, stats: (nop) => nop, is_active: false };
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

    function _TypeCzech(...the_parameters) {
      const VERS_NUM = 'ver 4.0';

      /*
      is_active is the public version of t_do_param_checking, it and serves as a flag to either

        1 - load testing code that calls TypeCzech, transfering more data
      OR
        2 - load no TypeCzech calling code in production, transfereing less data
      */
      let is_active = true; // NB, this is false in the NOP version

      let t_param_check_func;
      let t_check_events = false;
      let t_do_param_checking = false;
      const t_reference_stacks = {};
      const t_proxy_targets = new WeakSet();

      // end variables - start constants

      const _NOT_VARIAD_ARR_L_179 = 179;
      const _POS_VARIAD_ARR_L_0 = 0;

      const CHECK_TALLY = 'CHECKS';
      const FAILURE_TALLY = 'FAILURES';

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

      // The valid options to TypeCzech

      let OP_THROW_EXCEPTIONS = false; // 'THROW-EXCEPTIONS'
      let OP_LOG_ERRORS = false; //       'LOG-ERRORS'   'NO-CHECKING' stops checking

      // 'UNDEF-OK' only affects valid(), validExtras(), validUnion(), and validUnionExtras()
      let OP_UNDEF_OK = false; //            'UNDEF-OK'
      let OP_CONSOLE_COUNT = false; //       'CONSOLE-COUNT'
      let OP_DEBUG_ERROR_TAGS = false;//     'DEBUG-ERROR-TAGS' show "TC@22" (for) fast finding
      let OP_DEBUG_CONSOLE_TRACE = false; // 'DEBUG-CONSOLE-TRACE'

      const DIFF_BEGIN_LEN = 100;
      const DIFF_END_LEN = 50;
      const DIFF_BREAK_MIN = DIFF_BEGIN_LEN + DIFF_END_LEN + 10;
      const DIFF_SEPARATOR = '<<<<<<...>>>>>>';

      // eslint-disable-next-line no-useless-concat
      const ARGU_MENTS = 'argu' + 'ments';

      const MESS_TYPE_VERIFY = `valid(${ARGU_MENTS}, expected_types)`;
      const MESS_TYPE_EXTRAS = `validExtras(${ARGU_MENTS}, expected_types)`;
      const MESS_TYPE_ONE_OF = `validUnion(${ARGU_MENTS}, expected_types)`;
      const MESS_TYPE_ONE_OF_EXTRAS = `validUnionExtras(${ARGU_MENTS}, expected_types)`;

      const MESS_EMPTY_VERIFY = `valueless(${ARGU_MENTS}, expected_emptys)`;
      const MESS_EMPTY_EXTRAS = `valuelessExtras(${ARGU_MENTS}, expected_emptys)`;
      const MESS_EMPTY_ONE_OF = `valuelessUnion(${ARGU_MENTS}, expected_emptys)`;
      const MESS_EMPTY_ONE_OF_EXTRAS = `valuelessUnionExtras(${ARGU_MENTS}, expected_emptys)`;

      const TRACE_COLORS = 'background: #ee0; color: #00F';
      const ERROR_COLORS = 'background: #ee0; color: #F00';
      const START_COLORS = 'background: #cc0; color: #080';

      const BLANK_REF_DIFF = '``';

      const CZECH_ERROR_INDENT = '\n\t\t';

      const PARAMS_OF_FUNCTION = /([^(]*\()([^)]*)/;

      const START_OF_FUNCTION_LEN = 30;

      const EMPTY_REGEXP = '/(?:)/';

      const EMPTY_OK = 'EMPTY-OK';
      const EMPTY_ER = 'EMPTY-ERROR';
      const EMPTY_IG = 'EMPTY-IGNORE';

      const SHORT_EMPTIES = { 'EM-OK': EMPTY_OK, 'EM-ER': EMPTY_ER, 'EM-IG': EMPTY_IG };

      const TYPE_EXTRAS = 'TYPE-EXTRAS';
      const TYPE_VERIFY = 'TYPE-VERIFY';
      const EMPTY_EXTRAS = 'EMPTY-EXTRAS';
      const EMPTY_VERIFY = 'EMPTY-VERIFY';

      const SCALAR_TYPES = ['Array', 'BigInt', 'Boolean', 'Date', 'Function',
        'Number', 'Object', 'RegExp', 'String', 'Symbol'];

      const LOWER_TYPES_TO_CORRECT = {
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

      const TYPE_SET_SCALAR = new Set(SCALAR_TYPES);
      const SHORT_TYPES = {
        A: 'Array',
        I: 'BigInt',
        B: 'Boolean',
        D: 'Date',
        F: 'Function',
        N: 'Number',
        O: 'Object',
        R: 'RegExp',
        S: 'String',
        Y: 'Symbol',
      };

      const POSSIBLE_LOWER_VALIDS = ['a', 'array', 'i', 'bigint', 'b', 'boolean', 'd', 'date', 'f', 'function',
        'n', 'number', 'o', 'object', 'r', 'regexp', 's', 'string', 'y', 'symbol'];

      const VALID_TYPES_MESS = 'VALID TYPES = A:Array, I:BigInt, B:Boolean, D:Date, F:Function, N:Number, O:Object, R:RegExp, S:String, Y:Symbol';

      const UNDEFINED_AS_STR = '-un-defined-';
      const NAN_AS_STR = '-NaN-';

      const START_CHECK_COLOR = 'green';
      const DO_CHECK_COLOR = 'blue';
      const FAIL_CHECK_COLOR = 'red';

      const IS_INIT_CONSOLE = 'TypeCzech-init';

      /* How to flash background green/blue/red easily
        var type_czech = type_czech._ParametersCheck(type_czech.TYPE_CZECH_EVENTS);
        type_czech.confirmParameters(program_function, checking_function);
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

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._coloredConsole("colored text", 'background: #684; color: #f26');
      //colored text

      */
      function _coloredConsole(the_args, the_css) {
        // consolelog('///_coloredConsole ENTER', the_args, the_css);
        const args_str = JSON.stringify(the_args);
        const the_text = args_str.substring(1, args_str.length - 1);
        // eslint-disable-next-line no-console
        console.log(`%c ${the_text}`, the_css);
      }

      function consolelog(...args) {
        if (OP_DEBUG_CONSOLE_TRACE) {
          // console.log(args)
          _coloredConsole(args, TRACE_COLORS);
        }
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      class Person {  constructor(){}  };
      type_czech._className(Person);
      //Person

      */
      function _className(a_var) {
        consolelog('///_className ENTER', a_var, TYPE_CZECH_current_test_number);
        let class_name = '';
        const class_string = a_var.toString();
        if (class_string.startsWith('class ') && class_string.includes(' constructor(')) {
          class_name = a_var.name;
        }
        consolelog('///_className EXIT', class_name);
        return class_name;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

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
        consolelog('///_isAClass ENTER', a_var, TYPE_CZECH_current_test_number);
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
        consolelog('///_isAClass EXIT', is_class);
        return is_class;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._functionName(x=>x);
      //""

      type_czech._functionName(function aFunction(){});
      //aFunction

      */
      function _functionName(a_var) {
        consolelog('///_functionName ENTER', a_var, TYPE_CZECH_current_test_number);
        let function_name = '';
        const function_string = a_var.toString();
        if (function_string.startsWith('function ')) {
          function_name = a_var.name;
        }
        consolelog('///_functionName EXIT', function_name);
        return function_name;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._anObjectsType('a-string');
      //String

      type_czech._anObjectsType(x=>x);
      //false

      type_czech._anObjectsType({});
      //Object

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
        consolelog('///_anObjectsType ENTER', a_var, TYPE_CZECH_current_test_number);
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
        consolelog('///_anObjectsType EXIT', is_a_class_type);
        return is_a_class_type;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._isBuiltInType(85n);
      //false

      type_czech._isBuiltInType('BigInt');
      //true

      type_czech._isBuiltInType('Object');
      //true

      type_czech._isBuiltInType('Array');
      //true

      type_czech._isBuiltInType('YoJimbo');
      //false

      type_czech._isBuiltInType([]);
      //false

      */
      function _isBuiltInType(a_type) {
        consolelog('///_isBuiltInType ENTER', a_type, TYPE_CZECH_current_test_number);
        let is_built_in = false;
        if (typeof a_type === 'string') {
          if (SCALAR_TYPES.includes(a_type)) {
            is_built_in = true;
          }
        }
        consolelog('///_isBuiltInType EXIT', is_built_in);
        return is_built_in;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech.objectPrototypes(new Date('1999-12-31'));
      //["Date"]

      type_czech.objectPrototypes(document.createElement('div'));
      //Array(6) [ "HTMLDivElement", "HTMLElement", "Element", "Node", "EventTarget", "Object" ]

      type_czech.objectPrototypes(new Object());
      // Array [ "Object" ]

      { class First { constructor() { } }
        class Last extends First { constructor() { super() } }
        type_czech.objectPrototypes(new Last()); }
      //Array(3) [ "Last", "First", "Object" ]

      */
      function objectPrototypes(a_var) {
        consolelog('///objectPrototypes ENTER', a_var, TYPE_CZECH_current_test_number);
        let the_prototypes = false;
        if (a_var !== null && typeof a_var !== 'undefined') {
          const proto_sequence = [];

          // eslint-disable-next-line no-inner-declarations
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

          if (SCALAR_TYPES.includes(first_type)) {
            the_prototypes = [first_type];
          } else {
            nextPrototype(a_var);
            the_prototypes = proto_sequence;
          }
        }
        consolelog('///objectPrototypes EXIT', the_prototypes);
        return the_prototypes;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech.objectType(new Date('1999-12-31'));
      //Date

      type_czech.objectType(document.createElement('div'));
      //"HTMLDivElement"

      { class First { constructor() { } }
        class Last extends First { constructor() { super() } }
        type_czech.objectType(new Last()); }
      //Last

      */
      function objectType(a_var) {
        consolelog('///objectType ENTER', a_var, TYPE_CZECH_current_test_number);
        const the_prototypes = objectPrototypes(a_var);
        let child_type = false;
        if (the_prototypes) {
          child_type = the_prototypes.shift();
        }
        consolelog('///objectType EXIT', child_type);
        return child_type;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech.objectIsA(12, 'Number');
      //true

      type_czech.objectIsA(11, 'number');
      //false

      type_czech.objectIsA([], 'Array');
      //true

      type_czech.objectIsA({}, 'Object');
      //true

      type_czech.objectIsA(null, 'Object');
      //false

      type_czech.objectIsA(document.createElement('div'), "HTMLDivElement");
      //true

      type_czech.objectIsA(document.createElement('div'), "EventTarget");
      //true

      */
      function objectIsA(a_var, object_type) {
        consolelog('///objectIsA ENTER', a_var, object_type, TYPE_CZECH_current_test_number);
        const the_prototypes = objectPrototypes(a_var);
        let object_is_a = false;
        if (the_prototypes) {
          object_is_a = the_prototypes.includes(object_type);
        }
        consolelog('///objectIsA EXIT', object_is_a);
        return object_is_a;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._aTypeOf(new Date('1999-12-31'));
      //Date

      type_czech._aTypeOf(x=>x);
      //Function

      type_czech._aTypeOf([]);
      //Array

      type_czech._aTypeOf({});
      //Object

      type_czech._aTypeOf(59n);
      //BigInt

      type_czech._aTypeOf(/d/);
      //RegExp

      type_czech._aTypeOf(null);
      //null

      type_czech._aTypeOf(document.createElement('div'));
      //"HTMLDivElement"

      */
      function _aTypeOf(a_variable) {
        consolelog('///_aTypeOf ENTER', a_variable, TYPE_CZECH_current_test_number);
        let a_type_of = '';
        const is_html_var = objectType(a_variable);
        if (is_html_var) {
          a_type_of = is_html_var;
        } else if (a_variable === null) {
          a_type_of = 'null';
        } else if (a_variable instanceof Date) {
          a_type_of = 'Date';
        } else if (a_variable instanceof RegExp) {
          a_type_of = 'RegExp';
        } else if (Array.isArray(a_variable)) {
          a_type_of = 'Array';
        } else {
          a_type_of = typeof a_variable;
        }
        consolelog('///_aTypeOf EXIT', a_type_of);
        return a_type_of;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._isCollection([]);
      //true

      type_czech._isCollection({});
      //true

      type_czech._isCollection(12);
      //false

      */
      function _isCollection(a_variable) {
        consolelog('///_isCollection ENTER', a_variable, TYPE_CZECH_current_test_number);
        const a_type = _aTypeOf(a_variable);
        const a_collection = (a_type === 'Array') ? true : a_type === 'Object';
        consolelog('///_isCollection EXIT', a_collection);
        return a_collection;
      }

      function _isScalar(a_variable) {
        return !_isCollection(a_variable);
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._isPlainJsType("Boolean");
      //true

      type_czech._isPlainJsType("Snuffleupagus");
      //false

      type_czech._isPlainJsType('BigInt');
      //true

      type_czech._isPlainJsType('Array');
      //true

      type_czech._isPlainJsType('Object');
      //true

      type_czech._isPlainJsType([]);
      //false

      type_czech._isPlainJsType({});
      //false

      type_czech._isPlainJsType(document.createElement('div'));
      //false

      */
      function _isPlainJsType(a_type) {
        consolelog('///_isPlainJsType ENTER', a_type, TYPE_CZECH_current_test_number);
        let is_plain_js_type = false;
        if (TYPE_SET_SCALAR.has(a_type)) {
          is_plain_js_type = true; // Date, String..... not null, not undef
        } else if (SHORT_TYPES[a_type]) {
          is_plain_js_type = true; //   D,S,N,B
        }
        consolelog('///_isPlainJsType EXIT', is_plain_js_type);
        return is_plain_js_type;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._shortToLongType("Y");
      //symbol

      */
      function _shortToLongType(a_type) {
        if (SHORT_TYPES[a_type]) {
          return SHORT_TYPES[a_type];
        }
        return a_type;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._shortToLongEmpty("EM-OK");
      //EMPTY-OK

      type_czech._shortToLongEmpty("EMPTY-ER");
      //EMPTY-ER

      */
      function _shortToLongEmpty(an_empty) {
        if (SHORT_EMPTIES[an_empty]) {
          return SHORT_EMPTIES[an_empty];
        }
        return an_empty;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._doubleToSingleQuotes(`["Number","String",{"a":"Number","B":"Number"}]`);
      //"['Number','String',{'a':'Number','B':'Number'}]"

      type_czech._doubleToSingleQuotes(` ['Number','string",{'a':"Number','B':"Number"}]`);
      //" ['Number','String',{'a':'Number','B':'Number'}]"

      */
      function _doubleToSingleQuotes(double_quotes) {
        consolelog('///_doubleToSingleQuotes ENTER', double_quotes, TYPE_CZECH_current_test_number);
        const single_quotes = double_quotes.replace(/"/g, "'");
        consolelog('///_doubleToSingleQuotes EXIT', single_quotes);
        return single_quotes;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._toStr(undefined);
      //"-un-defined-"

      type_czech._toStr(' my "double" quotes');
      //" my 'double' quotes"

      type_czech._toStr({a:` ' " `});
      //"{'a':\" ' \\\" \"}"

      type_czech._toStr({a:1, b:22, c:33});
      //{'a':1,'B':22,'c':33}

      type_czech._toStr([ "super", "man" ]);
      //['super','man']

        type_czech._toStr(185n);
      //185n

      type_czech._toStr([186n]);
      //"['186n']"

      type_czech._toStr({big_int:187n});
      //"{'big_int':187n}"

      type_czech._toStr([[[[[188n]]]]]);
      //"[[[[['188n']]]]]"

      type_czech._toStr({big_int:{big_int:{big_int:{big_int:{big_int:{big_int:{big_int:189n}}}}}}});
      //"{'big_int':{'big_int':{'big_int':{'big_int':{'big_int':{'big_int':{'big_int':189n}}}}}}}"

      */

      function _toStr(maybe_undef) {
        consolelog('///_toStr ENTER', maybe_undef, TYPE_CZECH_current_test_number);
        let to_str;
        if (_isCollection(maybe_undef)) {
          // eslint-disable-next-line no-use-before-define
          to_str = _collectionToStr(maybe_undef);
        } else if (typeof maybe_undef === 'undefined') {
          to_str = UNDEFINED_AS_STR;
        } else if (typeof maybe_undef === 'bigint') {
          to_str = `${maybe_undef}n`;
        } else if (typeof maybe_undef === 'string') {
          const no_double_quotes = maybe_undef.replace(/"/g, "'");
          to_str = no_double_quotes;
        } else {
          const double_quotes = JSON.stringify(maybe_undef);
          if (typeof maybe_undef === 'object') {
            const single_quotes = _doubleToSingleQuotes(double_quotes);
            to_str = single_quotes;
          } else {
            to_str = double_quotes;
          }
        }
        consolelog('///_toStr EXIT', to_str);
        return to_str;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._collectionToStr({a_key: 'a-string'});
      //"{'a_key':a-string}"

      type_czech._collectionToStr([199n]);
      //"['199n']"

      its_complicated = [ {arr_1:[      {k_2:[3n,   {k_4:['Number']}   ] }
                                      , {k_5:[6n,   {k_7:['Number']}  ] }] },
                          [ ['String', 'Array'], { k_8: 9n, k_10 :{k_11:2n, K_12:'Object'}}]
                        ]
      type_czech._collectionToStr(its_complicated);
      //"[{'arr_1':[{'k_2':['3n',{'k_4':['Number']}]},{'k_5':['6n',{'k_7':['Number']}]}]},[['String','Array'],{'k_8':9n,'k_10':{'k_11':2n,'K_12':Object}}]]"

      type_czech._collectionToStr([1,2,3]);
      //"['1','2','3']"

      */
      function _collectionToStr(a_collection) {
        consolelog('///_collectionToStr ENTER', a_collection, TYPE_CZECH_current_test_number);
        let collection_str;
        const collection_elems = [];
        if (Array.isArray(a_collection)) {
          a_collection.forEach((an_element) => {
            const array_json = _toStr(an_element);
            if (_aTypeOf(an_element) === 'String') {
              collection_elems.push(`'${array_json}'`);
            } else {
              collection_elems.push(array_json);
            }
          });
          collection_str = `[${collection_elems.join()}]`;
        } else {
          // eslint-disable-next-line no-restricted-syntax
          for (const [key, value] of Object.entries(a_collection)) {
            const value_json = _toStr(value);
            const object_json = `'${key}':${value_json}`;
            collection_elems.push(object_json);
          }
          collection_str = `{${collection_elems.join()}}`;
        }
        consolelog('///_collectionToStr EXIT', collection_str);
        return collection_str;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._stringifyReplacer('not-used', 12n);
      //"12n"

      type_czech._stringifyReplacer('not-used', undefined);
      //"-un-defined-"

      type_czech._stringifyReplacer('not-used', NaN);
      //"-NaN-"

      type_czech._stringifyReplacer('not-used', function(x,y,z){console.log(x,y,z)});
      //"function(x,y,z){console.log(x, ..."

      */
      function _stringifyReplacer(_key, value) {
        consolelog('///_stringifyReplacer ENTER', _key, value, TYPE_CZECH_current_test_number);
        let replaced_value;
        if (typeof value === 'bigint') {
          replaced_value = `${value}n`;
        } else if (typeof value === 'undefined') {
          replaced_value = UNDEFINED_AS_STR; // NB so can tell difference easy
        } else if (Number.isNaN(value)) {
          replaced_value = NAN_AS_STR;
        } else if (typeof value === 'function' || (value && value.constructor === RegExp)) {
          const func_text = String(value);
          const func_start = func_text.substring(0, START_OF_FUNCTION_LEN);
          replaced_value = `${func_start} ...`;
        } else {
          replaced_value = value;
        }
        consolelog('///_stringifyReplacer EXIT', replaced_value);
        return replaced_value;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._jsonStr({a:1, b:22n, c:undefined, d:{e:'f', g:'h'}});
      //"{'a':1,'b':'22n','c':'-un-defined-','d':{'e':'f','g':'h'}}"

      type_czech._jsonStr([1n,[2n,[3n,[4n]]]]);
      //"['1n',['2n',['3n',['4n']]]]"

      */
      function _jsonStr(an_object) {
        consolelog('///_jsonStr ENTER', an_object, TYPE_CZECH_current_test_number);
        const json_str = JSON.stringify(an_object, _stringifyReplacer);
        const obj_str = _toStr(json_str);
        consolelog('///_jsonStr EXIT', obj_str);
        return obj_str;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._consoleError("errorText", 'TheTAG');
      //errorText

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

      function looksLikeType(possible_badcase) {
        consolelog('///looksLikeType ENTER', possible_badcase, TYPE_CZECH_current_test_number);
        let error_string = '';
        const is_built_in = _isBuiltInType(possible_badcase);
        if (!is_built_in) {
          if (typeof possible_badcase === 'string') {
            const pos_lower_type = possible_badcase.toLowerCase();
            if (LOWER_TYPES_TO_CORRECT[pos_lower_type]) {
              const looks_like_type = LOWER_TYPES_TO_CORRECT[pos_lower_type];
              const error_33 = `The type '${possible_badcase}' is not a valid type, but it looks just like '${looks_like_type}'`;
              error_string = _consoleError(error_33, 'TC@33');
            }
          }
        }
        consolelog('///looksLikeType EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._missingKey({z:"Symbol"});
      //TC@46 - The key 'z', which has a type of 'Symbol', is missing in the checked object

      */
      function _missingKey(extra_keys) {
        consolelog('///_missingKey ENTER', extra_keys, TYPE_CZECH_current_test_number);
        let missing_key;
        if (Object.keys(extra_keys).length > 0) {
          const [share_key, share_type] = Object.entries(extra_keys)[0];
          missing_key = looksLikeType(share_type);
          if (!missing_key) {
            const share_type_str = _toStr(share_type);
            const error_46 = ` The key '${share_key}', which has a type of '${share_type_str}', is missing in the checked object`;
            missing_key = _consoleError(error_46, 'TC@46');
          }
        } else {
          missing_key = '';
        }
        consolelog('///_missingKey EXIT', missing_key);
        return missing_key;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._isEmpty(new Date(''));
      //true

      type_czech._isEmpty('');
      //true

      type_czech._isEmpty(0);
      //false

      type_czech._isEmpty(NaN);
      //true

      type_czech._isEmpty(null);
      //true

      type_czech._isEmpty(undefined);
      //true

      type_czech._isEmpty([]);
      //true

      type_czech._isEmpty({});
      //true

      type_czech._isEmpty(85n);
      //false

      */
      function _isEmpty(a_variable) {
        consolelog('///_isEmpty ENTER', a_variable, TYPE_CZECH_current_test_number);
        let is_empty;
        if (a_variable instanceof Date) {
          // eslint-disable-next-line eqeqeq
          is_empty = (a_variable == 'Invalid Date');
        } else if (a_variable instanceof RegExp) {
          const regExp_str = a_variable.toString();
          is_empty = (regExp_str === EMPTY_REGEXP);
        } else if (Number.isNaN(a_variable)) {
          is_empty = true; // NaN is an empty number, 0 is NOT-EMPTY!
        } else if (a_variable == null) {
          is_empty = true;
        } else {
          const empty_str_array = a_variable.length === 0;
          const empty_object = (typeof a_variable === 'object' && Object.keys(a_variable).length === 0);
          is_empty = empty_str_array || empty_object;
        }
        consolelog('///_isEmpty EXIT', is_empty);
        return is_empty;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      //Boolean, Symbol, Function cannot be empty
      type_czech._canBeEmpty('Array')
      //true

      type_czech._canBeEmpty(/ab+c/i)
      //false

      type_czech._canBeEmpty(85n)
      //false

    */
      const _canBeEmpty = (variable_type) => (variable_type === 'Array' ? true // []
        : variable_type === 'Object' ? true // {}
          : variable_type === 'String' ? true // ''
            : variable_type === 'RegExp' ? true // new RegExp()
              : variable_type === 'Date' ? true // new Date("invalid")     isNaN(new Date("invalid"))
                : variable_type === 'Number');

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._typeFromArray(['jj'], 99);
      //jj

      type_czech._typeFromArray([1,'uu'], 1);
      //uu

      type_czech._typeFromArray([0, 0, 2222], 2);
      //2222

      */
      function _typeFromArray(shallow_array, element_index) {
        consolelog('///_typeFromArray ENTER', shallow_array, element_index, TYPE_CZECH_current_test_number);
        const shape_length = shallow_array.length;
        let element_type;
        if (shape_length === 1) {
          [element_type] = shallow_array;
        } else {
          element_type = shallow_array[element_index];
        }
        consolelog('///_typeFromArray EXIT', element_type);
        return element_type;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._getParameters([1]);
      //1

      type_czech._getParameters([1,2,3,4]);
      //[ 1, 2, 3, 4 ]

      type_czech._getParameters(null);
      //null

      type_czech._getParameters('a-string');
      //"a-string"

      */
      function _getParameters(parameters_obj) {
        consolelog('///_getParameters ENTER', parameters_obj, TYPE_CZECH_current_test_number);
        let the_params;
        const odd_parameters = parameters_obj === null
                            || parameters_obj === undefined
                            || typeof parameters_obj.length === 'undefined'
                            || typeof parameters_obj === 'string';
        if (odd_parameters) {
          the_params = parameters_obj;
        } else if (parameters_obj.length === 1) { // NB [1] => 1
          [the_params] = parameters_obj;
        } else {
          the_params = [...parameters_obj];
        }
        consolelog('///_getParameters EXIT', the_params);
        return the_params;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._arrayRecurseLevel( [1,2,3,4]);
      //179

      type_czech._arrayRecurseLevel( {0: 'a', 1: 'b', 2: 'c'} );
      //0

      type_czech._arrayRecurseLevel( ['one'] );
      //179

      */
      function _arrayRecurseLevel(parameters_obj) {
        consolelog('///_arrayRecurseLevel ENTER', parameters_obj, TYPE_CZECH_current_test_number);
        /*
        VARIADIC_ARRAY_TYPE_FIXED
            function PRE_yourFunc() { return type_czech.valid([...arguments], ['Number']) }
            yourFunc = type_czech.check(yourFunc, PRE_yourFunc)
            function yourFunc(){}
            yourFunc(1,2,3,4,5,6,7,8,9)

        NOT_VARIADIC_ARRAY_TYPE
            function PRE_yourFunc() { return type_czech.valid(arguments, ['Number']) }
            yourFunc = type_czech.check(yourFunc, PRE_yourFunc)
            function yourFunc(){}
            yourFunc([1,2,3,4,5,6,7,8,9])
        */
        let array_recurse_level = 0;
        if (parameters_obj) {
          if (parameters_obj.length === 1 || Array.isArray(parameters_obj)) {
            array_recurse_level = _NOT_VARIAD_ARR_L_179; // =179, yourFunc([1,2,3])
          } else {
            array_recurse_level = _POS_VARIAD_ARR_L_0; // =0, yourFunc(1,2,3,4,5,6,7,8,9)
          }
        }
        consolelog('///_arrayRecurseLevel EXIT', array_recurse_level);
        return array_recurse_level;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      variable={bob:17, show:_=>_};
      interface={bob:'Number', show:'F'};
      type_czech.objectInterface(variable, interface);
      //"Interface mismatches : objectInterface() only allows functions in interfaces, not {bob:'Number'}"

      variable={bob:['Number'], show:_=>_};
      interface={bob:'Number', show:'F'};
      type_czech.objectInterface(variable, interface);
      //"Interface mismatches : objectInterface() only allows functions and objects, not {bob:'Number'}"

      // what about making sure all types below are strings so this will be an error --> show:{}  or show:[]
      variable={bob:{}, show:_=>_};
      interface={bob:{}, show:'F'};
      type_czech.objectInterface(variable, interface);
      //"Interface mismatches : objectInterface() {bob:'[object Object]'} has a bad type - not string"

      variable={bob:[], show:_=>_};
      interface={bob:'Array', show:'F'};
      type_czech.objectInterface(variable, interface);
      //"Interface mismatches : objectInterface() only allows functions in interfaces, not {bob:'Array'}"

      variable={bob:{a:12}, show:_=>_};
      interface={bob:'Object', show:'F'};
      type_czech.objectInterface(variable, interface);
      //""

      */
      function objectInterface(introspect_object, expected_interface) { // Future only support functions
        consolelog('///objectInterface ENTER', introspect_object, expected_interface, TYPE_CZECH_current_test_number);
        const introspect_array = _getParameters(introspect_object);
        let error_mess = '';
        // eslint-disable-next-line guard-for-in, no-restricted-syntax
        for (const test_key in expected_interface) {
          let an_error = '';
          const expected_short = expected_interface[test_key];
          const expected_type = _shortToLongType(expected_short);
          if (typeof expected_type !== 'string') {
            an_error = `objectInterface() {${test_key}:'${expected_type}'} has a bad type - not string`;
          } else if (expected_type !== 'Function' && expected_type !== 'Object') {
            an_error = `objectInterface() only allows functions and objects, not {${test_key}:'${expected_type}'}`;
          } else {
            const introspect_value = introspect_array[test_key];
            if (!introspect_value) {
              an_error = 'missing key';
            }
            const introspect_type = _aTypeOf(introspect_value);
            if (expected_type !== introspect_type) {
              an_error = `actual type of '${test_key}' is '${introspect_type}', with a value `
                        + `of '${introspect_value}', not the expected '${expected_type}' type`;
            }
          }
          if (an_error && !error_mess) {
            error_mess = an_error;
          }
        }
        if (error_mess) {
          error_mess = `Interface mismatches : ${error_mess}`;
        }
        consolelog('///objectInterface EXIT', error_mess);
        return error_mess;
      }

      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._ParametersCheck(false);
      //Object { confirmParameters: realConfirmParams(target_proxy, pre_checks, post_checks), checkBegin_: checkBegin_(), checkTally_: checkTally_(), checkEnd_: checkEnd_(), failureTally_: failureTally_(), failureRatio_: failureRatio_(), stats_: stats_(possible_type), statsReset_: statsReset_() }

      events_obj = type_czech.TYPE_CZECH_EVENTS
      type_czech._ParametersCheck(events_obj);
      //Object { confirmParameters: realConfirmParams(target_proxy, pre_checks, post_checks), checkBegin_: checkBegin_(), checkTally_: checkTally_(), checkEnd_: checkEnd_(), failureTally_: failureTally_(), failureRatio_: failureRatio_(), stats_: stats_(possible_type), statsReset_: statsReset_() }

      */
      function _ParametersCheck(arg_check_events) {
        consolelog('///_ParametersCheck ENTER', arg_check_events, TYPE_CZECH_current_test_number);
        const num_parameters = arguments.length;
        if (num_parameters > 1) {
          let error_53 = `TypeCzech.confirmParameters() needs 0 or 1 parameters, not ${num_parameters}`;
          error_53 = _consoleError(error_53, 'TC@53');
          throw error_53;
        }
        let onParamCheck = () => ''; // console.log('default onParamCheck');
        let onParamError = () => ''; // console.log('default onParamError');

        let p_PRE_POST_calls = []; // so can do stats on number of checks on PRE/POST functions
        let p_check_count = 0; //     count number of parameter checks to validate test count
        let p_failure_count = 0; //   count errors so far
        let p_call_traps = false; //  turn parameter checking on/off

        function init_ParametersCheck() {
          if (t_do_param_checking) {
            if (arg_check_events && _aTypeOf(arg_check_events) !== 'Object') {
              const events_sentence = '_ParametersCheck - arg_check_events is not an Object'
                                    + ' with onStart(), onCheck(), onError() ';
              _coloredConsole([events_sentence, arg_check_events], ERROR_COLORS);
            }
            if (typeof window !== 'undefined') {
              const throw_except = OP_THROW_EXCEPTIONS ? 'THROW-EXCEPTIONS' : '';
              const log_errors = OP_LOG_ERRORS ? 'LOG-ERRORS' : '';
              const undef_ok = OP_UNDEF_OK ? 'UNDEF-OK' : '';
              const console_count = OP_CONSOLE_COUNT ? 'CONSOLE-COUNT' : '';
              const EVENTS = arg_check_events;
              const options_array = [IS_INIT_CONSOLE, VERS_NUM, throw_except, log_errors, undef_ok, console_count, EVENTS];
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
          consolelog('///getHtmlTypes ENTER', list_of_parameters);
          const real_types = [];
          list_of_parameters.forEach((a_variable) => {
            const is_html_type = objectType(a_variable);
            if (is_html_type) {
              real_types.push(`'${is_html_type}'`);
            } else {
              const json_form = _jsonStr(a_variable);
              real_types.push(json_form);
            }
          });
          consolelog('///getHtmlTypes EXIT', real_types);
          return real_types;
        }

        function actualVsExpected(list_of_parameters, exception_str, any_errors, func_name_params) {
          consolelog('///actualVsExpected ENTER', list_of_parameters, exception_str, any_errors, func_name_params, TYPE_CZECH_current_test_number);
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
          const expected_json = _jsonStr(expected_shape);
          let new_exception = exception_str + type_of_error;
          new_exception += CZECH_ERROR_INDENT + shape_check;
          let actual_types = '    ACTUAL TYPES';
          let actual_text = '    ACTUAL VALUE';
          let expected_text = ' EMPTY ASSERTION'; // for valueless() errors EMPTY
          const called_function = 'CALLING FUNCTION';
          if (shape_check === MESS_TYPE_VERIFY
                || shape_check === MESS_TYPE_EXTRAS
                || shape_check === MESS_TYPE_ONE_OF
                || shape_check === MESS_TYPE_ONE_OF_EXTRAS) {
            actual_types = '    ACTUAL TYPES';
            actual_text = '    ACTUAL VALUE';
            expected_text = '   EXPECTED TYPE'; // for valid() errors TYPE
          }
          new_exception += `${CZECH_ERROR_INDENT}${actual_types} ${arg_list}`;
          new_exception += `${CZECH_ERROR_INDENT}${actual_text} ${param_values}`;
          new_exception += `${CZECH_ERROR_INDENT}${expected_text} ${expected_json}`;
          new_exception += `${CZECH_ERROR_INDENT}${called_function} ${func_name_params}`;
          new_exception += CZECH_ERROR_INDENT;
          consolelog('///actualVsExpected EXIT', new_exception);
          return new_exception;
        }

        // any_errors ==> string_or_3array_errors
        function outputCheck(any_errors, checking_name, target_name, list_of_parameters, func_name_params) {
          consolelog('///outputCheck ENTER', any_errors, checking_name, target_name, list_of_parameters, func_name_params, TYPE_CZECH_current_test_number);
          const func_name_type = target_name.split(BEFORE_APPLY_TYPE);
          const function_name = func_name_type[0];
          p_check_count += 1;
          p_PRE_POST_calls[function_name][CHECK_TALLY] += 1;
          if (OP_CONSOLE_COUNT) {
            _coloredConsole([p_check_count], TRACE_COLORS);
          }
          if (any_errors) {
            p_failure_count += 1;
            p_PRE_POST_calls[function_name][FAILURE_TALLY] += 1;
            onParamError(getCheckFailureCount());
            let exception_str = ` ${checking_name}() ${target_name} `;
            if (typeof any_errors === 'string') {
              exception_str = any_errors;
            } else {
              exception_str = actualVsExpected(list_of_parameters, exception_str, any_errors, func_name_params);
            }
            if (OP_THROW_EXCEPTIONS) {
              throw exception_str;
            } else if (OP_LOG_ERRORS) {
              // eslint-disable-next-line no-console
              console.log(exception_str);
            }
          }
        }

        // function PRE_aLottery(lottery_name, arguments, draw_date)
        function argumentsParamWarn(check_function) {
          consolelog('///argumentsParamWarn ENTER', check_function, TYPE_CZECH_current_test_number);
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
          consolelog('///argumentsParamWarn EXIT', funct_params);
          return funct_params;
        }

        function applyNoThis(target_name, list_of_parameters, the_check) {
          consolelog('///applyNoThis ENTER', target_name, list_of_parameters, the_check, TYPE_CZECH_current_test_number);
          const funct_params = argumentsParamWarn(the_check);
          // eslint-disable-next-line prefer-spread
          const the_errors = the_check.apply(null, list_of_parameters);
          outputCheck(the_errors, the_check.name, target_name, list_of_parameters, funct_params);
        }

        function applyWithThis(target_name, this_arg, list_of_parameters, the_check) {
          consolelog('///applyWithThis ENTER', target_name, this_arg, list_of_parameters, the_check, TYPE_CZECH_current_test_number);
          const funct_params = argumentsParamWarn(the_check);
          const the_errors = the_check.apply(this_arg, list_of_parameters);
          outputCheck(the_errors, the_check.name, target_name, list_of_parameters, funct_params);
        }

        function failureRatio_() {
          return `${p_failure_count}/${p_check_count}`;
        }

        function checkTally_() {
          return p_check_count;
        }

        function failureTally_() {
          return p_failure_count;
        }

        function checkBegin_() {
          p_call_traps = true;
          p_check_count = 0;
          p_failure_count = 0;
        }

        function checkEnd_() {
          p_call_traps = false;
        }

        function statsReset_() {
          p_PRE_POST_calls = [];
          p_check_count = 0;
          p_failure_count = 0;
          p_call_traps = false;
          p_call_traps = false;
        }

        function stats_(possible_type) {
          let stat_info;
          if (typeof possible_type === 'undefined') {
            stat_info = p_PRE_POST_calls;
            stat_info[0] = `Total Checks : ${p_check_count}`;
            stat_info[1] = `Failure Count: ${p_failure_count}`;
          } else {
            const one_value = p_PRE_POST_calls[possible_type];
            stat_info = { possible_type: one_value };
          }
          return stat_info;
        }

        function checkFuncAsStr(the_check) {
          consolelog('///checkFuncAsStr ENTER', the_check, TYPE_CZECH_current_test_number);
          let check_as_str;
          if (typeof the_check === 'object') {
            const func_name = (x) => `${x}()`;
            const func_list = (accum, cur) => `${accum}, ${cur}`;
            const object_methods = Object.keys(the_check).map(func_name).reduce(func_list);
            check_as_str = `{ ${object_methods} }`;
          } else {
            check_as_str = `${the_check.name}()`;
          }
          consolelog('///checkFuncAsStr EXIT', check_as_str);
          return check_as_str;
        }

        function aCheckError(the_check, whence_error, error_number) {
          if (typeof the_check !== 'function' && typeof the_check !== 'object') {
            const check_str = _toStr(the_check);
            let error_0 = `${whence_error}, is a not a function nor an object that has a value of '${check_str}'`;
            error_0 = _consoleError(error_0, `TC@${error_number}`);
            throw error_0;
          }
        }

        function proxyUsed(target_proxy, the_check) {
          consolelog('///proxyUsed ENTER', target_proxy, the_check, TYPE_CZECH_current_test_number);
          const check_as_str = checkFuncAsStr(the_check);
          if (target_proxy === undefined) {
            let error_5 = `The function to be checked by ${check_as_str} is 'undefined', maybe namespace issue.`;
            error_5 = _consoleError(error_5, 'TC@05');
            throw error_5;
          }
          if (target_proxy === the_check) {
            let error_28 = `_ParametersCheck you cannot use ${target_proxy.name}() to test`
                        + `${the_check.name}(), they must be different functions`;
            error_28 = _consoleError(error_28, 'TC@28');
            throw error_28;
          }
          consolelog('///proxyUsed EXIT');
        }

        function proxyApprove(target_proxy, pre_check, post_check) {
          consolelog('///proxyApprove ENTER', target_proxy, pre_check, post_check, TYPE_CZECH_current_test_number);
          if (t_proxy_targets.has(target_proxy)) {
            let error_4 = `${target_proxy.name}() is already proxied with ${target_proxy.name}`;
            error_4 = _consoleError(error_4, 'TC@04');
            throw error_4;
          }
          if (typeof target_proxy !== 'function') {
            const target_str = _toStr(target_proxy);
            let error_6 = `The first parameter to TypeCzech.check(), target_proxy is not a function, but is instead ${target_str}`;
            error_6 = _consoleError(error_6, 'TC@06');
            throw error_6;
          }
          if (pre_check) {
            // eslint-disable-next-line guard-for-in, no-restricted-syntax
            for (const pre_key in pre_check) { // 18,16,31 are error ids?????
              const a_pre_check = pre_check[pre_key];
              proxyUsed(target_proxy, a_pre_check);
              aCheckError(a_pre_check, 'TypeCzech.check() 2nd parameter, PRE-CHECK()', 31);
            }
          }
          if (post_check) {
            // eslint-disable-next-line guard-for-in, no-restricted-syntax
            for (const post_key in post_check) {
              const a_post_check = post_check[post_key];
              proxyUsed(target_proxy, a_post_check);
              aCheckError(a_post_check, 'TypeCzech.check() 3rd parameter, POST-CHECK()', 37);
            }
          }
          consolelog('///proxyApprove EXIT');
        }

        function recordPre(function_name) {
          if (p_PRE_POST_calls[function_name]) {
            p_PRE_POST_calls[function_name].PRE += 1;
          } else {
            // eslint-disable-next-line object-curly-newline
            p_PRE_POST_calls[function_name] = { PRE: 1, POST: 0, [CHECK_TALLY]: 0, [FAILURE_TALLY]: 0 };
          }
        }

        function recordPost(function_name) {
          if (p_PRE_POST_calls[function_name]) {
            p_PRE_POST_calls[function_name].POST += 1;
          } else {
            // eslint-disable-next-line object-curly-newline
            p_PRE_POST_calls[function_name] = { PRE: 0, POST: 1, [CHECK_TALLY]: 0, [FAILURE_TALLY]: 0 };
          }
        }

        function proxyFunction(target_proxy, pre_check, post_check) {
          consolelog('///proxyFunction ENTER', target_proxy, pre_check, post_check, TYPE_CZECH_current_test_number);
          const function_name = target_proxy.name;
          const proxy_handler = {
            apply(target_function, this_arg, parameter_list) {
              onParamCheck(getCheckFailureCount());
              if (p_call_traps && pre_check) {
                recordPre(function_name);
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
                recordPost(function_name);
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
          consolelog('///proxyFunction EXIT', proxy_handler);
          return new Proxy(target_proxy, proxy_handler);
        }

        function proxyMethods(class_name, class_object, pre_checks, post_checks) {
          consolelog('///proxyMethods ENTER', class_name, class_object, pre_checks, post_checks, TYPE_CZECH_current_test_number);
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
          consolelog('///proxyMethods EXIT', class_object);
          return class_object;
        }

        function getPrePostCheck(pre_post_checks, class_name) {
          consolelog('///getPrePostCheck ENTER', pre_post_checks, class_name, TYPE_CZECH_current_test_number);
          let the_check;
          if (typeof pre_post_checks === 'function') {
            the_check = pre_post_checks;
          } else if (typeof pre_post_checks === 'undefined') {
            the_check = false; // NB, no checks from an empty PRE(s)
          } else {
            the_check = pre_post_checks[class_name];
          }
          consolelog('///getPrePostCheck EXIT', the_check);
          return the_check;
        }

        function proxyClass(class_proxy, pre_checks, post_checks) {
          consolelog('///proxyClass ENTER', class_proxy, pre_checks, post_checks, TYPE_CZECH_current_test_number);
          const class_name = class_proxy.name;
          const class_pre = getPrePostCheck(pre_checks, class_name);
          const class_post = getPrePostCheck(post_checks, class_name);
          const proxy_handler = {
            apply() { }, // NB, class will not use apply
            construct(Target_class, parameter_list, new_target) {
              let class_object;
              onParamCheck(getCheckFailureCount());
              if (p_call_traps && class_pre) {
                recordPre(class_name);
                const apply_type = `${class_name}${BEFORE_APPLY_TYPE}${PRE_CONST_CLASS_NO_THIS}`;
                applyNoThis(apply_type, parameter_list, class_pre);
              }
              class_object = Reflect.construct(Target_class, parameter_list, new_target);
              class_object = proxyMethods(class_name, class_object, pre_checks, post_checks);
              if (p_call_traps && class_post) {
                recordPost(class_name);
                const apply_type = `${class_name}${BEFORE_APPLY_TYPE}${POST_CONST_CLASS_WITH_THIS}`;
                applyWithThis(apply_type, class_object, [class_object], class_post);
              }
              return class_object;
            },
          };
          const new_proxy = new Proxy(class_proxy, proxy_handler);
          consolelog('///proxyClass EXIT', new_proxy);
          return new_proxy;
        }

        function proxyObject(target_proxy, pre_checks, post_checks) {
          consolelog('///proxyObject ENTER', target_proxy, pre_checks, post_checks, TYPE_CZECH_current_test_number);
          const object_name = target_proxy.name;
          const object_pre = getPrePostCheck(pre_checks, object_name);
          const object_post = getPrePostCheck(post_checks, object_name);
          const proxy_handler = {
            apply(target_closure, this_arg, parameter_list) {
              onParamCheck(getCheckFailureCount());
              if (p_call_traps && object_pre) {
                recordPre(object_name);
                const apply_type = `${object_name}${BEFORE_APPLY_TYPE}${PRE_OBJECT_NO_THIS}`;
                applyNoThis(apply_type, parameter_list, object_pre);
              }
              let closure_object = target_closure.apply(this_arg, parameter_list);
              closure_object = proxyMethods(object_name, closure_object, pre_checks, post_checks);
              if (p_call_traps && object_post) {
                recordPost(object_name);
                const apply_type = `${object_name}${BEFORE_APPLY_TYPE}${PRE_OBJECT_WITH_THIS}`;
                applyNoThis(apply_type, [closure_object], post_checks[object_name]);
              }
              return closure_object;
            },
            construct(Target_class, parameter_list) {
              onParamCheck(getCheckFailureCount());
              if (p_call_traps && object_pre) {
                recordPre(object_name);
                const apply_type = `${object_name}${BEFORE_APPLY_TYPE}${POST_CONST_OBJECT_NO_THIS}`;
                applyNoThis(apply_type, parameter_list, object_pre);
              }
              let class_object = new Target_class(...parameter_list);
              class_object = proxyMethods(object_name, class_object, pre_checks, post_checks);
              if (p_call_traps && object_post) {
                recordPost(object_name);
                const apply_type = `${object_name}${BEFORE_APPLY_TYPE}${POST_CONST_OBJECT_WITH_THIS}`;
                applyWithThis(apply_type, class_object, [class_object], object_post);
              }
              return class_object;
            },
          };
          consolelog('///proxyObject proxy_handler', proxy_handler);
          const new_proxy = new Proxy(target_proxy, proxy_handler);
          consolelog('///proxyObject EXIT', new_proxy);
          return new_proxy;
        }

        function realConfirmParams(target_proxy, pre_checks, post_checks) {
          consolelog('///realConfirmParams ENTER', target_proxy, pre_checks, post_checks, TYPE_CZECH_current_test_number);
          const num_params = arguments.length;
          if (num_params !== 2 && num_params !== 3) {
            let error_52 = `TypeCzech.confirmParameters() needs 2 or 3 parameters, not ${num_params}`;
            error_52 = _consoleError(error_52, 'TC@52');
            throw error_52;
          }
          proxyApprove(target_proxy, pre_checks, post_checks);
          let proxied_thing;
          const is_class = _isAClass(target_proxy);
          if (is_class) {
            proxied_thing = proxyClass(target_proxy, pre_checks, post_checks);
          } else {
            const pre_check_type = _aTypeOf(pre_checks);
            const post_check_type = _aTypeOf(post_checks);
            if (pre_check_type === 'Object' || post_check_type === 'Object') {
            //  console.log('13089775 ')
              proxied_thing = proxyObject(target_proxy, pre_checks, post_checks);
            } else {
              proxied_thing = proxyFunction(target_proxy, pre_checks, post_checks);
            }
          }
          t_proxy_targets.add(proxied_thing);
          consolelog('///realConfirmParams EXIT', proxied_thing);
          return proxied_thing;
        }

        // eslint-disable-next-line no-unused-vars
        const nopCheck = (function_to_check, _pre_check, _post_check) => function_to_check;

        const confirmParameters = t_do_param_checking ? realConfirmParams : nopCheck;

        init_ParametersCheck();

        const public_methods = {
          confirmParameters,

          checkBegin_,
          checkTally_,
          checkEnd_,

          failureTally_,
          failureRatio_,

          stats_,
          statsReset_,
        };

        return public_methods;
      } // _ParametersCheck()

      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      /* eslint-disable */

    /* type_czech = TypeCzech('LOG-ERRORS')

    var a = [];
    a[0] = a;
    type_czech._cycle.decycle(a);
    //[{"$ref":"$"}]

    type_czech._cycle.decycle(window);
    ///{window: {…}, self: {…}, document: {…}, name: "Alan Turing", location: {…}, …}

    https://github.com/douglascrockford/JSON-js/blob/master/cycle.js
    */

    // commit 8e8b0407e475e35942f7e9461dab81929fcc7321
    
/*
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

const _cycle = {};

////////////////////////////////////////////////////////////////////////////////if (typeof JSON.decycle !== "function") {
  _cycle.decycle = function decycle(object, replacer) {
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
//      return JSON.stringify(_cycle.decycle(a));

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


////////////////////////////////////////////////////////////////////////////////if (typeof JSON.retrocycle !== "function") {
  _cycle.retrocycle = function retrocycle($) {
      "use strict";

// Restore an object that was reduced by decycle. Members whose values are
// objects of the form
//      {$ref: PATH}
// are replaced with references to the value found by the PATH. This will
// restore cycles. The object will be mutated.

// The eval function is used to locate the values described by a PATH. The
// root object is kept in a $ variable. A regular expression is used to
// assure that the PATH is extremely well formed. The regexp contains nested
// * quantifiers. That has been known to have extremely bad performance
// problems on some browsers for very long strings. A PATH is expected to be
// reasonably short. A PATH is allowed to belong to a very restricted subset of
// Goessner's JSONPath.

// So,
//      var s = '[{"$ref":"$"}]';
//      return _cycle.retrocycle(JSON.parse(s));
// produces an array containing a single element which is the array itself.

      var px = /^\$(?:\[(?:\d+|"(?:[^\\"\u0000-\u001f]|\\(?:[\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*")\])*$/;

      (function rez(value) {

// The rez function walks recursively through the object looking for $ref
// properties. When it finds one that has a value that is a path, then it
// replaces the $ref object with a reference to the value that is found by
// the path.

          if (value && typeof value === "object") {
              if (Array.isArray(value)) {
                  value.forEach(function (element, i) {
                      if (typeof element === "object" && element !== null) {
                          var path = element.$ref;
                          if (typeof path === "string" && px.test(path)) {
                              value[i] = eval(path);
                          } else {
                              rez(element);
                          }
                      }
                  });
              } else {
                  Object.keys(value).forEach(function (name) {
                      var item = value[name];
                      if (typeof item === "object" && item !== null) {
                          var path = item.$ref;
                          if (typeof path === "string" && px.test(path)) {
                              value[name] = eval(path);
                          } else {
                              rez(item);
                          }
                      }
                  });
              }
          }
      }($));
      return $;
  };
////////////////////////////////////////////////////////////////////////////////}

      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      
    /*  type_czech = TypeCzech('LOG-ERRORS')
    type_czech._fast_json_stable_stringify({b:2, a:1});
    //{\"a\":1,\"b\":2}

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

            if (node === undefined) return;
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

      function _errorClassName(scalar_type) {
        consolelog('///_errorClassName ENTER', scalar_type, TYPE_CZECH_current_test_number);
        let error_string = looksLikeType(scalar_type);
        if (!error_string) {
          const error_16 = `The type '${scalar_type}' is not the correct class`;
          error_string = _consoleError(error_16, 'TC@16');
        }
        consolelog('///_errorClassName EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._shapeErrorMess([, , "boolean"], ["super", "man"])
      //TC@03 - Index '2' is supposed to be a 'boolean', but is missing : ['super','man']

      */
      function _shapeErrorMess(shallow_array, check_array) {
        consolelog('///_shapeErrorMess ENTER', shallow_array, check_array, TYPE_CZECH_current_test_number);
        const extra_shapes = Object.entries(shallow_array);
        const [extra_index, extra_type] = extra_shapes[0];
        const check_arr_str = _toStr(check_array);
        const error_3 = `Index '${extra_index}' is supposed to be a '${extra_type}', but is missing : ${check_arr_str}`;
        const error_string = _consoleError(error_3, 'TC@03');
        consolelog('///_shapeErrorMess EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._shapeContainer([456,789] , ["Number"], 'TYPE-EXTRAS', 179);
      //""

      type_czech._shapeContainer([456,789] , ["number"], 'TYPE-EXTRAS', 179);
      //"TC@33 - The type 'number' is not a valid type, but it looks just like 'Number'"

      type_czech._shapeContainer([456,789] , ["is-bad"], 'TYPE-EXTRAS', 179);
      //"TC@45 - INDEX '1' is asserted to be a 'is-bad', but is fallaciously a 'Number' : 789"

      type_czech._shapeContainer({X:33}, {r:'N'}, 'TYPE-EXTRAS', 179);
      //TC@46 -  The key 'r', which has a type of 'N', is missing in the checked object

      type_czech._shapeContainer({X:33}, {r:'number'}, 'TYPE-EXTRAS', 179);
      //"TC@33 - The type 'number' is not a valid type, but it looks just like 'Number'"

       type_czech._shapeContainer({X:33}, {X:'String'}, 'TYPE-EXTRAS', 179);
      //"TC@43 - Property 'X' is indicated to be a 'String', but is inaccurately a 'Number' : 33"

      type_czech._shapeContainer({r:11}, ["number"], 'TYPE-VERIFY', 179);
      //TC@36 - Parameter is meant to be 'Array' but is of the wrong type of 'Object':{'r':11}

      type_czech._shapeContainer([456,789] , {X:'String'}, 'TYPE-VERIFY', 179);
      //"TC@36 - Parameter is meant to be 'Object' but is of the wrong type of 'Array':[456,789]"

      type_czech._shapeContainer([[456,789]] , [["Number"]], 'TYPE-EXTRAS', 179);
      //""

      type_czech._shapeContainer( [456,789] , [["Number"]], 'TYPE-EXTRAS', 179);
      //TC@36 - Parameter is meant to be 'Array' but is of the wrong type of 'Number':456

//////////////////////////////////////////////////////////////////////////////////////////////////////

type_czech._shapeContainer( [456,789] , [["Number"]], 'TYPE-EXTRAS', 179);
111 TC@36 - Parameter is meant to be 'Array' but is of the wrong type of 'Number':789 type_czech._shapeContainer( [[456,789], ['a','b'], 3] , [["Number"], ['String']], 'TYPE-EXTRAS', 179);
333 TC@36 - Parameter is meant to be 'Array' but is of the wrong type of 'Number':456

type_czech._shapeContainer( [456,789] , [["Number"], ['String']], 'TYPE-EXTRAS', 179);
222 TC@36 - Parameter is meant to be 'Array' but is of the wrong type of 'Number':789 consolelog.js:165:13
333 TC@36 - Parameter is meant to be 'Array' but is of the wrong type of 'Number':456

type_czech._shapeContainer( [[456,789], ['a','b'], 3] , [["Number"], ['String'], "Boolean"], 'TYPE-EXTRAS', 179);

type_czech._shapeContainer( {a:1} , [["Number"], ['String']], 'TYPE-EXTRAS', 179);

type_czech._shapeContainer( [{a:1}, 'sdf'] , [{a:"Number"}, ['String']], 'TYPE-EXTRAS', 179);

///////////////////////////////

type_czech._shapeContainer( [  [1], [2] ] , [["Number"], ['Number']], 'TYPE-EXTRAS', 179);

////////////////////////////////
type_czech._shapeContainer( [  [[1], [2]], [[1], ['a']] ] , [ [["Number"]], [['Number']] ], 'TYPE-EXTRAS', 179);
3 TC@44 -  INDEX '0' is assumed to be a 'Number', but is mistakenly a 'String'.
1 TC@44 -  INDEX '0' is assumed to be a 'Number', but is mistakenly a 'String'.

3 TC@44 -  INDEX '0' is assumed to be a 'Number', but is mistakenly a 'String'.
2 TC@44 -  INDEX '0' is assumed to be a 'Number', but is mistakenly a 'String'.

type_czech._shapeContainer( [  [[1, false], [2, false]], [[1, false], [2, false]] ] , [ [["Number", "B"]], [['Number', "B"]] ], 'TYPE-EXTRAS', 179);

type_czech._shapeContainer( [  [[1, false], [2, false]], [[1, false], [2, 2]] ] , [ [["Number", "B"]], [['Number', "B"]] ], 'TYPE-EXTRAS', 179);
1 TC@36 - Parameter is meant to be 'String' but is of the wrong type of 'Array':[1,false]

    */
// q*bert

      function _shapeContainer(check_container, container_shape, check_type, array_recurse_level) {
        consolelog('///_shapeContainer ENTER', check_container, container_shape, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        let error_string = '';
        const object_type = _aTypeOf(check_container);
        const shape_type = _aTypeOf(container_shape);
        if (container_shape === undefined) {
          error_string = '';
        } else if (object_type !== shape_type) {
          if (object_type === container_shape) {
            // Here is where we run into {} === 'Object'
          } else {
            const check_str = _jsonStr(check_container);
            const error_36 = `Parameter is meant to be '${shape_type}' but is`
                        + ` of the wrong type of '${object_type}':${check_str}`;
            error_string = _consoleError(error_36, 'TC@36');
          }
        } else if (shape_type === 'Array') {
          // eslint-disable-next-line no-use-before-define
          error_string = _shapeArrayTypes(check_container, container_shape, check_type, array_recurse_level);
        } else if (shape_type === 'Object') {
          // eslint-disable-next-line no-use-before-define
          error_string = _shapeCollectionTypes(check_container, container_shape, check_type, array_recurse_level);
        }
        consolelog('///_shapeContainer EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._arrayOfOneType([1,2,3], 'Number', 'TYPE-EXTRAS');
      //""

      type_czech._arrayOfOneType([1,false,3], 'Number', 'TYPE-VERIFY');
      //TC@45 - INDEX '1' is asserted to be a 'Number', but is fallaciously a 'Boolean' : false

      type_czech._arrayOfOneType(["as",false,3], 'S', 'TYPE-VERIFY');
      //TC@45 - INDEX '2' is asserted to be a 'String', but is fallaciously a 'Number' : 3

    */
      const _arrayOfOneType = (check_array, array_type, check_type, array_recurse_level) => {
        consolelog('///_arrayOfOneType ENTER', check_array, array_type, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        let error_string = '';
        const type_of_array = _shortToLongType(array_type);
        check_array.forEach((check_element, element_index) => {
          if (error_string === '') {
            const variable_type = _aTypeOf(check_element);
            if (_isCollection(type_of_array)) {
              // eslint-disable-next-line no-use-before-define
              error_string = _shapeVariable(check_element, type_of_array, check_type, array_recurse_level);
            } else if (type_of_array !== variable_type) {
              if (OP_UNDEF_OK && variable_type === 'null') {
                // ingore nulls if OP_UNDEF_OK
              } else if (OP_UNDEF_OK && variable_type === 'undefined') {
                // ingore undefined if OP_UNDEF_OK
              } else {
                let error_local = looksLikeType(type_of_array);
                if (!error_local) {
                  const show_element = _toStr(check_element);
                  const error_45 = `INDEX '${element_index}' is asserted to be a '${type_of_array}',`
                                + ` but is fallaciously a '${variable_type}' : ${show_element}`;
                  error_local = _consoleError(error_45, 'TC@45');
                }
                error_string = error_local;
              }
            }
          }
        });
        consolelog('///_arrayOfOneType EXIT', error_string);
        return error_string;
      };

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._showRealTypes('no-such-type');
      //"VALID TYPES = A:Array, I:BigInt, B:Boolean, D:Date, F:Function, N:Number, O:Object, R:RegExp, S:String, Y:Symbol"

      type_czech._showRealTypes('string');
      //""

      */
      function _showRealTypes(possible_type) {
        consolelog('///_showRealTypes ENTER', possible_type, TYPE_CZECH_current_test_number);
        let show_real_types = '';
        const lower_possible = possible_type.toLowerCase();
        if (!POSSIBLE_LOWER_VALIDS.includes(lower_possible)) {
          show_real_types = ` ${VALID_TYPES_MESS}`;
        }
        consolelog('///_showRealTypes EXIT', show_real_types);
        return show_real_types;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._wrongType('string', 0, 'Date');
      //"TC@44 -  INDEX '0' is assumed to be a 'string', but is mistakenly a 'Date'. "

      type_czech._wrongType('Noomber', 0, 'Number');
      //TC@44 -  INDEX '0' is assumed to be a 'Noomber', but is mistakenly a 'Number'. VALID TYPES = A:Array, I:BigInt, B:Boolean, D:Date, F:Function, N:Number, O:Object, R:RegExp, S:String, Y:Symbol

      type_czech._wrongType(null, 2, 'Number');
      //"TC@44 -  INDEX '0' is assumed to be a 'null', but is mistakenly a 'Number'. "

      type_czech._wrongType(undefined, 2, 'Number');
      //"TC@44 -  INDEX '0' is assumed to be a 'undefined', but is mistakenly a 'Number'. "

      */
      const _wrongType = (expected_type, element_index, real_type) => {
        consolelog('///_wrongType ENTER', expected_type, element_index, real_type, TYPE_CZECH_current_test_number);
        let error_string = '';
        let show_real_types = '';
        let expected_string = '';
        if (expected_type === null) {
          expected_string = 'null';
        } else if (typeof expected_type === 'undefined') {
          expected_string = 'undefined';
        } else {
          expected_string = expected_type;
          show_real_types = _showRealTypes(expected_type);
        }
        error_string = looksLikeType(expected_string);
        if (!error_string) {
          const error_44 = ` INDEX '${element_index}' is assumed to be a '${expected_string}',`
          + ` but is mistakenly a '${real_type}'.${show_real_types}`;
          error_string = _consoleError(error_44, 'TC@44');
        }
        consolelog('///_wrongType EXIT', error_string);
        return error_string;
      };

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._shapeArrayTypes([ 13, 14, 15 ], ['Number'], 'TYPE-EXTRAS');
      //""

      type_czech._shapeArrayTypes([ 13, 14, 15 ], ['Number', 'B', 'D'], 'TYPE-EXTRAS');
      //TC@44 - INDEX '2' is assumed to be a 'Date', but is mistakenly a 'Number'

      type_czech._shapeArrayTypes(["bob", "newheart", 1 , 2], ["String", "String"], 'TYPE-EXTRAS');
      //""

      type_czech._shapeArrayTypes([], ['Number'], 'TYPE-VERIFY');
      //""

      */
      function _shapeArrayTypes(check_array, array_shape, check_type, array_recurse_level) {
        consolelog('///_shapeArrayTypes ENTER', check_array, array_shape, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        let error_string = '';
        if (array_shape.length === 1 && check_array.length > 1) {
          if (array_recurse_level === _POS_VARIAD_ARR_L_0) {
            error_string = "Use type_czech.valid( [...arguments], ['the-var-type']) for VARIADIC function parameters";
          } else {
            error_string = _arrayOfOneType(check_array, array_shape[0], check_type, array_recurse_level + 1);
          }
        } else {
          const shallow_array = Array.from(array_shape);
          const shape_length = shallow_array.length;
          check_array.forEach((check_element, element_index) => {
            if (error_string === '') {
              const variable_type = _aTypeOf(check_element);
              const container_type = _typeFromArray(shallow_array, element_index);
              if (_isCollection(container_type)) {
                error_string = _shapeContainer(check_element, container_type, check_type, array_recurse_level + 1);
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
                    error_string = _wrongType(element_type, element_index, variable_type);
                  }
                }
              }
              delete shallow_array[element_index];
            }
          });
          if (shape_length !== 1 && check_array.length < shape_length) {
            error_string = _shapeErrorMess(shallow_array, check_array);
          }
        }
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._shapePropertyType({r:"N"}, 'r', 11);
      //""

      type_czech._shapePropertyType({r:"not-real"}, 'r', 11);
      //TC@40 - The type 'not-real' is not valid

        type_czech._shapePropertyType({r:"N"}, 'r', undefined);
      //TC@41 - Key 'r' was supposed to be a 'Number' but was instead 'undefined'

      type_czech._shapePropertyType({r:"N"}, 'r', null);
      //TC@42 - Key 'r' was supposed to be a 'Number' but was instead 'null'

      type_czech._shapePropertyType({r:"N"}, 'r', 'a-string');
      //TC@43 - Property 'r' is supposed to be a 'Number', but is incorrectly a 'String' : a-string

      */
      const _shapePropertyType = (property_type, property_key, check_variable) => {
        consolelog('///_shapePropertyType ENTER', property_type, property_key, check_variable, TYPE_CZECH_current_test_number);
        let error_string = '';
        const valid_type = _shortToLongType(property_type[property_key]);
        if (!_isPlainJsType(valid_type)) {
          error_string = looksLikeType(valid_type);
          if (!error_string) {
            const error_40 = `The type '${valid_type}' is not valid`;
            error_string = _consoleError(error_40, 'TC@40');
          }
        } else {
          const variable_type = _aTypeOf(check_variable);
          if (valid_type !== variable_type) {
            if (OP_UNDEF_OK && variable_type === 'null') {
              // ingore nulls if OP_UNDEF_OK
            } else if (OP_UNDEF_OK && variable_type === 'undefined') {
              // ingore undefined if OP_UNDEF_OK
            } else if (typeof check_variable === 'undefined') {
              const error_41 = `Key '${property_key}' was given to be a '${valid_type}' but was instead 'undefined'`;
              error_string = _consoleError(error_41, 'TC@41');
            } else if (variable_type === 'null') {
              const error_42 = `Key '${property_key}' was determined to be a '${valid_type}' but was instead 'null'`;
              error_string = _consoleError(error_42, 'TC@42');
            } else {
              const check_str = _toStr(check_variable);
              const error_43 = `Property '${property_key}' is indicated to be a '${valid_type}',`
                          + ` but is inaccurately a '${variable_type}' : ${check_str}`;
              error_string = _consoleError(error_43, 'TC@43');
            }
          }
        }
        consolelog('///_shapePropertyType EXIT', error_string);
        return error_string;
      };

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._shapeCollectionTypes({a:123},  {a:"N"}, 'TYPE-VERIFY');
      //""

      type_czech._shapeCollectionTypes({a:123, b:789},  {a:"N"}, 'TYPE-VERIFY');
      //TC@99 - Wrong Type in a Collection [{'a':123,'B':789}], expected [{'a':'N'}]
      //               TC@39 - Extra key in checked object - (b:'789')

      type_czech._shapeCollectionTypes({a:[123], b:[789]},  {a:["N"]}, 'TYPE-VERIFY');
      //""

      type_czech._shapeCollectionTypes({a:[123], b:[789]},  {a:["S"]}, 'TYPE-VERIFY');
      //TC@99 - Wrong Type in a Collection [{'a':[123],'B':[789]}], expected [{'a':['S']}]
      //               TC@44 - INDEX '0' is assumed to be a 'String', but is mistakenly a 'Number'"

      type_czech._shapeCollectionTypes({ X: 33 }, { r: "N" }, 'TYPE-EXTRAS');
      //TC@99 - TC@46 -  The key 'r', which has a type of 'N', is missing in the checked object

      */
      function _shapeCollectionTypes(check_object, object_shape, check_type, array_recurse_level) {
        consolelog('///_shapeCollectionTypes ENTER', check_object, object_shape, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        const error_strings = [];
        const valid_shallow = { ...object_shape };
        const check_entries = Object.entries(check_object);
        check_entries.forEach((shape_entry) => {
          let error_string = '';
          const [check_key, check_var_or_obj] = shape_entry;
          if (_isCollection(check_var_or_obj)) {
            const correct_shape = object_shape[check_key];
            error_string += _shapeContainer(check_object[check_key], correct_shape, check_type, array_recurse_level);
            delete valid_shallow[check_key];
          } else if (Object.prototype.hasOwnProperty.call(valid_shallow, check_key)) {
            error_string += _shapePropertyType(valid_shallow, check_key, check_var_or_obj);
            delete valid_shallow[check_key];
          } else if (check_type === TYPE_VERIFY) {
            const error_39 = `Extra key in checked object - (${check_key}:'${check_var_or_obj}')`;
            error_string = _consoleError(error_39, 'TC@39');
          } else {
            // console.log('NO ERROR shapesCheck');
          }
          if (error_string) {
            error_strings.push(error_string);
          }
        });
        let error_99 = '';
        if (error_strings.length > 0) {
          error_strings.forEach((empty_error) => { error_99 += empty_error; });
        }
        error_99 += _missingKey(valid_shallow);
        return error_99;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._shapeScalar(17 ,"Number");
      //""

      type_czech._shapeScalar(17 ,"String");
      //TC@35 - The variable '17', which is a 'Number', is not a 'String'

      type_czech._shapeScalar({} ,"Object");
      //""

      type_czech._shapeScalar({} ,"capybara");
      //TC@33 - The type 'capybara' is not valid

      type_czech._shapeScalar(undefined, "N");
      //TC@34 - The variable 'undefined', is not a 'N'

      type_czech._shapeScalar(null, "N");
      //TC@35 - The variable 'null', which is a 'null', is not a 'N'

      */
      function _shapeScalar(actual_value, expected_type) {
        consolelog('///_shapeScalar ENTER', actual_value, expected_type, TYPE_CZECH_current_test_number);
        const expected_long_type = _shortToLongType(expected_type);
        let variable_str;
        let error_string = '';
        if (expected_long_type === 'null' || expected_long_type === 'undefined') {
          const error_17 = `The type '${expected_long_type}' is not a valid type`;
          error_string = _consoleError(error_17, 'TC@17');
        } else if (!_isPlainJsType(expected_long_type)) {
          const actual_type = _anObjectsType(actual_value);
          if (actual_type !== expected_long_type) {
            error_string = _errorClassName(expected_long_type);
          }
        } else {
          const variable_type = _aTypeOf(actual_value);
          consolelog('///_shapeScalar _aTypeOf', variable_type, TYPE_CZECH_current_test_number);
          if (variable_type === expected_long_type) {
            error_string = '';
          } else if (variable_type === 'Array') {
            variable_str = '[]';
            error_string = `The variable '[]', which is a 'Array', is not a '${expected_long_type}'`;
          } else if (variable_type === 'Object') {
            variable_str = '{}';
            error_string = `The variable '{}', which is a 'Object', is not a '${expected_long_type}'`;
          } else if (variable_type === 'undefined') {
            const error_34 = `The variable '${variable_str}', is not a '${expected_long_type}'`;
            error_string = _consoleError(error_34, 'TC@34');
          } else {
            variable_str = actual_value;
            error_string = `The variable '${variable_str}', which is a '${variable_type}', is not a '${expected_long_type}'`;
          }
        }
        consolelog('///_shapeScalar EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._shapeVariable([456,789] , ["Number"], 'TYPE-EXTRAS');
      //""

      type_czech._shapeVariable([[456,789]] , [["Number"]], 'TYPE-EXTRAS');
      //""

      type_czech._shapeVariable(17 ,"Number", 'TYPE-VERIFY');
      //""

      type_czech._shapeVariable(17 ,"String", 'TYPE-VERIFY');
      //TC@35 - The variable '17', which is a 'Number', is not a 'String'

      type_czech._shapeVariable({a:123, b:456}, {a:"Number", b:"String"}, 'TYPE-VERIFY');
      //TC@43 - Property 'B' is supposed to be a 'String', but is incorrectly a 'Number' : 456

      type_czech._shapeVariable(['hello', 'there'] , ["String"], 'TYPE-VERIFY');
      //''

      */
      function _shapeVariable(check_variable, variable_type, check_type, array_recurse_level) {
        consolelog('///_shapeVariable ENTER', check_variable, variable_type, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        let error_string;
        if (_isCollection(variable_type)) {
          error_string = _shapeContainer(check_variable, variable_type, check_type, array_recurse_level);
        } else {
          error_string = _shapeScalar(check_variable, variable_type);
        }
        consolelog('///_shapeVariable EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._shapeCheck([1,2,3], ["N", "N", "N"], 'TYPE-VERIFY');
      ""

      type_czech._shapeCheck([1,2,3], ["N", "N", "N"], 'TYPE-EXTRAS');
      //""

      type_czech._shapeCheck([456, 789], ["number"], 'TYPE-EXTRAS');
      //""

      type_czech._shapeCheck([[456, 789]], [["number"]], 'TYPE-EXTRAS');
      //""

      */
      function _shapeCheck(check_variable, variable_type, check_type, array_recurse_level) {
        consolelog('///_shapeCheck ENTER', check_variable, variable_type, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        if (!Array.isArray(check_variable)) {
          // eslint-disable-next-line no-param-reassign
          array_recurse_level = _NOT_VARIAD_ARR_L_179;
        }
        const error_string = _shapeVariable(check_variable, variable_type, check_type, array_recurse_level);
        consolelog('///_shapeCheck EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._emptyErrorMess(['EMPTY-ERROR', 'EMPTY-OK'], ['first', 'middle', 'last']);
      //TC@29 - INDEX '0' is supposed to be a 'EMPTY-ERROR', but is missing : ['first','middle','last']

      */
      function _emptyErrorMess(shallow_array, check_array) {
        consolelog('///_emptyErrorMess ENTER', shallow_array, check_array, TYPE_CZECH_current_test_number);
        const extra_shapes = Object.entries(shallow_array);
        const [extra_index, extra_type] = extra_shapes[0];
        const check_str = _jsonStr(check_array);
        const error_29 = `INDEX '${extra_index}' is promised to be a '${extra_type}', but is missing : ${check_str}`;
        const error_string = _consoleError(error_29, 'TC@29');
        consolelog('///_emptyErrorMess EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._emptyError('EMPTY-ERROR', 'a-string', 0, ['a-string', 17], 'String', 'EMPTY-VERIFY');
      //""

      type_czech._emptyError('EMPTY-ERROR', '', 0, ['', 17], 'String', 'EMPTY-VERIFY');
      //TC@30 - INDEX '0' is incorrectly empty : ['',17]

      type_czech._emptyError('EMPTY-ERROR', false, 0, [false, 17], 'Boolean', 'EMPTY-VERIFY');
      //TC@31 - INDEX '0' is a boolean, 'false', not an Array/Object/String/Date, it cannot by empty : [false,17]

      type_czech._emptyError('bad-EMPTY', 'a-string', 0, ['a-string', 17], 'String', 'EMPTY-VERIFY');
      //TC@32 - INDEX '0' is wrong type, 'bad-EMPTY', only [EM-ER, EMPTY-ERROR, EMPTY-OK, EM-OK] allowed  : ['a-string',17]

      */
      function _emptyError(empty_type, check_element, element_index, check_array, variable_type, check_type, array_recurse_level) {
        consolelog('///_emptyError PART 1 ENTER', empty_type, check_element, element_index);
        consolelog('///_emptyError PART 2 ENTER', check_array, variable_type, check_type, TYPE_CZECH_current_test_number);
        let error_string;
        const check_str = _jsonStr(check_array);
        if (empty_type === 'EMPTY-ERROR' || empty_type === 'EM-ER') {
          if (_isEmpty(check_element)) {
            const error_30 = `INDEX '${element_index}' is erroneously empty :`;
            error_string = _consoleError(error_30, 'TC@30');
          } else {
            error_string = '';
          }
        } else if (empty_type === 'EMPTY-OK' || empty_type === 'EM-OK'
                || empty_type === 'EMPTY-IGNORE' || empty_type === 'EM-IG') {
          // eslint-disable-next-line no-use-before-define
          error_string = _emptyContainer(check_array[element_index], empty_type, check_type, array_recurse_level);
        } else if (_aTypeOf(empty_type) === 'String') {
          const error_32 = `INDEX '${element_index}' is incorrect  type, '${empty_type}', only`
                      + ` [EM-ER, EMPTY-ERROR, EMPTY-OK, EM-OK, EMPTY-IGNORE, EM-IG] allowed  : ${check_str}`;
          error_string = _consoleError(error_32, 'TC@32');
        } else {
          // eslint-disable-next-line no-use-before-define
          error_string = _emptyContainer(check_array[element_index], empty_type, check_type, array_recurse_level);
        }
        consolelog('///_emptyError EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._emptyArrayInArray([[11], [13], [17]], ["EM-ER"], 'EMPTY-VERIFY');
      //""

      type_czech._emptyArrayInArray([[11], [NaN], [17]], ["EM-ER"], 'EMPTY-VERIFY');
      //TC@30 - INDEX '0' is erroneously empty :  inside [1]

      type_czech._emptyArrayInArray([["a-s", "", "c-s"], ["x-s",  "y-s", "z-s"]],   ["EM-ER", "EM-ER", "EM-ER"], 'EMPTY-VERIFY');
      //

      type_czech._emptyArrayInArray([["a-s", "", "c-s"], ["x-s",  "y-s", "z-s"]],   [["EM-ER", "EM-ER", "EM-ER"]], 'EMPTY-VERIFY');
      //TC@96 - Variable 'check_array' must be an array but is a 'String', : 'c-s' inside [0]TC@96 - Variable 'check_array' must be an array but is a 'String', : 'z-s' inside [1]

    */
      const _emptyArrayInArray = (check_array, array_type, check_type, array_recurse_level) => {
        consolelog('///_emptyArrayInArray ENTER', check_array, array_type, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        let error_string = '';
        const check_array_type = _aTypeOf(check_array);
        if (check_array_type !== 'Array') {
          const check_str = _toStr(check_array);
          const error_97 = `Variable '${check_array}' must be an array but is instead a '${check_array_type}', : ${check_str}`;
          error_string = _consoleError(error_97, 'TC@97');
        } else {
          check_array.forEach((element, array_index) => {
            if (error_string === '') {
              if (array_type.length === 1) {
                // eslint-disable-next-line no-use-before-define
                let error_28 = _emptyContainer(element, array_type, check_type, array_recurse_level);
                if (error_28) {
                  error_28 += ` inside [${array_index}]`;
                }
                error_string += error_28;
              } else {
                // eslint-disable-next-line no-use-before-define
                error_string += _emptyContainer(element, array_type[array_index], check_type, array_recurse_level);
              }
            }
          });
        }
        consolelog('///_emptyArrayInArray EXIT', error_string);
        return error_string;
      };

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._emptyArrayTypes([17], ['EMPTY-ERROR'], 'EMPTY-VERIFY');
      //""

      type_czech._emptyArrayTypes(['first', 'middle', ''], ['EMPTY-ERROR', 'EMPTY-OK', 'EMPTY-ERROR'], 'EMPTY-VERIFY');
      //"TC@30 - INDEX '2' is erroneously empty :"

      type_czech._emptyArrayTypes(['first', 'middle', 'last'], ['EMPTY-ERROR', "EMPTY-OK"], 'EMPTY-VERIFY');
      //TC@20 - The parameter array ['first','middle','last'] does not have the same number of elements as ['EMPTY-ERROR','EMPTY-OK'].  Lengths are different 3 !== 2.

      type_czech._emptyArrayTypes([''], ['EMPTY-OK', 'EMPTY-ERROR'], 'EMPTY-EXTRAS');
      //""

      type_czech._emptyArrayTypes(['', ''], ['EMPTY-OK', 'EMPTY-ERROR'], 'EMPTY-EXTRAS');
      //TC@30 - INDEX '1' is erroneously empty :

      type_czech._emptyArrayTypes(['an-str', 'an-str'], ['EMPTY-OK', 'EMPTY-ERROR'], 'EMPTY-EXTRAS');
      //""

      type_czech._emptyArrayTypes([],["EMPTY-ER"],"EMPTY-VERIFY");
      //TC@19 - The parameter array [] is empty.

      */

      function emptyArrayEmptyError(check_str) {
        const error_19 = `The parameter array ${check_str} is empty.`;
        const error_string = _consoleError(error_19, 'TC@19');
        return error_string;
      }

      function emptyArrayElementsError(check_str, array_shape, check_length, shape_length) {
        const shape_str = _toStr(JSON.stringify(array_shape));
        const error_20 = `The parameter array ${check_str} does not have the same number of elements as ${shape_str}. `
                      + ` Lengths are different ${check_length} !== ${shape_length}.`;
        const error_string = _consoleError(error_20, 'TC@20');
        return error_string;
      }

      function emptyArrayNotArrayError(check_array, check_array_type, check_str) {
        const error_96 = `Variable '${check_array}' must be an array but is a '${check_array_type}', : ${check_str}`;
        const error_string = _consoleError(error_96, 'TC@96');
        return error_string;
      }

      const _emptyArrayTypes = (check_array, array_shape, check_type, array_recurse_level) => {
        consolelog('///_emptyArrayTypes ENTER', check_array, array_shape, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        let error_string = '';
        const check_length = check_array.length;
        const shape_length = array_shape.length;
        const check_str = _toStr(JSON.stringify(check_array));
        if (check_length === 0) {
          error_string = emptyArrayEmptyError(check_str);
        } else if (check_type !== 'EMPTY-EXTRAS' && shape_length > 1 && shape_length !== check_length) {
          error_string = emptyArrayElementsError(check_str, array_shape, check_length, shape_length);
        } else {
          const shallow_array = Array.from(array_shape);
          const shallow_length = shallow_array.length;
          const check_array_type = _aTypeOf(check_array);
          if (check_array_type !== 'Array') {
            error_string = emptyArrayNotArrayError(check_array, check_array_type, check_str);
          } else {
            check_array.forEach((check_element, element_index) => {
              if (error_string === '') {
                const var_type = _aTypeOf(check_element);
                const element_type = _typeFromArray(shallow_array, element_index);
                if (_isCollection(element_type)) {
                  // eslint-disable-next-line no-use-before-define
                  error_string = _emptyContainer(check_array[element_index], element_type, check_type, array_recurse_level);
                } else if (shallow_length !== 1) {
                  delete shallow_array[element_index];
                }
                const empty_err = _emptyError(element_type, check_element, element_index, check_array, var_type, check_type, array_recurse_level);
                if (empty_err) {
                  error_string = empty_err;
                }
              }
            });
          }
          if (shallow_length !== 1 && check_type !== EMPTY_EXTRAS && check_array.length !== shallow_length) {
            error_string = _emptyErrorMess(array_shape, check_array);
          }
        }
        consolelog('///_emptyArrayTypes EXIT', error_string);
        return error_string;
      };

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._emptyKeysChecked('EMPTY-ERROR', 0, 'var-or-key-name');
      //TC@08 - 'var-or-key-name' is a 'Number' which is supposed to be 'EMPTY-ERROR' but has a value of 0

      type_czech._emptyKeysChecked('EMPTY-ERROR', true, 'var-or-key-name');
      //TC@09 - Cannot be empty 'var-or-key-name' EMPTY-ER' is a true :: boolean

      type_czech._emptyKeysChecked('is_-RONG', true, 'var-or-key-name');
      //TC@10 - bad empty key 'is_-RONG', must be either EMPTY-OK/EM-OK or EMPTY-ER/EM-ER

      type_czech._emptyKeysChecked('EMPTY-ERROR', {}, 'var-or-key-name');
      //TC@08 - 'var-or-key-name' is a 'Object' which is supposed to be 'EMPTY-ERROR' but has a value of {}

      */

      const _emptyKeysChecked = (empty_choice, check_var_or_obj, check_key) => {
        consolelog('///_emptyKeysChecked ENTER', empty_choice, check_var_or_obj, check_key, TYPE_CZECH_current_test_number);
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
                          + `to be '${long_empty}' but has a value of ${var_str}.`;
              error_string = _consoleError(error_8, 'TC@08');
            }
          } else {
            const error_9 = `Cannot be invalid '${check_key}' ${long_empty}' is a ${check_var_or_obj} :: ${current_type}`;
            error_string = _consoleError(error_9, 'TC@09');
          }
        } else if (long_empty !== EMPTY_OK && long_empty !== EMPTY_IG) {
          const error_10 = `bad invalid key '${_toStr(long_empty)}', must be either EMPTY-OK -ER -IG`;
          error_string = _consoleError(error_10, 'TC@10');
        }
        consolelog('///_emptyKeysChecked EXIT', error_string);
        return error_string;
      };

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._emptyCollectionTypes({ r: '' }, { r: 'EM-ER' }, 'EMPTY-VERIFY');
      //TC@13 - Empty Value in a Collection [{'r':''}], expected [{'r':'EM-ER'}]
      //               TC@08 - 'r' is a 'String' which is reputed to be 'EMPTY-ERROR' but has a value of ''.

      type_czech._emptyCollectionTypes({ r: 11 }, { r: 'EM-ER' }, 'EMPTY-VERIFY');
      //""

      type_czech._emptyCollectionTypes([[]], [['EM-ER']], 'EMPTY-VERIFY');
      //TC@13 - Empty Value in a Collection [[[]]], expected [[['EM-ER']]]
      //               TC@26 - Key '0' was understood to be 'EMPTY-ERROR' but was rather '[]'

      type_czech._emptyCollectionTypes([1,2], ["EM-ER"], 'EMPTY-VERIFY');
      //TC@13 - Empty Value in a Collection [[1,2]], expected [['EM-ER']]
      //               TC@27 - Extra key in checked object - (1:'2')

      type_czech._emptyCollectionTypes([1,2], ["EM-ER"], 'EMPTY-EXTRAS');
      //""

      */
      const _emptyCollectionTypes = (check_object, object_shape, check_type, array_recurse_level) => {
        consolelog('///_emptyCollectionTypes ENTER', check_object, object_shape, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        const error_strings = [];
        const valid_shallow = { ...object_shape };
        const check_entries = Object.entries(check_object);
        check_entries.forEach((empty_entry) => {
          let error_string = '';
          const [check_key, check_var_or_obj] = empty_entry;
          const empty_choice = _shortToLongEmpty(valid_shallow[check_key]);
          if (_isCollection(check_var_or_obj)) {
            const correct_empty = object_shape[check_key];
            const long_empty = _shortToLongEmpty(correct_empty);
            if (_isEmpty(check_var_or_obj) && long_empty === 'EMPTY-ERROR') {
              const show_empty = _jsonStr(check_var_or_obj);
              const error_26 = `Key '${check_key}' was understood to be '${long_empty}' but was rather '${show_empty}'`;
              error_string = _consoleError(error_26, 'TC@26');
            } else {
              // eslint-disable-next-line no-use-before-define
              error_string += _emptyContainer(check_object[check_key], long_empty, check_type, array_recurse_level);
            }
            delete valid_shallow[check_key];
          } else if (Object.prototype.hasOwnProperty.call(valid_shallow, check_key)) {
            error_string = _emptyKeysChecked(empty_choice, check_var_or_obj, check_key);
            delete valid_shallow[check_key];
          } else if (check_type === EMPTY_VERIFY) {
            const error_27 = `Extra key in checked object - (${check_key}:'${check_var_or_obj}')`;
            error_string = _consoleError(error_27, 'TC@27');
          } else {
            // console.log('NO ERROR empty-check');
          }
          if (error_string) {
            error_strings.push(error_string);
          }
        });
        let error_13 = '';
        if (error_strings.length > 0) {
          error_strings.forEach((empty_error) => { error_13 += empty_error; });
        }
        error_13 += _missingKey(valid_shallow);
        // if (error_13) {
        //   error_13 = _consoleError(error_13, 'TC@13');            // looks like _missingKey() does this
        // }
        consolelog('///_emptyCollectionTypes EXIT', error_13);
        return error_13;
      };

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._emptyContainer(["a-string"], ['EMPTY-ERROR'], 'EMPTY-VERIFY');
      //""

      type_czech._emptyContainer([""], ['EMPTY-ERROR'], 'EMPTY-VERIFY');
      //TC@30 - INDEX '0' is incorrectly empty : ['']

      type_czech._emptyContainer({zero:0}, ['EMPTY-ERROR'], 'EMPTY-VERIFY');
      //TC@30 - INDEX 'zero' is incorrectly empty : {'zero':0}

      type_czech._emptyContainer([''], ['EMPTY-OK', 'EMPTY-ERROR'], 'EMPTY-EXTRAS');
      //TC@20 - The parameter array [\"\"] does not have the same number of elements as [\"EMPTY-OK\",\"EMPTY-ER\"].  Lengths are different 1 !== 2.

      */
      function _emptyContainer(check_container, empty_type, check_type, array_recurse_level) {
        consolelog('///_emptyContainer ENTER', check_container, empty_type, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        let error_string;
        const shape_type = _aTypeOf(empty_type);
        if (empty_type === undefined) {
          error_string = '';
        } else if (shape_type === 'Array') {
          if (_aTypeOf(empty_type[0]) === 'Array') {
            if (empty_type.length === 1) {
              error_string = _emptyArrayInArray(check_container, empty_type[0], check_type, array_recurse_level);
            }
            error_string = _emptyArrayInArray(check_container, empty_type, check_type, array_recurse_level);
          }
          error_string = _emptyArrayTypes(check_container, empty_type, check_type, array_recurse_level);
        } else if (shape_type === 'Object') {
          error_string = _emptyCollectionTypes(check_container, empty_type, check_type, array_recurse_level);
        } else {
          // eslint-disable-next-line no-use-before-define
          error_string = _emptyScalar(check_container, empty_type);
        }
        consolelog('///_emptyContainer EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._emptyScalar(0, 'EMPTY-ERROR');
      //TC@24 - EMPTY-ER states 'Number' must not be empty for the value '0'

      type_czech._emptyScalar(true, 'EMPTY-ERROR');
      //TC@25 - A 'Boolean' cannot be empty, so the state of 'EMPTY-ERROR' is illegal for the value 'true'

      type_czech._emptyScalar(true, 'an-ERROR');
      //TC@11 - Must 'EMPTY-OK' or 'EMPTY-ERROR' not 'an-ERROR'

      */
      function _emptyScalar(check_variable, empty_type) {
        consolelog('///_emptyScalar ENTER', check_variable, empty_type, TYPE_CZECH_current_test_number);
        let error_string = '';
        const empty_long = _shortToLongEmpty(empty_type);
        const variable_type = _aTypeOf(check_variable);
        if (empty_long === EMPTY_ER) {
          const current_type = _aTypeOf(check_variable);
          const is_empty_able = _canBeEmpty(current_type);
          if (is_empty_able) {
            const is_empty = _isEmpty(check_variable);
            if (is_empty) {
              if (variable_type === 'Object') {
                // eslint-disable-next-line no-param-reassign
                check_variable = ' { } ';
              }
              const error_24 = `${empty_long} states '${variable_type}' must not `
                          + `be empty for the value '${check_variable}'`;
              error_string = _consoleError(error_24, 'TC@24');
            }
          } else {
            const error_25 = `A '${variable_type}' cannot be empty, so the state`
                      + ` of '${empty_long}' is illegal for the value '${check_variable}'`;
            error_string = _consoleError(error_25, 'TC@25');
          }
        } else if (empty_long !== EMPTY_OK && empty_long !== EMPTY_IG) {
          const error_11 = `Must 'EMPTY-OK' or 'EMPTY-ERROR' not '${empty_long}'`;
          error_string = _consoleError(error_11, 'TC@11');
        }
        consolelog('///_emptyScalar EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._emptyVariable(17, 'EMPTY-ERROR', 'EMPTY-VERIFY');
      //""

      type_czech._emptyVariable(0, 'EMPTY-ERROR', 'EMPTY-VERIFY');
      //TC@24 - EMPTY-ER states 'Number' must not be empty for the value '0'

      type_czech._emptyVariable(["a-string"], ['EMPTY-ERROR'], 'EMPTY-VERIFY');
      //""

      type_czech._emptyVariable([""], ['EMPTY-ERROR'], 'EMPTY-VERIFY');
      //TC@30 - INDEX '0' is incorrectly empty : ['']

      type_czech._emptyVariable({zero:0}, ['EMPTY-ERROR'], 'EMPTY-VERIFY');
      //TC@30 - INDEX 'zero' is incorrectly empty : {'zero':0}

      */
      function _emptyVariable(check_variable, variable_type, check_type, array_recurse_level) {
        consolelog('///_emptyVariable ENTER', check_variable, variable_type, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        let error_string;
        if (_isCollection(variable_type)) {
          error_string = _emptyContainer(check_variable, variable_type, check_type, array_recurse_level);
        } else {
          error_string = _emptyScalar(check_variable, variable_type);
        }
        consolelog('///_emptyVariable EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._emptyCheck([12, false, 'a string'], ['EMPTY-OK'], 'EMPTY-VERIFY');
      //TC@12 - Completely pointless as checking with ['EM-OK'] or ['EMPTY-OK'] matches everything

      */
      function _emptyCheck(check_variable, variable_type, check_type, array_recurse_level) {
        consolelog('///_emptyCheck ENTER', check_variable, variable_type, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        let error_string;
        if (variable_type.length === 1 && (variable_type[0] === EMPTY_OK || variable_type[0] === 'EM-OK')) {
          const error_12 = "Completely pointless as checking with ['EM-OK'] or ['EMPTY-OK'] matches everything";
          error_string = _consoleError(error_12, 'TC@12');
        } else {
          error_string = _emptyVariable(check_variable, variable_type, check_type, array_recurse_level);
        }
        consolelog('///_emptyCheck EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._doUnionEmpty([[12, 0, 'not-checked'], [['EM-ER','EM-ER'],['EM-ER','EM-OK']]], 'EMPTY-EXTRAS');
      //""

      type_czech._doUnionEmpty([['',12], [['EM-ER','EM-ER'],['EM-ER','EM-OK']]], 'EMPTY-VERIFY');
      //TC@30 - INDEX '0' is erroneously empty : TC@29 - INDEX '0' is promised to be a 'EM-ER', but is missing : ['',12]

      */
      function _doUnionEmpty(type_parameters, check_type, array_recurse_level) {
        consolelog('///_doUnionEmpty ENTER', type_parameters, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        const [check_variable, empty_types] = type_parameters;
        let error_string = '';
        let empty_error = '';
        let found_empty = false;
        empty_types.forEach((empty_type) => {
          let valueless_type = empty_type;
          if (empty_type === 'String') {
            // NB This function deals in arrays. So a type of single 'String' must be changed into a ['String'].
            //    But this must be checked by ensuring that there is only one element.
            //    Same as _doUnionShape(), 'String' means one string, ['String'] means a plain array of strings.
            const is_a_single_entity = (check_variable.length === 1);
            if (is_a_single_entity) {
              valueless_type = [empty_type];
            }
          }
          const possible_error = _emptyCheck(check_variable, valueless_type, check_type, array_recurse_level);
          if (possible_error === '') {
            found_empty = true;
            consolelog('///*** MATCH UnionEmpty', check_variable);
            consolelog('///*** MATCH UnionEmpty', empty_type);
          } else {
            empty_error = possible_error;
          }
        });
        if (!found_empty) {
          error_string = empty_error;
        }
        consolelog('///_doUnionEmpty EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._doUnionShape([  {"X":"an-str","Y":1234},   [{"X":"S","Y":"S"},{"X":"S","Y":"N"}]  ], "TYPE-VERIFY");
      //""

      type_czech._doUnionShape([  {"X":"an-str","Y":1234},   [{"X":"S","Y":"S"},{"X":"S","Y":"D"}]  ], "TYPE-VERIFY");
      //"TC@43 - Property 'Y' is indicated to be a 'Date', but is inaccurately a 'Number' : 1234"

    */
      function _doUnionShape(type_parameters, check_type, array_recurse_level) {
        consolelog('///_doUnionShape ENTER', type_parameters, check_type, array_recurse_level, TYPE_CZECH_current_test_number);
        const [check_variable, var_types_shapes] = type_parameters;
        let error_string = '';
        let shape_error = '';
        let found_shape = false;
        var_types_shapes.forEach((var_type) => {
          consolelog('///*** MATCH check_variable', check_variable);
          consolelog('///*** MATCH var_type', var_type);
          let variable_type = var_type;
          if (var_type === 'String') {
            // NB This function deals in arrays. So a type of single 'String' must be changed into a ['String'].
            //    But this must be checked by ensuring that there is only one element.
            //    Same as _doUnionEmpty(), 'String' means one string, ['String'] means a plain array of strings.
            const is_a_single_entity = (check_variable.length === 1);
            if (is_a_single_entity) {
              variable_type = [var_type];
            }
          }
          const possible_error = _shapeCheck(check_variable, variable_type, check_type, array_recurse_level);
          if (possible_error === '') {
            found_shape = true;
            consolelog('///*** MATCH UnionShape', check_variable);
            consolelog('///*** MATCH UnionShape', variable_type);
          } else {
            shape_error = possible_error;
          }
        });
        if (!found_shape) {
          error_string = shape_error;
        }
        consolelog('///_doUnionShape EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._specParameters(["UNDEF-OK", "DEBUG-CONSOLE-TRACE", "what" ]);
      //TC@21 - Not THROW-EXCEPTIONS/LOG-ERRORS/UNDEF-OK/DEBUG-CONSOLE-TRACE, unknown parameter : 'what'

      */
      function _specParameters(the_commands) {
        consolelog('///_specParameters ENTER 11', the_commands, TYPE_CZECH_current_test_number);
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
            let error_21 = `Not THROW-EXCEPTIONS/LOG-ERRORS/UNDEF-OK/DEBUG-CONSOLE-TRACE/NO-CHECKING, unknown : ${arg_str}`;
            error_21 = _consoleError(error_21, 'TC@21');
            throw error_21;
          }
        });
        t_do_param_checking = !!(OP_THROW_EXCEPTIONS || OP_LOG_ERRORS);
        is_active = t_do_param_checking;
        const param_results = [
          OP_THROW_EXCEPTIONS, OP_LOG_ERRORS, OP_UNDEF_OK, OP_DEBUG_CONSOLE_TRACE, OP_CONSOLE_COUNT, OP_DEBUG_ERROR_TAGS,
        ];
        consolelog('///_specParameters EXIT', param_results);
        return param_results;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')
    type_czech._twoArrays([ 'not-array', ['an-array'] ], 'fail-1');
    TC@49 - TypeCzech.fail-1() called with '[]' versus '![]'. Comparing '"String"' with '["an-array"]'.

    type_czech._twoArrays([ 'not-object', {an_object:'Boaty-McBoatFace'} ], 'fail-2');
    TC@07 - TypeCzech.fail-2() called with '{}' against '!{}'. Comparing '"String"' with '{"an_object":"Boaty-McBoatFace"}'.

    type_czech._twoArrays([12, 'var-type-as-string'], 'ok-1');
    ''

    type_czech._twoArrays([['a-string'], 'String'], 'methodName');
    TC@58 - TypeCzech.methodName() comparing actual [] parameter, with a value of ['a-string'], against the expected shape of "String". They should be the same type; both []s, or both "String"s.

    type_czech._twoArrays([       'a-string', ['String']            ], 'methodName');
    TC@49 - TypeCzech.methodName() comparing actual 'String' parameter, with a value of 'a-string', against the expected shape of ["String"].They should be the same type, both arrays, or both 'String'.
      */

      function notArrayShape(parameters_list, shape_str) {
        consolelog('///notArrayShape ENTER', parameters_list, shape_str, TYPE_CZECH_current_test_number);
        const long_shape = _shortToLongType(shape_str);
        const error_58 = 'Comparing actual [] parameter, with a'
            + ` value of ['${parameters_list}'], against the expected shape of ${long_shape}. They should be the same type.`
            + ` You cannot compare an array with a non-array; both []s, or both ${long_shape}s.`;
        consolelog('///notArrayShape EXIT', error_58);
        return error_58;
      }

      function notArrayType(parameters_list, param_type, shape_str) {
        consolelog('///notArrayType ENTER', parameters_list, param_type, shape_str, TYPE_CZECH_current_test_number);
        const params_string = _toStr(parameters_list);
        const long_shape = _shortToLongType(shape_str);
        const error_49 = `Comparing actual '${param_type}' parameter,`
          + ` with a value of "${params_string}", in relation to the expected shape of ${long_shape}. They should be the`
          + ` same type. You cannot compare an array with a non-array; both []s, or both '${param_type}'s. Or same object keys.`;
        consolelog('///notArrayType EXIT', error_49);
        return error_49;
      }

      // we can see the error arrays get made!!!
      function error3Array(command_type, invalid_error, shape_list) {
        consolelog('///error3Array ENTER', command_type, invalid_error, shape_list, TYPE_CZECH_current_test_number);
        const error_3_array = [command_type, invalid_error, shape_list];
        consolelog('///error3Array EXIT', error_3_array);
        return error_3_array;
      }

      function _twoArrays(list_of_2, method_name, message_type_empty) {
        consolelog('///_twoArrays ENTER', list_of_2, method_name, TYPE_CZECH_current_test_number);
        let error_str_3arr = '';
        if (list_of_2.length !== 2) {
          const error_14 = `TypeCzech.${method_name}() has 2 ${ARGU_MENTS} not ${list_of_2.length}`;
          error_str_3arr = _consoleError(error_14, 'TC@14');
        } else {
          const [parameters_list, shape_list] = list_of_2;
          const parameter_type = _aTypeOf(parameters_list);
          const shape_type = _aTypeOf(shape_list);
          const parameter_str = JSON.stringify(parameter_type);
          let shape_str = shape_list;
          if (typeof shape_list !== 'string') {
            shape_str = JSON.stringify(shape_list);
          }
          if (parameter_type === 'Array' && shape_type !== 'Array') {
            const not_empty_array = parameters_list.length > 1;
            const not_array_shape = shape_list !== 'Array' && shape_list !== 'A';
            if (not_array_shape && not_empty_array) {
              const error_58 = notArrayShape(parameters_list, shape_str);
              const the_58_error = _consoleError(error_58, 'TC@58');
              const shape_str_fixed = _doubleToSingleQuotes(shape_str);
              error_str_3arr = error3Array(message_type_empty, the_58_error, shape_str_fixed);
            }
          } else if (shape_type === 'Array' && parameter_type !== 'Array') {
            const error_49 = notArrayType(parameters_list, parameter_type, shape_str);
            const the_49_error = _consoleError(error_49, 'TC@49');
            const shape_str_fixed = _doubleToSingleQuotes(shape_str);
            error_str_3arr = error3Array(message_type_empty, the_49_error, shape_str_fixed);
          } else if (shape_type === 'Array') {
            // no errors
          } else if (shape_type === 'Object') {
            if (parameter_type !== 'Object') {
              const error_7 = `TypeCzech.${method_name}() called with '{}' against '!{}'.`
                          + ` Contrasting '${parameter_str}' with '${shape_str}'.`;
              error_str_3arr = _consoleError(error_7, 'TC@07');
            }
          } else if (shape_type !== 'String') {
            const error_50 = `TypeCzech.${method_name}() called with 'a-variable' and 'not-a-variable type'.`
                        + ` Matching '${parameter_str}' with '${shape_str}'.`
                        + ` Preferably try TypeCzech.${method_name}(12, 'Number')`;
            error_str_3arr = _consoleError(error_50, 'TC@50');
          }
        }
        consolelog('///_twoArrays EXIT', error_str_3arr);
        return error_str_3arr;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._unionChecks([1], 'fail-99');
      //TC@51 - TypeCzech.fail-99() needs 2 parameters, not 1

      type_czech._unionChecks([1, 2], 'fail-98');
      //TC@15 - TypeCzech.fail-98() called with a second parameter as a non-array shape of 2

      type_czech._unionChecks([1, [2]], 'fail-97');
      //TC@61 - TypeCzech.fail-97() needs at least 2 choices for an either, not 1 [2] in the second parameter

      type_czech._unionChecks([1, [2, 3]], 'pass-96');
      //""

      */
      function _unionChecks(parameters_shapes, method_name) {
        consolelog('///_unionChecks ENTER', parameters_shapes, method_name, TYPE_CZECH_current_test_number);
        let error_string = '';
        if (parameters_shapes.length !== 2) {
          const error_51 = `TypeCzech.${method_name}() needs 2 parameters, not ${parameters_shapes.length}`;
          error_string = _consoleError(error_51, 'TC@51');
        } else {
          const shapes_lists = parameters_shapes[1];
          const exact_str = JSON.stringify(shapes_lists);
          if (_aTypeOf(shapes_lists) !== 'Array') {
            const error_15 = `TypeCzech.${method_name}() called with a second parameter`
                          + ` as a non-array shape of ${exact_str}`;
            error_string = _consoleError(error_15, 'TC@15');
          }
        }
        consolelog('///_unionChecks EXIT', error_string);
        return error_string;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech.valueless([12, 'a-string', false], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR']);
      //TC@31 - INDEX '2' is a boolean, 'false', not an array/object/string/Date, it cannot by empty : [12,'a-string',false]

      type_czech.valueless([12, [], 'a-string'], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR']);
      //TC@30 - INDEX '1' is erroneously empty : [12,[],'a-string']

      type_czech.valueless([12, [], 'a-string'], ['EMPTY-ERROR', 'EMPTY-OK', 'EMPTY-ERROR']);
      //""

      type_czech.valueless([], ['EMPTY-ERROR']);
      //TC@16 - Array contains no elements

      type_czech.valueless({}, 'EMPTY-OK');
      //

      type_czech.valueless([], ['EMPTY-OK']);
      //TC@12 - Completely pointless as checking with ['EM-OK'] or ['EMPTY-OK'] matches everything

      */

      function valueless(parameters_obj, shape_list) {
        consolelog('///valueless ENTER', parameters_obj, shape_list, TYPE_CZECH_current_test_number);
        const parameters_array = _getParameters(parameters_obj);
        consolelog('///valueless START', parameters_array, shape_list);
        let error_str_3arr = _twoArrays([parameters_array, shape_list], 'valueless', MESS_EMPTY_VERIFY);
        if (error_str_3arr === '') {
          const array_recurse_level = _arrayRecurseLevel(parameters_obj);
          const invalid_error = _emptyCheck(parameters_array, shape_list, EMPTY_VERIFY, array_recurse_level);
          if (invalid_error) {
            error_str_3arr = error3Array(MESS_EMPTY_VERIFY, invalid_error, shape_list);
          } else {
            error_str_3arr = '';
          }
        }
        consolelog('///valueless EXIT', error_str_3arr);
        return error_str_3arr;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      //problem is that the first parameter is always the parameters of a function, []

      type_czech.valid({}, 'an-object');
      //TC@33 - The type 'an-object' is not valid

      type_czech.valid({cyl:4, fuel:"gasoline", snuck:"extra"}, {cyl:"Number", fuel:"String"});
      //TC@39 - Extra key in checked object - (snuck:'extra')

      type_czech.valid({cyl:4, fuel:"gasoline"}, {cyl:"Number", fuel:"String", snuck:"Boolean"});
      //TC@46 - The key 'snuck', which has a type of 'Boolean', is missing in the checked object

      type_czech.valid({cyl:4, fuel:"gasoline"}, {cyl:"Number", fuel:"String"});
      //""

      type_czech.valid([1,2,3], ["N", "N"]);
      //TC@44 - INDEX '2' is assumed to be a 'undefined', but is mistakenly a 'Number' : 3

      type_czech.valid([1,2,3], ["N", "N", "N"]);
      //""

      type_czech.valid([1,2], ["N", "N", "N"]);
      //TC@03 - Index '2' is supposed to be a 'N', but is missing : [1,2]

      type_czech.valid([[['a']]], [["N"]]);
      //TC@44 - INDEX '0' is assumed to be a 'Number', but is mistakenly a 'Array' : ['a']

      type_czech.valid([], 'Array');
      //""

      type_czech.valid({}, 'Object');
      //""

      type_czech.valid('a-string', ['String']);
      //""

      */
      function valid(parameters_obj, shape_list) {
        consolelog('///valid ENTER', parameters_obj, shape_list, TYPE_CZECH_current_test_number);
        const parameters_array = _getParameters(parameters_obj);
        consolelog('///valid START', parameters_array, shape_list);
        let error_str_3arr = _twoArrays([parameters_array, shape_list], 'valid', MESS_TYPE_VERIFY);
        if (error_str_3arr === '') {
          const array_recurse_level = _arrayRecurseLevel(parameters_obj);
          const type_error = _shapeCheck(parameters_array, shape_list, TYPE_VERIFY, array_recurse_level);
          if (type_error) {
            error_str_3arr = error3Array(MESS_TYPE_VERIFY, type_error, shape_list);
          } else {
            error_str_3arr = '';
          }
        }
        consolelog('///valid EXIT', error_str_3arr);
        return error_str_3arr;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech.valuelessExtras([12, 'a-string', false], ['EMPTY-ERROR', 'EMPTY-ERROR']);
      //""

      */
      function valuelessExtras(parameters_obj, shape_list) {
        consolelog('///valuelessExtras ENTER', parameters_obj, shape_list, TYPE_CZECH_current_test_number);
        const parameters_array = _getParameters(parameters_obj);
        consolelog('///valuelessExtras START', parameters_array, shape_list);
        let error_str_3arr = _twoArrays([parameters_array, shape_list], 'valuelessExtras', MESS_EMPTY_EXTRAS);
        if (error_str_3arr === '') {
          const array_recurse_level = _arrayRecurseLevel(parameters_obj);
          const invalid_error = _emptyCheck(parameters_array, shape_list, EMPTY_EXTRAS, array_recurse_level);
          if (invalid_error) {
            error_str_3arr = error3Array(MESS_EMPTY_EXTRAS, invalid_error, shape_list);
          } else {
            error_str_3arr = '';
          }
        }
        consolelog('///valuelessExtras ENTER', error_str_3arr);
        return error_str_3arr;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      //Both parameters must be arrays of at least 2 entries, or error.
      //We cannot handle single-type arrays with validExtras()

      //Does not make sense. The extra 17 doesn't work. Does this match
      //function(['String'], 'Number') or function(['String', 'Number']) ?
      type_czech.validExtras(['a-string', 17], ['String']);
      //"INDEX '1' is asserted to be a 'String', but is fallaciously a 'Number' : 17"

      //Does not make sense either, missing a number in the parameters.
      type_czech.validExtras(['a-string'], ['String', 'Number']);
      //"TypeCzech.validExtras() comparing actual 'String' parameter, with a value of 'a-string', opposed to the expected shape of [\"String\",\"Number\"]. They should be the same type; both []s, or both 'String's."

      type_czech.validExtras(['a-string', 17], ['String', 'Number']);
      //""

      type_czech.validExtras(['a-string', 17, {}], ['String', 'Number']);
      //""

      type_czech.validExtras([1,2,3], ["N", "N"]);
      //""

        type_czech.validExtras([1,2,3], ["N", "N", "N"]);
      //""

      type_czech.validExtras([1,2], ["N", "N", "N"]);
      //TC@03 - Index '2' is supposed to be a 'N', but is missing : [1,2]

      */
      function validExtras(parameters_obj, shape_list) {
        consolelog('///validExtras ENTER', parameters_obj, shape_list, TYPE_CZECH_current_test_number);
        const parameters_array = _getParameters(parameters_obj);
        consolelog('///validExtras START', parameters_array, shape_list);
        let error_str_3arr = _twoArrays([parameters_array, shape_list], 'validExtras', MESS_TYPE_EXTRAS);
        if (error_str_3arr === '') {
          const array_recurse_level = _arrayRecurseLevel(parameters_obj);
          const type_error = _shapeCheck(parameters_array, shape_list, TYPE_EXTRAS, array_recurse_level);
          if (type_error) {
            error_str_3arr = error3Array(MESS_TYPE_EXTRAS, type_error, shape_list);
          } else {
            error_str_3arr = '';
          }
        }
        consolelog('///validExtras EXIT', error_str_3arr);
        return error_str_3arr;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech.valuelessUnion([12, false, 'a string'], 'EMPTY-OK');
      //TC@15 - TypeCzech.valuelessUnion() called with a second parameter as a non-array shape of "EMPTY-OK"

      type_czech.valuelessUnion([12, false, 'a string'], ['EMPTY-OK']);
      //TC@61 - TypeCzech.valuelessUnion() needs at least 2 choices for an either, not 1 ["EMPTY-OK"] in the second parameter

      type_czech.valuelessUnion([12, 0, 'is-error'], [['EM-ER','EM-ER'],['EM-ER','EM-OK']]);
      //TC@23 - The variable \n~~~~~'[12,0,'is-error']'\nwhich is a 'Array', does not match any in the list \n~~~~~['EM-ER','EM-ER'], \n~~~~~['EM-ER','EM-OK']

      type_czech.valuelessUnion([12, 0], [['EM-ER','EM-ER'],['EM-ER','EM-OK']]);
      //""

      type_czech.valuelessUnion( {a:0, b:12}, [ {a:'EM-ER', b:'EM-ER'}, {a:'EM-ER', b:'EM-OK'}]);
      //TC@23 - The variable \n~~~~~'{'a':0,'B':12}'\nwhich is a 'Object', does not match any in the list \n~~~~~{'a':'EM-ER','B':'EM-ER'}, \n~~~~~{'a':'EM-ER','B':'EM-OK'}

      type_czech.valuelessUnion( {a:0, b:12});
      //TC@51 - TypeCzech.valuelessUnion() needs 2 parameters, not 1

      */
      function valuelessUnion(parameters_obj, shapes_lists) {
        consolelog('///valuelessUnion ENTER', parameters_obj, shapes_lists, TYPE_CZECH_current_test_number);
        const parameters_array = _getParameters(parameters_obj);
        consolelog('///valuelessUnion START', parameters_array, shapes_lists);
        let error_str_3arr = _unionChecks([parameters_array, shapes_lists], 'valuelessUnion');
        if (error_str_3arr === '') {
          const array_recurse_level = _arrayRecurseLevel(parameters_obj);
          const exact_error = _doUnionEmpty([parameters_array, shapes_lists], EMPTY_VERIFY, array_recurse_level);
          if (exact_error) {
            error_str_3arr = error3Array(MESS_EMPTY_ONE_OF, exact_error, shapes_lists);
          } else {
            error_str_3arr = '';
          }
        }
        consolelog('///valuelessUnion EXIT', error_str_3arr);
        return error_str_3arr;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech.validUnion(17, [ "String", "number" ]);
      //""

      type_czech.validUnion({a:17, b:false}, [{a:"number"}, {a:"String"}]);
      //TC@22 - The variable \n~~~~~{'a':17,'B':false}\n, which is a 'Object', is not in the list \n~~~~~{'a':'Number'}, \n~~~~~{'a':'String'}

      */
      function validUnion(parameters_obj, possible_shapes) {
        consolelog('///validUnion ENTER', parameters_obj, possible_shapes, TYPE_CZECH_current_test_number);
        const parameters_array = _getParameters(parameters_obj);
        consolelog('///validUnion START', parameters_array, possible_shapes);
        let error_str_3arr = _unionChecks([parameters_array, possible_shapes], 'validUnion');
        if (error_str_3arr === '') {
          const array_recurse_level = _arrayRecurseLevel(parameters_obj);
          const exact_error = _doUnionShape([parameters_array, possible_shapes], TYPE_VERIFY, array_recurse_level);
          if (exact_error) {
            error_str_3arr = error3Array(MESS_TYPE_ONE_OF, exact_error, possible_shapes);
          } else {
            error_str_3arr = '';
          }
        }
        consolelog('///validUnion ENTER', error_str_3arr);
        return error_str_3arr;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech.valuelessUnionExtras([12, false, 'a string'], 'EMPTY-OK');
      //TC@15 - TypeCzech.valuelessUnionExtras() called with a second parameter as a non-array shape of "EMPTY-OK"

      type_czech.valuelessUnionExtras([12, false, 'a string'], ['EMPTY-OK']);
      //TC@61 - TypeCzech.valuelessUnionExtras() needs at least 2 choices for an either, not 1 ["EMPTY-OK"] in the second parameter

      // OK AS [12,0] matches ['EM-ER','EM-OK']
      type_czech.valuelessUnionExtras([12, 0, 'not-checked'], [['EM-ER','EM-ER'],['EM-ER','EM-OK']]);
      //""

      */
      function valuelessUnionExtras(parameters_obj, shapes_lists) {
        consolelog('///valuelessUnionExtras ENTER', parameters_obj, shapes_lists, TYPE_CZECH_current_test_number);
        const parameters_array = _getParameters(parameters_obj);
        consolelog('///valuelessUnionExtras START', parameters_array, shapes_lists);
        let error_str_3arr = _unionChecks([parameters_array, shapes_lists], 'valuelessUnionExtras');
        if (error_str_3arr === '') {
          const array_recurse_level = _arrayRecurseLevel(parameters_obj);
          const loose_error = _doUnionEmpty([parameters_array, shapes_lists], EMPTY_EXTRAS, array_recurse_level);
          if (loose_error) {
            error_str_3arr = error3Array(MESS_EMPTY_ONE_OF_EXTRAS, loose_error, shapes_lists);
          } else {
            error_str_3arr = '';
          }
        }
        consolelog('///valuelessUnionExtras EXIT', error_str_3arr);
        return error_str_3arr;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech.validUnionExtras(17, [ "String", "Number" ]);
      //""

      type_czech.validUnionExtras({a:17, b:false}, [{a:"Number"}, {a:"String"}]);
      //""

      type_czech.validUnionExtras(17, [ "String", "Boolean" ]);
      //"validUnionExtras(argu_ments, expected_types)"
      //"The variable '17', which is a 'Number', is not a 'Boolean'"
      //Array [ "String", "boolean" ]

      */
      function validUnionExtras(parameters_obj, possible_shapes) {
        consolelog('///validUnionExtras ENTER', parameters_obj, possible_shapes, TYPE_CZECH_current_test_number);
        const parameters_array = _getParameters(parameters_obj);
        consolelog('///validUnionExtras START', parameters_array, possible_shapes);
        let error_str_3arr = _unionChecks([parameters_array, possible_shapes], 'validUnionExtras');
        if (error_str_3arr === '') {
          const array_recurse_level = _arrayRecurseLevel(parameters_obj);
          const loose_error = _doUnionShape([parameters_array, possible_shapes], TYPE_EXTRAS, array_recurse_level);
          if (loose_error) {
            error_str_3arr = error3Array(MESS_TYPE_ONE_OF_EXTRAS, loose_error, possible_shapes);
          } else {
            error_str_3arr = '';
          }
        }
        consolelog('///validUnionExtras EXIT', error_str_3arr);
        return error_str_3arr;
      }

      function check(user_function, pre_check, post_check) {
        consolelog('///check ENTER', user_function, pre_check, post_check, TYPE_CZECH_current_test_number);
        let check_result;
        if (typeof post_check === 'undefined') {
          check_result = t_param_check_func.confirmParameters(user_function, pre_check, false);
        } else {
          check_result = t_param_check_func.confirmParameters(user_function, pre_check, post_check);
        }
        consolelog('///check EXIT', check_result);
        return check_result;
      }

      function checkTally() {
        return t_param_check_func.checkTally_();
      }
      function checkBegin() {
        return t_param_check_func.checkBegin_();
      }
      function checkEnd() {
        return t_param_check_func.checkEnd_();
      }
      function failureTally() {
        return t_param_check_func.failureTally_();
      }
      function failureRatio() {
        return t_param_check_func.failureRatio_();
      }

      function stats(possible_type) {
        return t_param_check_func.stats_(possible_type);
      }
      function statsReset() {
        return t_param_check_func.statsReset_();
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      long_str = '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
              + '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
      type_czech._shrinkDiffs(long_str);
      //"1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 <<<<<<...>>>>>> 12345678901234567890123456789012345678901234567890"

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

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech._refDiff('', '')
      //""

      type_czech._refDiff('', '1')
      //START-SAME ~ ``
      //  PRE-DIFF ~ ``
      // POST-DIFF ~ 1"

      type_czech._refDiff('1', '')
      //START-SAME ~ ``
      //  PRE-DIFF ~ 1
      // POST-DIFF ~ ``"

      type_czech._refDiff('1', '1')
      //""

      type_czech._refDiff('123', '01234')
      //START-SAME ~ ``
      //  PRE-DIFF ~ 123
      // POST-DIFF ~ 01234"

      type_czech._refDiff('01234', '123')
      //START-SAME ~ ``
      //  PRE-DIFF ~ 01234
      // POST-DIFF ~ 123"

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
        consolelog('///refDiff ENTER', pre_str, post_str, TYPE_CZECH_current_test_number);
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
        consolelog('///refDiff EXIT', first_difference);
        return first_difference;
      }

      /* type_czech = TypeCzech('LOG-ERRORS')

      type_czech.mutateSnapshot('my-func', 'my_array', 12);
      //Uncaught TypeCzech.mutateSnapshot()'s 3rd parameter is not an Array or Object but instead a 'Number'

      var my_array = [1,2,3];
      type_czech.mutateSnapshot('my-func', 'my_array', my_array);
      my_array.push(4);
      type_czech.mutated('my-func', 'my_array', my_array);
      //The reference variable 'my_array' in function 'my-func()' changed values
      //                from [1,2,3]
      //                  to [1,2,3,4]
      //
      //        START-SAME ~ [1,2,3
      //          PRE-DIFF ~ ``
      //         POST-DIFF ~ `,4`
      //          END-SAME ~ ]"

      var my_obj = {a:1, b:2, c:3};
      type_czech.mutateSnapshot('my-func', 'my_obj', my_obj);
      delete my_obj.b;
      my_obj.b=7;
      type_czech.mutated('my-func', 'my_obj', my_obj);
      //The reference variable 'my_obj' in function 'my-func()' changed values
      //                from {'a':1,'B':2,'c':3}
      //                  to {'a':1,'B':7,'c':3}
      //
      //        START-SAME ~ {'a':1,'B':
      //          PRE-DIFF ~ `2`
      //         POST-DIFF ~ `7`
      //          END-SAME ~ ,'c':3}

    */
      function mutateSnapshot(func_name, var_name, collection_ref) {
        consolelog('///mutateSnapshot ENTER', func_name, var_name, collection_ref, TYPE_CZECH_current_test_number);
        const num_parameters = arguments.length;
        if (num_parameters !== 3) {
          let error_55 = `TypeCzech.mutateSnapshot() needs 3 parameters, not ${num_parameters}`;
          error_55 = _consoleError(error_55, 'TC@55');
          throw error_55;
        }
        if (!_isCollection(collection_ref)) {
          const collection_type = _aTypeOf(collection_ref);
          let error_56 = `TypeCzech.mutateSnapshot()'s 3rd parameter is not an array/object but instead a '${collection_type}'`;
          error_56 = _consoleError(error_56, 'TC@56');
          throw error_56;
        }
        const func_varname = `${func_name}-${var_name}`;
        const no_cycles = _cycle.decycle(collection_ref);
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
        const no_cycles_stacks = _cycle.decycle(t_reference_stacks);
        const ref_stacks_str = _fast_json_stable_stringify(no_cycles_stacks);
        consolelog('///mutateSnapshot EXIT', ref_stacks_str);
      }

      function mutated(func_name, var_name) {
        consolelog('///mutated ENTER', func_name, var_name, TYPE_CZECH_current_test_number);
        const func_varname = `${func_name}-${var_name}`;
        let error_string = '';
        const have_varname = t_reference_stacks[func_varname];
        if (!have_varname) {
          const error_47 = `No record of a mutateSnapshot('${func_varname}', a_var)`;
          error_string = _consoleError(error_47, 'TC@47');
        } else {
          const newest_instance = t_reference_stacks[func_varname].pop();
          consolelog('///mutated POP', newest_instance);
          const { collection_ref, pre_collect_str } = newest_instance;
          const no_cycles = _cycle.decycle(collection_ref);
          const post_collect_str = _fast_json_stable_stringify(no_cycles);
          if (pre_collect_str === post_collect_str) {
            consolelog('///mutated OK', pre_collect_str);
          } else {
            const pre_str_quotes = _toStr(pre_collect_str);
            const post_str_quotes = _toStr(post_collect_str);
            const ref_change = `The reference variable '${var_name}' in function '${func_name}()' changed values`;

            const pre_shrunk = _shrinkDiffs(pre_str_quotes);
            const post_shrunk = _shrinkDiffs(post_str_quotes);

            const pre_val = `${CZECH_ERROR_INDENT}from ${pre_shrunk}`;
            const post_val = `${CZECH_ERROR_INDENT}  to ${post_shrunk} ${CZECH_ERROR_INDENT}`;
            const the_diffs = _refDiff(pre_collect_str, post_collect_str);
            const error_48 = `${ref_change}${pre_val}${post_val}${the_diffs}`;
            error_string = _consoleError(error_48, 'TC@48');
          }
        }
        const no_cycles_stacks = _cycle.decycle(t_reference_stacks);
        const ref_stacks_str = _fast_json_stable_stringify(no_cycles_stacks);
        consolelog('///mutated EXIT', error_string, ref_stacks_str);
        return error_string;
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
      consolelog('///TypeCzech SETTINGS', parameter_settings);

      return {
        // underscore prefixed are internal functions
        _ParametersCheck,
        _arrayOfOneType,
        _arrayRecurseLevel,
        _aTypeOf,
        _canBeEmpty,
        _className,
        _collectionToStr,
        _coloredConsole,
        _consoleError,
        _cycle,
        _doUnionEmpty,
        _doUnionShape,
        _doubleToSingleQuotes,
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
        _fast_json_stable_stringify,
        _functionName,
        _getParameters,
        _isAClass,
        _anObjectsType,
        _isBuiltInType,
        _isCollection,
        _isEmpty,
        _isScalar,
        _isPlainJsType,
        _jsonStr,
        _missingKey,
        _unionChecks,
        _refDiff,
        _shapeArrayTypes,
        _shapeCheck,
        _shapeCollectionTypes,
        _shapeContainer,
        _shapeErrorMess,
        _shapePropertyType,
        _shapeScalar,
        _shapeVariable,

        _shortToLongEmpty,
        _shortToLongType,
        _showRealTypes,
        _shrinkDiffs,
        _specParameters,
        _stringifyReplacer,
        _toStr,
        _twoArrays,
        _typeFromArray,
        _wrongType,
        _NOT_VARIAD_ARR_L_179,
        _POS_VARIAD_ARR_L_0,

        TYPE_CZECH_EVENTS,
        CZECH_ERROR_INDENT,
        is_active,
        check,
        checkBegin,
        checkEnd,
        checkTally,
        failureRatio,
        failureTally,
        mutateSnapshot,
        mutated,
        objectIsA,
        objectInterface,
        objectPrototypes,
        objectType,
        stats,
        statsReset,
        valid,
        validExtras,
        validUnion,
        validUnionExtras,
        valueless,
        valuelessExtras,
        valuelessUnion,
        valuelessUnionExtras,
      };
    } // _TypeCzech()
  };
}(the_exports));
