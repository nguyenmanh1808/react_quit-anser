// class component
// function component

import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component{
   
    state = {
        listUser :[
            {id: 1, name: "Manh", age: "30"},
            {id: 2, name: "Anh", age: "16"},
            {id: 3, name: "Nam", age: "58"}
        ]
    }
    // JSX
    render(){

        return (
            <div>
                <UserInfor/>
                <br></br>
                <hr/>
                <DisplayInfor listUser={this.state.listUser} />
            </div>
        );

    }
}

export default MyComponent;