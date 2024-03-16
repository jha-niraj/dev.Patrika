import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";

const InputBox = ({name, type, id, value, placeholder}) => {
    const [ passwordVisible, setPasswordVisible ] = useState(false);

    return (
        <div className="w-full relative">
            <input
                name={name}
                type={type == "password" ? passwordVisible ? "text" : "password" : type }
                placeholder={placeholder}
                id={id}
                className="input-box mt-10 placeholder:pl-6"
            />
            {
                type == "password" ? 
                    <FaRegEyeSlash className="cursor-pointer absolute inset-y-0 right-0 my-auto mr-3 h-5 w-5 text-gray-800" onClick={() => setPasswordVisible(currentVal => !currentVal)} /> : ""
            }
        </div>
    )
}

export default InputBox;