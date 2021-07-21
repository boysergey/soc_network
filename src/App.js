import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import {Route} from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Groups from './components/Groups/Groups';
import News from './components/News/News';
import Music from './components/Music/Music'
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (store) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='section'>
                <Navbar/>

                <div className="app-wrapper_content">
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/content"
                           render={() => <Content/>}/>
                    <Route path="/friends"
                           render={() => <Friends dialogsData={store.dialogsReduser.dialogsData}/>}/>
                    <Route path="/groups" render={() => <Groups/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                </div>
            </div>
            <Footer/>
        </div>


    );

}
export default App;