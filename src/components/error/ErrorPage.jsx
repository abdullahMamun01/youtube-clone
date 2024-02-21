import React from 'react'
import { Outlet, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <section className=" py-[120px] text-secondary">
          
            <div className="container mx-auto">
                <div className="-mx-4 flex">
                    <div className="w-full px-4">
                        <div className="mx-auto max-w-[400px] text-center">
                            <h2 className="mb-2 text-[50px] font-bold leading-none  dark:text-gray-100 sm:text-[80px] md:text-[100px]">
                                {error.status}
                            </h2>
                            <h4 className="mb-3 text-[22px] font-semibold leading-tight text-secondary ">
                                {error.statusText}
                            </h4>


                        </div>
                    </div>
                </div>
            </div>

          
        </section>
    )
}

export default ErrorPage