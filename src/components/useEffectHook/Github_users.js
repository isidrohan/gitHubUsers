import React from 'react'
import { FcApproval } from "react-icons/fc";

const Github_users = ({users}) => {
  return (
    <>   
    {
        users.map((elem)=>{
            return ( 
                <> 
                <div className="container-item">
                            <a href={elem.html_url}>
                                <span className='link'></span>
                            </a>
                
                            <div className="image">
                                <img src={elem.avatar_url} alt="" />
                            </div>
                            <div className='detail'>
                                <div className='username'>
                                
                                    <h2>{elem.login}  <FcApproval/></h2> <hr />
                                </div>
                                <div className="follower">
                                    <p>followers <br /> 200</p>
                                    <p>following <br /> 25</p>
                                </div>
                            </div>
                         </div>    
                        </>
            )
        })
    }
    </>
  )
}

export default Github_users