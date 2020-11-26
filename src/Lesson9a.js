// users items
import React, { Component } from 'react'
import Lesson10 from './Lesson10'
import Lesson11 from './Lesson11'
class Lesson9a extends Component {
    state={
        users :[
            {

                id: 1,
                login: "user1",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                
                html_url: "https://github.com/mojombo",
                
        
            },
            {  id: 2,
                login: "mojombo",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                
                html_url: "https://github.com/mojombo",

            },
            {
                id: 3,
                login: "user3",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                
                html_url: "https://github.com/mojombo",
            }
            

        ]
    }

    render() {
        

        return(

          //  we can pass like this also 
           //     {this.state.users.map((user)=>{
              // <Lesson10 key={user.id} user={user}/>
           //})}
          // then we use destructuring and use variable and not use user.login 
        
<div>             

   <Lesson10 users={this.state.users}/>   

<div>
    {this.state.users.map((user)=>{
        return(
            <Lesson11 key={user.id} user={user}/>
        )
    })}

</div>

     </div>


            
        )
    }
}




export default Lesson9a;