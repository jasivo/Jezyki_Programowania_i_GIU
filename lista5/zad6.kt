class Dzielniki(var n: Int = 1)
{
    var i = 1
    operator fun iterator() = this
    operator fun hasNext() = i<=n
    operator fun next(): Int
    {
        while(n % i != 0)
            i++
        return i++
    }
}

fun main(){
    print("Dzielniki liczby 49: ")
    for(x in Dzielniki(49))
        print(" $x")
}