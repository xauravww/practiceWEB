
Search
Write
Sign up

Sign in




Photo by Zachary Keimig on Unsplash
Understanding “this” in JavaScript — The Complete Guide
Jainishshah
CodeX
Jainishshah

·
Follow

Published in
CodeX

·
7 min read
·
Apr 2, 2021
304


1



Namaste Devs, I am sure you have confused yourself with “this” in JS while learning and even in interviews. Someday sitting in front of your system reading this piece you’ll have a eureka moment. I’ll try to explain both the traditional way “this” works and the newer implementation in ES6 (arrow functions). So sit tight.

Simply speaking “this” is the reference to the object that contains the current function. As simple as that, but what is the current object, and how it changes dynamically while your code runs is a little confusing.

The value of this will depend on where the function is called on run-time which you’ll call the “call-site” in technical terms. There are multiple ways to call a function, I’ll show 2 of them here for sake of simplicity

function doSomething(a){
   console.log(a);
}
var obj = {
 key: "value",
 doSomething: function(){ console.log(" namaste"); }
}
// you can call the function doSomething like this
doSomething("jainish"); // jainish
obj.doSomething(); // namaste
Well, this you already know, so what point do you think I want to make from this? Just look at how we have called the functions. Is there something different about them? If there is, how important is the difference?

The answer to this is “execution context”. But WTF is context and how is it useful. To explain this let me drill down on how JS works behind the hood.

Let’s understand what happens when a simple JS program is executed.

The global execution context is created and pushed on the execution stack.
The engine then executes the code.
If a function call is encountered, the engine will first compile the code during which a new execution context is created and pushed on the execution stack and finally the code is executed
Once execution is complete the fn execution context is popped out
“Execution Context” is an abstract concept in JS. It’s an object that holds certain information that the function will require to execute. This information contains multiple properties. To name a few.

Activation/Variable object => stores information about the arguments passed to the function, variables and functions declared in that function.
Creations of Scope Chain. (you can read more about it here)
Value of this.
Global execution context is similar to function context, except it's loaded in the stack by default.

This doesn’t exactly answer the difference between the 2 doSomething function mentioned above but it shows that “this” is dynamic in nature and changes according to the call site (value of this is based on what context is on the top of the execution context stack).

There are 4 simple rules that describe how “this” works

Default binding
Implicit binding
Explicit binding
“new” operator
Of course, there are certain exceptions we’ll talk about (Note: Arrow functions of ES6 use some different mechanism, understanding these rules first will help you understand how Arrow functions work)

function doSomething(){
  console.log(this.a);
}
var a = 6;
doSomething(); //6
You can see that we have declared the function in the global space (not is a function). When we execute this function it prints 6. But why?

Answer: We talked about the execution stack, by default the global execution context is on top of the stack. When we call something, its execution context will be pushed and will be on top of the stack. Since this function belongs to the global object the value of this will be the global object (global in Node.js and window in browser env). The global object has the property “a” and thus the output will be 6. This is an example of “default binding”

function doSomething(){
  console.log(this.a);
}
var a = 6;
var obj = {
  a : 12,
  doSomething: doSomething
};
obj.doSomething(); //12
What changed here ? In this case, we called doSomething with prefix (“obj.”). Calling the function in this way will set the value of “this” in the function’s execution context as “obj” (a reference to the object obj). obj has property “a” and so the value printed will be 12. Prefixing the function call with an object reference is an example of “implicit binding”. You are implicitly calling a function of an object.

var a = 6;
var obj = {
  a : 12,
  doSomething: function() { console.log(this.a) }
};
var foo = obj.doSomething;
foo(); //6
Damn!!! We just learned that calling a function with obj reference will print 12, but wtf did it print 6. Here comes an important concept. A function definition is stored in the heap and when you are assigning “foo” with obj’s doSomething you are actually passing the reference of that function in memory. There is no interlinking between the object reference and function on where it’s declared, but it depends on where the function is called. Taking the execution context into the picture. Global Execution context is on top of the stack. You call the function foo which is a property of the global context and so while executing foo the value of this will be set to the global context. So the answer 6.

I hope till now you are able to understand the “object” that we are taking into the picture. If not please re-read up to this point again.

