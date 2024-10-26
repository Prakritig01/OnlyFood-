import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component{
    render(){
        return(
            <div>
                <p>this a a About Component.</p>
                <User/>
                <UserClass />
            </div>
        );
    }
}



// const About = () =>{
//     return (
//         <>
//             <p>this is a About component.</p>
//             <User/>
//             <UserClass name = {"Prakriti"} location = {"Moraadabad"}/>
//         </>
//     );
// }

export default About; 