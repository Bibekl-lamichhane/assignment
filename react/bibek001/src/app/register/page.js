import NavBar from "@/component/navbar/page";
import { Button, Navbar, Input } from "@nextui-org/react";

//create a folder inside src/app named register
// create a file page.js inside it and write following code:
const Register = () => {
  return (
    <>
      <NavBar />


      <div className="flex  h-screen justify-center items-center ">

        <div className='border-2 rounded-2xl p-4  w-1/4'>
          <h1 className='text-center mb-2 font-bold'>Register</h1>
          <Input type="name" label="Fullname" placeholder="Enter your Full Name" /><br />
          <Input type="email" label="Email" placeholder="Enter your email" /><br />
          <Input type="password" label="Password" placeholder="Enter your password" /><br />
          <Input type="password" label="Password" placeholder="Confirm your password" /><br />
          <div className="flex justify-center items-center"><br /><br /><br />
            <div className="flex  items-center ">
              <Button type="submit" color="primary">
                Register
              </Button>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}

export default Register
