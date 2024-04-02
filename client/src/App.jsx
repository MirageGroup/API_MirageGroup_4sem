import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Dashboard from './Components/DashBoard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import MeetingPage from './pages/MeetingPage'


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  },
  {
    path: '/meeting',
    element: <div><MeetingPage/></div>
  }
])

function App() {
  
    return (
      <ChakraProvider>
        <RouterProvider router = {router}/>
      </ChakraProvider>
    )
}

export default App
