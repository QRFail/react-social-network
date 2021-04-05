import s from './Preloader.module.css'

function Preloader() {
    return (
        <div className={s.preloader}>
            <div className={s.spinner}></div>
        </div>
    );
}

export default Preloader;
