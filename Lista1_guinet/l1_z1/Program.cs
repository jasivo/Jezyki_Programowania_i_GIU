Console.WriteLine("Podaj liczbe: ");
int number = int.Parse(Console.ReadLine());
for(int i=0; i<=number; i++)
{
    Console.Write(i + "\t");
    for(int j=1; j<=number; j++)
    {
            if(i == 0)
            {
                Console.Write("{0,4}", j + "\t");
            }
            else
            {
                    Console.Write("{0,4}", (i*j)+ "\t");
            }
    }
    Console.Write("\n");
}
