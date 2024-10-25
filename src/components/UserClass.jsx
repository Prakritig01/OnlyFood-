import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("Props", props);
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <>
        <div className="userCard">
          <h1>count:{count}</h1>
          <h3>Name : {name}</h3>
          <h3>Location : {location}</h3>
          <h3>Contact : @Prakriti</h3>
          <h3>this is working fine</h3>
          <button onClick={() => this.setState({
            count : this.state.count + 1,
          })}>change count</button>
        </div>
      </>
    );
  }
}

export default UserClass;
