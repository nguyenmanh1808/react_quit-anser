import React, { useState } from 'react';
// class AddUserInfor extends React.Component{
   
//     state ={
//         name:'Manh',
//         address:"Vĩnh Phúc",
//         age:22
//     }

//     handleOnChange = (event) =>{
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleOnChangeAge= (event)=>{
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleOnSubmit = (event)=>{
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100 + 1) + "random",
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render(){
//         return (
//             <div>My first Component
//                 <br/>
//                 My name is {this.state.name}
//                 <br/>
//                 I am {this.state.age}
//              <form onSubmit={(event)=>this.handleOnSubmit(event)}>
//                  <input  type='text' value={this.state.name} onChange={(event)=>this.handleOnChange(event)}>
//                  </input>
//                  <br/>
//                  <br/>
//                  <input type="text" value={this.state.age} onChange={(event)=>this.handleOnChangeAge(event)}></input>
//                  <button>submit</button>
//              </form></div>
//         )
//     }
// }

const AddUserInfor = (props)=>{
    const [name,setName] =  useState('Manh');
    const [adress,setAdress] =  useState('Vĩnh Phúc');
    const [age,setAge] =  useState(22);
    const handleOnSubmit = (event) =>{
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "random",
            name: name,
            age : age
        });

     }
     const handleOnChangeName = (event) =>{
        setName(event.target.value)
     }

     const handleOnChangeAge = (event) => {
        setAge(event.target.value)
     }
    return (
                    <div>My first Component
                        <br/>
                        My name is {name}
                        <br/>
                        I am {age}
                     <form onSubmit={(event)=>handleOnSubmit(event)}>
                         <input  type='text' value={name} onChange={(event)=>handleOnChangeName(event)}>
                         </input>
                         <br/>
                         <br/>
                         <input type="text" value={age} onChange={(event)=>handleOnChangeAge(event)}></input>
                         <button>submit</button>
                     </form></div>
                )
}
export default AddUserInfor;