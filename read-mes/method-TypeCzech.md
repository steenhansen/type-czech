## Initialization
Initialization in web browsers

    <script src="TypeCzech.js"></script>
    type_czech = TypeCzech('LOG-ERRORS')  

Initialization in Node.js

    const { TypeCzech } = require('./TypeCzech.js');
    const type_czech = TypeCzech('THROW-EXCEPTIONS');


Initialization Options
- LOG-ERRORS
 
  TypeCzech errors are logged to the console

- THROW-EXCEPTIONS

  TypeCzech errors halt execution on thrown exceptions

- NO-CHECKING or ''

  This TypeCzech does no work

      const type_czech = TypeCzech('NO-CHECKING');

