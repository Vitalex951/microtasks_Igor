import React, {ChangeEvent} from 'react';

type InputTypeProps = {
    title: string
    SetTitle:(value: string) => void
}

const Input = (props: InputTypeProps) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
       props.SetTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

export default Input;