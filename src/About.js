import React from "react";

export function About(){
    return(
        <div className="max-w-screen-md mx-auto pt-8 pb-28 text-maincolor-900">
            <div className="px-3">
                <h3 className="font-bold text-3xl">
                    About Quizzical:
                </h3>
                <p className="text-xl mt-1">
                    Quizzical is a Web application which is used for different kinds of Quizzes. You can create different categories of Quizzes with different difficulty level and different amount of questions. It is a place where you can have fun, enjoy the quizzes and at the same time increase your knowledge.
                </p>
            </div>
            <div className="mt-6 px-3">
                <h3 className="font-bold text-3xl">
                    About Ajmal Wali:
                </h3>
                <p className="text-xl mt-1">
                    Hi, I am Ajmal Wali. I am a Computer Science student, and I like to work with new technologies. Web Development, Blockchain, Artificial Intelligence, Machine Learning and Software Engineering are the topics that interest me the most. I hope you like our website and enjoy it.<br/>Thanks a lot for visiting.<br/>You can follow me on twitter right <a className="text-blue-700 underline hover:text-blue-400" target={'_blank'} rel='noopener noreferrer' href="https://twitter.com/ajmalwali7">here</a>.
                </p>
            </div>
        </div>
    );
}