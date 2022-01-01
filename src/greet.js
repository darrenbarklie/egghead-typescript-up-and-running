// Pass primative parameters
function greet(greeting, name) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
var greetMsg = greet("Hey", "John");
// Pass an object parameter
function greeter(options) {
    return "".concat(options.greeting, ", ").concat(options.name, "!");
}
var greeterMsg = greeter({ greeting: "Hi", name: "John" });
// Pass a destructured object parameter
function greeterer(_a) {
    var greeting = _a.greeting, name = _a.name;
    return "".concat(greeting, ", ").concat(name, "!");
}
var greetererMsg = greeterer({ greeting: "Alo", name: "John" });
function salute(_a) {
    var greeting = _a.greeting, name = _a.name;
    return "".concat(greeting, ", ").concat(name, "!");
}
var saluteMsg = salute({ greeting: "Salute", name: "John" });
// Check output
console.log(greetMsg);
console.log(greeterMsg);
console.log(greetererMsg);
console.log(saluteMsg);
