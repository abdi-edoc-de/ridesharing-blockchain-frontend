import { useState } from 'react'
import DriversList from './DriversList'
import CurrentTrip from './CurrentTrip'

const UserSideBar = ({ drivers, sendRequest, depositAmount, selectedDriver, setSelectedDriver, pay }) => {
    const [amount, setAmount] = useState(0)
    const [showDrivers, setShowDrivers] = useState(true)
    console.log(drivers);
    return (
        <div className="side-bar">
            <div className="update-box">
                <div>
                    <p>Deposit Ether</p>
                    <input className='input' type="number" placeholder='Enter Amount' value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
                    <div style={{"height" : "20px"}}>

                    </div>
                    <div style={{"display" : "flex", "justifyContent" : "center"}}>
                        <input type="submit" className='btn' onClick={()=>{
                            depositAmount(amount)
                        }}/>
                    </div>
                </div>

            </div>
            {
                showDrivers || drivers.length === 0?  
                <DriversList drivers={drivers} sendRequest={sendRequest} setSelectedDriver={setSelectedDriver} setShowDrivers={setShowDrivers}/> : 
                <CurrentTrip selectedDriver={selectedDriver} pay={pay} setShowDrivers={setShowDrivers}/>
            
            }
        </div>
    )
}

export default UserSideBar
