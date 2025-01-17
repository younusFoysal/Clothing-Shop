import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

const NavOffer = () => {
    return (
        <div className=" bg-black">
            <div className="container md:grid grid-cols-3 justify-between items-center py-2 mx-auto">
                <div></div>

                <div className="grid grid-cols-1 justify-center items-center">
                    <h1 className="text-white font-light text-center">Sign up and get 20% off to your first order.
                        <span className=" ml-1 font-semibold underline">
                    Sign Up Now
                         </span>
                    </h1>

                </div>
                <div className=" hidden md:grid items-end justify-end ">
                    <button>
                        <IoCloseOutline className="text-white text-2xl"/>
                    </button>
                </div>

            </div>


        </div>
    );
};

export default NavOffer;