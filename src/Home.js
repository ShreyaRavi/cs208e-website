import React, {Component} from 'react';

class Home extends Component{

    render()
    {

        return (
        	<div style={{display: "flex"}}>

            <div style={{width: "70%"}}>
               <h2> Introduction </h2>
               <p>The term object-oriented programming was first coined by Alan Kay in the mid 1960s. The goal was 
                   to move away from programs that separated itself into data structures and procedures and instead 
                   write programs that were far more scalable by each part of the program having the capabilities of a whole
                   computer. This came from the idea of cells in biology: each cell is a living unit, but many cells together
                   compose larger, more complex living beings. Similarly, programs can be broken down into basic units (objects)
                   that contain data and functions that perform actions on that data, and complex programs can be made up of 
                   many objects working together. As Alan Kay puts it, the object is a recursion on the entire possibilities of the computer.
                   </p>

                <p>
                   Since the 1960s, object-oriented programming has evolved in many ways and has come to 
                   shape languages like Javascript, Python, and Java among many others. 
                   By understanding the history of this programming paradigm, what incited it, and 
                   important milestones along the way, we can better understand why object-oriented 
                   programming constructs exist in the way they do, the problems they attempt to 
                   solve, and whether they have been successful in doing so. </p>
            	
            	<h2> Basic Concept </h2>

            	<p>
            	At the birth of the object-oriented programming, there were 3 main concepts that distinguished this new
            	programming paradigm from procedural code.
            	<ul style={{fontWeight:"bold"}}>
				  <li>Message Passing</li>
				  <li>Encapsulation</li>
				  <li>Dynamic Binding</li>
				</ul>
            	</p>

            	<p>
            	<scan style={{fontWeight: "bold"}}> Message passing </scan> is a way of invoking behavior in a program.
            	In object oriented programming, the fundamental mechanism of program execution is objects sending 
            	each other messages. Let's look at how this contrasts from procedural programs.
            	</p>

            	<p>
            	In a traditional program, we invoke behavior by doing the following sequence of steps.

            	<ol>
	            	<li>Call function</li>
	            	<li>Program jumps to that part of the code</li>
	            	<li>Execute function</li>
	            	<li>Return to instruction after function call</li>
            	</ol>

            	</p>

            	<p>
            	In an object oriented program, object A sends a message to object B to invoke some behavior. Object A does
            	not have any control as to how object B handles the message, and it is objectt B's responsibility to 
            	select and execute the procuedural code in response to the incoming message (in most modern cases, a method call).
            	Typically, objects handle this by looking up the method at runtime in a table associated with the object.
            	</p>

            	<p>
            	<scan style={{fontWeight: "bold"}}> Encapsulation </scan> involves locally storing state and hiding it from other
            	objects. Each object is responsible for its own state / data. Concretely, Object B should not be able to 
            	manipulate a Object A’s state.

            	A result of this design principle is that object-oriented programming languages bundle data with the methods 
            	that operate on that data. Altogether, this means hiding implementation details from the clients that 
            	are “sending a message” to the object.
            	</p>

            	<p>
            	<scan style={{fontWeight: "bold"}}> Dynamic binding </scan> (also called extreme late-binding) means 
            	that the procedure that is run upon receiving a message is decided at runtime. The binding of the 
            	sender’s message to the procedure executed by the receiver is done at the very last moment.

            	</p>

            	<p>
            	We see that dynamic binding and message passing are tied because 
            	dynamic binding is only possible if there is an understanding between the sender and receiver 
            	that messages will be handled correctly. The sender does not need to know how the message is 
            	handled. Thus, the receiver can wait until the very last moment to bind the producer executed 
            	to the message -- the last moment here is during runtime when the message is actually incoming.
            	</p>

            	<p> Let's observe these ideas in code. </p>
            	<div style={{display: "flex", flexDirection: "row", justifyContent:"space-around"}}>
            	<div style={{width: "45%"}}>
            		<div style={{display:"flex", justifyContent:"center", marginBottom: "10px"}}>
            		<span style={{fontWeight: "bold"}}>C Code</span>
            		</div>
            		<img  style={{width: "100%"}}src="c_basic.png" />
            	</div>
            	<div style={{width: "45%"}}>
            	<div style={{display:"flex", justifyContent:"center", marginBottom: "10px"}}>
            		<span style={{fontWeight: "bold"}}>Java Code</span>
            		</div>
            		<img style={{width: "100%"}} src="java_with_interface.png" />
            		</div>

            	</div>

            	<p>
            	We observe the following differences:

            	<ul>
            		<li><span style={{fontWeight: "bold"}}>Objects. </span> The class Item here contains a blueprint for the object. 
            		Each object (apple and banana) has both the data (price and discount) and 
            		the procedures (the applyDiscount function).</li>

            		<li><span style={{fontWeight: "bold"}}>Encapsulation. </span> The data and the procedures that modify that data are 
            		bundled together. Operations on the banana object cannot change the state 
            		of the apple object as they are decoupled, whereas in the C code the data 
            		is accessible to any part of the code. </li>

            		<li><span style={{fontWeight: "bold"}}>Message passing </span>exists in the sense that both the apple and banana objects 
            		call the applyDiscount function. Here the message is in the form of the name of 
            		the function, and they call the same function as they are both exactly the same 
            		object. However, this gets decided at runtime based on the apple object (rather 
            		than the main object we are currently inside of). The key that makes this 
            		message passing and thus decouples the sender and receiver of the message is that 
            		the main object is the one that sent the message to invoke the function is irrelevant.</li>

            		<li><span style={{fontWeight: "bold"}}>Dynamic binding </span> here refers to the fact that which applyDiscount is called is 
            		determined at runtime. The compiler doesn’t compile the two calls to applyDiscount 
            		to jump to different parts of the code that are the instructions for the different 
            		functions. Rather, the compiler creates these different objects which have functions 
            		in them that point to different parts of the code that correspond to the different 
            		implementations. At runtime, the computer jumps to the object, then jumps to the function 
            		pointer stored in this object (this is a form of message passing), then executes the code 
            		that the function pointer points to.</li>

            	</ul>

            	</p>

            </div>
            <div style={{display:"flex", flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
            	<div style={{width: "25%"}}/>
            	<img style={{width: "50%"}} src="https://www.onthisday.com/images/people/alan-kay-medium.jpg" />
           		<div style={{width: "25%"}}/>
            </div>
            <div style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
            	<div style={{width: "25%"}}/>
            	<div style={{textAlign: "center"}}>Alan Kay </div>
           		<div style={{width: "25%"}}/>
            </div>
            </div>
            </div>

        );
    }
}

export default Home;