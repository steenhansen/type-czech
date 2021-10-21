






## API

### Suggested Node.js Use
          const { TypeCzech } = require('./TypeCzech.js');
    
    /**/  if (typeof TypeCzech === 'function')
    /**/    const type_czech = TypeCzech('LOG-ERRORS');
    /**/  else
    /**/    type_czech = { link: (_) => _, is_active: false }
    /**/  }

    /**/    function PRE_check_oneNumber() {
    /**/      return type_czech.check_type(arguments, 'Number')
    /**/   }

    /**/  PRE_check_oneNumber =(typeof PRE_check_oneNumber==='undefined') ? undefined:PRE_check_oneNumber
    
    oneNumber = type_czech.link(oneNumber, PRE_check_oneNumber)

    function oneNumber(){}
    
    oneNumber(7)
    oneNumber('an-error')

&copy; 2021 Steen Hansen