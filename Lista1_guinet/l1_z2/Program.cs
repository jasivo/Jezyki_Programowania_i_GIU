Calkowite a = new Calkowite(5);
a.WypiszStan();
Console.WriteLine(a.Wallet);
a.WypiszStan();
Console.WriteLine(a.Wallet = 2500);
Console.WriteLine(a.Wallet);
a.WypiszStan();
Console.WriteLine(a.Wallet);
Console.WriteLine(a.Wallet);
Console.WriteLine(a.Wallet);
Console.WriteLine(a.Wallet);
a.WypiszStan();
a.Ureguluj();
a.WypiszStan();

class Calkowite
{
    private int _freeOperations;
    private int _wallet = 0;
    private int _doneRead = 0;
    private int _doneWrite = 0;

    public Calkowite(int operations)
    {
        this._freeOperations = operations;
    }

    public int Wallet
    {
        get
        {
            if(_doneRead < _freeOperations)
            {
                this._doneRead++;
                return _wallet;
            }
            else
            {
                Console.WriteLine("Wykorzystales wszystkie bezplatne operacje pobrania.");
                return -1;
            }
        }
        set
        {
            if(_doneWrite < _freeOperations)
            {
                this._doneWrite++;
                this._wallet = value;
            }
            else
                Console.WriteLine("Wykorzystales wszystkie bezplatne operacje nadania.");
        }
    }

    public void Ureguluj()
    {
        this._doneRead = 0;
        this._doneWrite = 0;
    }

    public void WypiszStan()
    {
        Console.WriteLine("Pozostało " + (_freeOperations - _doneRead) + " bezpłatnych operacji pobrania i "+ (_freeOperations-_doneWrite) + " operacji nadania.");
    }
}