'use client'
import React, {useState} from 'react'
import {useSession} from 'next-auth/react'
import { createPost } from '@/app/actions/publishPost'

type Props = {}

const NewBlogForm = (props: Props) => {
   const {data: session, status} = useSession();

   const [title, setTitle] = useState<string>('')
   const [content, setContent] = useState<string>('')

   const [submitted, setSubmitted] = useState<boolean>(false);

   if(!session && status !== "loading") return (
      <div>You must be signed in to post</div>
   )

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const userId = session?.user?.id;

      if(!userId) return;
      try{
         const post = await createPost({title, content, authorId: userId})
         setSubmitted(true);
      } catch (error){
         console.log(error);

      }
   }

   if(submitted) return(
      <div>Post submitted</div>
   )

  return (
    <div className='min-h-[cal(100vh-130px)] py-2 container flex flex-col mt-12'>
      <form className='flex flex-col flex-1 items-stretch justify-center h-full text-left' onSubmit={handleSubmit}>
         <input type="text" className='text-6xl border border-solid rounded focus-visible:outline-none' placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} name='title' />
         <textarea name="content" placeholder='content' className='flex-1 border border-solid rounded focus-visible:oultine-none text-4xl mt-5' value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
         <button type='submit' className='w-fit-content text-white bg-indigo-400 px-4 py-2 sm:px-6
         mt-6 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all'>Create</button>
      </form>
      </div>
  )
}

export default NewBlogForm