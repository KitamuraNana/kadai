
setTimeout(() => { console.log('HELLO') }, 6000)
setTimeout(() => { console.log('BYE')}, 7000)

//かいとう
setTimeout(
    () =>{
        console.log('hello')
        setTimeout(
            () => {
                console.log('bye')
            },
            2000
        )
    },
    3000
)