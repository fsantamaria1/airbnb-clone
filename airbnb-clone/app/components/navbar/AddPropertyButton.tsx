'use client';

import useLoginModal from "@/app/hooks/useLoginModal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

interface AddPropertyButtonProps {
    userId?: String | null;
}


const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {

    const loginModal = useLoginModal();
    const addPropertyModal = useAddPropertyModal();
    const airBnbYourHome = () => {
        if (userId) {
            addPropertyModal.open()
        } else {
            loginModal.open()
        }
        
    }
    return (
        <div 
            onClick={airBnbYourHome}
            className="custor-pointer p-2 text-sm font-semibold rounded-full hover:bg-gray-200"
        >
            Airbnb you home
        </div>
    )
}

export default AddPropertyButton;