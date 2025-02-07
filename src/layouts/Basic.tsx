import { ReactNode } from 'react';

interface IBasicLayout {
  children: ReactNode;
}

const BasicLayout = ({ children }: IBasicLayout) => {
  return <div className="grid bg-gray-100 min-h-screen">{children}</div>;
};

export default BasicLayout;
