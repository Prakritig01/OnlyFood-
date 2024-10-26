import React from "react";
class UserClass extends React.Component {
  constructor() {
    super();

    this.state = {
      
      userInfo :{
        name : "Dummy Name",
        location : "Default",
        id : 12345,
      },
    };
    // console.log("Props", props);
    console.log("constructor called");
  }

  async componentDidMount(){
    // console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/Prakritig01");

    const json = await data.json();
    console.log(json);

    this.setState({
        userInfo : json,
    })
  }
  render() {
    // const { name, location } = this.props;
   
    console.log("rendered call");

    return (
      <>
        <div className="userCard">
          
          <h3>Name : {this.state.userInfo.login}</h3>
          <h3>ID : {this.state.userInfo.id}</h3>
          <h3>Contact : @Prakriti</h3>
          <h3>this is working fine</h3>
         
        </div>
      </>
    );
  }
}

export default UserClass;
