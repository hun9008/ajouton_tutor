import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function Random() {
    const [url, setUrl] = useState(`/servey?randomString=${uuidv4()}`);

    const generateRandomURL = () => {
        setUrl(`/servey?randomString=${uuidv4()}`);
    }

    return (
        <div>
            <p>Generated URL: <Link to={url}>{url}</Link></p>
            <button onClick={generateRandomURL}>Generate Random URL</button>
        </div>
    );
}

export default Random;
