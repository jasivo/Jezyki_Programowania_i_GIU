operator fun String.times(times:Int):String{
    var res=""
    this.forEach{
        var char = it
        repeat(times){
            res += char
        }
    }
    return res
}

fun main(){
    println("AAAlllaaa   mmmaaa   kkkoootttaaa")
    println("Ala ma kota" * 3)
    println(("AAAlllaaa   mmmaaa   kkkoootttaaa") == ("Ala ma kota" * 3))
}