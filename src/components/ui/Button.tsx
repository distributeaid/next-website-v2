import cx from 'classnames';
import { FC, ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = {
    isPrimary?: boolean;
    isOutline?: boolean;
};

const Button: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>> = ({
    isPrimary,
    isOutline,
    children,
    ...props
}) => {
    return (
        <button
            type={props.type || 'button'}
            className={cx('rounded w-[116px] h-[38px] flex items-center justify-center', {
                'bg-navy-700 text-white': isPrimary,
                'bg-transparent border border-gray-400 text-gray-500': isOutline,
            })}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
