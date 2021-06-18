import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Groups from './components/Groups/Groups';
import News from './components/News/News';
import Music from './components/Music/Music'

function App(props) {
    return (
        <BrowserRouter> {
            <div className="app-wrapper">
                <Header/>
                <div className='section'>
                    <Navbar dialogsData={props.state.dialogsData}/>

                    <div className="app-wrapper_content">
                        <Route path="/dialogs" render={() => <Dialogs dialogsData={props.state.dialogsData}
                                                                      messagesData={props.state.messagesData}/>}/>
                        <Route path="/content"
                               render={() => <Content
                                   postsData={props.state.postsData}
                                   addPost ={props.addPost}/>}/>
                        <Route path="/friends" render={() => <Friends dialogsData={props.state.dialogsData}/>}/>
                        <Route path="/groups" render={() => <Groups/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        }</BrowserRouter>

    );
}

export default App;