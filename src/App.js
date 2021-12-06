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
import About from './About';
import Logout from './Logout';
import Definition from './Definition';
import Milestones from './Milestones'


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
                    label:'About',
                    icon:'pi pi-info',
                    className: "p-menuitem-active",
                    command: () => {window.location = "#/about"}
                },
                {
                    label:'Logout',
                    icon:'pi pi-power-off',
                    command: () => {window.location = "#/logout"}
                },
                {
                    label:'Definition',
                    icon:'pi pi-power-off',
                    command: () => {window.location = "#/definition"}
                },
                {
                    label:'Milestones',
                    icon:'pi pi-info',
                    command: () => {window.location = "#/milestones"}
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
                            <Route path="/about" component={About} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/definition" component={Definition} />
                            <Route path="/milestones" component={Milestones} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
