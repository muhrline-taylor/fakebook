import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currentUser, selectUserList } from '../features/userSlice';
import "../static/css/MarketplaceAdd.css";

const MarketplaceAdd = ({ form, changeHandler, submitHandler }) => {
    const user = useSelector(selectUserList);
    const [formFull, setFormFull] = useState(false);


    useEffect(() => {
        var temp = 0;
        if(form.photo !== ""){
            if(form.title !== ""){
                if(form.price !== ""){
                    if(form.category !== ""){
                        if(form.description !== ""){
                            setFormFull(true);
                            temp = 1;
                        }
                    }
                }
            }
        }
        if(temp === 0){
            setFormFull(false)
        }
        console.log(formFull)
    })

    return (
        <div className="marketplaceAdd" >
            <div className="marketplaceAdd__header">
                <div className="marketplaceAdd__headerTop">
                    <div className="marketplaceAdd__headerTopL">
                        <p style={{
                            fontSize: "12px",
                            color: "gray",
                        }}>Marketplace</p>
                        <p style={{
                            fontSize: "24px",
                            fontWeight: "700",
                        }}>Item for Sale</p>
                    </div>
                    <div className="marketplaceAdd__headerTopR">
                        <p style={{
                            color: "#0e75c4",
                            fontWeight: "500",
                            fontSize: "14px",
                        }}>Save Draft</p>
                    </div>
                </div>
                
            </div>
            <div className="marketplaceAdd__body">
                {
                    user.Users ?
                    <div className="marketplaceAdd__bodyHeader">
                        <Avatar 
                            src={user.Users.pfp}
                        />
                        <div className="marketplaceAdd__bodyHeaderText">
                            <p style={{
                                fontWeight: "500"
                            }}>{user.Users.fname} {user.Users.lname}</p>
                            <p style={{
                                fontSize: "14px",
                                color: "gray",
                            }}>Listing to Marketplace</p>
                        </div>
                        
                    </div>
                    :""
                }
                {/* <form> */}
                    <div className="marketplaceAdd__body--input">
                        <input 
                            type="text"
                            placeholder="Photo"
                            value={form.photo}
                            name="photo"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="marketplaceAdd__body--input">
                        <input 
                            type="text"
                            placeholder="Title"
                            value={form.title}
                            name="title"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="marketplaceAdd__body--input">
                        <input 
                            type="text"
                            placeholder="Price"
                            value={form.price}
                            name="price"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="marketplaceAdd__body--input">
                        <input 
                            type="text"
                            placeholder="Category"
                            value={form.category}
                            name="category"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="marketplaceAdd__body--input">
                        <select
                            placeholder="Condition"
                            value={form.condition}
                            name="condition"
                            onChange={changeHandler}
                        >
                            <option value="New">New</option>
                            <option value="Used - Like New">Used - Like New</option>
                            <option value="Used - Good">Used - Good</option>
                            <option value="Used - Fair">Used - Fair</option>
                        </select>
                    </div>
                    <div className="marketplaceAdd__body--input">
                        <input 
                            type="text"
                            placeholder="Description"
                            value={form.description}
                            name="description"
                            onChange={changeHandler}
                        />
                    </div>
                {/* </form> */}
                
            </div>
            <div 
                className={`marketplaceAdd--button ${formFull === true && "marketplaceAdd--buttonActive" }`}
                onClick={formFull ? submitHandler : undefined}
            >
                <p>Submit</p>
            </div>
        </div>
    )
}

export default MarketplaceAdd
