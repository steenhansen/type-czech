
## typeFinal() 
  -  [A Class typeFinal](#a)
  -  [B HTML typeFinal](#b)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## A Class typeFinal<a id="a"></a>

```
type_czech = TypeCzech('THROW-EXCEPTIONS')

class FirstName { 
  constructor(f_name) { 
    this.f_name = f_name }
  firstMethod() { }
}

class LastName extends FirstName{  
  constructor(f_name, l_name) {
    super(f_name) 
    this.l_name = l_name}
  lastMethod() { }
}

class FullName extends LastName {
  constructor(salu, f_name, l_name) {
    super(f_name, l_name) 
    this.salu = salu}
  fullMethod() { }
}

ted_chiang = new FullName('Mr', 'Ted', 'Chiang')

type_czech.typeFinal(ted_chiang) // FullName
```

## B HTML typeFinal<a id="b"></a>

```
type_czech = TypeCzech('LOG-ERRORS')

type_czech.typeFinal(document) // HTMLDocument
```

