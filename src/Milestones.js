import React, {Component} from 'react';

class Milestones extends Component{

    render()
    {

        return (
            <div>
                <h1>Key programming language milestones in the development of OOP </h1>
                <h2>Sketchpad </h2>
                <a href = "https://bimaplus.org/news/the-very-beginning-of-the-digital-representation-ivan-sutherland-sketchpad/">
                <img src="https://bimaplus.org/wp-content/uploads/2018/12/ImageToNews_Sketchpad-01.png" alt="Sketchpad" width="300"/>
                </a>
                <p>On January 7th, 1963, Ivan Sutherland introduced Sketchpad in his MIT PhD thesis. Sketchpad
                was a programming language that allowed users to create and change graphical figures using a light pen.
                This was influential in multiple ways including enabling interactive computer graphics.</p>
                <p>However, most importantly in the context of OOP, the programming language used objects-like
                subdrawings in its application. That is, a programmer could create a "master drawing" and then this
                drawing could be reproduced and added as "instances" to other, different drawings. In this way, many
                different subdrawings could be drawn, could be drawn in terms of other subdrawings, and could be reproduced
                and used as many times as desired. </p>
                <p>Critically, if the master drawing was changed, the instances of this drawing would automatically update,
                reflecting the master. In addition, any of the subdrawings were encapsulated and handled any changes at their
                own level. This represented a key benefit for drafters, who could manipulate and design elements and then after
                doing so use them without worry on a higher level of abstraction. In this way, the language showed one of the
                first instances where there were object-like elements that could be dealt with independently and could control
                their own actions on an internal level. </p>
                <h3>Learn more:</h3>
                <a href = "https://link-springer-com.stanford.idm.oclc.org/article/10.1007/s13347-016-0223-5">
                Joque, J. The Invention of the Object: Object Orientation and the Philosophical Development of Programming Languages. Philos. Technol. 29, 335–356 (2016). </a>
                <p></p>
                <a href = "https://dspace.mit.edu/handle/1721.1/14979">
                Sutherland, Ivan E. "Sketchpad a man-machine graphical communication system." Simulation 2.5 (1964): R-3.</a>

                <h2>Simula </h2>
                <a href = "https://history-computer.com/simula-complete-history-of-simula-programming-language/">
                <img src="https://history-computer.com/ModernComputer/Software/images/Dahl_and_Nygaard.jpg" alt="Simula" width="300"/>
                </a>
                <p>Around the same time, in the 1960's, Ole-Johan Dahl and Kristen Nygaard developed Simula at the Norwegian
                Computing Center (NCC). Simula was actually released as two different languages as it went through multiple
                revisions. </p>
                <p>First, Simula I was mainly designed as a language to simulated systems and processes. It was in part
                conceptualized to mimic an airport departure system. Conceptually, Simula I imagined a series of stations
                that each handled a line of "customers". These customers were "passive data structures' with variables
                associated with them: for example, in an airport, things like seat assignments. Stations were active processes
                that interacted with these customers and variables and could assign them to different station's lines.</p>
                <p>This initial iteration Simula I was very process-oriented with its focus on these stations. In Simula 67,
                this process-oriented structure was altered to be more object-oriented with emphasis on classes, class inheritance,
                subclasses, and methods that were meant to be overridden by subclasses (called virtual methods). In this way,
                Simula has been called the first OOP.</p>

                <h3>Learn more:</h3>
                <a href = "https://link-springer-com.stanford.idm.oclc.org/article/10.1007/s13347-016-0223-5">
                Joque, J. The Invention of the Object: Object Orientation and the Philosophical Development of Programming Languages. Philos. Technol. 29, 335–356 (2016). </a>
                <p></p>
                <a href = "https://www.sciencedirect.com/science/article/pii/S0890540113000795">
                Black, Andrew P. (2013) Object-oriented programming: Some history, and challenges for the next fifty years. Information and Computation, Volume 231, pp. 3-20.</a>
                <p></p>
                <a href = "https://www-sciencedirect-com.stanford.idm.oclc.org/science/article/pii/0096055184900183?via%3Dihub">
                Papazoglou, M.P.,  P.I. Georgiadis, and D.G. Maritsas. An outline of the programming language SIMULA. Computer Languages, Volume 9, Issue 2, 1984. pp. 107-131.</a>
                <p></p>
                <a href = "https://dl.acm.org/doi/pdf/10.1145/365813.365819">
                Dahl, Ole-Johan, and Kristen Nygaard. "SIMULA: an ALGOL-based simulation language." Communications of the ACM 9.9 (1966): 671-678.</a>


                <h2>Smalltalk </h2>
                <a href = "https://en.wikipedia.org/wiki/Smalltalk">
                <img src="https://upload.wikimedia.org/wikipedia/en/c/c0/Smalltalk80book.jpg" alt="Smalltalk" width="200"/>
                </a>
                <p>Finally, in the late 1960's, Alan Kay, who we've seen originated many of the ideas surrounding the philosophy
                of object oriented programming, developed Smalltalk. Smalltalk, compared to Sketchpad and Simula, had a more
                intentional philosophy centered around object oriented programming. As it was developed by Alan Kay, Smalltalk
                followed the key concepts of OOP formalized by Kay mentioned previously, like message passing, encapsulation,
                and dynamic binding. </p>
                <p>Smalltalk was radically object-oriented in that everything was part of the same inheritance hierarchy all
                coming from the same common base class (ProtoObject). Any work got done by sending messages to these objects.
                Once again, the idea of encapsulation and objects allowed for abstraction and separation of internal
                implementations of objects. Further, unlike Simula 67, Smalltalk hid data from clients, essentially making
                class variables only visible within a class or subclass.</p>

                <h3>Learn more:</h3>
                <a href = "https://link-springer-com.stanford.idm.oclc.org/article/10.1007/s13347-016-0223-5">
                Joque, J. The Invention of the Object: Object Orientation and the Philosophical Development of Programming Languages. Philos. Technol. 29, 335–356 (2016). </a>
                <p></p>
                <a href = "https://searchworks.stanford.edu/articles/nlebk__1809101">
                Yeager, Dorian P. (2014) Object-Oriented Programming Languages and Event-Driven Programming. Dulles, Va : Mercury Learning &amp; Information..</a>
                <p></p>
                <a href = "http://gagne.homedns.org/~tgagne/contrib/EarlyHistoryST.html">
                Kay, Alan C. The Early History of Smalltalk </a>


                <h2>Modern Object-Oriented Programming Languages </h2>
                <p>Pure Object Oriented Programming Languages (where everything is presented as an object)</p>
                <ul>
                  <li>Ruby </li>
                  <li>Scala</li>
                </ul>
                <p>Object Oriented Programming Languages that have other functionalities</p>
                <ul>
                  <li>Java </li>
                  <li>Python</li>
                  <li>C++</li>
                </ul>
                <p></p>

                <p>All of these examples hold key functionalities including classes that support the creation of
                objects and class inheritance. In Ruby and Scala, everything appears as an object, while Java,
                for example, is not a pure OOP because it has primitive data types that don't function as objects.</p>

                <i><h4>"I invented the term Object-Oriented, and I can tell you I did not have C++ in mind." - Alan Kay</h4></i>


                <p>Over time, the term object-oriented programming has taken on the core meaning of including classes,
                inheritance, encapsulation, and abstraction, moving away from some of the meaning that Dr. Kay believes
                is at the root of OOP, saying "OOP to me means only messaging, local retention and protection and hiding
                of state-process, and extreme late-binding of all things." </p>


                <h3>Learn more:</h3>
                <a href = "https://www.youtube.com/watch?v=oKg1hTOQXoY">
                Alan Kay at OOPSLA 1997 - The computer revolution hasnt happened yet</a>
                <p></p>
                <a href = "https://searchapparchitecture.techtarget.com/definition/object-oriented-programming-OOP">
                Gillis, Alexander S. and Lewis, Sarah. Object-Oriented Programming (OOP)</a>
            </div>
        );
    }
}

export default Milestones;
