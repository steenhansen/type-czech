/* eslint-disable indent */
/* eslint-disable no-multi-spaces */
/* eslint-disable global-require */

//  node --trace-uncaught 404-Extending-ClassFree-Node.js

const use_type_czech = true;

/**/  let type_czech;
/**/  if (use_type_czech) {
/**/    const { TypeCzech } = require('../../TypeCzech.js');
/**/    type_czech = TypeCzech('LOG-ERRORS');
/**/  } else {
/**/    type_czech = { link: (_) => _, is_active: false };
/**/  }

const First = require('./First.js')(type_czech);

const Last = require('./Last.js')(type_czech, First);

const Full = require('./Full.js')(type_czech, Last);

const ted_chiang = Full({ salu: 'Mr', f_name: 'Ted', l_name: 'Chiang' });

ted_chiang.firstMethod(new Date(2008, 10, 15));
ted_chiang.lastMethod(2009);
ted_chiang.fullMethod('Exhalation');
ted_chiang.showName();
