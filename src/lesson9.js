// users items
import React, { Component } from 'react'

class Lesson9 extends Component {
    state = {

        id: 1,
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        
        html_url: "https://github.com/mojombo",
        

    }

    render() {
        return(
            <div>
                <h1> lesson 9 git hub user list</h1>
                <img  src={this.state.avatar_url} alt={this.state.login}
                
                style={{width:'40px'}}/>
        <p> {this.state.login}</p>
        <a href={this.state.html_url}> More</a>
            </div>
        )
    }
}




export default Lesson9;