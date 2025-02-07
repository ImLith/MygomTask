import { getCatFacts } from '@fetchers';
import { useEffect, useState } from 'react';
import { BasicBtn, ScrollLoaderList } from '@components';
import { ICatFact } from '@types';
import BaseDialog, { IDialog } from './Base';

// To imitate the end of list
const MAX_ITEMS = 500;

const CatFactsDialog = ({ isOpen, onClose }: IDialog) => {
  const [items, setItems] = useState<ICatFact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLastItemDeleted, setIsLastItemDeleted] = useState(false);

  const canDelete = !!items.length;

  const loadMoreItems = async () => {
    if (isLoading || items.length >= MAX_ITEMS) return;
    setIsLoading(true);
  };

  const deleteLastItem = () =>
    setItems((prevItems) => {
      if (prevItems.length > 1) {
        setIsLastItemDeleted(true);
        return prevItems.slice(0, -1);
      }

      return prevItems;
    });

  const deleteItem = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, idx) => idx !== index));
    setIsLastItemDeleted(items.length - 1 == index);
  };

  useEffect(() => {
    if (!isLoading || !isOpen) return;

    const fetchData = async () => {
      // Adding a bigger delay as API is fast
      setTimeout(async () => {
        const { data, error } = await getCatFacts(20);

        if (!error && data?.data)
          setItems((prevItems) => [...prevItems, ...data.data]);

        setIsLoading(false);
      }, 1000);
    };

    fetchData();
  }, [isLoading, isOpen]);

  return (
    <BaseDialog isOpen={isOpen} onClose={onClose} className="p-3 rounded-xl">
      <h2 className="text-xl font-bold">Cat Facts</h2>
      <ScrollLoaderList
        onEndReach={loadMoreItems}
        className="mt-2 max-h-60 w-96 overflow-auto">
        <ol>
          {/* 
            I should use ID from the API as index changes whenever deleting items. 
            But the API dosent return an ID per item.
            Hence why I use `index`.
            So re-renders are not as efficiant as they could be.
          */}
          {items.map((item, index) => (
            <li key={index} className="border-y p-1 flex w-full">
              <span className="w-full pr-4">{item.fact}</span>

              <BasicBtn type="danger" onClick={() => deleteItem(index)}>
                Delete
              </BasicBtn>
            </li>
          ))}
        </ol>
        {isLoading && (
          <div className="text-center p-2 text-red-400">Loading more...</div>
        )}
      </ScrollLoaderList>

      {isLastItemDeleted && (
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold">You've deleted the last item!</h3>
          <img
            src="https://placecats.com/400/300"
            alt="Cat"
            className="mx-auto mt-2"
          />
        </div>
      )}
      <div className="flex justify-between w-full pt-2">
        <BasicBtn type="default" onClick={onClose}>
          Close
        </BasicBtn>
        <BasicBtn type="danger" onClick={deleteLastItem} disabled={!canDelete}>
          Delete Last Item
        </BasicBtn>
      </div>
    </BaseDialog>
  );
};

export default CatFactsDialog;
