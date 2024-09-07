"use client"
import React from "react";
import Typical from 'react-typical';

const TypingAnimation = React.memo(
    () => {

        return (
            <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                    "Frontend Developer",
                    3000,
                    "React Enthusiast",
                    3000,
                    "Lifelong Learner",
                    3000,]}
            />
        )
    }, (props, prevProps) => true
)

export default TypingAnimation