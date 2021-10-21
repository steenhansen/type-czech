




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
/**/    type_czech = { link: (nop) => nop, is_active: false }

      ...

str_or_num = strOrNumAPI()

/**/  if (type_czech.is_active) {
/**/    type_issue = type_czech.check_typeEither(str_or_num, ['Number', 'String'])
/**/    if (type_issue) throw type_issue
/**/  }






seatbelt analogy

what about checking a type on the return from an api???




https://everyday.codes/javascript/7-really-good-reasons-not-to-use-typescript/

https://www.typescriptlang.org/
# FAQ

### What is the point of Type-Czech?

strong typing at compile time and runtime

### Is Type-Czech slow?


### Will Type-Czech change the value of variables?





&copy; 2021 Steen Hansen


