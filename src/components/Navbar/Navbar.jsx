import s from './Navbar.module.css'

function Navnar() {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>Profiles</div>
            <div className={s.item}>Messages</div>
            <div className={s.item}>News</div>
            <div className={s.item}>Music</div>
            <div className={s.item}>Settings</div>
        </nav>
    );
}

export default Navnar;