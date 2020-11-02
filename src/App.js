import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route} from 'react-router-dom';
//import StoreContext from './StoreContext';
import UsersContainer from './components/Users/UsersContainer'
const App = (props) =>{

  return(
    <BrowserRouter>
        <div className="App">
          <Header/>
          <div className='wrapper'>
            <div className='container  flex__between'>
              <Sidebar/>
              <main>
                <Route exact  path="/" render={() =><DialogsContainer store={props.store} />} />
                <Route  path="/profile/:userId?"  render={() =><ProfileContainer/>}/>
                <Route exact path="/users"  render={() =><UsersContainer />}/>
              </main> 
            </div>
          </div>  
          <Footer/>
        </div>
    </BrowserRouter>

  )
}

export default App;
