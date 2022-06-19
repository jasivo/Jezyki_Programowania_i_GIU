interface Masywny {val masa: Double}

class Osoba(var mass: Double) : Masywny{
    override val masa: Double = mass

    override fun toString() = "Masa osoby to $masa kg"
}

class Zwierzę(var mass: Double) : Masywny{
    override val masa: Double = mass

    override fun toString() = "Masa zwierzecia to $masa kg"
}

class Bagaż(var mass: Double) : Masywny{
    override val masa: Double = mass

    override fun toString() = "Masa bagazu to $masa kg"
}

class Auto(var mass: Double) : Masywny{
    override val masa: Double = mass

    override fun toString() = "Masa auta to $masa kg"
}

fun main()
{
    var cargo = listOf(
        Osoba(80.0),
        Zwierzę(15.0),
        Bagaż(30.0),
        Auto(1200.0),
        Osoba(120.0),
        Zwierzę(12.0),
        Auto(1800.0)
    )

    //a
    println("A:")
    println(cargo.sortedByDescending{it.masa})
    
    println("")

    //b
    var total = cargo.fold(0.0) {sum,element -> sum + element.masa}
    var average = cargo.fold(0.0) {sum,element -> sum + element.masa} / cargo.size
    println("B:")
    println("Laczna masa: " + total)
    println("Srednia masa: " + average)

    println("")

    //c
    println("C:")
    cargo.filter{it.masa > average}.forEach{println(it)}
}