import React from 'react'
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'
const contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className=" modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}

                        <h3 className="font-bold text-lg">Contact  </h3>
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-6 top-4">✕</Link>
                        <div className='mt-4 '>
                            <span >Name</span>
                            <br />
                            <input type="text" placeholder='Enter your FullName' className='w-80 px-3 mt-1 border rounded-md outline-none'
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
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
                            <span >Message</span>
                            <br />
                            <textarea
                                placeholder="Bio"
                                className="textarea textarea-bordered textarea-md w-full max-w-xs"  type="text" {...register("text", { required: true })}></textarea>
                                 {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className=' flex justify-between mt-2 items-center'>
                           <button className='bg-pink-500  text-white px-32 py-2 border rounded-[5px] hover:bg-pink-600'>Submit!</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default contact
