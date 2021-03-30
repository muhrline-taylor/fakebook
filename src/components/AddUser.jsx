import React, { useState } from 'react'
import AddUserForm from './AddUserForm';
import { navigate } from '@reach/router';
import axios from 'axios';

const AddUser = () => {
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
        pfp: "",
    })
    const [error, setError] = useState({});
    const [dupeError, setDupeError] = useState({});
    const [temp, setTemp] = useState(0);

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8001/api/users/new", form)
            .then(res => {
                if(res.data.error) {
                    setError(res.data.error.errors)
                } else {
                    if(localStorage.getItem("loggedInUser") !== null){
                        localStorage.removeItem("loggedInUser")
                    }
                    localStorage.setItem("loggedInUser", res.data.Users.email)
                    navigate("/")
                    window.location.reload()
                }
            })
            
    }

    return (
        <div>
            <AddUserForm 
                form={form} 
                onChangeHandler={onChangeHandler} 
                onSubmitHandler={onSubmitHandler} 
                error={error}
            />
        </div>
    )
}

export default AddUser
