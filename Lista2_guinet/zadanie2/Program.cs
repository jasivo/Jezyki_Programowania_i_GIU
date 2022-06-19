//Program wylicza srednia ocen szkoly na podstawie ocen ze wszystkich klas.

Srednia szkoly = new Srednia();

Console.WriteLine(szkoly.policz_srednia().ToString("0.00"));
Console.Write("\n");

class Srednia
{
    public Random rand;
    public int _klasy;
    public int[][] _oceny;
    public float n;
    public float suma;

    public Srednia()
    {
        rand = new Random();
        _klasy = rand.Next(1,9);
        _oceny = new int[_klasy][];
        n = 0;
        suma = 0;

        for(int i = 0; i < _klasy; i++)
        {
            int _rozmiar = rand.Next(10,20);
            int[] _srednia = new int[_rozmiar];
            for(int j = 0; j < _rozmiar; j++)
            {
                _srednia[j] = rand.Next(1,7);
            }
            _oceny[i] = _srednia;
        }
    }

    public float policz_srednia()
    {
        for(int i = 0 ; i < _oceny.Length; i++)
        {
            for(int j = 0; j < _oceny[i].Length; j++)
            {
                this.suma += _oceny[i][j];
                this.n++;
                Console.Write(_oceny[i][j]);
                Console.Write(" ");
            }
        }
        Console.Write("\nSrednia szkoly = ");

        return (this.suma/this.n);
    }
}