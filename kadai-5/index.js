const profile = {
    name: 'HACHI',
    age: 8,
    hobby: 'books',
    major: 'asia'
};

    

console.log('わたしの名前は' + profile.name + 'です。')

const keys = Object.keys(profile);

for (let i = 0; i < keys.length; i = i + 1) {
    const key = keys[i];
    const value = profile[key];
    const text = 'watashsino' + key + 'ha' + value + 'des'
    console.log(text);
}