'use client'

import React from 'react';
import { useFormik } from 'formik';
import { Input } from "@nextui-org/react";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form  className='  flex-col gap-4 justify-around items-center' onSubmit={formik.handleSubmit}>
      <div className='m-5'>
        <Input
          isClearable
          type="text"
          label="First Name"
          variant="bordered"
          onChange={formik.handleChange}
          name="firstName"
          value={formik.values.firstName}
          placeholder="Enter your FirstName"
          
        />
        {formik.errors.firstName}
      </div>
      <div className='m-5'>
        <Input
          isClearable
          type="text"
          label="Last Name"
          variant="bordered"
          onChange={formik.handleChange}
          name="lastName"
          value={formik.values.lastName}
          placeholder="Enter your LastName"
          className="max-w-xs"
        />
        {formik.errors.lastName}
      </div>
      <div className='m-5'>
        <Input
          isClearable
          type="email"
          label="Email"
          variant="bordered"
          onChange={formik.handleChange}
          name="email"
          value={formik.values.email}
          placeholder="Enter your email"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />

        <div className='text-red'>{formik.errors.email}</div>
      </div>
      <div className='m-5'>
        <Input
          isClearable
          type="password"
          label="Password"
          variant="bordered"
          onChange={formik.handleChange}
          name="password"
          value={formik.values.password}
          placeholder="Enter your password"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />
        {formik.errors.password}
      </div>
      <div  className='m-5'>
        <button  className='bg-gray-300 py-2 px-10 rounded-3xl font-semibold' type="submit">Submit</button></div>
    </form>
  );
};


export default SignupForm