






## API

### Suggested Node.js Use
          const { TypeCzech } = require('./TypeCzech.js');
    
    /**/  if (typeof TypeCzech === 'function')
    /**/    const type_czech = TypeCzech('LOG-ERRORS');
    /**/  else
    /**/    type_czech = { link: (_) => _, is_active: false }
    /**/  }

    /**/    function PRE_oneNumber() {
    /**/      return type_czech.check_type(arguments, 'Number')
    /**/   }

    /**/  PRE_oneNumber =(typeof PRE_oneNumber==='undefined') ? undefined:PRE_oneNumber
    
    oneNumber = type_czech.link(oneNumber, PRE_oneNumber)

    function oneNumber(){}
    
    oneNumber(7)
    oneNumber('an-error')