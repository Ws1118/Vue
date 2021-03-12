//单行函数
//无参非箭头函数
let noParam = function(){
    return 100
}
//无参箭头函数
let noParamB = () => 100

//带参数的箭头函数
let paramA = (num1, num2) => num1 + num2

//多行函数
//非箭头函数写法
let sumAddA = function(num1,num2){
    num1 = num1 *2
    num2 = num2 *3
    return num + num2
}

//箭头函数写法
let sumAddB = (num1,num2) => {
    num1 = num1 *2
    num2 = num2 *3
    return num + num2
}
