const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'


//str1のパース結果
console.log(JSON.parse(str1)) 
    try {
        console.log(JSON.parse(str1))
    } catch (error) {
         console.log(error)
    //abcという文字列は正しいJSONではないから。
    //正しくは"abc"
    }


//str2のパース結果
    try {
        console.log(JSON.parse(str2))
    } catch (error) {
        console.log(error)
    //'abc'という文字列は正しいJSON ではないから。
    //正しくは "abc"

    }   

//str3
    try {
        console.log(JSON.parse(str3))
    } catch (error) {
        console.log(error)
    //"abc"　は正しいJSONなのでパースできる。

    }

//str4
    try {
        console.log(JSON.parse(str4))
    } catch (error) {
        console.log(error)
    //kokoniriyu wo kakude

    }

//str5
    try {
        console.log(JSON.parse(str5))
    } catch (error) {
        console.log(error)
    //kokoniriyu wo kakude

    }

//str6
    try {
        console.log(JSON.parse(str6))
    } catch (error) {
        console.log(error)
    //kokoniriyu wo kakude

    }