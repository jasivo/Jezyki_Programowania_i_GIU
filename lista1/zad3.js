function suma()
{
    //zrobione podpunkty a i b

    var suma = 0;

    for(let i = 0; i < arguments.length; i++)
    {
        if(!isNaN(arguments[i]))
            suma += arguments[i];
        if(Array.isArray(arguments[i]))
        {
            for(let j = 0 ; j < arguments[i].length; j++ )    
                if(!isNaN(arguments[i][j]))
                    suma += arguments[i][j];
        }
    }

    return suma;
}

console.log("Suma: ");
console.log(suma(1,2,3,[2,2],31,22,5,12,42,111,2,[5,5,13,21,52]));