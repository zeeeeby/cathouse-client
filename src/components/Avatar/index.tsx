import React from 'react';
import styles from './Avatar.module.scss';
import clsx from 'clsx';

interface IProps {
    src?: string;
    width: string;
    height: string;
    className?: string;
    first_name?: string;
    last_name?: string;
}
export const Avatar: React.FC<IProps> = ({
    height,
    src,
    width,
    className,
    first_name,
    last_name,
    children
}) => {
    const colors = [
        '#4388B9',
        '#DD4554',
        '#7965C1',
        '#41A4A6',
        '#CB4F87',
        '#63AA55',
        '#DB863B',
    ];

    const style = {
        minWidth: width,
        width,
        height,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        fontSize: parseInt(height) / 2,
    };
    if (!src) {
        //@ts-ignore
        style.backgroundColor = colors[first_name?.length % colors.length];
    }
    if (!src)
        return (
            <div className={clsx(styles.circle, className)} style={style}>
                <span className={styles.initials}>{`${
                    first_name?.[0].toUpperCase() || ''
                }${last_name?.[0].toUpperCase() || ''}`}</span>
                {children}
            </div>
        );
    return <div style={style} className={clsx(styles.avatar, className)}>{children}</div>;
};
