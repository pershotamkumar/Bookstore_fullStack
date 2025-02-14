import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        };
    
        console.log("Sending data:", userInfo); // Debugging
        
        await axios.post("http://localhost:8086/user/login", userInfo)
            .then((res) => { 
                console.log("Response:", res.data); 
                toast.success('Logged in Successfully!');
                document.getElementById('my_modal_3').close()
                setTimeout(()=>{
                 localStorage.setItem("Users",JSON.stringify(res.data))
                 window.location.reload();
                    
                },1000)
            })
            .catch((error) => { 
                console.error("Error:", error.response?.data || error.message);
                toast.error(error.message);
                setTimeout(()=>{},2000)
            });
    };
    

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4" onClick={() => document.getElementById('my_modal_3').close()}>✕</Link>

                        <h3 className="font-bold text-lg">Login </h3>
                        <div className='mt-4 '>
                            <span >Email</span>
                            <br />
                            <input type="text" placeholder='Enter your email' className='w-80 px-3 mt-1 border rounded-md outline-none'
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
                            {errors.password && <span className='text-sm text-red-500 '>This field is required</span>}

                        </div>

                        <div className=' flex justify-between mt-7 items-center'>
                            <button className='bg-pink-500 hover:bg-pink-700 duration-300 text-white rounded-md px-4 py-1'>login</button>
                            <p>Not registered ?{" "} <Link to={'/signup'} className='underline cursor-pointer text-blue-500'>Signup now!</Link> {" "}</p>
                        </div>
                    </form>
                </div>
            </dialog>

        </>
    )
}

export default login
