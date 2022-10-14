import { useRouter } from 'next/router';
import React from 'react';

const DynamicPage = () => {
    const routerValue = useRouter()

    const {id} = routerValue.query
    console.log(id);

    return (
        <div>
            <h1>This is a Dyanamic page {id}</h1>
        </div>
    );
};

export default DynamicPage;