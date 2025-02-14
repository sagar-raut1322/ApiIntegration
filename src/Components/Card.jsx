import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setCard(data))
            .catch((e)=>console.log(e)
            )
    }, []);
    const navigate = useNavigate();

    return (
        <div className="user-card-container">
            {card.map((user) => (
                <div className="user-card" key={user.id}
               onClick={()=>navigate(`/${user.id}`)} 
                >
                    <h1>{user.name}</h1>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;