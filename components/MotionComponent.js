'use client';
import React from 'react';
import { motion } from "framer-motion";

const MotionComponent = () => {
    return (
        <div className='flex flex-wrap items-center md:ml-[-40px] justify-center h-auto gap-4 md:gap-10 lg:gap-12 lg:ml-[-280px]  md:px-0 '>
            <motion.img
                className="h-auto w-8 sm:w-12 md:w-14 lg:w-16 z-[1]"
                src="/images/Html.svg"
                alt="html"
                initial={{
                    translateY: 300,
                    scale: 0.7,
                }}
                animate={{
                    translateY: 0,
                    scale: 1
                }}
                transition={{
                    duration: 1,
                }}
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2,
                    }
                }}
            />

            <motion.img
                className="h-auto w-8 sm:w-12 md:w-14 lg:w-16 z-[1]"
                src="/images/css.svg"
                alt="css"
                initial={{
                    translateY: 300,
                    scale: 0.7,
                }}
                animate={{
                    translateY: 0,
                    scale: 1
                }}
                transition={{
                    duration: 1.2,
                }}
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2,
                    }
                }}
            />

            <motion.img
                className="h-auto w-8 sm:w-12 md:w-[75px] lg:w-[80px] z-[1]"
                src="/images/js.svg"
                alt="js"
                initial={{
                    translateY: 300,
                    scale: 0.7,
                }}
                animate={{
                    translateY: 0,
                    scale: 1
                }}
                transition={{
                    duration: 1.4,
                }}
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2,
                    }
                }}
            />

            <motion.img
                className="h-auto w-8 ssm:w-12 md:w-14 lg:w-16 z-[1]"
                src="/images/react.svg"
                alt="react"
                initial={{
                    translateY: 300,
                    scale: 0.7,
                }}
                animate={{
                    translateY: 0,
                    scale: 1
                }}
                transition={{
                    duration: 1.6,
                }}
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2,
                    }
                }}
            />

            <motion.img
                className="h-auto w-8 sm:w-12 md:w-14 lg:w-16z-[1]"
                src="/images/typescript.svg"
                alt="typescript"
                initial={{
                    translateY: 300,
                    scale: 0.7,
                }}
                animate={{
                    translateY: 0,
                    scale: 1
                }}
                transition={{
                    duration: 1.8,
                }}
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2,
                    }
                }}
            />

            <motion.img
                className="h-auto w-8 sm:w-12 md:w-14 lg:w-16 z-[1]"
                src="/images/bootstrap.svg"
                alt="bootstrap"
                initial={{
                    translateY: 300,
                    scale: 0.7,
                }}
                animate={{
                    translateY: 0,
                    scale: 1
                }}
                transition={{
                    duration: 2,
                }}
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2,
                    }
                }}
            />

            <motion.img
                className="h-auto w-8 sm:w-12 md:w-14 lg:w-16 z-[1]"
                src="/images/tailwind.svg"
                alt="tailwind"
                initial={{
                    translateY: 300,
                    scale: 0.7,
                }}
                animate={{
                    translateY: 0,
                    scale: 1
                }}
                transition={{
                    duration: 2.2,
                }}
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2,
                    }
                }}
            />
        </div>
    );
}

export default MotionComponent;