Implicit and default binding is a way that the “JS engine makes decisions on the value of this”. But what if you as a developer you want to set this value. In what scenarios will you want to specify this value? What mechanism is provided in the language for this?

Let’s take an example.

var input = 1;
function square() { 
 let cbFn = function(){ console.log(this.input*this.input) };
 setTimeout( cbFn , 1000);
};
var obj = {
 input : 3,
 square: square
};
obj.square(); // 1
I am pretty sure you would have guessed that the answer will be 9 but why did it print 1 !! This time we even called function with the reference to the object. Boy, I am tired….. OK just bear with me for a min. It's simple… The answer is the execution context stack.

When you called the function obj.square(), the square function was pushed on the execution context stack with the “this” pointing to “obj”. If instead of setTimeout you would have printed the squaring logic it would have print “9”. But what went wrong. See when you did setTimeout the engine kept it aside for executing at some time later. Doing this the square function execution was over so this lead to poping its execution context out of the stack. When the setTimeout resolved it was pushed to the stack with the global object at the top of the stack. As you can see now that his function will be called as a part of the global object and so it will pick the input value “1” and print “1”.

How will you fix it? This is where you should have some mechanism where you can explicitly set the value of this in the function in setTimeout to be obj. Another example is “event handlers”. When you add a call back on the event handlers you have to make sure that the value of “this” will be a reference to that DOM element only.

call, bind, apply
These three functions help to explicitly set the value of “this” to the object we want.

Call and Apply immediately call the function with given “context” and arguments. While bind returns a function with the context(this) set that can’t be changed.

function foo() { 
  console.log(this.key);
}
var objA = { key : "A" };
var objB = { key : "B" };
foo.call(objA) // A
foo.call(objB) // B
// Apply works the same way , there is a small difference between  // call and apply on format of arguments passed to it
var bindedFoo = foo.bind(objA);
bindedFoo(); // A;
var doubleBindedFoo = bindedFoo.bind(objB);
doubleBindedFoo() // A (Once binded the value of this can't be changed)
The above example shows a basic structure how dynamic binding works. Let’s take the setTimeout example again and modify it to solve the issue

function doSomething(){
 let cbFn = function () { console.log(this.input*this.input )};
 let bindedcbFn = cbFn.bind(this);
 setTimeout( bindedcbFn , 1000 );
}
var obj = { 
     input : 3, 
     doSomething: doSomething 
};
obj.doSomething(); // 9
// One great example can be of debounce method ("primarily used in // search, suggestion => while the user is typing don't make API    // calls , instead delay the execution till user finishes typing")
function debounce(fn,timeout) {
 let timer;
 
 return  function (...args) { 
     let context = this;
     clearTimeout(timer);
     setTimeout(  function() { fn.apply(context,args) } , timeout );
    };
}
So these are the ways to explicitly bind “this” . You might have used constructor functions. But do JS really have classes and does constructors make sense?? Turns out construction fn is just a regular function . Using “new” keyword in front of any function makes it a constructor fn. But what does the “new” keyword does.

In case a construction function don’t return an object the “new” keyword will create a brand new object and return it. But where does “this” comes into picture ? It turns out when you call a function with “new” keyword . JS creates a new object in background and passes reference of newly created object to the function , thus making this new object “this” .

function Name(fname, lName) {  
   this.fname = fname; 
   this.lName = lName;  
}
var newObj = new Name("jainish", "shah");
console.log( newObj.fname + "  " + newObj.lname); // "jainish shah"
Finally…. We have covered all 4 rules here. But what if more than one rule occurs at the same time we need some precedence rule

new binding
explicit binding
implicit binding
default binding
function foo() {
  console.log(this.name || "name not defined");
}
var obj = { name: 'jainish' };
var bindedFoo = foo.bind(obj);
bindedFoo() // jainish
var newFoo = new bindedFoo(); // name not defined
You can clearly see that even though bindedFoo fn had “this” set to obj it was overridden by “new” keyword. This contradicts statement above that “once binded “this” of fn can’t change value” , that is not completely true. It is highly dependant on the implementation of “bind” method. (Checkout the mdn docs for polyfill)

This brings us to the end of the article. I know it is pretty long , but hey size matter 😂😂. I will cover “Arrow functions” in next piece. I hope you learned something new and Sio Nara untill next one.

