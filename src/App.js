import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
//import StoreContext from './StoreContext';
import UsersContainer from './components/Users/UsersContainer'
const App = (props) =>{

  return(
    <BrowserRouter>
        <div className="App">
          <HeaderContainer/>
          <div className='wrapper'>
            <div className='container  flex__between'>
              <Sidebar/>
              <main>
                <Route exact path="/messages" render={() =><DialogsContainer store={props.store} />} />
                <Route  path="/profile/:userId?"  render={() =><ProfileContainer/>}/>
                <Route exact path="/users"  render={() =><UsersContainer />}/>
                <Route  path="/login"  render={() =><Login />}/>
                <Route exact path='/404'  render={() =><NotFound />} />
                <Redirect to="/users" />
              </main> 
            </div>
          </div>  
          <Footer/>
        </div>
    </BrowserRouter>

  )
}

export default App;
