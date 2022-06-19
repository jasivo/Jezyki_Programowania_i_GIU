class Kwadrat{
    constructor(a) { this.a = a; }
    get bok() { return this.a; }
    set bok(a) { this.a = a; }
    get obwód() { return 4 * this.a; }
    set obwód(len) { this.a = len / 4; }
    get pole() { return this.a * this.a; }
    set pole(P) { this.a = Math.sqrt(P); }
    toString() {return 'a = ' + this.bok + '\nL = ' + this.obwód + '\nP = ' + this.pole + '\n';}
}

class Koło{
    constructor(r){
        this.promień = r;
    }
    get promień() {
         return this.r; 
    }
    set promień(r) {
         this.r = r; 
    }
    get średnica() {
        return 2 * this.r; 
    }
    set średnica(d) {
        this.r = d/2; 
    }    
    get obwód() {
         return 2 * Math.PI * this.r; 
    }
    set obwód(len) {
         this.r = len / (2 * Math.PI); 
    }
    get pole() {
         return Math.PI * this.r * this.r; 
    }
    set pole(P) {
         this.r = Math.sqrt(P/Math.PI); 
    }
    toString(){
        return 'r = ' + this.promień + '\nd = ' + this.średnica + '\nL = ' + this.obwód + '\nP = ' + this.pole + '\n';
    }
}

    let k = new Kwadrat(1);
    k.pole = 12;
    console.log("Kwadrat 1: \n"+k);

    let j = new Koło(5);
    console.log("Koło 1: \n"+j);
    j.pole = 25;
    console.log("Koło 1(v2): \n"+j);

    Math.floor(Math.random() * 11) 

    var figury = new Array(6);

    for(let i = 0; i < 6; i++)
    {
        if(i%2 == 0)
            figury[i] = new Kwadrat(Math.floor(Math.random() * 10) + 1);
        else
            figury[i] = new Koło(Math.floor(Math.random() * 10) + 1);     
    }

    var pole = 0, obwod = 0, ctr = 0;

    for(let j = 0; j < figury.length; j++)
    {
        ctr++;
        console.log("Figura nr " + ctr + " Pole = " + figury[j].pole + " Obwod = " + figury[j].obwód);
        pole += figury[j].pole;
        obwod += figury[j].obwód;
    }

    console.log("Suma pól = " + pole + " Suma obwodów = " + obwod);