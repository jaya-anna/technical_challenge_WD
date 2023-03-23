import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PhoneDetails() {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState();

  const fetchPhoneDetails = async () => {
    try {
      let response = await axios.get(`http://localhost:5005/phones/${phoneId}`);
      console.log(response.data);
      setPhone(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhoneDetails();
  }, []);

  return phone ? (
    <div>
      <h1>{phone.name}</h1>
      <h5 className="manufacturer">by {phone.manufacturer}</h5>
      <img
        style={{ width: "450px", marginLeft: "50px" }}
        src={`../images/${phone.imageFileName}`}
      />
      <h4 className="paragraph">Description</h4>
      <p className="paragraph">{phone.description}</p>
      <h4 className="paragraph">Price</h4>
      <p className="paragraph">{phone.price} Euro</p>
      <h4 className="paragraph">Color</h4>
      <p className="paragraph">{phone.color}</p>
      <h4 className="paragraph">Screen</h4>
      <p className="paragraph">{phone.screen}</p>
      <h4 className="paragraph">Processor</h4>
      <p className="paragraph">{phone.processor}</p>
      <h4 className="paragraph">Ram</h4>
      <p className="paragraph">{phone.ram}</p>
    </div>
  ) : (
    <h1>Loading ...</h1>
  );
}

export default PhoneDetails;
