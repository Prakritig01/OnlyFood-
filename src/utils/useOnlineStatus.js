import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {


    const [onlineStatus,setOnlineStatus] = useState(true);
    //if online
    useEffect(()=>{
        console.log("inside useEffect");
        window.addEventListener("offline" ,() =>{
            setOnlineStatus(false);
            // console.log("onlineStatus",onlineStatus);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
            // console.log("onlineStatus",onlineStatus);
        })
    },[])

    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;
