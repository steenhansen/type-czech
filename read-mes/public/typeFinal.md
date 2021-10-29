
## typeIsA() 
  -  [1 Class typeFinal](#class-type-final)
  -  [2 HTML typeFinal](#html-type-final)

## 1 Class typeFinal<a name="class-type-final"></a>

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

type_czech.typeFinal(ted_chiang, "FullName")
```

## 2 HTML typeFinal<a name="html-type-final"></a>

```
type_czech = TypeCzech('LOG-ERRORS')

type_czech.typeFinal(document, "HTMLDocument") 
```

