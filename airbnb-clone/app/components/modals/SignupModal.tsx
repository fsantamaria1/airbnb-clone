'use client';

import Modal from "./Modal";
import { useState } from "react"
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";


const SignupModal = () => {
    const signupModal = useSignupModal()
    const [email, setEmail] = useState('');
    const [errors, seterrors] = useState<String[]>([]);
    const [password1, setpassword1] = useState('');
    const [password2, setpassword2] = useState('');


    const content = (
        <>
            <form className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Your email" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                <input onChange={(e) => setpassword1(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input onChange={(e) => setpassword2(e.target.value)} placeholder="Confirm password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                {errors.map((error, index) => {
                    return (
                        <div 
                            key={`error_${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                        >
                        {error}
                    </div>
                    )
                })}
                
                <CustomButton
                    label="Submit"
                    onClick={() => console.log("Clicked")}
                />
            
            </form>
        </>
    )
    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal;