//lab 3 
// Toad attacks yoshi
// brackets for arrays []
//curly brackets for objects 

// constructor (function)

function items(Itemname,Itemimage,Itemcolor,Itemdamage){
    this.Itemname=Itemname;
    this.Itemimage=Itemimage;
    this.Itemcolor= Itemcolor;
    this.Itemdamage=Itemdamage;
}

const Blueshell = new items('Blue Shell','D','blue',50);
const RedShell = new items('Red Shell','D','blue',60);
const banana = new items('banana','J','yellow',10);


console.log(banana);


const toad = {
    image:'toad.png',
    weigth:10,
    speed:100,
    item:{
        image:'D',
        damage:40
    },
    points:100,
    die:function(){
        return 'Toad is dead ... \n G A M E  O V E R';
    }
}

const yoshi = {
    image:'0',
    weigth:20,
    speed:80,
    item:{
        image:'*',
        damage:50
    },
    points:100
}

let yoshiAttackPoints = yoshi.item.damage;
let toadAttackPoints = toad.item.damage;

function yoshiAttacks() {
    toad.points = toad.points-yoshiAttackPoints;
    console.log('Toad is attacked .... points: '+toad.points);
    if(toad.points<=0)
    {
        document.getElementById('message').innerHTML=`${toad.die()} <img src="${toad.image}" alt="toad" width=10%>`
        console.log(toad.die());
    }
}    


yoshiAttacks();
yoshiAttacks();
