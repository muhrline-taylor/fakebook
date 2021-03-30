import React from 'react';
import "../static/css/AddUserForm.css";

const AddUserForm = ({ form, onChangeHandler, onSubmitHandler, error }) => {
    return (
        <div className="addUserForm">
            <form onSubmit={onSubmitHandler} className="addUserForm__form">
                {
                    error.fname ?
                    <div className="addUserForm__error">
                        {
                            error.fname.message
                        }
                    </div>
                    :""
                }
                <input 
                    type="text" 
                    placeholder="First Name"
                    value={form.fname}
                    onChange={onChangeHandler}
                    name="fname"
                /> 
                {
                    error.lname ?
                    <div className="addUserForm__error">
                        {
                            error.lname.message
                        }
                    </div>
                    :""
                }
                <input 
                    type="text"
                    placeholder="Last Name"
                    value={form.lname}
                    onChange={onChangeHandler}
                    name="lname"
                />
                {
                    error.username ?
                    <div className="addUserForm__error">
                        {
                            error.username.kind === "unique" ?
                            <>Username already taken </>
                            :<>{error.username.message}</>
                        }
                        
                    </div>
                    :""
                }
                <input 
                    type="text" 
                    placeholder="Username"
                    value={form.username}
                    onChange={onChangeHandler}
                    name="username"
                />
                {
                    error.email ?
                    <div className="addUserForm__error">
                        {
                            error.email.kind === "unique" ?
                            <>Email already registered</>
                            :<>{error.email.message}</>
                        }
                    </div>
                    :""
                }
                <input 
                    type="text" 
                    placeholder="Email"
                    value={form.email}
                    onChange={onChangeHandler}
                    name="email"
                />
                {
                    error.password ?
                    <div className="addUserForm__error">
                        {
                            error.password.message
                        }
                    </div>
                    :""
                }
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={form.password}
                    onChange={onChangeHandler}
                    name="password"
                />
                <input 
                    type="text"
                    placeholder="Picture url"
                    value={form.pfp}
                    onChange={onChangeHandler}
                    name="pfp"
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default AddUserForm
