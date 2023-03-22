import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function DisplayPhone() {
    const {phoneId} = useParams()
    const [displayPhone, setDisplayPhone] = useState()

    useEffect(() => {
        const fetchDisplayPhone = async () => {
            let response = await axios.get(`http://localhost:5005/phones/${phoneId}`);
            console.log(response.data)
            setDisplayPhone(response.data)
        }
        fetchDisplayPhone()
    }, [])

    return displayPhone ? (
<div>
<h1>{displayPhone.name}</h1>
<h5 className="manufacturer">by {displayPhone.manufacturer}</h5>
<img style={{width:"450px", marginLeft:"50px"}} src={`../images/${displayPhone.imageFileName}`}/>
<h4 className="paragraph">Description</h4>
<p className="paragraph">{displayPhone.description}</p>
<h4 className="paragraph">Price</h4>
<p className="paragraph">{displayPhone.price} Euro</p>
<h4 className="paragraph">Color</h4>
<p className="paragraph">{displayPhone.color}</p>
<h4 className="paragraph">Screen</h4>
<p className="paragraph">{displayPhone.screen}</p>
<h4 className="paragraph">Processor</h4>
<p className="paragraph">{displayPhone.processor}</p>
<h4 className="paragraph">Ram</h4>
<p className="paragraph">{displayPhone.ram}</p>
</div>
    ) : (
        <h1>Loading...</h1>
    )
}

export default DisplayPhone;