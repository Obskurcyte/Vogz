import React from 'react';
import {useRouter} from 'next/router';

const PurpleButton = ({id, ...rest}) => {

    const router = useRouter();

    return (
        <button className="purple-button-container" {...rest} id={id} onClick={() => router.push('/comment-ca-marche')}>
            <p>Comment ça marche ?</p>
        </button>
    );
};

export default PurpleButton;