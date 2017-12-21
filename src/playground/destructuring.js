
//Object Destructuring
// const book = {

//     title: 'hahahaaha',
//     author : 'AP PP',
//     publisher: {
//         name : 'TTUHSC',
//        location : 'LBB'
//     }
// };

// const {title , author } = book;
// const {name , location : loc = 'Dallas'} = book.publisher;


// console.log(` ${author} wrote  ${title} and is published by ${name} from ${loc} `);


//array destructuring 

const item = ['coffee (hot)' , '2' , '3' , '5'];

const [name , , cost] = item;

console.log(` a medium ${name} costs ${cost}`);