For further queries , reach out to me @ jainishshah12@gmail.com

This In Javascript
Javascript Fundamental
Execution Context
Js Engine
Javascript Tips
304


1


CodeX
Published in CodeX
24K Followers
·
Last published 1 day ago
Everything connected with Tech & Code. Follow to join our 1M+ monthly readers

Follow
Jainishshah
Written by Jainishshah
30 Followers
·
19 Following
JavaScript Dev

Follow

Responses (1)
What are your thoughts?

Cancel
Respond
Respond

Also publish to my profile

Rashida Nasrin Sucky
Rashida Nasrin Sucky

over 3 years ago


In simple terms

Hello, this is Rashida here. I'm an editor at CodeX (https://medium.com/codex). If you’re interested in submitting this article to CodeX, kindly let me know. Also, loved your article. Thank you very much!
Reply

More from Jainishshah and CodeX
Content Security Policy — What You Need to Know?
The Startup
In

The Startup

by

Jainishshah

Content Security Policy — What You Need to Know?
Aloha developers, this is Jainish, SDE-1 @ Innovaccer Analytics. To give you a brief I am a JavaScript Dev working on creating resilient…
Dec 8, 2020
264
Why Is Lombok Still in Every Java Developer Toolkit?
CodeX
In

CodeX

by

Milos Zivkovic

Why Is Lombok Still in Every Java Developer Toolkit?
Why Lombok still holds its respected place amongst experienced Java developers

Aug 26, 2023
380
9
I spent 2 years rebuilding my algorithmic trading platform in Rust. I have no regrets.
CodeX
In

CodeX

by

Austin Starks

I spent 2 years rebuilding my algorithmic trading platform in Rust. I have no regrets.

Dec 5
327
7
Understanding Client Side Routing — what made Single Page Applications possible
Jainishshah
Jainishshah

Understanding Client Side Routing — what made Single Page Applications possible
Today you have every service you can possibly think about on the internet from booking tickets , banking , trading to even…
Jul 30, 2022
100
See all from Jainishshah
See all from CodeX
Recommended from Medium
Can You Answer This Senior Level JavaScript Promise Interview Question?
Programming Domain
In

Programming Domain

by

Shuai Li

Can You Answer This Senior Level JavaScript Promise Interview Question?
Most interviewees failed on it.

Aug 12
3.7K
48
Top 30 JavaScript Interview Questions and Answers for 2025
Ravi Sharma
Ravi Sharma

Top 30 JavaScript Interview Questions and Answers for 2025
Prepare for your next JavaScript interview with confidence!

Jan 1
1.95K
22
Lists
Collaged image with text “It happened on Medium” and various abstract and photographic elements.
An illustration showing pens, notebooks, keyboards, and book, with the headline “The best gifts for writers, according to the Medium community”

Staff picks
791 stories
·
1529 saves



Stories to Help You Level-Up at Work
19 stories
·
900 saves



Self-Improvement 101
20 stories
·
3166 saves



Productivity 101
20 stories
·
2679 saves
How I Tricked My Brain to Be Addicted to Coding
AlgoMaster.io
In

AlgoMaster.io

by

Ashish Pratap Singh

How I Tricked My Brain to Be Addicted to Coding
The Dopamine Hack

Nov 15
4K
93
Js concepts image
Mahmudur Rahman
Mahmudur Rahman

Understanding JavaScript Constructors: Function vs. Class
In the world of JavaScript, creating and initializing objects is a fundamental task. Two primary ways to achieve this are through…
Jul 11
118
5
Say Goodbye to Try/Catch with This New ECMAScript Operator! 🚀
JavaScript in Plain English
In

JavaScript in Plain English

by

Selcuk Ozdemir

Say Goodbye to Try/Catch with This New ECMAScript Operator! 🚀
Introducing the ?= Operator: JavaScript’s New Error Handling Hero

Sep 3
2.5K
47
Understanding JavaScript Generators with Practical Examples
Dzmitry Ihnatovich
Dzmitry Ihnatovich

Understanding JavaScript Generators with Practical Examples
JavaScript generators are powerful functions that allow us to pause and resume function execution, offering an alternative to traditional…
Oct 31
See more recommendations
Help

Status

About

Careers

Press

Blog

Privacy

Terms

Text to speech

Teams