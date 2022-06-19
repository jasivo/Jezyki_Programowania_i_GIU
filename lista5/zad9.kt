fun gcd(a:Int,b:Int):Int{
    var a1 = a
    var b1 = b
    while (a1 != b1) {
        if (a1 > b1)
            a1 -= b1
        else
            b1 -= a1
    }
    return a1
}

data class Ułamek(var licznik:Int=0, var mianownik:Int=1){
    init{
        val x=gcd(Math.abs(licznik),mianownik)
        licznik /= x
        mianownik /= x
    }

override fun toString()="$licznik/$mianownik"
operator fun times(u:Ułamek) = Ułamek(licznik * u.licznik, mianownik * u.mianownik)
operator fun div(u:Ułamek) = Ułamek(licznik * u.mianownik, mianownik * u.licznik)
operator fun plus(u:Ułamek) = Ułamek(licznik * u.mianownik + mianownik * u.licznik, mianownik * u.mianownik)
operator fun minus(u:Ułamek) = Ułamek(licznik * u.mianownik - mianownik * u.licznik, mianownik * u.mianownik)
operator fun unaryMinus() = Ułamek(-licznik, mianownik)
operator fun unaryPlus() = this
operator fun times(u:Int):Ułamek = this * Ułamek(u) 
operator fun div(u:Int):Ułamek = this / Ułamek(u)
operator fun plus(u:Int):Ułamek = this + Ułamek(u)  
operator fun minus(u:Int):Ułamek = this - Ułamek(u) 
}
operator fun Int.times(u:Ułamek):Ułamek = Ułamek(this, 1) * u
operator fun Int.plus(u:Ułamek):Ułamek = Ułamek(this,1) + u
operator fun Int.minus(u:Ułamek):Ułamek = Ułamek(this ,1) - u
operator fun Int.div(u:Ułamek):Ułamek = Ułamek(this,1) / u


fun main()
{
    var a=Ułamek(2,5)
    var b=Ułamek(3,10)
    println("a=$a")
    println("b=$b")
    println("$a * $b = ${a*b}")
    println("$a / $b = ${a/b}")
    println("$a + $b = ${a+b}")
    println("$a - $b = ${a-b}")
    println("$a + 4 = ${a+4}")
    println("$a - 4 = ${a-4}")
    println("$a * 4 = ${a*4}")
    println("$a / 4 = ${a/4}")
    println("4 + $a = ${4+a}")
    println("4 - $a = ${4-a}")
    println("4 * $a = ${4*a}")
    println("4 / $a = ${4/a}")
}