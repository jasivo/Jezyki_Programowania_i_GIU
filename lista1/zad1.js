// function bigger(a)
// {
//     return function(x)
//     {
//         return (x > a);
//     };
// }

// function smaller(a)
// {
//     return function(x)
//     {
//         return (x < a);
//     };
// }

// function between(a,b)
// {
//     return function(x)
//     {
//         return ((x>=a) && (x <= b));
//     };
// }

function bigger(a)
{
    return (x) => (x > a)

}

function smaller(a)
{
    return (x) => (x < a)
}

function between(a,b)
{
    return (x) => ((x>=a) && (x <= b))
}

console.log("wieksze: ");
console.log([2,31,5,3,6].filter(bigger(3)));
console.log("mniejsze: ");
console.log([2,31,5,3,6].filter(smaller(3)));
console.log("pomiedzy: ");
console.log([2,31,5,3,6].filter(between(3,10)));