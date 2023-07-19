import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
const ErrorPage = () => {
    return (
        <div>
            {/* Head Section */}
            <Head>
                <title>404 Page Not Found</title>
                <meta name="description" content={'404 Page Of Menzilla'} />
            </Head>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-12 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>
                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">Look like you&apos;re lost</h3>

                                    <p>the page you are looking for not available!</p>

                                    <Link href="/" className="link_404">
                                        Go to Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;
