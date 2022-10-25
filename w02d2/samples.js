// const doThingFiveTimes = function(thing){
//   for (let ii = 0; ii < 5; ii++){
//     thing();
//   }
// };

// doThingFiveTimes( () => {
//   console.log('Monkey Fuzz!');
// } );

// const sayHello = () => {
//   console.log('Hello!');
// };

// // // doThingFiveTimes(sayHello);

// setTimeout( sayHello, 5000 );

// fs.read('filename.txt', 'utf8', (data) => { console.log(''); });


const intervalReference = setInterval( () => {
  console.log('.');
}, 2);

setTimeout( () => {
  clearInterval(intervalReference);
}, 30 );

console.log('main thread is finishing');
