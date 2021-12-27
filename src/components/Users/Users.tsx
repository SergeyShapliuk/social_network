import React from "react";
import s from "./Users.module.css";
import usersPhoto from "../../assets/images/users.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: []
    unfollow: (id: number) => void
    follow: (id: number) => void
}

function Users(props: UsersType) {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++)
       pages.push(i)


    return <div>
        <div>
            {pages.map(m => <span className={props.currentPage === m ? s.selectedPage : s.pages}
                                  onClick={(e) => {
                                      props.onPageChanged(m)
                                  }}>{m}</span>
            )}
        </div>
        {
            props.users.map((m: any) => <div key={m.id}>
                    <span>
                        <div>
                        <NavLink to={'/profile/'+ m.id}>
                        <img src={m.photos.small != null ? m.photos.small : usersPhoto} className={s.photos}/>
                        </NavLink>
                            </div>
                        <div>
                            {
                                m.followed
                                    ? <button onClick={() => {
                                        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/'+m.id,{
                                            withCredentials:true,
                                            headers:{
                                                'API-KEY':'d63defdb-0459-40a2-9e7d-c1b6f429e0a6'
                                            }
                                        })
                                            .then(response => {
                                                if(response.data.resultCode===0){
                                                    props.unfollow(m.id)
                                                }
                                        });

                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                axios.post('https://social-network.samuraijs.com/api/1.0/follow/'+m.id,{},{
                                    withCredentials:true,
                                    headers:{
                                        'API-KEY':'d63defdb-0459-40a2-9e7d-c1b6f429e0a6'
                                    }
                                })
                                .then(response => {
                                    if(response.data.resultCode===0) {
                                        props.follow(m.id)
                                    }
                            });

                                    }}>follow</button>
                            }

                            </div>
                    </span>
                <span>
                        <span>
                        <div>{m.name}</div>
                        <div>{m.status}</div>
                            </span>
<span>
    <div>{"m.location.city"}</div>
    <div>{"m.location.country"}</div>
</span>


                    </span>


            </div>)
        }


    </div>
}

export default Users;