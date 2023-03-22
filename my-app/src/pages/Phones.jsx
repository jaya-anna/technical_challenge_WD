import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Phones() {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        const fetchPhones = async () => {
            let response = await axios.get("http://localhost:5005/phones");
            console.log(response)
            setPhones(response.data)
        }
        fetchPhones()
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