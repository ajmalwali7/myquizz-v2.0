import React from "react";


export function Loading(){
    return(
        <div className="flex justify-center h-full w-full absolute top-0 ">
            <img className="sm:h-16 h-12 w-12 self-center sm:w-16 animate-spin" src="./giphy.gif" alt="Loading..." />
        </div>
    )
}