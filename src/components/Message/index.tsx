import React from "react";

// Styleds
import { MessageStyled } from "./styled";

// Interfaces
type MessageType = {
    text: string,
    type: "error" | "ok" | "warnning",
    active(value: boolean): void
}

const Message:React.FC<MessageType> = ({ active, text, type }) => {

    setTimeout(() => {
        active(false);
    }, 4000)
    
    return (
        <MessageStyled type={type}>{text}</MessageStyled>
    )
}

export default Message