import { useState } from "react"; 
import InputBox from "../components/inputBox";
import googleIcon from "../assets/googleIcon.jpg";
import { Link } from "react-router-dom";

const UserAuthForm = ({type}) => {

    return (
        <section className="flex items-center justify-center mt-10" style={{height:"70vh"}}>
            <form>
                <h1 className="text-4xl font-serif capitalize text-center ">
                    {type == "Sign Up" ? "Join dev.Patrika" : "Welcome Back, "}
                </h1>
                {
                    type != "Sign In" ? 
                        <InputBox 
                            name="fullName"
                            type="text"
                            value="Full Name"
                            id="fullname"
                            placeholder="Enter your Full Name"
                        /> 
                    : ""
                }
                <InputBox 
                    name="email"
                    type="email"
                    value="Email"
                    placeholder="Enter your Email"
                /> 
                <InputBox 
                    name="password"
                    type="password"
                    value="Password"
                    placeholder="Password"
                    className="input-box flex-1 mr-3"
                /> 
                { type != "Sign In" ? 
                    <InputBox 
                        name="password"
                        type="password"
                        value="Password"
                        placeholder="Confirm your Password"
                    /> : ""
                } 
                <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded-full">
                    {
                        type
                    }
                </button>
                <div className="relative flex items-center justify-center opacity-70 gap-3 my-5 uppercase text-black font-bold">
                    <hr className="w-1/2 border-black" />
                    Or
                    <hr className="w-1/2 border-black" />
                </div>
                <div className="bg-black flex items-center justify-center w-full h-10 rounded-full text-white text-center">
                    <img src={googleIcon} className="rounded-full h-6 w-6 ml-4 mix-blend-lighten m-3" />
                    Continue With Google
                </div>
                {
                    type == "Sign In" ? <SignUpMessage /> : <SignInMessage />
                }
            </form>
        </section>
    )
}

function SignUpMessage() {
    return (
        <p className="mt-5">Don't have an account? <Link to="/signup" className="underline font-semibold">Sign up here</Link> </p>
    )
}
function SignInMessage() {
    return (
        <p className="mt-5">Already a member? <Link to="/signin"className="underline font-semibold">Sign in here</Link> </p>
    )
}    

export default UserAuthForm;