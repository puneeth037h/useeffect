import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Userdetails(){
    let { name } = useParams();

    let [cardetails,setDetails] = useState({})

    useEffect(()=>{

        let bodyData = { "user":name
        };

        fetch( 'http://localhost:3000/users',
            {
                method:"POST",
                body: JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            },
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setDetails(val[0])
            }
        )})

    },[]);

    return(
        <div>
            <h1>{cardetails.password}</h1>
        </div>
    )
}
export default Userdetails;