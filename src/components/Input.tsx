import React, {ChangeEvent} from 'react';

type inputPropsType = {
    setTitle: (title:string)=>void
    title: string
}

const Input = (props: inputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>)=>{
       props.setTitle(event.currentTarget.value)
        console.log(props.title)
    }
    return (
        <input  value={props.title} onChange={onChangeInputHandler} />
    );
};

export default Input;