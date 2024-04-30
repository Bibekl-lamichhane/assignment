import React from 'react'
import NavBar from '@/component/navbar/page'
import { Input, Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import Link from 'next/link';

export const page = () => {
    return (
        <div>
            <NavBar userName="User"/>
            <div className='flex justify-center content-center m-20'>


                <div className='flex-col justify-center content-center border-4 rounded-2xl p-4 w-1/4 '>
                    <h1 className='text-center mb-2 font-bold'>
                        Login Page
                    </h1>
                    <Input
                        isRequired
                        type="email"
                        label="Email"
                        defaultValue="junior@nextui.org"
                        className="max-w-xs"
                    />
                    <br></br>
                    <Input
                        type="Password"
                        label="Password"
                        defaultValue="Password123"
                        className="max-w-xs"
                    /><br />
                    <div className='flex justify-between items-center'>
                        <Checkbox className='text-xs' defaultSelected color="default">Remember me?</Checkbox>
                        <Link href='/register' className='text-xs'>Dont have an account?</Link>
                    </div><br/>
                    <div className="flex  justify-center items-center ">
                        <Button type="submit" color="primary">
                            Login
                        </Button>
                            </div>
                    </div>
                </div>
            </div>
            )
}

            export default page