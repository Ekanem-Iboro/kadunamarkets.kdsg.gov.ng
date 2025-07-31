import { Auth, User } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
// import Tradefair_header from '../Tradefair_header'

type Props = {
    user: User,
    setAuthState: Auth,
    setUser: any
}

function home({
    user,
    setAuthState,
    setUser
}: Props) {


 
  return (
    <></>
    // <div>This is the home component! and {user} is logged in</div>
    // <Tradefair_header />
  )
}

export default home