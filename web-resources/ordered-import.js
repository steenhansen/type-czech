// eslint-disable-next-line no-unused-vars
function orderedImport(class_urls, onLoaded) {
  let import_errors = [];

  const importScript = (src_url) => new Promise((resolve, reject) => {
    const already_loaded = document.querySelector(`head > script[src="${src_url}"]`);
    if (already_loaded) {
      import_errors.push(`Re-loading ${src_url} again`);
    }
    const js_script = document.createElement('script');
    js_script.src = src_url;
    js_script.async = true;
    js_script.onload = () => {
      const no_min_src = src_url.replace('.min', '');
      const fname_no_js = /([A-Z_a-z]+)(\.js)$/;
      const class_names = no_min_src.match(fname_no_js);
      const file_function = class_names[1];
      resolve(file_function);
    };
    js_script.onerror = reject;
    document.head.appendChild(js_script);
  });

  const loaded_classes = class_urls.map((src_url) => importScript(src_url));

  function execute_import(function_name) {
    let imported_file = '';
    if (window[function_name]) {
      const call_file_function = window[function_name];
      const file_result_type = typeof call_file_function;
      if (file_result_type === 'function') {
        try {
          const class_defn = call_file_function();
          window[function_name] = class_defn;
        } catch (e) {
          import_errors.push(`'${function_name}.js' has a error of : `, e);
        }
        imported_file = function_name;
      } else {
        import_errors.push(`'${function_name}.js' is not delivering a function, but instead a '`);
      }
    } else {
      import_errors.push(`The function '${function_name}' is missing from '${function_name}.js'`);
    }
    return imported_file;
  }

  Promise.all(loaded_classes)
    .then((js_functions) => {
      const loaded_files = [];
      if (js_functions.length > 0) {
        js_functions.forEach((js_file) => {
          const imported_file = execute_import(js_file);
          loaded_files.push(imported_file);
        });
      } else {
        import_errors.push('There are no files to import');
      }
      if (import_errors.length === 0) {
        import_errors = false;
      }
      return [loaded_files, import_errors];
    })
    .then((loaded_files, the_errors) => onLoaded(loaded_files, the_errors));
}
