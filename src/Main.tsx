import React from 'react';

type MainType ={
    title: string;
}

const Main = (props:MainType) => {
    return (
        <div>
            {props.title}
        </div>
    );
};

export default Main;