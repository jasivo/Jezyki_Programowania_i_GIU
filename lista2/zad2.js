function* Fibonacci(){

    var current;
    var prev1 = BigInt(0);
    var prev2 = BigInt(1);

    console.log(BigInt(0));

    while(true){
        current = prev1;

        yield current;

        prev1 = prev1 + prev2;
        prev2 = current;
    }
}

let z1 = Fibonacci();

//koniec zadania 1

function Fibo(){
    this.a = 1;
    this.b = 1;
}

Fibo.prototype.next = function(){
    let current = this.a;
    this.a = this.b;
    this.b = current + this.b;
    return {value : BigInt(current)}
}

let z2 = new Fibo();

var i = 0;
var j = 0;
var k = 0;

const a = setInterval(()=>{
    if(i>100)
        clearInterval(a);
    console.log(z1.next().value);
    i++;
    },500);

const c = setInterval(()=>{
    if(i>100)
        clearInterval(c);
    console.log("==========");
    k++;
    },500);

const b = setInterval(()=>{
    if(i>100)
        clearInterval(b);
    console.log(z2.next().value);
    j++;
    },500);
