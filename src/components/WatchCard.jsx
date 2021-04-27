import { Avatar } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { MoreHoriz, SentimentVerySatisfied } from '@material-ui/icons';
import React, { useState } from 'react';
import "../static/css/WatchCard.css";
import ReactPlayer from 'react-player';
import MakePostButton from './MakePostButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';


const WatchCard = ({ ...props }) => {
    const [likedColor, setLikedColor] = useState("rgb(0, 0, 0, 0.5)");

    return (
        <div className="watchCard">
            <div className="watchCard__header">
                <div className="watchCard__headerL">
                    <Avatar 
                        style={{
                            height: "86%",
                            width: "77%"
                        }}
                    />
                </div>
                <div className="watchCard__headerM">
                    <div className="watchCard__headerM__top">
                        <p style={{
                            fontWeight: "500",
                            color: "black",
                        }}>Profile Name</p>&nbsp;-&nbsp;
                        <p>Follow</p>
                    </div>
                    <div className="watchCard__headerM__bottom">
                        <p>timestamp</p>
                    </div>
                </div>
                <div className="watchCard__headerR">
                    <div className="watchCard__headerR--button">
                        <MoreHoriz />
                    </div>
                </div>
            </div>
            <div className="watchCard__text">
                {
                    props.text ?
                    <p style={{
                        fontWeight: "500",
                    }}>{props.text}</p>
                    :""
                }
                {
                    props.text2 ?
                    <p style={{
                        fontSize: "14px",
                        color: "slategray"
                    }}>{props.text2}</p>
                    :""
                }
            </div>
            <div className="watchCard__video">
                <ReactPlayer 
                    url={props.video}
                    width="99.88%"
                    playing="true"
                    volume="1"
                    muted="true"
                    controls="true"
                />
            </div>

            <div className="watchCard__footer">
                <div className="watchCard__footerL">
                    <MakePostButton 
                        component={<ThumbUpAltIcon 
                            style={{
                                color: likedColor,
                                height: "22px",
                                width: "24px",
                                
                            }}
                        />}
                        text="Like"
                        clickHandler={() => {}}
                        size="75%"
                        textColor={likedColor}
                        textSize="14px"
                    />
                    <MakePostButton 
                        component={<ChatBubbleOutlineIcon 
                            style={{
                                color: "rgb(0, 0, 0, 0.5)",
                                height: "21px",
                                width: "23px",
                            }}
                        />}
                        text="Comment"
                        clickHandler={() => {}}
                        size="75%"
                        textColor="#606266"
                        textSize="14px"
                    />
                    <MakePostButton 
                        component={<ShareIcon 
                            style={{
                                color: "rgb(0, 0, 0, 0.5)",
                                height: "21px",
                                width: "23px",
                            }}
                        />}
                        text="Share"
                        clickHandler={() => {}}
                        size="75%"
                        textColor="#606266"
                        textSize="14px"
                    />
                </div>
                <div className="watchCard__footerR">
                    <div className="watchCard__footerR__left">
                        <div 
                            className="watchCard__footerR__left--react"
                            style={{
                                backgroundColor: "#1876F2",
                            }}
                        >
                            <ThumbUpAltIcon 
                                style={{
                                    height: "13.5px",
                                    width: "13.5px",
                                    color: "white",
                                }}
                            />
                        </div>
                        <div className="watchCard__footerR__left--react"
                            style={{
                                backgroundColor: "rgba(255, 0, 0)",
                                marginLeft: "-3%",
                            }}
                        >
                            <FavoriteIcon 
                                style={{
                                    height: "13.5px",
                                    width: "13.5px",
                                    color: "white",
                                }}
                            />
                        </div>
                        <div className="watchCard__footerR__left--react"
                            style={{
                                backgroundColor: "rgba(250, 250, 126, 0.993)",
                                marginLeft: "-3%",
                            }}
                        >
                            <SentimentVerySatisfied 
                                style={{
                                    height: "19px",
                                    width: "19px",
                                    color: "rgba(0, 0, 0, 0.8)",
                                }}
                            />
                        </div>
                    </div>
                    
                    <div className="watchCard__footerR__middle">
                        <p>6k</p>
                    </div>
                    <div className="watchCard__footerR__dot">
                        <p>-</p>
                    </div>
                    {/* # OF REACTS */}
                    {/* - */}
                    <div className="watchCard__footerR__right">
                        <p>217 Comments</p>
                    </div>
                    {/* # OF COMMENTS */}
                </div>
            </div>

        </div>
    )
}

export default WatchCard
