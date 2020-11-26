import React from 'react';
import Lesson12b from './Lesson12b'
import Spinner from './Lesson13';

const Lesson12a = ({users,loading} )=> {
    if (loading) {
        return <Spinner />

    } else {
        return(

            <div>
    {users.map((user)=>{
        return (
            <Lesson12b key={user.id} user={user}/>
        )
    })}
    
            </div>
    
        )
    }
    
        



    }




export default Lesson12a;
