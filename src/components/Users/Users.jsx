import s from './users.module.css'
import React from 'react'
import {NavLink} from "react-router-dom";
import userImage from '../../assets/profile/userProfileImage.png'


function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.countUsersInPage);

    let pages = [];
    for(let i=1; i <= pagesCount; i++){
        pages.push(i);
    }


    return (
        <div>
            <div>
                {
                    pages.map(p => <span
                        className={props.currentPage == p && s.isSelected}
                        onClick={() => {props.onPageChanged(p)}}>
                                {p}&nbsp;
                            </span>)
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small ?? userImage} alt="" className={s.ava}/>
                        </NavLink>

                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={ () =>{
                                props.unfollow(u.id)
                            }
                            }> Unfollow</button>
                            :
                            <button onClick={ () =>{
                                props.follow(u.id)
                            }
                            }>Follow</button>}
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;