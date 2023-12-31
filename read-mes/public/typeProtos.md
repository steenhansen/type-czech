
## typeProtos() 
  -  [A Class TypeProtos](#a)
  -  [B HTML TypeProtos](#b)

#### All examples below can be executed in the console of [repl.html](../../test-collection/repl.html)

## A Class TypeProtos<a id="a"></a>

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

type_czech.typeProtos(ted_chiang) // [ "FullName", "LastName", "FirstName", "Object" ]
```




## B HTML TypeProtos<a id="b"></a>

```
type_czech = TypeCzech('LOG-ERRORS')

type_czech.typeProtos(document) // [ "HTMLDocument", "Document", "Node", "EventTarget", "Object" ]
```



