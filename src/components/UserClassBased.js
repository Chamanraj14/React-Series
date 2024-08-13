import React from "react";
import UserContext from "../utils/UserContext";

class UserClassBased extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count1:0,
            count2:1,
            userId : null,
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Chamanraj14");
        const json = await data.json();
        console.log(json);
        this.setState({
            userId: json.login,
        })

    }
    render(){
        const {name, phone} = this.props;
        const {count1, count2, userId} = this.state;
        return (
        <div className="UserClass">
        <h2>Name : {name}</h2>
        <h3>Phone : {phone}</h3>
        <h3>Email : xyz@xyz.com</h3>
        <UserContext.Consumer>{({loggedInUser}) => <h3> user : {loggedInUser}</h3>}</UserContext.Consumer>
        <h4>count1 = {count1}</h4>
        <button onClick={()=>{
            this.setState({
                count1 : this.state.count1 + 1,
            })
        }}>Count Increment</button>
        <h4>count2 = {count2}</h4>
        <h3>user id:{userId}</h3>

        </div>
        )
    }
}
export default UserClassBased;