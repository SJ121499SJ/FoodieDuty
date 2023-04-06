import { useState, useEffect } from 'react'
import { auth } from './firebase'
import { onAuthStateChanged, signOut} from 'firebase/auth'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function AuthState() {
    const navigate = useNavigate()
    const [authUser, setAuthUser] = useState('')
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser('')
            }
          });
    }, [authUser])
    
    const handleSignOut = () => {
      signOut(auth).then(() => {
        navigate("/signin")
      }).catch((error) => {

      });
    }


  return (
    <div>{ authUser.displayName ? <><p>Hello, {authUser.displayName}</p><Button variant='outlined' color='error' onClick={handleSignOut}>Sign Out</Button></> : <p><Button variant='outlined' color='success'> Sign In </Button></p>}</div>
  )
}
