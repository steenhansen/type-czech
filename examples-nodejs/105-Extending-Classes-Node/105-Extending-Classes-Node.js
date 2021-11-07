//  node --trace-uncaught 104-Extending-Classes-Node.js

/* eslint-disable indent */
/* eslint-disable no-multi-spaces */
/* eslint-disable global-require */

const use_type_czech = true;

/**/  let type_czech;
/**/  if (use_type_czech) {
/**/    const { TypeCzech } = require('../../TypeCzech.js');
/**/    type_czech = TypeCzech('LOG-ERRORS');
/**/  } else {
/**/    type_czech = { linkUp: (_) => _, isActive: (x) => false };
/**/  }

const First = require('./First.js')(type_czech);

const Last = require('./Last.js')(type_czech, First);

const Full = require('./Full.js')(type_czech, Last);

const ted_chiang = new Full('Mr', 'Ted', 'Chiang');

ted_chiang.firstMethod(new Date(2008, 10, 15));
ted_chiang.lastMethod(2009);
ted_chiang.fullMethod('Exhalation');
ted_chiang.showName();
