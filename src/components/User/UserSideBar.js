import { useState } from 'react'
import DriversList from './DriversList'
const UserSideBar = ({ drivers, sendRequest, depositAmount }) => {
    const [amount, setAmount] = useState(0)
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
            <DriversList drivers={drivers} sendRequest={sendRequest} />
        </div>
    )
}

export default UserSideBar
