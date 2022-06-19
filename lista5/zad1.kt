fun main(){
    class Osoba(var imie:String, var nazwisko:String){
    override fun toString()="$imie $nazwisko"
}
    
var osoby=listOf(Osoba("Jan","Kowalski"),Osoba("Ewa","Nowak"),Osoba("Artur","Kowalski"),Osoba("Adam","Nowak"))

val a = osoby.sortedBy {it.imie}
val b = osoby.sortedWith(compareBy{it.imie})
val c = osoby.sortedWith(compareBy({it.nazwisko},{it.imie}))
val d = osoby.sortedBy {it.nazwisko+it.imie}

//a
println("A:")
a.forEach{println(it)}

println("")

//b
println("B:")
b.forEach{println(it)}

println("")

//c
println("C:")
c.forEach{println(it)}

println("")

//d
println("D:")
d.forEach{println(it)}

}