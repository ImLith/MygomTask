import { ReactNode, useEffect, useRef } from 'react';

interface IScrollLoaderList {
  children: ReactNode;
  className?: string;
  onEndReach: () => void;
}

const ScrollLoaderList = ({
  children,
  className,
  onEndReach,
}: IScrollLoaderList) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const handleScroll = () => {
      if (
        currentRef &&
        currentRef.scrollHeight - currentRef.scrollTop ===
          currentRef.clientHeight
      )
        onEndReach();
    };

    currentRef?.addEventListener('scroll', handleScroll);
    return () => currentRef?.removeEventListener('scroll', handleScroll);
  }, [onEndReach]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

export default ScrollLoaderList;
