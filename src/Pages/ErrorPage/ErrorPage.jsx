/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    // eslint-disable-next-line no-undef
    const navigate = useNavigate()
    const handleGoBack = () =>{
        navigate("/")
    }
return (
    <div className="flex  relative justify-center h-screen">
      <img className="w-full h-full" src="https://cdn.dribbble.com/users/2504672/screenshots/5675992/008-404-page.jpg"/>
      <button onClick = {handleGoBack} className="absolute bottom-[180px] font-Montserrat text-lg font-Poppins left-[150px] px-16 pt-6 pb-12 btn d-btn">
        Go back to home
      </button>
    </div>
  );
};

export default ErrorPage;