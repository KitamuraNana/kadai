const day = parseInt(process.argv[2])
//！日付を入力できるようにする。
if (day % 3 === 0) {
    console.log('あなたはこのような性格です')
} else if (day % 3 === 1) {
    console.log('あなたはそのような性格です')
} else if (day % 3 === 2){
    console.log('あなたはどのような性格ですか？')
}