import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Common/Header'
import Driver from './components/Driver/Driver'
import User from './components/User/User'

const App = () => {
  return (
      <div>
        <Router >
        <Header driver={false}/>
          <Routes>
            <Route path="/user" element={<User />}/>
            <Route path="/driver" element={< Driver/>}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App

