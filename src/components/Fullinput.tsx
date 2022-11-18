import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";

type FullinputPropsType = {
    messageFunc: (title: string)=> void
}

const Fullinput = (props:FullinputPropsType) => {
    let [title, setTitle]= useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
        console.log(title)
    }
    const  onClickButtonHandler = ()=> {
        props.messageFunc(title)
        setTitle('')
    }
    return (
            <Space>
                <input value={title} onChange={onChangeInputHandler} type="text"/>
                <Traktor onClick={onClickButtonHandler}>+</Traktor>
            </Space>
    );
};

export default Fullinput;
const Space = styled.div`
  background-color: silver;
  width: 250px;
`
const Traktor = styled.button`
background-color: #61dafb;
  width: 178px;
  height: 20px;
`