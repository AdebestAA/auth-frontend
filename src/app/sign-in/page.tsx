"use client"

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const url = process.env.NEXT_PUBLIC_URL
 const page = () => {
    const [formDetails,setFormDetails] = useState<{email:string,password:string}>({
        email:"",
        password:""
    })




useEffect(()=>{
console.log(formDetails);

},[formDetails])

const handleSubmit = async(e:React.SyntheticEvent)=>{
e.preventDefault()
    const res = await fetch(`${url}/auth/sign-in`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formDetails)
    })

    const response = await res.json()
    console.log(response);
    
}

// shadCN UI
{/* <>
<div className='flex items-center justify-center'>
<CardDemo/>
</div>
</> */}
  return (

    <div>


<form action="" onSubmit={handleSubmit} method="post" className='w-full md:w-[40%] mx-auto'>


{/* email */}
<div className='flex flex-col'>
    <label htmlFor="">email</label>
    <input type="email"
    name='email'
    value={formDetails.email}
    className='border-1 border-gray-400 '
    onChange={(e)=> setFormDetails({...formDetails,[e.target.name]:e.target.value.trim()})}
    
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


// <div>

        
// <form action="" onSubmit={handleSubmit} method="post" className='w-full md:w-[40%] mx-auto'>


// {/* email */}
// <div className='flex flex-col'>
//     <label htmlFor="">email</label>
//     <input type="email"
//     name='email'
//     value={formDetails.email}
//     className='border-1 border-gray-400 '
//     onChange={(e)=> setFormDetails({...formDetails,[e.target.name]:e.target.value})}
    
//     />
// </div>
// {/* password */}
// <div className='flex flex-col'>
//     <label htmlFor="">password</label>
//     <input type="password" 
//     name='password'
//     value={formDetails.password}
//     className='border-1 border-gray-400 '
//      onChange={(e)=> setFormDetails({...formDetails,[e.target.name]:e.target.value})}
//     />
// </div>
// <div className='flex items-center justify-center'>

// <button type='submit' className='bg-blue-500 text-white rounded-lg  px-4'>submit</button>
// </div>
    
// </form>

//     </div>




export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}
