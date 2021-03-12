import s from './Post.module.css'

function Post(props) {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU" alt=""/>
            {props.message}
            <div>
                <span>Like +{props.like}</span>
            </div>
        </div>
    );
}

export default Post;