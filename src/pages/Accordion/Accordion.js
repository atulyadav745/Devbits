import { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container p-0 mt-4'>
    <div className="border rounded-lg mb-4 w-[80%] m-auto p-1">
      <div
        className="flex justify-between items-center px-4 py-2 dark:bg-gray-400 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <span className="text-gray-900 scale-150">
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {isOpen && (
        <div className="px-4 py-2 bg-gray-300">
          <p>{content}</p>
        </div>
      )}
      </div>
    </div>
  );
};

const Acc = () => {
  const accordions = [
    {
      title: 'What are stocks?',
      content: 'Stocks, also known as shares or equities, represent ownership in a company. When you buy a stock, you are essentially buying a small portion of the company and become a shareholder.',
    },
    {
      title: 'How do stocks work?',
      content: 'The price of a stock is determined by supply and demand. If more people want to buy a stock than sell it, the price will go up. Conversely, if more people want to sell a stock than buy it, the price will go down.',
    },
    {
      title: 'What are the benefits of investing in stocks?',
      content: 'Investing in stocks can potentially provide higher returns compared to other investments, such as bonds or savings accounts. Additionally, stocks allow you to become a part-owner of a company, which can provide benefits like dividends and the ability to vote on important company decisions.',
    },
    {
      title: 'What are the risks of investing in stocks?',
      content: "Stock prices can be volatile, and there is always a risk that you could lose money if the company doesn't perform well or if the overall stock market experiences a downturn.",
    },
    {
      title: 'How do I buy stocks?',
      content: "You can buy stocks through a brokerage account. Many banks, online brokers, and investment firms offer brokerage accounts that allow you to buy and sell stocks.",
    },
  ];

  return (
    <div className="container mx-auto py-4">
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.title}
          title={accordion.title}
          content={accordion.content}
        />
      ))}
    </div>
  );
};

export default Acc;
