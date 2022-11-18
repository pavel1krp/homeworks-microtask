import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: ()=> void
}


export const Button = (props:ButtonPropsType) => {
    const onClickButtonHadler = ()=>{
        props.callBack()
    }
    return (
            <button onClick={onClickButtonHadler}>{props.name}</button>
    );
};
