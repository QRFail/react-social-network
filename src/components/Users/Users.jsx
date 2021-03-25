import s from './users.module.css'
import React from 'react'


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
                        <img src={u.photoUrl} alt="" className={s.ava}/>
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