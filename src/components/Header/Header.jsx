import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {

    return (
        <header className={s.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
            <div className={s.loginName}>
                {props.isAuth ? <span> {props.login}</span>
                : <NavLink to="/auth">Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;