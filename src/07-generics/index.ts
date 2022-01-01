// Generics most often appear in utility functions

// As it's a utility function, the `value` type is not known

// However can be certain `fill` will return `array` full of
// values of the `value` type

// `fill<IDontKnow>` sets the generic

function fill<IDontKnow>(array: any[], value: IDontKnow): IDontKnow[] {
  return array.map(() => value);
}

// When `fill` is called, the definition is <string>
const result = fill([1, 2, 3], "a");
// String method works
result.map((x) => x.toUpperCase());

// When `fill` is called, the definition is <number>
const values = fill(["a", "b", "c"], 4);
// String method won't work
// Number method works
values.map((x) => x.toFixed(2));

// Convention is to use `T` for generic
function filler<T>(array: any[], value: T): T[] {
  return array.map(() => value);
}
