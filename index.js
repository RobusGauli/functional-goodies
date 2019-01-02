const add = a => b => a + b;
function add(a, b) {
  return a + b
}

function main() {
  let a = add(3);
  console.log(a(4))
}

main()
