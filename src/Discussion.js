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
                    analysis and design, which lowers the overall cost of development. <\p>

                <p> The outcome of all of this being higher-quality software, with faster development and lower cost allows allowing more time to be spent on testing.<\p>
            </div>
        );
    }
}

export default Discussion;
