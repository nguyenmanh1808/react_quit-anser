import React from "react";

class UserInfor extends React.Component{
   
    state ={
        name:'Manh',
        address:"Vĩnh Phúc",
        age:22
    }

    handleOnChange(event){
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event)=>{
        event.preventDefault();
        alert('me')
    }

    render(){
        return (
            <div>My first Component
                My name is {this.state.name}
             <form onSubmit={(event)=>this.handleOnSubmit(event)}>
                 <input  type='text' value={this.state.name} onChange={(event)=>this.handleOnChange(event)}>
                 </input>
                 <button>submit</button>
             </form></div>
        )
    }
}

export default UserInfor;