import { Fragment } from 'react';

import { Link, safePrefix } from '../utils';
import FooterLinks from './FooterLinks';
import Action from './Action';

const Footer = (props) => {
    const { config: { header, footer } } = props;

    return (
        <footer id="colophon" className="site-footer">
            <div className="footer-top outer">
                <div className="inner">
                    <div className="footer-widgets">
                        <div className="widget footer-branding">
                            {footer.logo_img ?
                                <p className="site-logo">
                                    <Link href={safePrefix('/')}><img src={footer.logo_img} alt="Logo" /></Link>
                                </p>
                                :
                                <p className="site-title">
                                    <Link href={safePrefix('/')}>{header.title}</Link>
                                </p>
                            }
                            {footer.tagline &&
                                <p className="site-description">
                                    {footer.tagline}
                                </p>
                            }
                        </div>
                        {((footer.nav_links && footer.has_nav) || footer.has_social) &&
                            <nav className="widget footer-navigation">
                                <div className="footer-nav-inside">
                                    {(footer.nav_links && footer.has_nav) &&
                                        <div className="secondary-nav">
                                            <h2 className="widget-title">{footer.nav_title}</h2>
                                            <FooterLinks links={footer.nav_links} />
                                        </div>
                                    }
                                    {footer.has_social &&
                                        <div className="secondary-nav">
                                            <h2 className="widget-title">{footer.social_title}</h2>
                                            <FooterLinks links={footer.social_links} />
                                        </div>
                                    }
                                </div>
                            </nav>
                        }
                    </div>
                </div>
            </div>
            <div className="site-info outer">
                <div className="inner">
                    {footer.content}
                    &nbsp;
                    {footer.links.map((link, linkIdx) => (
                        <Fragment key={linkIdx}>
                            <Action key={linkIdx} action={link} />.
                        </Fragment>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
