import React from 'react';

type NewComponentType = {
    students: StudentType[];
}

type StudentType ={
    id: number
    name: string
    age: number
}

const NewComponents = (props:NewComponentType) => {
    const topCars =[
        {marka:"BMW", model: 'm5cs'},
        {marka:"Mercedes", model: 'e63s'},
        {marka:"Audi", model: 'rs6'}
    ]
    return (
        <table>{
            props.students.map((el)=>{
                return<>
                <td>{el.age}</td>
                <td>{el.name}</td>
                </>
            })
        }
        </table>
    )}

export default NewComponents;