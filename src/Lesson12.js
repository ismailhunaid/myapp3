// fetching data from api and pass with props  to Lesson12a
//https://api.github.com/users

import React, { Component} from 'react';
//import {browserRouter, Switch , Route} from 'react-router-dom'
import Lesson12a from './Lesson12a'
import Search from './Lesson14'
import Alert from './Lesson15'
import axios from 'axios';

class Lesson12 extends Component {

    state = {
        users:[],
        loading:false,
        alert:null
    }

     async componentDidMount(){
         

        //this.setState({loading:false})
    


      //  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.envREACT_APP_GITHUB_CLIENT_SECRET}`);
      //  console.log(res)
        //console.log(res.data)

       // this.setState({loading:false, users:res.data})

    }

    handleSearchUsers = async (text) => {
        this.setState({loading:true,})
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.envREACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({loading:false, users:res.data.items})

        // console.log(text)
    }
    clearUsers = () => {
        this.setState({users:[]})
    }

    setAlert = (msg) => {
        this.setState({alert:{msg:msg}})
        setTimeout(()=>{
            this.setState({alert:null})
        },5000)

        console.log(msg)
    }


    render() {
        return(
            <div>
                <Alert alert={this.state.alert}/>
                <Search handleSearchUsers={this.handleSearchUsers} 
                clearUsers={this.clearUsers}
                showClear={this.state.users.length>0 ?true:false}
                setAlert={this.setAlert}
                />

                <Lesson12a  loading={this.state.loading} users={this.state.users}/>
            </div>
        )
    }
}

export default Lesson12