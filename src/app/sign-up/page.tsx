"use client"
import React, { useEffect, useState } from 'react'
import { json } from 'stream/consumers'
const url = process.env.NEXT_PUBLIC_URL
 const page = () => {
    const [formDetails,setFormDetails] = useState<{username:string,email:string,password:string}>({
        username:"",
        email:"",
        password:""
    })


useEffect(()=>{
console.log(formDetails);

},[formDetails])


const handleSubmit = async(e:React.SyntheticEvent)=>{
e.preventDefault()
    const res = await fetch(`${url}/auth/sign-up`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formDetails)
    })

    const response = await res.json()
    console.log(response);
    
}
  return (
    <div>
<form action="" onSubmit={handleSubmit} method="post" className='w-full md:w-[40%] mx-auto'>

{/* username */}
<div className='flex flex-col'>
    <label htmlFor="">username</label>
    <input type="text" 
    name='username'
    value={formDetails.username}
    className='border-1 border-gray-400 '
    onChange={(e)=> setFormDetails({...formDetails,[e.target.name]:e.target.value})}

    />
</div>
{/* email */}
<div className='flex flex-col'>
    <label htmlFor="">email</label>
    <input type="email"
    name='email'
    value={formDetails.email}
    className='border-1 border-gray-400 '
    onChange={(e)=> setFormDetails({...formDetails,[e.target.name]:e.target.value})}
    
    />
</div>
{/* password */}
<div className='flex flex-col'>
    <label htmlFor="">password</label>
    <input type="password" 
    name='password'
    value={formDetails.password}
    className='border-1 border-gray-400 '
     onChange={(e)=> setFormDetails({...formDetails,[e.target.name]:e.target.value})}
    />
</div>
<div className='flex items-center justify-center'>

<button type='submit' className='bg-blue-500 text-white rounded-lg  px-4'>submit</button>
</div>
    
</form>

    </div>
  )
}

export default page