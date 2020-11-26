// search form and paasing props up to Lesson 12
import React, { Component } from 'react';

class Search extends Component {

    state ={
        text:''
    }

    changeHandler =(e) => {
        console.log(e.target.name)
this.setState({
    
    [e.target.name]:e.target.value
})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.text === '' ) {
            this.props.setAlert('please enter something to search')

        }else{


            this.props.handleSearchUsers(this.state.text)
            console.log(this.state.text)
        }


    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input  type="text" name="text" placeholder="search" value={this.state.value}
                    onChange={this.changeHandler}
                    /><br />
                    <input type="submit" value="submit" />
                </form>
                {this.props.showClear&& (
                    <button onClick={this.props.clearUsers} > Clear users</button>

                )}
                

            </div>
        )
    }

};

export default Search;
