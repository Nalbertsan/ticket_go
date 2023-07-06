/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  red?: boolean;
  className?: string;
  h?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  red,
  className,
  type,

}) => (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type || 'button'}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        transition
        linear 
        rounded-xl 
        px-5 py-3 
        text-base 
        duration-200 
        hover:shadow-lg 
        hover:shadow-brand-500/50
        hover:scale-105
        ${className || 'w-full'}
        ${red ? 'bg-rose-500' : 'bg-sky-500'}
        ${red ? 'hover:bg-rose-600' : 'hover:bg-sky-600'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
);

export default Button;
