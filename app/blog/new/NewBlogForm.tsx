'use client'
import React, {useState} from 'react'
import {useSession} from 'next-auth/react'

type Props = {}

const NewBlogForm = (props: Props) => {
   const {data: session} = useSession();

   const [title, setTitle] = useState<string>('')
   const [content, setContent] = useState<string>('')

   if(!session) return (
      <div>You must be signed in to post</div>
   )

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} name='title' />
         <textarea name="content" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
         <button type='submit'>Create</button>
      </form>
      </div>
  )
}

export default NewBlogForm