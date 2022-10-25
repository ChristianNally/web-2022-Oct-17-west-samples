//              ('Getting Up', 3000, walk)
function doAction(name, duration, next){
  console.log(`i am ${name}`);
  setTimeout( () => {
    console.log(`i am DONE ${name}`);
    if (next) {
      next();
    }
  }, duration);  // this will schedule a thing to happen on the Event Loop
}

//
// Look
//
const look = () => {
  doAction('Looking', 500, look);
};

//
// Get Up
//
const getUp = () => {
  doAction('Getting Up', 3000, walk);
};

//
// Walk
//
const walk = () => {
  doAction('Walking', 5000, openTheDoor);
};

//
// openTheDoor
//
const openTheDoor = () => {
  doAction('openingTheDoor', 2000, walkThroughTheDoor);
};

//
// walkThroughTheDoor
//
const walkThroughTheDoor = () => {
  doAction('walkingThroughTheDoor', 1000, null);
};

look();
getUp();

// the event loop cannot start until the main thread is finished
console.log('this is the end of the main thread');

