


// console.log('before name: ', name);
const name = 'hoa';
console.log('after name: ', name);

getMonth(1);
function getMonth(number) {
  let name = '';
  switch (number) {
    case 1:
      name = 'Jan';
      break
    case 2:
      name = 'Feb';
      break
    default:
      break
  }
  console.log("name: ", name)
  return name;
}
