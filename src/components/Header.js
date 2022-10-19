import { useRef, useEffect } from 'react';
import Router from 'next/router';
import _ from 'lodash';

import { Link, safePrefix } from '../utils';
import Action from './Action';

function handleRouteChange() {
    document.body.classList.remove('menu--opened');
}

function handleMenuOpen(event) {
    event.preventDefault();
    document.body.classList.add('menu--opened');
}

function handleMenuClose(event) {
    event.preventDefault();
    document.body.classList.remove('menu--opened');
}

const Header = (props) => {
    const menuOpenRef = useRef(null);

    function handleWindowResize() {
        if (menuOpenRef.current.offsetParent === null) {
            document.body.classList.remove('menu--opened');
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, true);
        Router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            window.removeEventListener('resize', handleWindowResize, true);
            Router.events.off('routeChangeStart', handleRouteChange);
        }
    }, []);

    const { config: { header }, page } = props;

    return (
        <header id="masthead" className="site-header outer">
            <div className="inner">
                <div className="site-header-inside">
                    <div className="site-branding">
                        {header.logo_img &&
                            <p className="site-logo">
                                <Link href={safePrefix('/')}>
                                    <img src={header.logo_img} alt="Logo" />
                                </Link>
                            </p>
                        }
                        {(page._type === 'landing') ?
                            <h1 className="site-title"><Link href={safePrefix('/')}>{header.title}</Link></h1>
                            :
                            <p className="site-title"><Link href={safePrefix('/')}>{header.title}</Link></p>
                        }
                    </div>
                    {(header.nav_links && header.has_nav) && (
                        <>
                            <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
                                <div className="site-nav-inside">
                                    <button id="menu-close" className="menu-toggle" onClick={handleMenuClose}>
                                        <span className="screen-reader-text">Open Menu</span>
                                        <span className="icon-close" aria-hidden="true" />
                                    </button>
                                    <ul className="menu">
                                        {header.nav_links.map((action, actionIdx) => (
                                            <li key={actionIdx} className={'menu-item' + ((_.trim(props.path, '/') === _.trim(action.url, '/')) ? ' current-menu-item' : '') + (action.primary ? ' menu-button' : '')}>
                                                <Action action={action} className={(action.primary ? 'button' : '')} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </nav>
                            <button id="menu-open" className="menu-toggle" ref={menuOpenRef} onClick={handleMenuOpen}>
                                <span className="screen-reader-text">Close Menu</span>
                                <span className="icon-menu" aria-hidden="true" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
