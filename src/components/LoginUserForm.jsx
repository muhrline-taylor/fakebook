import React from 'react';
import "../static/css/LoginUserForm.css";

const LoginUserForm = ({ form, onChangeHandler, onSubmitHandler, error }) => {
    return (
        <div className="loginUserForm">
            <form onSubmit={onSubmitHandler} className="loginUserForm__form">
                {
                    error.emailError ?
                    <div className="loginUserForm__error">
                        {
                            error.emailError
                        }
                    </div>
                    :""
                }
                <input 
                    type="text" 
                    placeholder="Email..."
                    value={form.email}
                    name="email"
                    onChange={onChangeHandler}
                />
                
                {
                    error.passwordError ?
                    <div className="loginUserForm__error">
                        {
                            error.passwordError
                        }
                    </div>
                    :""
                }
                <input 
                    type="password" 
                    placeholder="Password..." 
                    value={form.password}
                    name="password"
                    onChange={onChangeHandler}
                />
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginUserForm
