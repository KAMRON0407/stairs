do {
  var a = +prompt('Введите кол во ступеней');
    
}while(isNaN(a)); 

do {
    var b = prompt('Введите символ отступов');
}while (b == ''){

}

do {
    var c = prompt('Введите конечный символ')
}while(c == ''){
    console.log(c)
    
}

let num = ''
for(i = 1; i < a; i++){
    
    num = b + num
    
    console.log(num + c);
}