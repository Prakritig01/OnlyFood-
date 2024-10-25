import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count :0,
            
        }
        console.log("Props",props);
    }
    render(){
        const {name,location} = this.props
        const {count} = this.state
        
       return(
        <>
        
        <div className='userCard'>
            {console.log("inside return name",name)}
            {console.log("inside return name",count)}
           <h1>{name}</h1>
      </div>
      
      </>
       );
    }
}

export default UserClass;