
import Layout from "@/components/Layout";
import MotionComponent from "@/components/MotionComponent";
import TypingAnimation from "@/components/TypeingComponent";
import SocialLinks from "@/components/SocialLinks";
import Link from "next/link";

export default function Home() {
  return (

    <Layout title={"portfolio"} description={"My portfolio"}>


      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-6 md:pt-10">
          <div className="flex flex-col items-center  lg:mx-0 md:mx-5 justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I&apos;m
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">MIRHAN YORULMAZ</h1>


            <div className="mt-5 text-2xl font-normal tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 ">
              <TypingAnimation />
            </div>

          {/* Social Account */}
          <SocialLinks />
          </div>
          {/* Code Area */}
          <article className="mt-3 prose  lg:mx-0 md:mx-5 md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>{"// Portfolio.js"}</span>
                  </div>
                  <p>
                    <span className="text-gray-500">{"//"}</span>{" "}
                    <span className="text-purple-300">Todo:</span>{" "}
                    {"// Explore my projects below!"}
                    <br />{" "}
                    Click on each card to view live demos and access source code. 🚀🔍
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="https://avatars.githubusercontent.com/u/117019177?v=4"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span>{" "}
                        {`const techWeb2 = ["HTML", "CSS", "JavaScript", "React.js", "TypeScript"];`}
                      </p>
                     
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link href="/projects" className="transition duration-300">
                      Projects
                    </Link>

                
                  </div>
                </code>
              </pre>
            </div>
          </article>
            <MotionComponent />
        </section>

      </main>

    </Layout>



  );
}
