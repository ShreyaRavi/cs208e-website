import React, {Component} from 'react';

class Milestones extends Component{

    render()
    {

        return (
            <div>
                <h1>Key programming language milestones in the development of OOP </h1>
                <h2>Sketchpad </h2>
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

                <h2>Simula </h2>
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

                <h2>Smalltalk </h2>
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


            </div>
        );
    }
}

export default Milestones;
