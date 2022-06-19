function f4(a,b)
{
    a_sum = 0;
    b_sum = 0;

    while(a) {
        a_sum += a % 10;
        a = Math.floor(a / 10);
    }

    while(b) {
        b_sum += b % 10;
        b = Math.floor(b / 10);
    }

    return a_sum - b_sum;
}

function f3(a,b)
{
    return ((a%100)-(a%10)) - ((b%100)-(b%10));
}

function f2(a,b)
{
    return (a%10) - (b%10);
}

function f1(a,b)
{
    return b-a;
}

console.log("malejaco: ");
console.log([1,2,54,3,44,31,46,56,68,642,322,310,675,615].sort(f1));
console.log("po jednosciach: ");
console.log([1,2,54,3,44,31,46,56,68,642,322,310,675,615].sort(f2));
console.log("po dziesiatkach: ");
console.log([1,312,2,54,3,46,31,44,56,68,642,322,310,675,615].sort(f3));
console.log("po sumie: ");
console.log([1,2,54,3,44,31,46,56,68,642,322,310,675,615].sort(f4));