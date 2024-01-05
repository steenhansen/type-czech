

### Why Use
Enjoy some TypeScript benefits without the drawbacks of

- Compilation time
- New language syntax
- Compile time only checks

With TypeCzech you can

- Check function [parameter types](https://jsfiddle.net/steen_hansen/0xtpLwsc/?00-Readme-Example),
  [results](https://jsfiddle.net/steen_hansen/wrkvscqg/?05-Verify-Return-Results-by-Value),
  [arrays](https://jsfiddle.net/steen_hansen/bsw3yp5c/?16-Arrays-with-One-Type),
  [closures](https://jsfiddle.net/steen_hansen/r8L3mp40/?09-Closure-Parameters-Results-and-Methods),
  and [classes](https://jsfiddle.net/steen_hansen/Lhwov8y9/?10-Class-Parameters-Results-and-Methods)
- Ensure strings, arrays, and objects are [not empty](https://jsfiddle.net/steen_hansen/x8h6dvj5/?19-Lone-Empty-Param-and-Result) at run-time
- [Catch malformed data](https://jsfiddle.net/steen_hansen/ta7fdnrw/?39-Assert-Checks) from a fetch() call at run-time
- Specify [run-time input validation constraints](https://jsfiddle.net/steen_hansen/6zy89om1/?02-Validate-Parameters-by-Value)
- [Detect run-time mutations](https://jsfiddle.net/steen_hansen/abh0jkL1/?07-Mutated-Function-Parameters) in array and object function parameters

Missing from TypeCzech

- Type inference
- Checking types of optional function parameters
- Generics

TypeCzech the good parts

- Type signatures are plain JavaScript variables made of objects, arrays, and strings.
  No special type variables, no annotations, and no generics.
- Checking functions are easily detachable into a separate file. To stop all TypeCzech checking just stop importing the TypeCzech library in production or development. Decouple
  with a comment as in [03-Turn-Off-Library-Not-Loaded](https://jsfiddle.net/steen_hansen/m1tce27f/?03-Turn-Off-Library-Not-Loaded), a variable as in [102-Extending-Classes-Imports](https://jsfiddle.net/steen_hansen/rs4nqL7k/?102-Extending-Classes-Imports), or an if statement as in [204-Extending-Closures-Single](https://jsfiddle.net/steen_hansen/8kbtyfz1/?204-Extending-Closures-Single).
- Does not introduce special syntax into your code, just plain functions. No .d.ts files just plain JavaScript.

TypeCzech the bad parts

- Verbosity of adding PRE_checking(), POST_checking(), and linkUp() functions to source
- Continuously checking parameter mutations of large collections can be slow
- When checking constructors and methods of extended classes, production code
  can get complicated if all TypeCzech testing code is to be completely removed for production.