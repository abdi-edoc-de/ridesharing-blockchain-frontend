import { useState, useEffect } from 'react';

import Requests from './Requests'
import DriverSideBar from './DriverSideBar'
import Header from './Header'

const Driver = () => {
  const [requests, updateRequests]= useState([])
    
    return (
        <>
            <Header />
            <div className='container'>
            <Requests requests={[{start : "a", destination : "b", amount : 5}, {start : "a", destination : "b", amount : 5}, {start : "a", destination : "b", amount : 5}, {start : "a", destination : "b", amount : 5}]} /> 
                <DriverSideBar />
            </div>
        </>
        
    )
}

export default Driver
