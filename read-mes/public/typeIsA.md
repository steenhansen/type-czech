
## typeIsA() 
  -  [1 Class typeIsA](#class-type-is-a)
  -  [2 HTML typeIsA](#html-type-is-a)

## 1 Class typeIsA<a name="class-type-is-a"></a>

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

type_czech.typeIsA(ted_chiang, "FullName")
type_czech.typeIsA(ted_chiang, "LastName")
type_czech.typeIsA(ted_chiang, "FirstName")
type_czech.typeIsA(ted_chiang, "Object")
```

## 2 HTML typeIsA<a name="html-type-is-a"></a>

```
type_czech = TypeCzech('LOG-ERRORS')

type_czech.typeIsA(document, "HTMLDocument") 
type_czech.typeIsA(document, "Document") 
type_czech.typeIsA(document, "Node") 
type_czech.typeIsA(document, "EventTarget") 
type_czech.typeIsA(document, "Object") 
```

