//es5定义对象，原型链
// 定义对象，成员属性
function Player(name,age){
    this.name = name
    this.age = age
}

//成员函数挂载在对象的原型链上
Player.prototype.printInfo = function(){
    console.log(this.name + '------' + this.age);
}

var player1 = new Player('tom', 20)
var player2 = new Player('jack', 23)

player1.printInfo()
player2.printInfo()