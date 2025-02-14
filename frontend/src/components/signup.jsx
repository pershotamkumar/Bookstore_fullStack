import React from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import Login from './login'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
const signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname ||"/"
    const onSubmit = async(data) => {
        let userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        console.log(data)
       await axios.post("http://localhost:8086/user/signup",userInfo)
        .then((res)=>{
            console.log(res)
            if(res.data){
                toast.success('user created successfully');
                navigate(from,{replace : true});
            }
         
        })
        .catch((error)=>{
            console.log( "Signup Error"+ error)
            toast.error(error.message);
        })
    };
    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className=" modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}

                        <h3 className="font-bold text-lg">Register </h3>
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-6 top-4">✕</Link>
                        <div className='mt-4 '>
                            <span >Name</span>
                            <br />
                            <input type="text" placeholder='Enter your FullName' className='w-80 px-3 mt-1 border rounded-md outline-none'
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 '>
                            <span >Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' className='w-80 px-3 mt-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>
                        {/* password */}
                        <div className='mt-4 '>
                            <span >Password</span>
                            <br />
                            <input type="password" placeholder='Enter your Password' className='w-80 px-3 mt-1 border rounded-md outline-none'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

                        </div>

                        <div className=' flex justify-between mt-7 items-center'>
                            <button className='bg-pink-500 hover:bg-pink-700 duration-300 text-white rounded-md px-4 py-1'>Register</button>
                            <p>Already registered ?{" "} <button onClick={() => document.getElementById('my_modal_3').showModal()} className='underline cursor-pointer text-blue-500'>Sign-in!</button> {" "}
                                <Login />
                            </p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default signup
