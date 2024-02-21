import React from 'react'
import PlusIcon from '../../assets/icons/add-circle-plus.svg'
import HomeIcon from '../../assets/icons/home.svg'
import { useAuthContext } from '../../hooks/context/useAuthcontext'
import SignInIcon from '../../assets/icons/sign-up.svg'
import Login from '../auth/Login'
import useFirebaseAuth from '../../hooks/useFirebaseAuth'
import { Link } from 'react-router-dom'
const MobileMenu = () => {
    const { user } = useAuthContext()
    const {userSignIn} = useFirebaseAuth()
    console.log(user)
    return (
        <div className="min-w-screen w-full md:hidden flex items-center justify-center fixed bottom-0   border-t border-gray bg-primary">
            <div className="w-full mx-auto">

                <div className="w-full bg-white shadow-lg rounded-2xl py-3">
                    <div className="flex justify-between w-full">
                        <div className="flex-auto my-auto">
                            <a href="#" className="flex items-center justify-center text-center mx-auto px-4 py-2  text-indigo-500">
                                <img src={HomeIcon} className="w-8 h-8 rounded-full"></img>
                            </a>
                        </div>
                        <div className="flex-auto   my-auto">
                            <a href="#" className="flex items-center justify-center text-center mx-auto px-4 py-2  text-indigo-500">
                                <img src={PlusIcon} className="w-8 h-8 rounded-full "></img>
                            </a>
                        </div>
                        <div className="flex-auto   my-auto">
                            <a href="#" className="flex items-center justify-center text-center mx-auto px-4 py-2  text-indigo-500">
                               {user ? 
                              <Link to="/history">
                               <img className='w-8 h-8 rounded-full' src={user.profileUrl} alt="" />
                              </Link>
                               :
                               <>
                                    <img onClick={userSignIn } className='w-8 h-8'  src={SignInIcon} alt="" />
                               </>
                            }
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </div >
    )
}

export default MobileMenu