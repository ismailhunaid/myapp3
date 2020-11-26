import React, { Component } from 'react';

class Lesson10 extends Component {

    render(){
      

        const {users} = this.props
        const userList= users.map((user) => {
            return(
                
                
    <div key={user.id} style={userStyle}  >
    
    <img src={user.avatar_url} alt={user.login}style={{width:'50px'}}  /> 
    {user.login}  <br />
    <a href={user.html_url} > click here to see profile </a> <br />


            

                </div>
            )
        })
        return(
            <div>
                <h2>
                this is lesson 10 component
                 we are passing state here with  props  
                 from lesson9A.js and using map method for listing
                 lesson 10 has no state 

                </h2>
             {userList}   
            </div>
        )
    }


    

}

const userStyle = {
    
    display:'grid',
    gridTemplatecoloumns:'repeat(3,1fr)',
    gridGap:'1rem'
}


export default Lesson10;
