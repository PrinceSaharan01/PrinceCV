import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Error404 =()=>{
    const navigate=useNavigate();
useEffect(()=>{
navigate('/')
},[])
   
}

export default Error404;

