import cx from "classnames";
import { ButtonHTMLAttributes, FunctionComponent, Ref } from "react";

/**
 * By default, it should look like a neutral button
 *
 * If it needs added weight, use the primary variant
 * If it's in a table row and needs to be shorter, use the slim variant
 *
 * Inspiration:
 * - https://polaris.shopify.com/components/actions/button
 * - https://primer.style/css/components/buttons
 *
 */

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Use this in a table or list to avoid increasing the height of the container.
   */
  slim?: boolean;
  /**
   * Choose the right button for your context
   * @param default This is the default button. Use another style if the button requires a different visual weight.
   * @param primary Used to highlight the most important actions. Use sparingly! Avoid showing multiple primary buttons in the same section.
   */
  variant?: "default" | "primary" | "rosemary";
  /**
   * An optional way to pass a ref down to the <button> element
   */
  forwardRef?: Ref<HTMLButtonElement>;
};

const Button: FunctionComponent<ButtonProps> = ({
  variant = "default",
  slim = false,
  type = "button",
  forwardRef,
  ...otherProps
}) => {
  const { disabled, className, children } = otherProps;

  const classes = cx(
    "inline-flex items-center border text-center text-sm leading-5 font-semibold tracking-wide rounded whitespace-no-wrap focus:outline-none focus:ring-4 transition ease-in-out duration-100",
    className,
    {
      // Default
      "bg-white border-gray-300 text-gray-600 shadow-sm ring-gray-200 hover:text-gray-800 hover:drop-shadow-md active:bg-gray-100 active:text-gray-900":
        variant === "default" && !disabled,
      "bg-gray-50 border-gray-300 text-gray-400":
        variant === "default" && disabled,
      // Primary variant
      "bg-navy-700 border-transparent text-white ring-navy-300 hover:bg-navy-800 hover:drop-shadow-md active:bg-navy-900 active:drop-shadow-none":
        variant === "primary" && !disabled,
      "bg-navy-500 border-transparent text-navy-100":
        variant === "primary" && disabled,
      // Rosemary variant
      "bg-rosemary-800 border-transparent text-white ring-rosemary-300 hover:bg-rosemary-900 hover:drop-shadow-md active:bg-rosemary-900 active:drop-shadow-none":
        variant === "rosemary" && !disabled,
      "bg-rosemary-500 border-transparent text-rosemary-100":
        variant === "rosemary" && disabled,
      // Sizing
      "px-4 py-2": !slim,
      "px-3 py-1": slim,
      // Disabled stuff
      "cursor-not-allowed": disabled,
    },
  );

  if (disabled) {
    otherProps["aria-disabled"] = "true";
  }

  return (
    <button {...otherProps} ref={forwardRef} type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;

// import cx from 'classnames';
// import { FC, ButtonHTMLAttributes, PropsWithChildren } from 'react';

// type ButtonProps = {
//     isPrimary?: boolean;
//     isOutline?: boolean;
// };

// const Button: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>> = ({
//     isPrimary,
//     isOutline,
//     children,
//     ...props
// }) => {
//     return (
//         <button
//             type={props.type || 'button'}
//             className={cx('rounded w-[116px] h-[38px] flex items-center justify-center', {
//                 'bg-navy-700 text-white': isPrimary,
//                 'bg-transparent border border-gray-400 text-gray-500': isOutline,
//             })}
//             {...props}
//         >
//             {children}
//         </button>
//     );
// };

// export default Button;
