import React from 'react';

import './HistoryItem.scss'

export interface HistoryItemProps {
  question: string;
  answer: string;
  id?: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({question, answer}) => {
  return (
    <React.Fragment>
      {question !== '' && (answer !== '' && (<div className="history-item">
        {question} = {answer}
      </div>))}
    </React.Fragment>
  );
}

export default HistoryItem;