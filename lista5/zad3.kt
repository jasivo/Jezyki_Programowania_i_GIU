import kotlin.math.*

open class Prostokat(var a : Double, var b : Double){

    override fun toString() = "$a x $b"

    var pole: Double
        get() = a * b
        set(size){
            a = sqrt(size)
            b = a;
        }

    var obwod: Double
        get() = (2*a) + (2*b)
        set(size){
            a = size / 4
            b = a
        }
    
    val przekatna: Double
        get() = sqrt(a.pow(2) + b.pow(2));
}

class Plakat(a: Double = 21.0, b: Double = 29.7, var color: String = "#FFF", var tekst: String = "Witaj!") : Prostokat(a,b){

    override fun toString()= "'$tekst' (plakat $a x $b w kolorze $color)"

}

fun main()
{
    var lista = listOf(
        Prostokat(5.0, 3.0),
        Prostokat(4.0, 2.0),
        Prostokat(6.0, 6.0),
        Prostokat(8.0, 4.0),
        Plakat(tekst="Kotlin rulez!"),
        Plakat(color="#AAA"),
        Plakat(color="#34F")
    )

    //a
    println("A:")
    for(fig in lista)
        println(fig.toString())

    println("")

    //b
    println("B:")
    lista.forEach{println(it.toString())}

    println("")

    //c
    println("C:")
    println("===A===")
    println(lista.sortedBy{it.a})
    println("===B===")
    println(lista.sortedBy{it.b})
    println("===POLE===")
    println(lista.sortedBy{it.pole})
    println("===OBWOD===")
    println(lista.sortedBy{it.obwod})
    println("===PRZEKATNA===")
    println(lista.sortedBy{it.przekatna})
}