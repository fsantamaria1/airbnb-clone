'use client';

import Modal from "./Modal";
import { useState } from "react"
import { useRouter } from "next/navigation";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";


const SignupModal = () => {
    const router = useRouter();
    const signupModal = useSignupModal()
    const [email, setEmail] = useState('');
    const [errors, seterrors] = useState<String[]>([]);
    const [password1, setpassword1] = useState('');
    const [password2, setpassword2] = useState('');

    const submitSignup = async () => {
        const formData = {
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.post('/api/auth/register/', formData)

        if (response.access) {
            // handleLogin will go here

            signupModal.close()

            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error
            })

            seterrors(tmpErrors)
        }
    }


    const content = (
        <>
            <form 
                action={submitSignup}
                className="space-y-4"
            >
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
                    onClick={submitSignup}
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