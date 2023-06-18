import React ,{useEffect , useState}from 'react'
import Github_users from './Github_users';

const GitHubApi = () => {
    const [users, setUsers] = useState([]);
    const getUsers= async()=>{
        const respose = await fetch('https://api.github.com/users')
        setUsers(await respose.json());
        // const data = await respose.json();
        // console.log(data);
    }
    useEffect(() => {
      getUsers();
    }, [])
    
  return (
    <>
    <div className="heading">
        <h1>Git Hub Users</h1>
    </div>
    <div className="container">
        <Github_users users = {users} />
    {/* <div className="container-item">
                            <div className="image">
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                            </div>
                            <div className='detail'>
                                <div className='username'>
                                    <h2>login</h2> <hr />
                                </div>
                                <div className="follower">
                                    <p>followers <br /> 200</p>
                                    <p>following <br /> 25</p>
                                </div>
                            </div>
                         </div>  */}
    
     </div>
    </>
  )
}

export default GitHubApi