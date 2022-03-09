import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')


    const callback = () => {
        addNewMessage(title)
    }


    const addNewMessage = (title: string) => {
        setMessage([{message: title}, ...message] )
        setTitle('')
    }

    return (
        <div className='App'>
            {/*<FullInput addNewMessage={addNewMessage}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}> {el.message}</div>
                )
            })}


            <Button name={'+'} addNewMessage={callback}/>
            <Input title={title} SetTitle={setTitle}/>
        </div>
    )

}

export default App;
