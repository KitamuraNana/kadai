function add(a, b) {
  return a + b;
}

const answer = add(100, 200);
console.log(answer)


//あろーかんすう
function myFunction1() {

}
const myFunction = () => {
    console.log('uuu')
}
myFunction()



//
//obj&sanshou
const a = { x: 1, y:2 }
const b = a
b.x = 100
console.log(a)

const c = [1,2,3,4,5] 
//b mo tukuruto b[3] OK
console.log(c)
const v =[1,2,3,4,5]
const v = c
v[3] = 1000
console.log(c)
console.log(v)
