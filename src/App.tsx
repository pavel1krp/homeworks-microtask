import React from 'react';
import './App.css';
import {MouseEvent} from "react";
import Header from "./Header";
import Technologies from "./Technokogies";
import Footer from "./Footer";
import Main from "./Main";
import NewComponents from "./NewComponents";

//  const students = [
//     {id: 1, name: "James", age: 8},
//     {id: 2, name: "Robert", age: 18},
//     {id: 3, name: "John", age: 28},
//     {id: 4, name: "Michael", age: 38},
//     {id: 5, name: "William", age: 48},
//     {id: 6, name: "David", age: 58},
//     {id: 7, name: "Richard", age: 68},
//     {id: 8, name: "Joseph", age: 78},
//     {id: 9, name: "Thomas", age: 88},
//     {id: 10, name: "Charles", age: 98},
//     {id: 11, name: "Christopher", age: 100},
// ]

const App = () =>{
    // const myfisrtSub = (event:MouseEvent<HTMLButtonElement>) =>{
    // alert('Hello')
    // }
    // const mySecondSub = (event:MouseEvent<HTMLButtonElement>) =>{
    //     alert('Hello Ivan')
    // }
    const onClickHandler = (name:string)=>{
        alert(name)
    }
    const foo1 =()=>{
    alert(100)
    }
    const foo2= (num:number) =>{
    alert(num)
    }
  return (
      <div>
   <button onClick={(event:MouseEvent<HTMLButtonElement>)=>foo1()}>1</button>
   <button onClick={(event:MouseEvent<HTMLButtonElement>)=>foo2(100200)}>2</button>
      </div>
  );
}

export default App;
