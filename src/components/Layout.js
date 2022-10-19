import { useEffect } from 'react';
import Head from 'next/head';
import { toFieldPath, toObjectId } from '@stackbit/annotations';

import Header from './Header';
import Footer from './Footer';

let offsetY = 0;
let ticking = false;

function handleHeader(scrollPos) {
    if (scrollPos > 0) {
        document.body.classList.add('has--scrolled');
    } else {
        document.body.classList.remove('has--scrolled');
    }
}

function handleScroll() {
    offsetY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function () {
            handleHeader(offsetY);
            ticking = false;
        });
        ticking = true;
    }
}

const Body = (props) => {
    const { page, page: { title: pageTitle }, config: { title: siteTitle } } = props;
    const title = `${pageTitle ? pageTitle + ' | ' : ''} ${siteTitle}`;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google" content="notranslate" />
                <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i" rel="stylesheet" />
            </Head>
            <div id="page" className={`site palette-${props.config.palette}`} {...toObjectId(page.__metadata.id)}>
                <Header {...props} />
                <main id="content" className="site-content">
                    {props.children}
                </main>
                <Footer {...props} />
            </div>
        </>
    );

}

export default Body;
