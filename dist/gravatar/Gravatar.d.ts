import React from 'react';

interface GravatarProps {
    email: string;
    alt: string;
    size?: number;
    className?: string;
}
declare const Gravatar: React.FC<GravatarProps>;

export { Gravatar as default };
