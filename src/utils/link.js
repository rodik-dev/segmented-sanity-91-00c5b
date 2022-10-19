import React from 'react';
import NextLink from 'next/link';

export default function Link({ children, href, ...other }) {
    const internal = /^\/(?!\/)/.test(href);
    if (internal) {
        return (
            <NextLink href={href}>
                <a {...other}>{children}</a>
            </NextLink>
        );
    }

    return <a href={href} {...other}>{children}</a>;
};
