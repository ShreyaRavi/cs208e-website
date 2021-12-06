import React, {Component} from 'react';

class Discussion extends Component{

    render()
    {

        return (
            <div>
                <h1> Discourse surrounding Object Oriented Progamming </h1>
            
                <h2>Advantages </h2>
            
                <p> Object oriented programming has several high level advantages that can make the development process significantly more efficient. 
                    As object-oriented programming is modular, as it provides separation of duties in object-based program development. 
                    Objects can also be reused within an across applications - object-oriented programming languages come with rich libraries of objects, 
                    and code developed during projects is also reusable in future projects. Because of its modularity and reusability object-oriented programming 
                    provides improved software-development productivity (and as a result faster development) over traditional procedure-based programming techniques. </p>

                <p> It is also easier to maintain since the design is modular, part of the system can be updated in case of issues without a need to make large-scale changes. 
                    The reuse of software has the additional benefit of lowering the cost of development. Typically, more effort is put into the object-oriented 
                    analysis and design, which lowers the overall cost of development. </p>

                <p> The outcome of all of this being higher-quality software, with faster development and lower cost allows allowing more time to be spent on testing.</p>
                
                <h2>Shortcomings </h2>
                <a href = "https://realpython.com/python3-object-oriented-programming/" > 
                <img src = "https://files.realpython.com/media/Object-Oriented-Programming-OOP-in-Python-3_Watermarked.0d29780806d5.jpg" alt="Shortcomings" width="350"/>
                </a>
        
                <p> OOP of course has several shortcomings. While it can save typing, shorten the code, reduce copy and pasting, improve readability, etc., OOP can also bloat up code, 
                    overly complicate code, cause more errors (dangling objects), and cause unnecessary line noise (free/create/new/destroy, etc). Consequently, 
                    object-oriented programs typically involve more lines of code than procedural programs. Object-oriented programs are also typically slower than procedure based programs, 
                    as they typically require more instructions to be executed. </p>
                
                <p> There is also a difficulty in modelling human thought processes which are often abstract as opposed to the hard objects that we must analogize them to. </p>
                
                <p> OOP has a steep learning curve, and the thought process involved in object-oriented programming may not be intuitive to most people; it is complex to create 
                    programs based on interaction of objects. Some of the key programming techniques, such as inheritance and polymorphism, can be challenging to comprehend initially. </p> 
                
                <p> Above all, it is important to remember that there are problems that lend themselves well to functional-programming style, logic-programming style, or 
                    procedure-based programming style, and applying object-oriented programming in all those situations will not always result in efficient programs. </p>     
                                                                                                                    
                <h2> Opposing Perspectives </h2>       
                <a href = "https://medium.com/machine-words/the-rise-and-fall-of-object-oriented-programming-d67078f970e2" > 
                <img src = "https://miro.medium.com/max/1080/1*6rqSrrz_Q5m80KZM9XbqRg.jpeg" alt="Perspectives" width="350"/>
                </a>
                                                                                                                    
                <p> Several software engineers and developers have argued that OOP does not live up to its hype. Joe Armstrong of Erlang once famously said “I think the lack of reusability 
                    comes in object-oriented languages... You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.”
                    However, the rebuttal often is that “most developers who hate on OOP don’t know how to use it in the first place”. </p>  
                                                                                                                    
                <p> A reasonable conclusion seems to be that object oriented programming is by no means a silver bullet and mustn’t be treated as such. Recognizing the shortcomings 
                    of such a powerful tool and applying it only where applicable will no doubt serve to make some development processes more efficient while not unnecessarily bogging down others. 
                    At the end of the day there are in fact several programming paradigms, of which object oriented programming is but one; the end goal is universal: to write programs 
                    as effectively as possible to solve real world problems. </p>                                                                                                    
            </div>
        );
    }
}

export default Discussion;
