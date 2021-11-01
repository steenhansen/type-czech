




function strOrNumAPI(){
  zero_or_one = Math.floor(Math.random() *2)
  if (zero_or_one)
    return 'a-string'
  else
    return 1234
}

/**/  if (typeof TypeCzech === 'function')
/**/    type_czech = TypeCzech('LOG-ERRORS')
/**/  else
/**/    type_czech = { linkUp: (nop) => nop, isActive: (x) => false }

      ...

str_or_num = strOrNumAPI()

/**/  if (type_czech.isActive()) {
/**/    type_issue = type_czech.check_typeEither(str_or_num, ['number', 'string'])
/**/    if (type_issue) throw type_issue
/**/  }






seatbelt analogy

what about checking a type on the return from an api???




https://everyday.codes/javascript/7-really-good-reasons-not-to-use-typescript/

https://www.typescriptlang.org/
# FAQ

### What is the point of TypeCzech?

strong typing at compile time and runtime

### Is TypeCzech slow?


### Will TypeCzech change the value of variables?





&copy; 2021 Steen Hansen


