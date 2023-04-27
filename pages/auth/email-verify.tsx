import { useRouter } from 'next/router';
import React, { useState } from 'react';

const VerifyEmail = () => {
    const router = useRouter();
    const { query } = router;
    const verificationToken = query?.token;

    console.log(verificationToken);
    const [pageLoading, setPageLoading] = useState(true);
    const [error, setError] = useState(false);
    return <div></div>;
};

export default VerifyEmail;
