console.log('starting');

setTimeout(() => {
    console.log('2 seconds timer');
}, 2000);

setTimeout(() => {
    console.log('0 seconds timer');
}, 0);

console.log('stopping');


//

// $ node asyncConcept.js
// starting
// stopping
// 0 seconds timer
// 2 seconds timer

// Concept --
// Call Stack -- executes the current.
// node --> registers the setTimeout C++ libarary threads inside.
// Callback Queue --> once the node timeout finishes the value is put in the Callback Queue.
// if the call stack is empty then callback Queue will be invoked.

//Internals of nodejs and v8.
// Call Stack, Node APIs, Event Loop and Callback Queue.