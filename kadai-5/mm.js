//object        key- is: name, age 
    //***-hyphen iretai->""ireru

const person = {
    name: 'NNNN',
    age: 24,
    gender: 'f',
    pet: {
        name: 'inuu',
        color: 'kuro'
    }
}

    // .dot wo tukauto yobidashi OK
console.log (person.name)
    //namae 2kome
    person.name = 'mmmm'
    console.log (person.name)
    console.log(person)


delete person.age
console.log (person)

    // hypfhen wo tukaitai toki
console.log (person["name"])
    //
console.log (person.pet.name)


//
//hairetu
const animals =['cat', 'inu', 'usa', 'wani']
console.log(animals)
    // + length DE nambanme deru
    //animals.push 'doubutu' (NO console) DE const ni plus dekiru
console.log(animals[3])
const last = animals.pop()
console.log(last)
console.log(animals)
        // animals.splice(1,2, 'new, 'new') DE 1,2,kome Delete, new added


//
