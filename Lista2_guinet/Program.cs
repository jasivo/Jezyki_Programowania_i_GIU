using System;
using System.Collections.Generic;

    Lista lista0 = new Lista(10);
    Console.WriteLine("Lista0 metoda ToString:");
    Console.WriteLine(lista0);
    Console.WriteLine(" ");

    List<Lista1> lista1 = new List<Lista1>();
    for(int i = 0; i < 5; i++)
    {
        Lista1 x = new Lista1(); 
        lista1.Add(x);
    }
    Console.WriteLine("Lista1 przed sortowaniem");
    lista1.ForEach(l => Console.WriteLine(l));
    Console.WriteLine(" ");
    lista1.Sort();
    Console.WriteLine("Lista1 po sortowaniu");
    lista1.ForEach(l => Console.WriteLine(l));
    Console.WriteLine(" ");

    List<Lista2> lista2 = new List<Lista2>();
    for (int i = 0; i < 5; i++)
    {
        Lista2 y = new Lista2();
        lista2.Add(y);
    }
    Console.WriteLine("Lista2 przed sortowaniem");
    lista2.ForEach(l => Console.WriteLine(l));
    Console.WriteLine(" ");
    lista2.Sort();
    Console.WriteLine("Lista2 po sortowaniu");
    lista2.ForEach(l => Console.WriteLine(l));
    Console.WriteLine(" ");

class Lista
{
    public List<int> _lista = new List<int>();
    public Random rand = new Random();

    public Lista(int n)
    {    
        if(n>=0)
        {    
            for(int i=0; i<n; i++)
                this._lista.Add(rand.Next(1, 101));
        }
        else
            Console.WriteLine("Podaj nieujemną długość listy!");
    }

    public Lista()
    {
        for(int i=0; i<rand.Next(1,6); i++)
        {
            this._lista.Add(rand.Next(1, 101));
        }
    }

    public override String ToString()
    {
        return String.Join(" ",_lista);
    }

}

class Lista1 : Lista, IComparable<Lista1>
{
    public Lista1() : base() { } 
    public Lista1(int n) : base(n) { } 

public int CompareTo(Lista1 compareList)
    {
        //dlugosc krotszej listy
        int _minimum;
        if(this._lista.Count > compareList._lista.Count) 
            _minimum = compareList._lista.Count; 
        else
            _minimum = this._lista.Count; 

        if (this._lista.Count == 0 && compareList._lista.Count == 0)
            return 0;
        else if (this._lista.Count == 0)
            return -1;
        else if (compareList._lista.Count == 0) 
            return 1;
           
        for(int i = 0; i < _minimum; i++)
        {
            if(this._lista[i] < compareList._lista[i])
                return -1;
            else if (this._lista[i] > compareList._lista[i])
                return 1;
        }

        if (this._lista.Count < compareList._lista.Count) 
            return -1;
        else if(this._lista.Count > compareList._lista.Count)
            return 1;
        return 0;
    }
}

class Lista2 : Lista, IComparable<Lista2>
{
    public Lista2() : base() { }
    public Lista2(int n) : base(n) { }

    public int CompareTo(Lista2 compareList)
    {
        if (this._lista.Count == 0 && compareList._lista.Count == 0)
            return 0;
        else if (this._lista.Count == 0)
            return -1;
        else if (compareList._lista.Count == 0)
            return 1;

        if (this._lista.Count < compareList._lista.Count)
            return -1;
        else if (this._lista.Count > compareList._lista.Count)
            return 1;

        for (int i = 0; i < this._lista.Count; i++)
        {
            if (this._lista[i] < compareList._lista[i])
                return -1;
            else if (this._lista[i] > compareList._lista[i])
                return 1;
        }
        return 0;
    }
}