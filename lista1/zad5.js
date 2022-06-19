function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}

function* dzielniki(n)
{
    var tablica = [];
    
    for(let i = 1; i <= n; i++)
    {
        if(n%i==0)
            tablica.push(i);
    }
    
    var indeksy = tablica.length;

    yield tablica[0];

    for(let j = 1; j < indeksy; j++)
    {
        yield tablica[j];
    }    

}

function* pierwsze(n)
{
    var tablica2 = [];
    for(let i = 0; i <= n; i++)
    {
        if(isPrime(i))
            tablica2.push(i);
    }

    var indeksy2 = tablica2.length;

    yield tablica2[0];

    for(let j = 1; j < indeksy2; j++)
    {
        yield tablica2[j];
    }    
}

function* rozkład(n)
{
    var tablica3 = [];
    
    let k = 2;

    while(n>1)
    {
        while(n%k==0)
        {
            tablica3.push(k);
            n/=k;
        }
        ++k;
    }

    var indeksy3 = tablica3.length;

    yield tablica3[0];

    for(let j = 1; j < indeksy3; j++)
    {
        yield tablica3[j];
    } 
}

function wypisz(gen)
{
    for(let x of gen)
        console.log(x);
}

function sklej(gen,glue=',')
{
    var res = "";

    for(let x of gen)
        res += String(x) + glue;

    res = res.substring(0, res.length - 1);

    console.log(res);
}

function suma(gen)
{
    var res = 0;

    for(let x of gen)
        res += x;

    console.log(res);
}

function iloczyn(gen)
{
    var res = 1;

    for(let x of gen)
        res *= x;

    console.log(res);
}

const gen1 = dzielniki(16);
const gen2 = pierwsze(40);
const gen3 = rozkład(40);

var arr1 = Array.from(gen1);
var arr2 = Array.from(gen2);
var arr3 = Array.from(gen3);   

wypisz(arr1);
console.log("\n");
wypisz(arr2);
console.log("\n");
wypisz(arr3);
console.log("\n");
sklej(arr1);
console.log("\n");
suma(arr1);
console.log("\n");
iloczyn(arr1);