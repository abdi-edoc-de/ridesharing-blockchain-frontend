import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Driver from './components/Driver/Driver'
import User from './components/User/User'
import { useState, useEffect } from 'react';
import * as apiCalls from './apiCalls'


const App = () => {

  
  const [drivers, setDrivers] = useState([])
  const [requests, setRequests] = useState([])

  const getDrivers =   async () => {
    const data = await apiCalls.fetchDrivers();
    setDrivers(data);
  }
  const getRequests = async  () => {
    const data = await apiCalls.fetchRequests();
    setRequests(data);
  }

  useEffect(() => {
    getDrivers();
    getRequests();
  }, [])

// console.log(drivers);

  return (
      <div>
        <Router >
          <Routes>
            <Route path="/" element={<User drivers={drivers} />}/>
            <Route path="/driver" element={< Driver requests={requests}/>}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App

