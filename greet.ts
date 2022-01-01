// Pass primative parameters
function greet(greeting: string = "Hello", name: string): string {
  return `${greeting}, ${name}!`;
}

const greetMsg: string = greet("Hey", "John");

// Pass an object parameter
function greeter(options: { greeting: string; name: string }): string {
  return `${options.greeting}, ${options.name}!`;
}

const greeterMsg: string = greeter({ greeting: "Hi", name: "John" });

// Pass a destructured object parameter
function greeterer({ greeting, name }: { greeting: string; name: string }) {
  return `${greeting}, ${name}!`;
}

const greetererMsg: string = greeterer({ greeting: "Alo", name: "John" });

// Extract type to type declaration
type Salutation = { greeting: string; name: string };

function salute({ greeting, name }: Salutation) {
  return `${greeting}, ${name}!`;
}

const saluteMsg: string = salute({ greeting: "Salute", name: "John" });

// Check output
console.log(greetMsg);
console.log(greeterMsg);
console.log(greetererMsg);
console.log(saluteMsg);
