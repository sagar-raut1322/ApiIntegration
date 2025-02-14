import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdDone } from "react-icons/md";
// import Card from "./Card";

const CardDeatails = () => {
    const [userData, setUserData] = useState(null);
    const [todoData, setTodoData] = useState([]);
    const { id } = useParams();
    // console.log(userData);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(async (res) => await res.json())
            .then((data) => setUserData(data))
    }, [id]);

    //todo feteching id througth
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    //         .then(async (res) => await res.json())
    //         .then((data) => setTodoData(data))
    //         .catch((error) => console.error("Fetching error:", error));
    // }, [id]);


    //direact filter todos data
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(async (res) => await res.json())
            .then((data) => {
                if(Array.isArray(data)){
                    const FilterTodoData = data.filter((todo)=>todo.userId.toString() === id)
                   setTodoData(FilterTodoData)
                }
            })
            .catch((error) => console.error("Fetching error:", error));
    }, [id]);


    return <> <div className="user-deatils-main">
        {(userData && <div className="card-deatails">
            <h1>{userData?.name}</h1>
            <p><strong>UserName:-</strong>{userData?.username}</p>
            <p><strong>Email:-</strong>{userData?.email}</p>
            <p><strong>Address:-</strong>{`${userData?.address.street},${userData?.address.suite} ,${userData?.address.city}, ${userData?.address.zipcode}`}</p>
            <p><strong>Phone:-</strong>{userData?.phone}</p>
            <p><strong>Website:-</strong>{userData?.website}</p>
            <p><strong>Company:-</strong>{`${userData?.company.name}, ${userData?.company.catchPhrase},${userData?.company.bs}`}</p>
        </div>)
        }

        {/* {todoData.length > 0 &&

            <div className="todo-deatails">
                <h1>Todo List</h1>
                <ul>
                    {todoData.map((todo) =>

                        <li key={todo.id}>
                            <p><strong>Todo Id:-</strong>{todo.id}</p>
                            <p><strong>Title:-</strong>{todo.title}</p>
                            <p><strong>Completed:-</strong> {todo.completed ? "yes" : "No"}</p>
                        </li>
                    )
                    }
                </ul>


            </div>} */}
        {todoData.length > 0 &&
            <div className="">
                <h1>Todo List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoData.map((todo) =>
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? <MdDone className="done" /> : <RxCross2 className="cros" />}</td>
                            </tr>

                        )}
                    </tbody>
                </table>

            </div>}
    </div>
    </>
};
export default CardDeatails;