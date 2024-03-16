import { useState } from "react";
import "./App.css";

// Importing necessary Browser Router Components:
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Components used in the React:
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import UserAuthForm from "./pages/userAuthForm";
import WriteCheckPoint from "./pages/writeCheckpoint";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				{/* If you want to make this work that is nested routes, then you need to use OUTLET in your parent component */}
				<Route path="signup" element={<UserAuthForm type="Sign Up" />} />
				<Route path="signin" element={<UserAuthForm type="Sign In" />} />
				<Route path="write" element={<WriteCheckPoint />} />
			</Route>
		</Routes>
	);
}

export default App;
