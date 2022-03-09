import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addNewMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    const onClickButtonHandler = () => {
        props.addNewMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};


// target это элемент, вызвавший событие (например, пользователь нажал на него)
// currentTarget это элемент, к которому присоединен прослушиватель событий.