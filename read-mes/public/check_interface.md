
## check_interface() 
  -  [1 Object Check Interface](#object-check-interface)
  -  [2 Class Check Interface](#class-check-interface)
  -  [3 ClassFree Check Interface](#class-free-check-interface)
  -  [4 Prototype Check Interface](#prototype-check-interface)
  -  [5 OLOO Check Interface](#oloo-check-interface)

## 1 Object Check Interface<a name="object-check-interface"></a>

```
type_czech = TypeCzech('LOG-ERRORS')

function First(f_name) {
  firstMethod = () => { }
  return {f_name, firstMethod}
}

function Last(f_name, l_name) {
  first = First(f_name)
  first.lastMethod = () => { }
  first.l_name = l_name
  return first
}

function Full(salu, f_name, l_name) {
  last = Last(f_name, l_name) 
  last.fullMethod = () => { }
  last.salu = salu
  return last
}

michel_faber = Full('Mr.', 'Michel', 'Faber')

OBJECT_INTERFACE = { firstMethod: 'function', lastMethod:'function', fullMethod: 'function',
                     f_name: 'string', l_name: 'string', salu: 'string'}

OBJECT_FAIL = Object.assign({X_name: 'string'}, OBJECT_INTERFACE)

type_czech.check_interface(michel_faber, OBJECT_INTERFACE)

type_czech.check_interface(michel_faber, OBJECT_FAIL)  // error
```

## 2 Class Check Interface<a name="class-check-interface"></a>

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

CLASS_INTERFACE = { firstMethod: 'function', lastMethod:'function', fullMethod: 'function',
                  f_name: 'string', l_name: 'string', salu: 'string'}

CLASS_FAIL = Object.assign({X_name: 'string'}, CLASS_INTERFACE)                  

type_czech.check_interface(ted_chiang, CLASS_INTERFACE)

type_czech.check_interface(michel_faber, CLASS_FAIL)  // error
```

## 3 ClassFree Check Interface<a name="class-free-check-interface"></a>

```
type_czech = TypeCzech('LOG-ERRORS')

First = function (spec) {
  let {f_name} = spec
  firstMethod = function() { }
  first_object = {firstMethod}
  return Object.freeze(first_object)
}

Last = function (spec) {
  let {f_name, l_name} = spec
  let {firstMethod} = First(spec)
  lastMethod = function () { }
  last_object = {firstMethod, lastMethod}
  return Object.freeze(last_object)
}

Full = function (spec) {
  let {f_name, l_name, salu} = spec
  let {firstMethod, lastMethod} = Last(spec)
  fullMethod = function () { }
  full_object = { firstMethod, lastMethod, fullMethod}
  return Object.freeze(full_object)
}

frank_herbert  = new Full('Mr', 'Frank', 'Herbert')

CLASSFREE_INTERFACE = { firstMethod: 'function', lastMethod:'function', fullMethod: 'function'}

CLASSFREE_FAIL = Object.assign({X_name: 'string'}, CLASSFREE_INTERFACE)  

type_czech.check_interface(frank_herbert, CLASSFREE_INTERFACE)

type_czech.check_interface(frank_herbert, CLASSFREE_FAIL)  // error

```

## 4 Prototype Check Interface<a name="prototype-check-interface"></a>

```
type_czech = TypeCzech('LOG-ERRORS')

function First(f_name) {
  this.f_name = f_name
  this.firstMethod = function() { }
}

function Last(l_name) {
  this.l_name = l_name
  this.lastMethod = function () { }
}

function Full(salu) {
  this.salu = salu
  this.fullMethod = function () { }
}

ms_mary_shelley = new Full('Ms')
shelley = new Last('Shelley')
mary = new First('Mary')

Object.setPrototypeOf(ms_mary_shelley, shelley)
Object.setPrototypeOf(shelley, mary)

PROTOTYPE_INTERFACE = { firstMethod: 'function', lastMethod:'function', fullMethod: 'function',
                  f_name: 'string', l_name: 'string', salu: 'string'}

PROTOTYPE_FAIL = Object.assign({X_name: 'string'}, PROTOTYPE_INTERFACE)  

type_czech.check_interface(ms_mary_shelley, PROTOTYPE_INTERFACE)

type_czech.check_interface(ms_mary_shelley, PROTOTYPE_FAIL)  // error
```

## 5 OLOO Check Interface<a name="oloo-check-interface"></a>

```
type_czech = TypeCzech('LOG-ERRORS')

function First(f_name) {
  FIRST_TEMPLATE = { firstMethod(){ } }
  first_object = Object.create(FIRST_TEMPLATE)
  first_object.f_name = f_name
  return first_object
}

function Last(f_name, l_name) {
  LAST_TEMPLATE = { lastMethod(){ } }
  first = First(f_name)
  Object.setPrototypeOf(LAST_TEMPLATE, first)
  last_object = Object.create(LAST_TEMPLATE)
  last_object.l_name = l_name
  return last_object
}

function Full(salu, f_name, l_name) {
  FULL_TEMPLATE = { fullMethod(){ } }
  last = Last(f_name, l_name) 
  Object.setPrototypeOf(FULL_TEMPLATE, last)
  full_object = Object.create(FULL_TEMPLATE)
  full_object.salu = salu
  return full_object
}

margaret_atwood = Full('Ms.', 'Margaret', 'Atwood')

OLOO_INTERFACE = { firstMethod: 'function', lastMethod:'function', fullMethod: 'function',
                  f_name: 'string', l_name: 'string', salu: 'string'}

OLOO_FAIL = Object.assign({X_name: 'string'}, OLOO_INTERFACE)  

type_czech.check_interface(margaret_atwood, OLOO_INTERFACE)

type_czech.check_interface(margaret_atwood, OLOO_FAIL)  // error
```

