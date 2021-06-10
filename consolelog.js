/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const type_czech_copy = {
  REPLACE_NL_TAB_TAB: new RegExp(/\\n\\t\\t/g),
  MATCH_NL_TAB_TAB: new RegExp(/\n\t\t/g),
  CONSOLE_LOG_NEWLINE: '|',
};

// eslint-disable-next-line no-self-compare
const isNaN = (maybeNaN) => maybeNaN !== maybeNaN;

let log_count = 0;
let code_count = 0;

const NEW_LINE_REGEX = new RegExp(/\|/, 'g');
const NBSP_REGEX = new RegExp(/~/, 'g');

const UNDEFINED_AS_STR = 'un-defined';

function startCurlyDates(log_text) {
  //   'MANU':'Toyota',
  const no_news = log_text.replace(/\n/g, '');
  const p11 = no_news.replace(/([^}]),'/, "$1,'");
  const p3 = p11.split("},'");
  const p4 = p3.join("},\n" + type_czech_copy.CONSOLE_LOG_NEWLINE + "'");
  const long_js_date = /(\d\d\d\d-\d\d-\d\d)\w\d\d:\d\d:\d\d.\d\d\d\w/gi;
  const obj_lines = p4.replace(long_js_date, "$1");
  return obj_lines;
}

function printObj(an_object) {
  // eslint-disable-next-line no-undef
  const json_str = type_czech._jsonStr(an_object);
  const comma_lines = json_str.replace(/},/g, '},\n');
  const obj_lines = startCurlyDates(comma_lines);
  const start_end = obj_lines.replace(/^{/, '{|\n');
  const end_end = start_end.replace(/}$/, '\n|}');
  return end_end;
}

