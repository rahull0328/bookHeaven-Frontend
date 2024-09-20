import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {

    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        alert("Are You Sure You Want to Log Out ?")
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            toast.success("Logget Out Successfully");
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (error) {
            toast.error("Error Logging Out");
            setTimeout(() => {}, 1000)
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-600 text-white rounded-md cursor-pointer' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
