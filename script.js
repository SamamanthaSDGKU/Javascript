// shopping cart Lab 2
//add taxes, calculate the total for all the products
// create the menu with a loop for

let snacks = ['salt and vinegar chips', 'pistachios', 'Pepsi','Coke','Dr. Pepper'];

let prices = [0.99,4.99,1.50,1.50,1.50];


// alert menu 
let menu='';
for(let i=0; i<snacks.length; i++){
    menu=menu+(i+1)+'. '+snacks[i]+'-->'+prices[i]+'\n';
}

alert(menu);

let selection=prompt("Select a product: ");
let number=prompt("Number of products: ");
let count,total,t;

switch(selection){
    case '1':
        count=0;
        t=pay();
        alert('You selected a: '+snacks[0] + '--> $'+prices[0] +'\n Total: ' + t.toFixed(2));
        break;
    case '2':
        alert('You selected a: '+snacks[1] + '--> $'+prices[1]);
        count=1;
        break;
    case '3':
        alert('You selected a: '+snacks[2] + '--> $'+prices[2]);
        count=2;
        break;
    case '4':
        alert('You selected a: '+snacks[3] + '--> $'+prices[3]);
        count=3;
        break;
    case '5':
        alert('You selected a: '+snacks[4] + '--> $'+prices[4]);
        count=4;
        break;
    default:
        alert('Please, select a valid option');
        break;
}

function pay(){    
    total=prices[count]*number;
    return total;
}
