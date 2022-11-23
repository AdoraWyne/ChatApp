import { signOut } from 'firebase/auth'
import { FaRocketchat } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import { auth } from '../Firebase-config'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Link } from "react-router-dom"


const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
    return (
        <div className="flex flex-row items-center justify-between gap-3 text-dcBlue p-4 border-b-2">
            {/* Brand */}
            <div className='flex gap-2 items-center font-bold text-xl'>
                <FaRocketchat />
            </div>
            {/* User */}
            <div className='flex gap-2 items-center text-xl font-bold'>
                <Link to="/chatapp/userprofile" className="flex items-center gap-2">
                    <img src={currentUser.photoURL} alt="profile picture" className='w-10 h-10 object-cover rounded-full'/>
                    <span>{currentUser.displayName}</span>
                </Link>
                <MdLogout onClick={()=>signOut(auth)}/>
            </div>
           
        </div>
    )
}

export default Navbar