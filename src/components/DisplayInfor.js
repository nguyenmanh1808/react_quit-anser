import React, { useEffect, useState } from "react";

// class DisplayInfor extends React.Component{
//     render(){
//         const {listUser} = this.props;
//         return(
//            <>
               
//                 {true && 
//                 <div>
//                {listUser.map((user) => {

//                     return (
//                         <>
//                         <div key={user.id} className={+user.age>16 ? "green" : "red"} >
//                             <div>My name is {user.name} </div>
//                             <div>may age is {user.age} </div>
                           
//                         </div>
//                         <div>
//                             <button onClick={() => this.props.handleDeleteUser(user.id)}>X</button>
//                         </div>
//                         <hr/>
//                         </>    
//                     )          
//                })}
//                 </div>
//                 }
//            </>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const {listUser} = props;

    const [ isShowHideListUser,setShowHideListUser] = useState(true);

    const HandleShowHideListUser = ()=>{
        setShowHideListUser(!isShowHideListUser);
    }
    useEffect(()=>{
        if(listUser.length === 0){
            alert("call me")
        }
        console.log("call me useeffect")
    },[listUser])

    // có thể ciết nhiều hàm useEffect, nếu muons hàm useEffect ko lặp lại thì ko truyền biến theo dõi vào,
    // Vd listUser là biến theo dõi
    return(
        <> 
            <div>
            <span onClick={()=>HandleShowHideListUser()}>
                {isShowHideListUser === true ? "Hide list users" : "Show list users"}
            </span>
            </div>
                {isShowHideListUser && 
                 <div>
                    {listUser.map((user) => {
                        return (
                             <>
                                <div key={user.id} className={+user.age>16 ? "green" : "red"} >
                                    <div>My name is {user.name} </div>
                                    <div>may age is {user.age} </div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>X</button>
                                </div>
                                <hr/>
                                </>    
                            )          
                       })}
                    </div>
                }
            </>
        )
}
export default DisplayInfor;