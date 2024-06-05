import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src="https://i.ibb.co/BK1GLmn/error.png" alt="404" />
            <Link> <button>home</button></Link>
        </div>
    );
};

export default NotFound;