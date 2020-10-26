var add =(a,b)=>a+b;

var restar=(a,b)=>{
    if(a<b){
        console.log("a debe ser mayor que b");
        return;
    }else{
        return a-b;
    }
}

var mul=(a,b)=>a*b;

var div=(a,b)=>{
    if(b==0){
        console.log("b debe ser distinto de 0");
        return;
    }else{
        return a/b;
    }
}
console.log(add(1,1));
console.log(restar(4,3));
console.log(mul(3,4));
console.log(div(3,1));