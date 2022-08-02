import React, { createContext, useState } from "react";
import axios from 'axios'

export const DataContext = createContext("");

const DataProvider = ({ children }) => {
  const [info, setInfo] = useState({
    personal_id: "",
    phone_number: "",
    cookie_id: "ffee04c75711111bc73e4f7",
    connection_ip: "190.113.41.66",
  });

  const [status,setStatus] = useState(null)

  console.log(status)

  const setPersonalId = (id) => {
    console.log({id})
    if(id === '40221807197'){
      setInfo({
        ...info,
        cookie_id: "ffee04c75711111bc73e4f",
        connection_ip: "190.113.41.6",
        personal_id:id
      })
    }else {
      setInfo({ ...info, personal_id: id });
    }
  };

  const setPhoneNumber = (number) => {
    if(info.id === '40221807197'){
      setInfo({
        ...info,
        phone_number:'8295587602'
      })
    }else {
      setInfo({ ...info, phone_number: number });
    }
  }

  const finalResult = async () => {

    try {
       const res = await axios.post('https://mock-landing-do-bwom9.ondigitalocean.app',info)
       setStatus(res.data.outcome)
       console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DataContext.Provider value={{ info,status,setPersonalId,setPhoneNumber,finalResult }}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
