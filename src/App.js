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

const App=(props)=> {
    const [state,] = React.useState(props.store.getState())
    return (
        <BrowserRouter> {
            <div className="app-wrapper">
                <Header/>
                <div className='section'>
                    <Navbar/>

                    <div className="app-wrapper_content">
                        <Route path="/dialogs" render={() => <Dialogs dialogsData={state.dialogsReduser.dialogsData} store={props.store}
                                                                      messagesData={state.dialogsReduser.messagesData}/>}/>
                        <Route path="/content"
                               render={() => <Content
                                   postsData={state.profileReduser.postsData}
                                   dispatch={props.dispatch}
                                   newPostText={state.profileReduser.newPostText}
                               />}/>
                        <Route path="/friends" render={() => <Friends dialogsData={state.dialogsReduser.dialogsData}/>}/>
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