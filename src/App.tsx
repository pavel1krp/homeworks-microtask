import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Fullinput from "./components/Fullinput";
import Input from "./components/Input";
import {Button} from "./components/Button";




//
function App() {
    let [message, setMessage] = useState([
        {message:'message'},
        {message:'message'},
        {message:'message'},
    ])
    let [title, setTitle]= useState('')
    console.log(title)
    const messageFunc = (title: string)=>{
        let newMessage = {message: title}
    setMessage([newMessage,...message])
    }
    const  onClickButtonHandler = ()=> {
        messageFunc(title)
        setTitle('')
    }

    return (
     <div >
         <Input setTitle={setTitle} title ={title}  />
         <Button name = {'+'} callBack = {onClickButtonHandler}/>
         {message.map((el, index) => {
             return(
              <div key={index}>{el.message}</div>
             )
         })}
     </div>
    );
}


export default App;

