import{Route, Routes}from"react-router-dom"
import Card from "./Card"
import CardDeatails from "./CardDeatails"
const Routing=()=>{
    return(
        <Routes>
            <Route path="/" element={<Card/>}/>
            <Route path="/:id" element={<CardDeatails/>}/>
        </Routes>
    )
}

export default Routing;