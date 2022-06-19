fun rozkład(n:Int, operations:(Int)->Unit)
{
    var number = n;
    var i = 2;
    while (number > 1)
        if(number % i != 0)
            i++
        else {
            operations(i)
            number /= i
        }
}

fun Dzielniki(n: Int, operations:(Int)->Unit)
{
    var number = n
    var i = 1
    while(i <= number)
        if(number % i != 0)
            i++
        else
            operations(i++)
}

fun main(){
    print("120=")
    rozkład(120){print(" $it")}
    println("\n")
    print("Dzielniki liczby 144 =")
    Dzielniki(144){print(" $it")}
    var suma = 0
    Dzielniki(144){suma += it}
    println("")
    println("Suma dzielnikow liczby 144 = " + suma)
}