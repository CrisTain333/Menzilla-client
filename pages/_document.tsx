import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
                rel="stylesheet"
            ></link>
            <link rel="manifest" href="/manifest.json" />

            <link
                rel="icon"
                href="https://i.ibb.co/yd69Dkw/letter-m-logo-design-with-black-orange-color-and-circle-cool-modern-icon-letters-logo-vector-removeb.png"
            />
            <title>Menzilla</title>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
