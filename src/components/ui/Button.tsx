'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string;
  target?: string;
  rel?: string;
  glow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-white text-black font-semibold
    hover:bg-brand-yellow hover:text-white
    border border-white
  `,
  secondary: `
    bg-brand-yellow text-white font-semibold
    hover:bg-white hover:text-black
    border border-brand-yellow hover:border-white
  `,
  outline: `
    bg-transparent text-white font-semibold
    border border-white
    hover:bg-white hover:text-black
  `,
  ghost: `
    bg-transparent text-white/80 font-medium
    hover:text-white
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = 'button',
      onClick,
      href,
      target,
      rel,
      glow = false,
    },
    ref
  ) => {
    const baseClassName = cn(
      'relative inline-flex items-center justify-center gap-2',
      'transition-all duration-300 ease-out',
      'focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'uppercase tracking-wider',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : leftIcon ? (
          <span>{leftIcon}</span>
        ) : null}
        <span>{children}</span>
        {rightIcon && !isLoading && <span>{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          className={baseClassName}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={baseClassName}
        disabled={disabled || isLoading}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
