import React from "react"
import axios from "axios"
import "../styles/login_styles.css"
import Cookies from "js-cookie";



class Login extends React.Component {

    logoutRef = React.createRef()
    authRef = React.createRef()


    constructor(props) {
        super(props);
        this.state = {}
        this.loginSubmitClicked = this.loginSubmitClicked.bind(this)
        this.loginHideClicked = this.loginHideClicked.bind(this)
    }

    loginCheck() {
        if (!Cookies.get('wallet')) {
            this.logoutRef.current.classList.add('disappear')
            this.authRef.current.classList.remove('disappear')
        } else {
            this.logoutRef.current.classList.remove('disappear')
            this.authRef.current.classList.add('disappear')
        }
    }

    loginHideClicked() {
        this.authRef.current.classList.add('disappear')
    }

    loginSubmitClicked() {
        axios.post('http://127.0.0.1:8000/auth/jwt/login', 'grant_type=&username=admin&password=1&scope=&client_id=&client_secret=', {withCredentials: true}).then(() => {
            this.loginCheck()
        })
    }

    loginClicked = () => {
        this.authRef.current.classList.remove('disappear')
    }
    logoutClicked = () => {
        axios.post('http://127.0.0.1:8000/auth/jwt/logout', {}, {withCredentials: true}).then(() => {
            this.loginCheck()
        })

    }

    componentDidMount() {
        this.loginCheck()
    }

    render() {
        return (
            <div id='auth-section'>
                <button className="login" onClick={this.loginClicked}>login</button>
                <button className="logout-btn" onClick={this.logoutClicked} ref={this.logoutRef}>logout</button>
                <div className="login-form" ref={this.authRef}>
                    <input type="text" className="auth-username" placeholder='username'/>
                    <input type="password" className="auth-password" placeholder='password'/>
                    <button className="login-submit-btn" onClick={this.loginSubmitClicked}>login</button>
                    <button className="login-hide-btn" onClick={this.loginHideClicked}>Hide</button>
                </div>
            </div>
        )
    }
}





export default Login
