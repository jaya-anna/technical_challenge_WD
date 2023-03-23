import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Phones() {
    const [phones, setPhones] = useState([])
    
    const getPhones = async () => {
        try{
        let response = await axios.get("http://localhost:5005/phones");
        console.log(response)
        setPhones(response.data)
    }catch(error) {
        console.log(error);
      }
    }
    
    useEffect(() => {
        getPhones()
    }, [])

    return(
<div>
   <h1>Phone List</h1>
   <h3>Click to see the Details</h3>
   {phones.map((phone) => 
   <Link style={{textDecoration:"none", textAlign:"center"}} key={phone.id} to={`/${phone.id}`}>
   <p>{phone.name}</p>
   </Link>
   )}
</div>
    )
}

export default Phones;