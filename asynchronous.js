//Asynchronous JS
//Node js ???

//Node.js run time environment includes everything you need to execute a program written in javascript

// Node js is run time environment for executing javascript outside the browser

//Ryan Dahl is the inverter of node js

//A browser converts JS code to low level machine code, this is done through an Engine

/**
 * Node server is single threaded and works differently from multi threaded server
Which means all of our users use the same central process to keep the flow smart so we need to  make sure nothing in our code causes a delay blocking another operation

Node adopts an event driven architecture to handle non blocking I/O
The application doesn’t wait for it to finish, instead the process signals it finish by emoiting an event, this event gets added to a queue or an event loop
When the event is pulled from the event loop an process the dependent functionality is invoked
With any event related data passed to it

 */