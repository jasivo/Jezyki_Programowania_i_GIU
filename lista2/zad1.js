function* Fibonacci(){

    var current;
    var prev1 = BigInt(0);
    var prev2 = BigInt(1);

    while(true){
        current = prev1;

        yield current;

        prev1 = prev1 + prev2;
        prev2 = current;
    }
}

const gen = Fibonacci();

var i = 0;

// for(let a of gen)
// {
//     if(i++ > 200)
//         break;
//     //console.log(gen.next().value);
//     console.log(a);
// }

const a = setInterval(()=>{
    if(i>100)
        clearInterval(a);
    console.log(gen.next().value);
    i++;
    },500);
