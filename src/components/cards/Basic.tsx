import { ReactNode } from 'react';

interface IBasicCard {
  children: ReactNode;
  title: string;
  footer?: ReactNode;
}

const BasicCard = ({ children, title, footer }: IBasicCard) => {
  return (
    <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      <div className="text-gray-700 text-center">{children}</div>
      {footer}
    </div>
  );
};

export default BasicCard;
