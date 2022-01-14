import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Driver from './components/Driver/Driver'
import User from './components/User/User'
import { useState, useEffect } from 'react';
import * as apiCalls from './apiCalls'


const App = () => {
  const [drivers, setDrivers] = useState([])
  const [requests, setRequests] = useState([])
  const [carPlate, setCarPlate] = useState(0)
  const [seatNumber, setSeatNumber] = useState(0)
  const [driverAddress, setDriverAddress] = useState(0)

  const getDrivers =   async () => {
    const data = await apiCalls.fetchDrivers();
    setDrivers(data);
  }
  const getRequests = async  () => {
    const data = await apiCalls.fetchRequests();
    setRequests(data);
  }

  const sendRequest = async (address) => {
    console.log("request sent from " + address);
    alert("Request Sent to " + address)
  }

  useEffect(() => {
    getDrivers();
    getRequests();
  }, [])


  return (
      <div>
        <Router >
          <Routes>
            <Route path="/" element={<User drivers={drivers} sendRequest={sendRequest} depositAmount={apiCalls.depositAmount} />}/>
            <Route path="/driver" element={< Driver requests={requests} carPlate={carPlate} seatNumber={seatNumber} setCarPlate={setCarPlate}  address={driverAddress} setSeatNumber={setSeatNumber} setDriverAddress={setDriverAddress} saveDriversInfo={apiCalls.saveDriversInfo} />}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App

