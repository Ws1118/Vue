//对象中的this指针
//this指向对象本身，通过this可以引用对象的属性和函数
// class Player {
//     //构造函数
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     //定义成员函数
//     printInfo () {
//         console.log(this.name + '' + this.age)
//     }
// }

// let player1 = new Player('tom', 20)
// player1.printInfo()

// 前面没有说谁在调用，默认windows
// setInterval(() => {

// }, delay)

//this指针在使用中的一个问题
class Player {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    printInfo () {
        setTimeout(() => {
            console.log(this.name + '' + this.age)
        }, 1000)
    }
}
let play2 = new Player('tom', 20)
play2.printInfo()