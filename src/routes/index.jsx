import { Route, Routes } from "react-router-dom"
import Login from "../views/Login"
import Home from "../views/Home"

const RoutesViews = () => {
    return (
        <Routes>          
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    )
}

export default RoutesViews