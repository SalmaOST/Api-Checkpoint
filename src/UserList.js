import React, {useState , useEffect} from "react"
import axios from "axios"
import "./App.css"
function UserList(){
    const [posts , setPosts] = useState([])

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    },[])
    return(
        <div>
            <ul>
                {
                    posts.map (post => <li key ={post.id}>
                        <h2 className="Inf"> Hey ! I'm {post.name}</h2> 
                        <h4 className="Inf-A">Information about :</h4>
                       <p className="inf"> {post.username} <br/> {post.email}  </p>
                       <h4 className="Inf-B">Here is the address: </h4>
                       <p className="inf">{post.address.street}-{post.address.city}-{post.address.suite}-{post.address.zipcode}
                        </p>
                        <h4 className="Inf-C"> There's the contact :</h4>
                        <p className="inf"> {post.phone}<br/> {post.website} <br/> {post.company.name}</p>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default UserList