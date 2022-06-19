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

function* fragment(iter, skip, limit=1){
    for(let i of iter){
        if(skip == 0){
            if(limit == 0)
                break;
            else{
                yield i;
                limit--;
            }     
        }
        else if(skip > 0){
            console.log("Pominięte");
            skip--;
        }
    }
}

for(let x of fragment(Fibonacci(), 3, 100)) 
    console.log(x);