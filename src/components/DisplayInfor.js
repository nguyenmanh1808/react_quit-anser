import React from "react";

class DisplayInfor extends React.Component{
    state = {
        IsShowListUser:true
    }
    handleShowHide(){
        this.setState({
            IsShowListUser: !this.state.IsShowListUser
        })
    }

    render(){
        const {listUser} = this.props;
        return(
           <div>
                <div>
                    <span onClick={()=>{this.handleShowHide()}} >{this.state.IsShowListUser === true ? "Hide" : "Show"} list user:</span>
                </div>
                {this.state.IsShowListUser&& 
                <div>
               {listUser.map((user) => {

                    return (
                        <div key={user.id} className={+user.age>16 ? "green" : "red"} >
                            <div>My name is {user.name} </div>
                            <div>may age is {user.age} </div>
                            <hr/>
                        </div>
                    ) 

                // if(+user.age> 16){
                //     return (
                //         <div key={user.id} className="green">
                //             <div>My name is {user.name} </div>
                //             <div>may age is {user.age} </div>
                //             <hr/>
                //         </div>
                //        ) 
                // }
                // else{
                //     return (
                //         <div key={user.id} className="red">
                //             <div>My name is {user.name} </div>
                //             <div>may age is {user.age} </div>
                //             <hr/>
                //         </div>
                //        ) 
                // }
                   
               })}
                </div>
                }
           </div>
        )
    }
}

export default DisplayInfor;