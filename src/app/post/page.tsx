"use client"
import { Form } from '@/components/ui/form'
import React, { useEffect, useState } from 'react'
const url = process.env.NEXT_PUBLIC_URL
interface postFormType {
  title:string,
  body:string,
  date:string,
  likes:string[],
  comments:any[]
}
const page = () => {


  const [postForm,setPostForm] = useState<postFormType>({
    title:"",
    body:"",
    date:new Date(Date.now()).toLocaleString(),
  likes:[],
  comments:[]

  })
  


  const handlePostBlog = async(e:React.SyntheticEvent)=>{
e.preventDefault()
e.preventDefault()
    const res = await fetch(`${url}/blog/postblog`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer akdksosdisisoisoioidisi"
        },
        body:JSON.stringify(postForm)
    })

    const response = await res.json()
    console.log(response);

  }
  useEffect(()=>{
console.log(postForm);

  },[postForm])
  return (
  <div>
    <form action="" onSubmit={handlePostBlog}>
<div>
  <label htmlFor="title">Title</label>
  <br />
  <input type="text"  id='title'
  className='border-slate-400 border-1'
  value={postForm.title}
onChange={(e)=> {
  setPostForm({...postForm,title:e.target.value})
}}
  />
</div>
<div>
<label htmlFor="content">body</label>
<br />
<textarea name="" id="content"
className='border-slate-400 border-1'
value={postForm.body}
onChange={(e)=> {
  setPostForm({...postForm,body:e.target.value})
}}
></textarea>
</div>

<button type='submit' className='bg-blue-500 text-white rounded-lg  px-4 cursor-pointer'>submit</button>
</form>
  </div>
  )
}

export default page