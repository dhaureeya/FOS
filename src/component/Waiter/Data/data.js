import coffee1 from '../../pics/capucino.jpg';
import coffee2 from '../../pics/chocolate.jpg';
import coffee3 from '../../pics/lattee.jpg';
import coffee7 from '../../pics/americano.jpg'
import coffee4 from '../../pics/icemocha.jpg';
import coffee5 from '../../pics/frape.jpg';
import coffee6 from '../../pics/frapuccino.jpg';
import coffee8 from '../../pics/machaito.jpg';
import bake1 from '../../pics/cookies.jpg';
import bake2 from '../../pics/crossiant.jpg';
import bake3 from '../../pics/muffins.jpg';
import bake4 from '../../pics/14472.jpg';


const data = {
    menuItems:[
        {
            id:"1",
            name:"Capuccino",
            price:200,
            image:coffee1 
        },
        {
            id:"2",
            name:"Hot chocolate ",
            price:300,
            image:coffee2
        },
        {
            id:"3",
            name:"Latte",
            price:250,
            image:coffee3
        },

        {
        id:"4",
        name:"Americano",
        price:100,
        image:coffee7
        }
    

    ],
    coldCoffee:[
        {
            id:"4",
            name:"Ice Mocha",
            price:200,
            image:coffee4 
        },
        {
            id:"5",
            name:"Frape",
            price:250,
            image:coffee5
        },
        {
            id:"6",
            name:"Frapuccino",
            price:100,
            image:coffee6
        },
        {
            id:"7",
            name:"Machaito",
            price:300,
            image:coffee8
        }
    ],
    bakery:[
    {
        id:"7",
        name:"Cookies",
        price:200,
        image:bake1
    },
    {
        id:"8",
        name:"Croissant",
        price:250,
        image:bake2
    },
    {
        id:"9",
        name:"Muffins",
        price:100,
        image:bake3
    },
    {
        id:"10",
        name:"Pancake",
        price:50,
        image:bake4
    },
]
}
export default data;