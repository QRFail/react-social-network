import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validaters/redux_form_validator";
import s from './Login.module.css'
import {Input} from "../../assets/FieldsComponents/FiledsComponents";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reduser";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='email' name='email' component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder='password' name='password' type="password" component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component='input'/> remember me
            </div>

            {props.error && <div className={s.summaryError}>{props.error}</div>}

            <div>
                <button>Login</button>
            </div>

        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'loginForm'
})(LoginForm);

const Login = (props) =>  {

    const clickLogin = (formData) =>{
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth){
        return(
            <Redirect to="/profile"/>
        )
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={clickLogin}/>
        </div>

    );
}

const mapStateToProps = (state) => {
    return({
        isAuth: state.auth.isAuth
    })
}


export default connect(mapStateToProps, {login})(Login);