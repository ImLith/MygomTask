import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const ALIGNMENT = {
  horizontal: 'justify-center h-fit',
  vertical: 'items-center',
} as const;

interface ICenter {
  children: ReactNode;
  type?: keyof typeof ALIGNMENT;
  className?: string;
}

const Center = ({ children, type, className }: ICenter) => {
  const alignment =
    !type || !ALIGNMENT?.[type]
      ? 'items-center justify-center'
      : ALIGNMENT[type];

  return (
    <div className={twMerge(className, alignment, 'flex')}>{children}</div>
  );
};

export default Center;
