
## typeIsA() 
  -  [A Class typeIsA](#A)
  -  [B HTML typeIsA](#B)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## A Class typeIsA<a name="A"></a>

```
type_czech = TypeCzech('LOG-ERRORS')

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

type_czech.typeIsA(ted_chiang, "FullName")  // true
type_czech.typeIsA(ted_chiang, "LastName")  // true
type_czech.typeIsA(ted_chiang, "FirstName") // true
type_czech.typeIsA(ted_chiang, "Object")    // true
```

## B HTML typeIsA<a name="B"></a>

```
type_czech = TypeCzech('LOG-ERRORS')

type_czech.typeIsA(document, "HTMLDocument") // true
type_czech.typeIsA(document, "Document")     // true
type_czech.typeIsA(document, "Node")         // true
type_czech.typeIsA(document, "EventTarget")  // true
type_czech.typeIsA(document, "Object")       // true
```

