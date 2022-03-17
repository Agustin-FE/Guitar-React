import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate} from "react-router";
import {Link} from "react-router-dom";
import AdminUserBorrar from "./AdminUserBorrar";

const AdminUserListBorrar = ()=>{
    const navegate = useNavigate();
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios(`http://localhost:3001/api/admin/showUser`)
        .then((res) => res.data)
        .then((data)=> { return setUsers(data) })
    },[])

    const handleOnClick = ((user)=>{
        console.log(user)
    })

    return (
    <>
                {users.map((user, i)=>{return ( <Link to={'/admin/user/delete/'+ user.id }>
                        <div onClick={handleOnClick} >
                            <a class="panel-block is-active">
                            <span class="panel-icon">
                                <i class="fas fa-book" aria-hidden="true"></i>
                            </span>
                            {user.name +' ' + user.surname}
                            </a>
                        </div> </Link> ) })} 
    </>
    )      
}

export default AdminUserListBorrar;