import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { BUTTON_STYLES } from '@constants';
import { IButtonType } from '@types';

interface IBasicBtn
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'> {
  type: IButtonType;
  children: ReactNode;
}

const BasicBtn = ({ children, type, className, ...restProps }: IBasicBtn) => {
  const styleProps = BUTTON_STYLES[type] ?? {};

  return (
    <button
      {...styleProps}
      {...restProps}
      className={twMerge(
        'px-5 py-2 rounded h-fit',
        styleProps?.className,
        className,
      )}>
      {children}
    </button>
  );
};

export default BasicBtn;
