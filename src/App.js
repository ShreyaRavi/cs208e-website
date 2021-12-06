import React, {Component} from 'react';
import './App.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Sidebar} from 'primereact/sidebar';
import {Menu} from 'primereact/menu';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import { useState, useEffect } from 'react';


import Home from './Home';
import Milestones from './Milestones'
import Discussion from './Discussion';


class App extends Component{

    constructor() {
        super();
        this.state = {
            items:[
                {
                    label:'Home',
                    icon:'pi pi-home',
                    command: () => {window.location = "#/"}
                },
                {
                    label:'Milestones',
                    icon:'pi pi-share-alt',
                    command: () => {window.location = "#/milestones"}
                },
                {
                    label:'Discussion',
                    icon:'pi pi-comment',
                    command: () => {window.location = "#/discussion"}
                }

            ]
        };
        document.title = "History of Object-Oriented Programming";
    }

    render()
    {
        return (
            <Router>
                <div className="App" >
                    <Sidebar position="left" visible={true} showCloseIcon={false} dismissable={false} modal={false}
                             style={{padding:0, width:'175px'}}>
                        <Menu model={this.state.items}
                              style={{width: '100%', height:'100%', marginTop:'60px'}}/>
                    </Sidebar>
                    <Sidebar position="top" visible={true} showCloseIcon={false} dismissable={false} modal={false}
                             style={{height:'70px', backgroundColor:'#ECE4B7', textAlign:'center'}}>
                        <h2 style={{color:'black'}}>History of Object-Oriented Programming</h2>
                    </Sidebar>
                    <div style={{marginTop:"68px",marginLeft:"175px", padding:'15px'}}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/milestones" component={Milestones} />
                            <Route path="/discussion" component={Discussion} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
