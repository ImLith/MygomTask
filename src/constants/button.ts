import { ButtonHTMLAttributes } from 'react';

const BUTTON_STYLE_DEFAULT: ButtonHTMLAttributes<HTMLButtonElement> = {
  className:
    'bg-gray-400 text-gray-200 hover:bg-gray-300 focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:hover:bg-gray-400',
};

const BUTTON_STYLE_INFO: ButtonHTMLAttributes<HTMLButtonElement> = {
  className:
    'bg-blue-400 text-gray-200 hover:bg-blue-300 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:hover:bg-blue-400',
};

const BUTTON_STYLE_DANGER: ButtonHTMLAttributes<HTMLButtonElement> = {
  className:
    'bg-red-400 text-gray-200 hover:bg-red-300 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:hover:bg-red-400',
};

export const BUTTON_STYLES = {
  default: BUTTON_STYLE_DEFAULT,
  info: BUTTON_STYLE_INFO,
  danger: BUTTON_STYLE_DANGER,
} as const;
