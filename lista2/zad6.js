function arytmetyczny(objekt){

    let [first, second] = Object.entries(objekt);
    let [key1, value1] = first;
    let [key2, value2] = second;

    let r1 = undefined;
    let a1 = undefined;

    if(key1[0] == "a")
    {
        let i = key1.substr(1);
        let a = parseInt(i);

        if(key2[0] == "r")
        {
            r1 = value2;
            a1 = value1 - (i-1) * r1;  
        }
        else if(key2[0] == "a")
        {
            let j = key2.substr(1);
            let b = parseInt(j) * (-1);
            r1 =  (value1-value2)/(a+b);
            a1 = value1 - (i-1) * r1;  
        }

        //a1 = value1 - (i-1) * r1;   
    }

    else if(key1[0] == "s")
    {
        let i = key1.substr(4);
        let n1 = parseInt(i);
        let s1 = value1;


        if(key2[0] == "r")
        {
            r1 = value2;
            a1 = (2*s1 - (n1*n1*r1) + n1*r1)/(2*n1);
        }
        else if(key2[0] == "s")
        {
            let j = key2.substr(4);
            let n2 = parseInt(j);
            let s2 = value2; 

            //[a1,r,Sn]
            let arr1 = new Array(3);
            let arr2 = new Array(3);

            arr1[2] = s1;
            arr2[2] = s2;

            arr1[0] = (n1/2) * 2;
            arr2[0] = (n2/2) * 2;

            arr1[1] = (n1/2) * (n1-1);
            arr2[1] = (n2/2) * (n2-1);

            if(arr1[0] > arr2[0])
            {
                let wsp = arr1[0]/arr2[0];
                arr2[0] = wsp*arr2[0]*(-1);
                arr2[1] = wsp*arr2[1]*(-1); 
                arr2[2] = wsp*arr2[2]*(-1);                  
            }
            else
            {
                let wsp = arr2[0]/arr1[0];
                arr1[0] = wsp*arr1[0]*(-1);
                arr1[1] = wsp*arr1[1]*(-1);
                arr1[2] = wsp*arr1[2]*(-1);
            }

            let lR = arr1[1] + arr2[1];
            let lS = arr1[2] + arr2[2];
            r1 = lS/lR;
            a1 =  (((2*s2)-(n2*n2*r1)+(n2*r1))/(2*n2));
        }

        else if(key2[0] == "a")
        {
            let j = key2.substr(1); //2
            let n2 = parseInt(j); //2 
            let a2 = value2; //2
            
            let arr1 = new Array(2);
            let arr2 = new Array(2);

            //[x, r]
            arr1[0] = s1/n1; // 2.5
            arr2[0] = value2; // 2

            arr1[1] = (n1-1)/2; // 1.5
            arr2[1] = (n2-1); // 1

            arr1[0] *= -1; //-2.5
            arr1[1] *= -1; //-1.5

            arr1[0] += arr2[0]; // -0.5
            arr1[1] += arr2[1]; // -0.5

            r1 = arr1[0] / arr1[1]; // -0.5/-0.5
            a1 = a2 - ((n2-1)*r1); // 2 - (1)
        }

    }
    
    let obj = {

        _a1: a1,
        _r: r1,
    
        a(k){
            if((this._a1 == undefined) && (this._r == undefined))
                return null;
            else
                return this._a1 + ((k-1)*this._r);
        },
    
        suma(k)
        {
            let _ai = this._a1 + ((k-1) * this._r);
        
            if((this._a1 == undefined) && (this._r == undefined))
                return null;
            else
                return ((this._a1+_ai)/2) * k;
        },
    
        get r()
        {
            return this._r;
        },

        * [Symbol.iterator](){
            let l = 0;
            while(l<20)
                yield (this._a1 + (l++)*this._r);    
        }
    
    }

    return obj;
}

var x = arytmetyczny({a7:9,r:2});
console.log(x.a(1));
console.log(x.a(2));
console.log(x.a(3));
console.log("Suma(3)");
console.log(x.suma(3));
console.log("R");
console.log(x.r);
console.log("=============");

var y = arytmetyczny({a3:5,a5:9});
console.log(y.a(1));
console.log(y.a(2));
console.log(y.a(3));
console.log("Suma(3)");
console.log(y.suma(3));
console.log("R");
console.log(y.r);
console.log("=============");

var v = arytmetyczny({suma2:3,suma4:10});
console.log(v.a(1));
console.log(v.a(2));
console.log(v.a(3));
console.log(v.a(4));
console.log("Suma(4)");
console.log(v.suma(4));
console.log("R");
console.log(v.r);
console.log("=============");

var z = arytmetyczny({suma4:10,r:3});
console.log(z.a(1));
console.log(z.a(2));
console.log(z.a(3));
console.log(z.a(4));
console.log("Suma(4)");
console.log(z.suma(4));
console.log("R");
console.log(z.r);
console.log("=============");

var m = arytmetyczny({suma8:20,a2:13});
console.log(m.a(1));
console.log(m.a(2));
console.log(m.a(3));
console.log(m.suma(5));
console.log("R");
console.log(m.r);
console.log("=============");

var b = arytmetyczny({d2:3,w3:10});
console.log(b.a(1));
console.log(b.suma(2));

// for(let f of v)
//     console.log(f);