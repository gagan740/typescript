// var myName: string      =   "Gagan";
// var myAge: number       =   23;
// var canVote: boolean    =   true;
// var anything: any       =   "dog";
// anything                =   2;


// document.getElementById("tsStuff").innerHTML    =   "My name is " + myName;
// document.write("myname is a " + typeof(myName) + "<br/>");
// document.write("anything is a " + typeof(anything) + "<br/>");

// var strToNum: number    =   parseInt("5");
// var numToStr: number    =   5;

// document.write("numToStr is a " + typeof(numToStr.toString())+"<br/>");

// const PI    =   3.14159;

// interface SuperHero{
//     realName: string;
//     superName: string;
// }

// var superman: SuperHero =   {
//     realName: "Tony Stark",
//     superName: "Iron Man"
// }

// document.write(superman.realName + " is " + superman.superName + "<br/>");

// var employees: string[]   = ["Gourav","Manak","Yashpal"];

// document.write(employees.toString() + "<br>");

// interface SuperHero{
//     realName: string;
//     superName: string;
// }

// var superheros: SuperHero[] = [];

// superheros.push({
//     realName: 'Tony Stark',
//     superName: 'Iron Man'
// });

// document.write(superheros[0].realName + " is " + superheros[0].superName + "<br/>");

// document.write("5+4 = " + (5+4) + "<br/>");

// var randArray   =   [1,2,3,4,];

// for(var val in randArray){
//     document.write(val + "<br/>");
// }

// var strArray    =    randArray.map(String);
// for(var val of strArray){
//      document.write(val + "<br/>");
// }

// var getSum      =   function (num1:number, num2:number):number{
//     return num1+num2;
// }

// var theSum1: number     =   getSum(9,5);

// document.write(theSum1);

// var addOne  =   (x)=>x+1;
// document.write("1 + 1 = " + addOne(1) + "<br/>");

class Animal{
    public favFood: string;

    static numOfAnimals: number =   0;

    constructor(private name: string, private owner: string){
        Animal.numOfAnimals++;
    }

    ownerInfo(){
        document.write(this.name + " is owned by " + this.owner + "<br/>");
    }

    static howManyAnimals(): number{
         return Animal.numOfAnimals;
    }

    private _weight: number;

    get weight():number{
        return this._weight;
    }

    set weight(weight: number){
        this._weight    =   weight;
    }
}

var spot    =   new Animal("Spot","Doug");

spot.ownerInfo();

spot.weight     =   100;

document.write("Spot's weight is " + spot.weight + "<br/>" );

document.write("# of Animals : " + Animal.howManyAnimals() + "<br/>" );