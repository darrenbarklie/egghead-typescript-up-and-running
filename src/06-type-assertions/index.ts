// const input:HTMLInputElement = document.getElementById("input");
// => Type 'HTMLElement | null' is not assignable to type 'HTMLInputElement'.

const input = document.getElementById("input") as HTMLInputElement;

console.log(input);

input.autofocus = true;

input.addEventListener("input", (event) => {
  // console.log(event.currentTarget.value);

  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
});
