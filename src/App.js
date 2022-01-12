import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Driver from './components/Driver/Driver'
import User from './components/User/User'

const App = () => {
  return (
      <div>
        <Router >
          <Routes>
            <Route path="/" element={<User />}/>
            <Route path="/driver" element={< Driver/>}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App

