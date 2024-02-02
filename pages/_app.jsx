import Title from "../src/components/Title";
import GlobalStyle from "../src/theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Title>
                {/* <!-- Google tag (gtag.js) --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-0039FXRHXW"></script>
                <script 
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
        
                            gtag('config', 'G-0039FXRHXW');
                        `
                    }}
                />
                {/* Tag do google analytics */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"  />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
            </Title>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;