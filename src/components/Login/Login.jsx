import React from 'react';
import { Field, reduxForm } from 'redux-form';
import l from './Login.module.scss';
import {requiredField, maxLenghtCreator} from "../../utils/validation/index"
import {Input} from '../../components/common/FormsControl/FormsControl';
import {connect} from 'react-redux'
import {loginThunk} from "../../redux/auth-reducer"
import { Redirect } from 'react-router';
let maxLength30 = maxLenghtCreator(30)
const LoginForm = (props) =>{
   
    return (
           <form onSubmit={props.handleSubmit}  className={l.loginForm}>
                <div>
                 <Field validate={[requiredField, maxLength30]} component={Input} name={"email"}  className={l.input} type="text" placeholder='Login'/>   
                </div>
                <div>
                 <Field validate={[requiredField, maxLength30]}  component={Input} name={"password"} className={l.input} type="password" placeholder='Password'/>   
                </div>
                <div>
                   <label htmlFor="remember">
                   <Field component={"input"} name={"remember"} type="checkbox" id='remember'/> 
                    <span>Remember me</span>
                </label> 
                </div>
                {props.error &&
                <div className={l.formError}>{props.error}</div>}
                <button type='submit'>Sign In</button>
        </form> 
    )

}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) =>{
    const onSubmit = (formData) => {
        console.log(formData)
        props.loginThunk(formData.email, formData.password, formData.rememberMe,)
    } 
     if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return(
        <div>
            <h1>Sign in</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
        )
    }

const mapStateToProps  = (state) =>{
    return{
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {loginThunk})(Login);