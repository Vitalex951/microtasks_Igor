import React from 'react';

type ButtonPropsType = {
    name: string
    addNewMessage: () => void
}

const Button = (props: ButtonPropsType) => {
    const OnClickButtonHandler = () => {
        props.addNewMessage()
    }
    return (
        <button onClick={OnClickButtonHandler}>{props.name}</button>
    );
};

export default Button;