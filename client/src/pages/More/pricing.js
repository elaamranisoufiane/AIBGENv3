import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ForgotPasswordForm = () => {
    const [plans, setPlans] = useState([]);
    const [plansPayment, setPlansPayment] = useState([]);

    useEffect(() => {
        const getPlans = async () => {
            try {
                const response = await axios.get('/api/getAllProductssGuest', {
                    withCredentials: true,
                });
                setPlans(response.data);
            } catch (error) {
                console.error("Fetching plans failed:", error);
            }
        };

        const getPlansPayment = async () => {
            try {
                const response = await axios.get('/api/getAllProductsspaymentGuest', {
                    withCredentials: true,
                });
                setPlansPayment(response.data);
            } catch (error) {
                console.error("Fetching payment plans failed:", error);
            }
        };

        getPlans();
        getPlansPayment();
    }, []); // Empty dependency array ensures useEffect runs only once after the component mounts

    return (
        <div className="flex justify-center min-h-screen mt-11">
            <div className="bg-white p-8 rounded-lg shadow-lg w-5/6 h-auto" >
                <div>
                    <h1 className="mt-2 text-center text-3xl font-extrabold text-gray-900">OUR Prices</h1>
                </div>

                <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900"> Monthly Plans </h3>
                </div>

                <div className="justify-center w-auto sm:grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-6">
                    {plans.map(plan => (
                        <div className="p-6 space-y-6 flex flex-col relative">
                            <div key={plan.id}>
                                <p className="text-gray-700 text-left">Need more generations?  Upgrade to <b>
                                    {plan.name}
                                </b> today.
                                </p>
                                <div className="flex flex-col">
                                    <div className="flex">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <div className="col-span-11 text-l flex font-semibold pl-2">
                                            <span className="font-bold">
                                                {plan.description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded w-full flex flex-col border-solid">
                                    <h3 className="text-3xl p-5 text-left pl-6">{plan.name}</h3>
                                    <div className="flex flex-row items-center pt-3 pl-6 pr-10 gap-3 pb-3 text-primary-500">
                                        <div className="flex flex-row gap-1">
                                            <span className="text-base">$</span>
                                            <p className="text-5xl font-semibold">{plan.price}</p>
                                        </div>
                                        <p className="font-light text-sm">/ month</p>
                                    </div>
                                    <div className="pl-6 pr-10 gap-3 pb-3 text-left">
                                        <ul className="text-gray-700">
                                            <li>No advertisements</li>
                                            <li>Commercial usage of photos</li>
                                            <li>Premium support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <a className="w-[200px] plan-btn bg-primary-500 text-white text-base font-semibold py-2 px-4 rounded-lg mt-4 absolute bottom-5" href="/register">Subscribe</a>

                        </div>
                    ))}



                </div>

                <hr></hr>

                <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900"> Add-on Plans  </h3>

                </div>

                <div className="justify-center w-auto sm:grid sm:grid-cols-1 md:grid-cols-3 gap-4 p-6">
                    {plansPayment.map(plan => (
                        <div className="p-6 space-y-6 flex flex-col relative">
                            <div key={plan.id}>
                                <p className="text-gray-700 text-left">Want to buy more credits? Upgrade to <b>
                                    {plan.name}
                                </b> today.
                                </p>
                                <div className="flex flex-col">
                                    <div className="flex">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <div className="col-span-11 text-l flex font-semibold pl-2">
                                            <span className="font-bold">
                                                {plan.description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded w-full flex flex-col border-solid">
                                    <h3 className="text-3xl p-5 text-left pl-6">{plan.name}</h3>
                                    <div className="flex flex-row items-center pt-3 pl-6 pr-10 gap-3 pb-3 text-primary-500">
                                        <div className="flex flex-row gap-1">
                                            <span className="text-base">$</span>
                                            <p className="text-5xl font-semibold">{plan.price}</p>
                                        </div>
                                        <p className="font-light text-sm"></p>
                                    </div>
                                    <div className="pl-6 pr-10 gap-3 pb-3 text-left">
                                        <ul className="text-gray-700">
                                            <li>No advertisements</li>
                                            <li>Commercial usage of photos</li>
                                            <li>Premium support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <a className="w-[200px] plan-btn bg-primary-500 text-white text-base font-semibold py-2 px-4 rounded-lg mt-4 absolute bottom-5" href="/register">Subscribe</a>

                        </div>
                    ))}



                </div>


            </div>
            <style>{`
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default ForgotPasswordForm;