function captureConsole(div_id) {
  const oldConsole = console.log;
  const div_console = document.getElementById(div_id);

  function realConsole(args) {
    // oldConsole('realConsole', args)
    const not_colored = Array.from(args);
    if (typeof not_colored[0] === 'string') {
      not_colored[0] = not_colored[0].replace(/<br>/gi, '');
      not_colored[0] = not_colored[0].replace(/\|/gi, '');
      not_colored[0] = not_colored[0].replace(/&nbsp;/gi, ' ');
      not_colored[0] = not_colored[0].replace(/~/gi, ' ');
    }
    if (typeof not_colored[1] === 'string') {
      not_colored[1] = not_colored[1].replace(/<br>/gi, '');
      not_colored[1] = not_colored[1].replace(/\|/gi, '');
      not_colored[1] = not_colored[1].replace(/&nbsp;/gi, ' ');
      not_colored[1] = not_colored[1].replace(/~/gi, ' ');
    }
    oldConsole(...not_colored);
  }

  function htmlLogColor(args) {
    // oldConsole('htmlLogColor', args)
    if (!args[0].includes('ArgumentCheck-init')) {
      const [percent_c, a_number] = args[0].split(' ');
      const log_number = parseInt(a_number, 10);
      if (!isNaN(log_number)) {
        const number_css = args[1];
        const colored_number = `<span style='${number_css}'>${log_number}</span><br>`;
        div_console.innerHTML += colored_number;
      }
    }
  }
  
  
  function doubleToSingleQuotes(double_quotes) {
    const dq_1 = double_quotes.replace(/{"/g, "{'");
    const dq_2 = dq_1.replace(/":/g, "':");
    const dq_3 = dq_2.replace(/","/g, "','");
    const dq_4 = dq_3.replace(/,"/g, ",'");

    const dq_5 = dq_4.replace(/\["/g, "['");
    const dq_6 = dq_5.replace(/"]/g, "']");
    const dq_7 = dq_6.replace(/],"/g, "],'");
    return dq_7;
  }

  function toStr(maybe_undef) {
    //console.log('_toStr enter', maybe_undef);
    if (typeof maybe_undef === 'undefined') return UNDEFINED_AS_STR;
    if (typeof maybe_undef === 'string') {
      const no_double_quotes = maybe_undef.replace(/"/g, "'");
      return no_double_quotes;
    }
    const double_quotes = JSON.stringify(maybe_undef);
    if (typeof maybe_undef !== 'object') {
      return double_quotes;
    }
    const single_quotes = doubleToSingleQuotes(double_quotes);
    return single_quotes;
  }
  
  function stringifyReplacer(key, value) {
    if (typeof value === 'undefined') {
      return UNDEFINED_AS_STR;
    }
    return value;
  }

  function jsonStr(an_object) {
    const json_str = toStr(JSON.stringify(an_object, stringifyReplacer));
    return json_str;
  }

  function htmlNoColor(args) {
    // oldConsole('htmlNoColor', args,  jsonStr(args))
let div_text4;
if (typeof args === 'object') {
  div_text4 = jsonStr(args);
} else if (typeof args ==='string'){
            const single_chars = args.split('');
            let accum_span = '';
            // eslint-disable-next-line no-restricted-syntax
            for (const single_char of single_chars) {
              log_count += 1;
              single_section = `<span id='log-${log_count}' class='html-section'>${single_char}</span>`;
              accum_span += single_section;
            }
            const div_text3 = accum_span.replace(NEW_LINE_REGEX, '<br>');
            div_text4 = div_text3.replace(NBSP_REGEX, '&nbsp;');
  } else{

    div_text4 = jsonStr(args);
  }
    div_console.innerHTML += div_text4;
  }

  function logArray(args) {
    
    function _stringifyReplacer(key, value) {
      if (typeof value === 'undefined') {
        return 'un-defined';
      }
      if (Number.isNaN(value)) {
        return '-NaN-';
      }
      if (typeof value === 'function' || (value && value.constructor === RegExp)) {
        const func_text = String(value);
        const func_start = func_text.substring(0, 30);
        const short_text = `${func_start} ...`;
        return short_text;
      }
      return value;
    }

    json_quotes = JSON.stringify(args[0], _stringifyReplacer, 2);
    if (json_quotes[0] === '"') {
      json_str = json_quotes.slice(1, -1);
    } else {
      json_str = json_quotes;
    }

    const json_str22 = json_str.replace(/\\"/g, '"');
    const new_line_with_spaces = type_czech_copy.CONSOLE_LOG_NEWLINE + '~~~~~~~~';
    const div_text2 = json_str22.replace(type_czech_copy.REPLACE_NL_TAB_TAB, new_line_with_spaces);
    const long_js_date = /(\d\d\d\d-\d\d-\d\d)\w\d\d:\d\d:\d\d.\d\d\d\w/gi;
    const obj_lines = div_text2.replace(long_js_date, "$1");


   // const obj_lines_NaN = obj_lines.replace('NasdsadaN', "nnnnnnaaaannn");


    const single_chars = obj_lines.split('');
    let accum_span = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const single_char of single_chars) {
      log_count += 1;
      single_section = `<span id='log-${log_count}' class='html-section'>${single_char}</span>`;
      accum_span += single_section;
    }

    const div_text3 = accum_span.replace(NEW_LINE_REGEX, '<br>');

    const div_text4 = div_text3.replace(NBSP_REGEX, '&nbsp;');
    div_console.innerHTML += `${div_text4} <br>`;
  }

  console.log = function newConsoleLog(...args) {
    realConsole(args);
    // oldConsole('console.log', args)
    let console_type;
    const first_arg = args[0];
    const second_arg = args[1];
    if (typeof first_arg === 'function') {
      console_type = 'a-function';
    } else if (typeof first_arg === 'string' && first_arg.match(/OUT/)) {
      console_type = 'string-string';
    } else if (typeof first_arg === 'string' && first_arg.match(type_czech_copy.MATCH_NL_TAB_TAB)) {
      console_type = 'multi-line';
    } else if (typeof first_arg === 'string' && first_arg.startsWith('%c')) {
      console_type = 'color-line';
    } else if (typeof first_arg === 'string' && typeof second_arg === 'object') {
      console_type = 'string-object';
    } else if (typeof args[0] === 'object') {
      console_type = 'one-object';
    } else {
      console_type = 'default-log';
    }
   // oldConsole(' !! console_type == ', console_type)
    if (console_type==='a-function'){
      a_function = args[0];
      func_str = a_function.toString()
      func_nl = func_str.replace(/;/g, '<br>&nbsp;&nbsp;');
      div_console.innerHTML += func_nl;
     
    } else if (console_type === 'string-string'){
      htmlNoColor(args[0]);
      htmlNoColor(args[1]);
    } else if (console_type === 'multi-line') {
      logArray(args);
    } else if (console_type === 'color-line') {
      htmlLogColor(args);
    } else if (console_type === 'one-object') {
      logArray(args);
    } else if (console_type === 'string-object') {
      const plain_text = args.shift();
      htmlNoColor(plain_text);
      logArray(args);
    } else {
      htmlNoColor(args[0]);
      if (typeof args[1] !== 'undefined') {
        const json_1 = JSON.stringify(args[1]);
        htmlNoColor(json_1);
      }
    }
  };
 
}

function linesConsole(start_lines) {
  const div_console = document.getElementById('log-text');
  for (let i = 0; i !== start_lines; i += 1) {
    div_console.innerHTML += '<br>';
  }
}

function jsToDiv(div_id, script_id) {
  const div_text1 = document.scripts[script_id].firstChild.textContent;
  const div_text2 = div_text1.replace(/\n\s*linesConsole\([^)]*\)\n/g, '\n'); // hide linesConsole(2,1,2);
  const div_text3 = div_text2.replace(/\}\s+$/, ''); // hide last }
  const div_text4 = div_text3.replace(/^[^{]*\{/, ''); // hide first function checkCodeRun(){
  const single_chars = div_text4.split('');
  let accum_span = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const single_char of single_chars) {
    code_count += 1;
    single_section = `<span id='code-${code_count}' class='html-section'>${single_char}</span>`;
    accum_span += single_section;
  }
  document.getElementById(div_id).innerHTML = accum_span;
}

function fromToBackGround(start_num, end_num, id_start, css_num) {
  if (end_num < start_num) throw new Error(`fromToBackGround() bad start/end : ${start_num} / ${end_num}`);
  for (i = start_num; i <= end_num; i += 1) {
    const an_id = `${id_start}-${i}`;
    const css_name = `back-${css_num}`;
    const my_span = document.getElementById(an_id);
    if (my_span) {
      my_span.classList.add(css_name);
    }
  }
}

function fromToBoldText(start_num, end_num, id_start, css_num) {
  if (end_num < start_num) throw new Error(`fromToBoldText() bad start/end : ${start_num} / ${end_num}`);
  for (i = start_num; i <= end_num; i += 1) {
    const an_id = `${id_start}-${i}`;
    const css_name = `text-${css_num}`;
    const my_span = document.getElementById(an_id);
    if (my_span) {
      my_span.classList.add(css_name);
    }
  }
}

function fromToUnderline(start_num, end_num, id_start, css_num) {
  if (end_num < start_num) throw new Error(`fromToUnderline() bad start/end : ${start_num} / ${end_num}`);
  for (i = start_num; i <= end_num; i += 1) {
    const an_id = `${id_start} - ${i}`;
    const css_name = `under-${css_num}`;
    const my_span = document.getElementById(an_id);
    if (my_span) {
      my_span.classList.add(css_name);
    }
  }
}

function fromToItalic(start_num, end_num, id_start) {
  if (end_num < start_num) throw new Error(`fromToItalic() bad start/end : ${start_num} / ${end_num}`);
  for (i = start_num; i <= end_num; i += 1) {
    const an_id = `${id_start} - ${i}`;
    const css_name = 'italic-out';
    const my_span = document.getElementById(an_id);
    if (my_span) {
      my_span.classList.add(css_name);
    }
  }
}
