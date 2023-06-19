import React from 'react'
import { auth } from '../firebase.js'
// import { Button } from '@material-ui/core'
import { AiOutlineArrowRight } from 'react-icons/ai';
function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
        
            <div className='signp_div'>
            <button className='signout' style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</button>
                 <AiOutlineArrowRight onClick={() => auth.signOut()}/>
            </div>
        </div>
    )
}

export default SignOut
