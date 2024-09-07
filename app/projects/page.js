"use client"
import Layout from '@/components/Layout'
import Link from 'next/link'
import ArrowLeft from '@/components/icons/ArrowLeft'
import { getAllProjects } from '@/functions/getAllProjects'
import ProjectCard from '@/components/ProjectCard'

export default async function ProjectsPage() {
  const projects = await getAllProjects(); 

  return (
    <Layout title={"Portfolio / Projects"} description={"My Portfolio"}>
      <section className='h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16'>
        <Link href={"/"} className='flex items-center space-x-4 font-semibold pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400'>
          <ArrowLeft className={"w-8 h-8 fill-current"} />
          <span className='text-xl font-normal'>
            Back to Home
          </span>
        </Link>

        {/* Projects */}
        <div className='grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2'>
          {projects.map((project)=> (
       <ProjectCard  project={project} key={project.id}/>

          ))}
        </div>
      </section>
    </Layout>
  )
}
