import User from "./User";
import UserClass from "./USerClass";
const About = () =>{
    return (
        <>
            <p>this is a About component.</p>
            <User/>
            <UserClass name = {"Prakriti"} location = {"Moraadabad"}/>
        </>
    );
}

export default About; 