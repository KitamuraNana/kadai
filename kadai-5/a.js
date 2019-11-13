//
const cat = {
    name: 'momo',
    age: 5,
    sex: 'f'
}
console.log(Object.keys(cat)) // shows  [name age sex
console.log(Object.values(cat)) // shows [momo 5  f

//
const animals = ['cat', 'dog', 'usa ', 'wani' ]

for (let i = 0; i < animals.length; i = i + 1) {
    const animal = animals[i]
    console.log(animal)
}

for (let animal of animals)　 {
    console.log(animal)
}