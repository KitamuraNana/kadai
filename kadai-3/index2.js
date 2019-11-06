const max = parseInt(process.argv[2])
//maxに値代入

for (let n = 1; n <= max; n = n + 1) {
    if (n % 3 === 0){
        console.log('saaan')
    } else if(n % 5 === 0) {
        console.log('gooo')
    } else{
        console.log(n)
    }
}