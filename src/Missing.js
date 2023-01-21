import React from "react";



export function Missing(){
    return(
        <div className="text-maincolor-900 flex flex-col content-center mt-32 text-center">
            <h1 className="text-6xl font-bold">404! Page Not Found</h1>
            <p className="text-2xl pt-2">You can go to Homepage by clicking <a className="text-blue-700 underline hover:text-blue-400" href="/">here!</a></p>
        </div>
    )
}