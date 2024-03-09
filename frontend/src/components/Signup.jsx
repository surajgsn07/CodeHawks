import { useState } from 'react';
import Buttons from './subcomponents/Buttons';
import InputComp from './subcomponents/InputComp';
import { FaCameraRetro } from "react-icons/fa6";
import defaultavatar from "../assets/defaultavatar.png";

const Signup = () => {
    const [data, setData] = useState({
        fullName: "",
        email: '',
        password: "",
        phoneNo: "",
        gender: "",
    });

    const signupHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/v1/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Signup successful:', responseData);
            } else {
                console.error('Signup failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <div className="flex justify-center items-center h-screen overflow-hidden dark:text-inherit text-white">
            <div className="dark:text-slate-800  flex flex-col text-xs justify-center w-[290px] max-h-[600px] h-fit py-8 px-5 dark:bg-white bg-slate-800 text-white rounded-2xl">
                <h2 className="font-bold text-2xl text-center my-3 p-2">Sign Up</h2>
                <div>
                    <div className='mx-auto w-full' >
                    <p className="block pl-2 mb-1 font-semibold">Profile Image</p>
                    <div className='relative bg-white overflow-hidden rounded-full w-[100px] h-[100px] mx-auto'>
                        <img src={defaultavatar} alt="avatar" className='w-full h-full rounded-full' />
                        <label className='absolute cursor-pointer' htmlFor='avatar'><FaCameraRetro size={20} className='inline-block text-slate-500 bottom-5 left-10 absolute'/></label>
                    </div>
                    <input type="file" id="avatar" className='mx-auto text-blue-700 w-full hidden' />
                    </div>
                    <InputComp type="text" id="fullName" name="fullName" label={"Full Name"} placeholder="Enter Full Name" onChange={handleInputChange} />
                    <InputComp type="email" id="email" name="email" label={"Email"} placeholder="Enter Email" onChange={handleInputChange} />
                    <InputComp type="tel" id="phoneNo" name="phoneNo" label={"Phone"} placeholder="Enter Phone" onChange={handleInputChange} />
                    <InputComp type="password" id="password" name="password" label={"Password"} placeholder="Enter Password" onChange={handleInputChange} />
                </div>
                <Buttons text="Sign Up" onClick={signupHandler} />

                <p className='text-center my-5 '>Already Signed Up? Login here </p>
            </div>
        </div>
    );
}

export default Signup;
