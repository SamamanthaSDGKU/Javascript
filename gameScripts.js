class Characters{
    constructor(image,name,points){
        this.image=image;
        this.name=name;
        this.points=points;
    }
    
}

class items{
    constructor(name,pointI,type){
        this.name=name;
        this.pointI=pointI;
        this.type=type;
    }
}

const item1=new items('blue shell',60,'damage');
const item2=new items('red shell',70,'damage');
const item3=new items('Green Mushroom',50,'defense');
const item4=new items('Flower',30,'defense');
const item5=new items('Star',80,'defense');

const itemsArray=[item1,item2,item3,item4,item5];

function printCharacter(imageP,nameP,pointsP){
    document.getElementById('character').innerHTML=`<img src="${imageP}" width="100" alt="toad"> <br> <h3> ${nameP}</h3><h3> Points = ${pointsP}</h3>`;
}
let startPoints=100;
const mario=new Characters('mario.jpg','Mario',startPoints);
const toad=new Characters('toad.png','Toad',100);
const yoshi=new Characters('yoshi.png','Yoshi',100);
let selection;


    selection=prompt("Select a character:");




switch (selection) {
    case 'M':        
        printCharacter('mario.jpg','Mario',100);
        break;
    case 'T':        
        printCharacter('toad.png','Toad',100);
        break;
    case 'Y':        
        printCharacter('yoshi.png','Yoshi',100);
        break;
    default:
        alert('Please, select a valid option');
        break;
}

for(let i=0;i<3;i++)
{
    let itemSelection=prompt("Select a number between 0-4:");

    if(itemsArray[itemSelection].type==='defense'){
            let updatePoints=mario.points+itemsArray[itemSelection].pointI;
            mario.points=updatePoints;
            printCharacter('mario.jpg','Mario',updatePoints);
    }
    else{
        let updatePoints=mario.points-itemsArray[itemSelection].pointI;
            mario.points=updatePoints;
            printCharacter('mario.jpg','Mario',updatePoints);

    }

}

if(mario.points>100){
    document.getElementById('character').innerHTML=`<h2> G A M E     O V E R </h2> <h3> Mario Won!! </h3>`
}
else{
    document.getElementById('character').innerHTML=`<h2> G A M E     O V E R </h2> <h3> Mario Lost!! </h3>`
}


//console.log();