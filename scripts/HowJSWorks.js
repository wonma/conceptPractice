// 1. Exlain the code below with Call stack
// ------- 아래는 Stack으로 쌓일 것은 없음. 다른 명령어를 자식으로 품고있는 function이 없기 때문.
console.log(1);
console.log(2);
console.log(3);

// 2. Exlain the code below with Call Stack
// ------- 아래는 Stack으로 쌓임.
const one = () => {
  const two = () => {
    console.log(4);
  };
  two();
};
one();

// 3. Exlain the code below with Call Stack, Callback Queue, Event Loop
console.log('a');
setTimeout(() => {
  console.log('b');
}, 2000);
console.log('c');

// 4. Exlain the code below with Call Stack, Callback Queue, Event Loop
console.log('x');
document.addEventListener('click', () => {
  console.log('y');
});
console.log('z');

//

// Explain how JS works with the keywords below.

// 1. single-threaded threaded
// 2. can be non-blocking

// My answer:
// JS is a language that you can use to create a program.
// JS is a (1) single-threaded language that is (2) non-blocking.

// What is a program?
// A program has to do 2 simple tasks.
// It has to allocate memory.
// It also has to parse and execute scripts which means it read and run commands.

// (1) Single-threaded
// Chrome has V8 engine that reads JS scripts that we write.
// V8 engine changes the scripts we write into machine executable instructions for the browser.

// Now the engine consists of two parts, a 'memory heap' and a 'call stack'.
// Memory heap: where allocation happens.
// ------------ It's as simple as 'const a equals to one'. We've just allocated a memory.
// ------------ and now JS engine will remember that.
// ------------ and we just used a memory heap.
// ------ Memory leak:
// ------------ The engine has a limited amount of memory.
// ------------ If there is an unused memory just laying around, just filling up the memory heap,
// ------------ it'll cause memory leak.
// ------------ Global variables are bad since they fill up the memory.
// ------------ And it's easy to forget to clean up unused global variables.
// ------------ Eventually, it'll fill up the memory heap and the browser will not be ablt to work.

// And JS is single-threaded, which means only one statement is executed at a time since it has only one call stack.

// (2) Call stack
// where the code is read and executed. It tells you where you are in the program.
// It reads and executes our scripts.
// Each statement gets put in the call stack, executed, and removed from the call stack.
// The next statement gets placed into the call stack, ... etc.
// Since JS has one call stack only, and what's on the top of the call stack gets run first and then below that, below that, till the call stack is empty.

// Why JS designed to be single threaded?
// You don't have to deal with complicated scenarios.
// The latter, can't start before the first finishes, so this console log '2', doesn't start until console log finishes.
// If it's multi-threaded, you can have deadlocks.
//
// Recursion: a function that calls itself.
// Stack Overflow happens when the call stack gets bigger and bigger until it doesn't have enough space anymore.
// function foo() {
//      foo()
// };
// foo();

// Synchronous execution
// if we have one function that takes up a lot of time, it's going to hold up the line.
// It's predictable but it's 'blocking' the line, and it can get slow.
// Ideally, we don't want to wait around for things that take time.

// Asynchronous execution
// We can do asynchronous programming with JS!
// setTimeout is a function that comes within the browser and it allows us to create a timeout.
// Where is this asynchronous execution from? It's WebAPI which is part of JS run-time environment.

// JavaScript run-time environment consists of
// ------ JS engine,
// ------ Web API,
// ---------- Web APIs are what the browser gives us to use such as...
// ---------- DOM,
// ---------- AJAX(XMLHttpRequest)
// ---------- Timeout(setTimeout).
// ------ Callback queues: callback으로 event 일어나길 대기하고 있는 것들. onClick, onLoad,
// ------ Event Loop: keep checking the callstack. if the callstack is empty, it checks Callback queue, and if there's any function it puts it into the Call stack.

// When asynchronous execution happens?
// ---------- Talking to database with network API
// ---------- image processing
// ---------- reading files

// Conclusion
// It has one call stack and it does one thing at a time.
// In order to not block the single thread,
// it can be asynchronous with callback functions and
// these callback functions gets run in the background,
// through the callback queue and then the event loop,
// to bring it back to the call stack.
