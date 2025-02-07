import cx from 'classnames';
import { ReactNode, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface IDialog {
  isOpen: boolean;
  onClose: () => void;
}

interface IBaseDialog extends IDialog {
  children: ReactNode;
  className?: string;
  wrapperclassName?: string;
  center?: boolean | 'horizontal' | 'vertical';
  closeBtn?: false | ReactNode;
  noAnimation?: boolean;
  noCloseBackdrop?: boolean;
}

const BaseDialog = ({
  isOpen,
  children,
  className,
  wrapperclassName,
  center,
  closeBtn,
  onClose,
  noAnimation,
  noCloseBackdrop,
}: IBaseDialog) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isCentered = center == undefined || center == true;

  const handleTransitionEnd = () => {
    if (isOpen) return;
    dialogRef.current?.close();
    onClose();
  };

  useEffect(() => {
    if (isOpen) dialogRef.current?.showModal();
    else if (noAnimation) dialogRef.current?.close();
    // No point in having `noAnimation` as a dependency array.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <dialog
      aria-hidden={!isOpen}
      aria-modal="true"
      ref={dialogRef}
      onAnimationEnd={handleTransitionEnd}
      className={twMerge(
        cx(
          'shadow-lg backdrop:bg-black/50 backdrop:backdrop-blur-md',
          className,
          'fixed',
          {
            'left-1/2 -translate-x-1/2': isCentered || center === 'horizontal',
            'top-1/2 -translate-y-1/2': isCentered || center === 'vertical',
            [isOpen
              ? 'animate-dialogopen backdrop:animate-dialogopen'
              : 'animate-dialogclose backdrop:animate-dialogclose']:
              noAnimation != true,
          },
        ),
      )}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current && noCloseBackdrop != true)
          onClose();
      }}>
      <div
        className={twMerge(
          'relative flex flex-col items-center',
          wrapperclassName,
        )}>
        {closeBtn == false ? null : (closeBtn ?? getDefaultClosebtn(onClose))}
        {children}
      </div>
    </dialog>
  );
};

const getDefaultClosebtn = (onClose: IBaseDialog['onClose']) => (
  <button
    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
    onClick={onClose}>
    ✕
  </button>
);

export default BaseDialog;
