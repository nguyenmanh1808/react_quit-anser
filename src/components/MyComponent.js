// class component
// function component

import React, { useState } from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

// class MyComponent extends React.Component{
   
//     constructor(props){
//         super(props);
//         this.state = {
//             listUser :[
//                 {id: 1, name: "Manh", age: "30"},
//                 {id: 2, name: "Anh", age: "16"},
//                 {id: 3, name: "Nam", age: "58"}
//             ]
//         }
//     }
//     handleAddNewUser = (objUser) => {
//            this.setState({
//                 listUser: [objUser,...this.state.listUser]
//            })
//     }
//     handleDeleteUser = (userId) =>{
//         let listUserClone = [...this.state.listUser]
//         listUserClone = listUserClone.filter((item)=>{
//            return item.id !== userId
//         })
//         this.setState({
//             listUser: listUserClone
//         })
//     }
//     // JSX
//     render(){

//         return (
//             <>
//                 <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//                 <br></br>
//                 <hr/>
//                 <DisplayInfor listUser={this.state.listUser}  handleDeleteUser={this.handleDeleteUser} />
//             </>
//         );

//     }
// }

const MyComponent = (props) => {
    const [listUser,setListUser] = useState([
        {id: 1, name: "Manh", age: "30"},
        {id: 2, name: "Anh", age: "16"},
        {id: 3, name: "Nam", age: "58"}
        ] 
    );

    const handleAddNewUser = (user)=>{
        setListUser([user,...listUser]);
    }

    const handleDeleteUser = (id)=>{
        let listUserClone = [...listUser];
        listUserClone = listUserClone.filter((user)=>{
            return user.id !== id;
        })
        setListUser(listUserClone);
    }
    return (
                    <>
                        <AddUserInfor handleAddNewUser={handleAddNewUser} />
                        <br></br>
                        <hr/>
                        <DisplayInfor listUser={listUser}  handleDeleteUser={handleDeleteUser} />
                    </>
                );
}

export default MyComponent;