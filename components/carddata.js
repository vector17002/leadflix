import { useEffect, useState } from "react";
import {API_CLIENT} from "./apiclient";
import Card from "./card";

const ncard=(val)=>{
    return (
        <Card
         imgsrc={val.imgsrc}
        sname={val.sname}
        link={val.link}
        rating={val.rating}  

        />
    )
}

 const  Sdata=()=>{
    const [sdata , setData] = useState([]);
    useEffect(()=>{
        const promise = API_CLIENT.get(process.env.REACT_APP_API_CLIENT);
        promise.then(result=>{
            setData(result.data.Sdata);
        }).catch(err=>{
            alert("Server under maintainence");
        })
    },[]);

    return (sdata.map(ncard));
        
    
}

export default Sdata;
