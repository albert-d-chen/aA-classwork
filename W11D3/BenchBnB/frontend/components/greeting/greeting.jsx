import React from 'react';
import {Link} from 'react-router-dom';

const Greeting =  ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <h1>Hi, {currentUser.username}</h1>
            <button onClick={logout} >Log Out Fool</button>
        </div>
    ) : (
        <div>
            <Link to='/signup'>Sign Up!</Link>
            <br/>
            <Link to='/login'>Log In</Link>
        </div>
    )

    return (
        <div>
            <div>
                {display}
            </div>
        </div>
    )

}

// export default ({ currentUser, logout }) => {
//     const display = currentUser ? (
//         <div>
//             <p>Hello, {currentUser.username}</p>
//             <button onClick={logout}>Logout!</button>
//         </div>
//     ) : (
//             <div>
//                 <Link className="btn" to="/signup">Sign Up</Link>
//                 <Link className="btn" to="/login">Log In</Link>
//             </div>
//         );

//     return (
//         <header className="nav-bar">
//             <h1 className="logo">BLUEBIRD</h1>
//             <div>
//                 {display}
//             </div>
//         </header>
//     );
// };




export default Greeting;