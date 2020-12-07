import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route, Redirect, withRouter} from 'react-router-dom';
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
//import StoreContext from './StoreContext';
import UsersContainer from './components/Users/UsersContainer'
import { authThunk} from './redux/auth-reducer';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {initializeApp} from './redux/app-reduces'
import Preloader from './components/common/Preloader';
class App extends Component{
  componentDidMount(){
    this.props.initializeApp()    
  }

  render(){
      if(!this.props.initialized){
        return <Preloader/>
      }
      return(
      <BrowserRouter>
          <div className="App">
            <HeaderContainer/>
            <div className='wrapper'>
              <div className='container  flex__between'>
                <Sidebar/>
                <main>
                  <Route exact path="/messages" render={() =><DialogsContainer  />} />
                  <Route  path="/profile/:userId?"  render={() =><ProfileContainer/>}/>
                  <Route exact path="/users"  render={() =><UsersContainer />}/>
                  <Route  path="/login"  render={() =><Login />}/>
                  <Route exact path='/404'  render={() =><NotFound />} />
                  {/* <Redirect to="/users" /> */}
                </main> 
                
              </div>
            </div>  
            <Footer/>
          </div>
      </BrowserRouter>
    )
  }

}
const mapStateToProps = (state) => {
  return{
    initialized: state.app.initialized
}}
export default  compose(connect(mapStateToProps, {initializeApp}))(App);
