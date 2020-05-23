const fs = require('fs')


// 阻塞代码
let data = fs.readFileSync('./input.txt')

console.log(data)

// 非阻塞代码

fs.readFile('./input.txt',function(err,data){
    console.log(data.toString())
})