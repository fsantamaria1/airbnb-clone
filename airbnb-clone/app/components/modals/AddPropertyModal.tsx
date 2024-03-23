'use client';

import Image from "next/image";

import { useState } from "react";
import Modal from "./Modal";
import Categories from "../addproperty/Categories";
import useAddPropertyModalModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButton";

const AddPropertyModal = () => {
    // States
    const [currentStep, setCurrentStep] = useState(1);
    const [dataCategory, setDataCategory] = useState('');

    const addPropertyModal = useAddPropertyModalModal();

    // Set data values
    const setCategory = (category: string) => {
        setDataCategory(category)
    }


    const content = (
        <>
            {currentStep ==1? (
                <>
                    <h2 className="mb-6 text-2xl">Choose category</h2>

                    <Categories
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}
                    />

                    <CustomButton
                        label="Next"
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ): currentStep == 2 ? (
                <>
                    <h2 className="mb-6 text-2xl">Describe your place</h2>

                    <CustomButton
                        label="Previous"
                        className="mb-2 bg-black hover-bg:gray-800"
                        onClick={() => setCurrentStep(1)}
                    />

                    <CustomButton
                        label="Next"
                        onClick={() => setCurrentStep(3)}
                    />
                </>
            ) : (
                <p>Next Step here</p>
            )
            }
            
        </>
    )

    return (
        <>
            <Modal
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label="AddProperty"
                content={content}
            />
        </>
    )
}

export default AddPropertyModal;