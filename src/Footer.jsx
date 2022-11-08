import React from "react";

type FooterType ={
    title: string;
}

const  Footer =(props: FooterType)=>{
    return(<>
            {props.title}
        </>
    )
}
export default Footer;