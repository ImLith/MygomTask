import { useState } from 'react';
import { BasicLayout } from '@layouts';
import { BasicBtn, BasicCard, Center } from '@components';
import CatFactsDialog from '@components/dialogs/CatFacts';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const footerContext = (
    <Center className="pt-5">
      <BasicBtn type="info" onClick={() => setIsOpen(true)}>
        Open dialog
      </BasicBtn>
    </Center>
  );

  return (
    <BasicLayout>
      <Center>
        <BasicCard title="Lorum title" footer={footerContext}>
          <div className="border-y p-5 border-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            eleifend blandit luctus. Vestibulum ut metus at ante aliquet tempor
            cursus sed ex. Aenean eget lacus.
          </div>
        </BasicCard>
      </Center>
      <CatFactsDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </BasicLayout>
  );
};

export default HomePage;
