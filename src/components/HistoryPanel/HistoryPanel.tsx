import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HistoryItem, { HistoryItemProps } from '../historyItem/HistoryItem';

import './HistoryPanel.scss';

interface HistoryPanelProps {
  items: HistoryItemProps[];
}

const HistoryPanel:React.FC<HistoryPanelProps> = ({items}) => {

  const historyItems =  items.map((item) =>
    <HistoryItem key={item.id} question={item.question} answer={item.answer} />
  );

  return (
    <div className="history-panel">
      <h3 style={{color: '#868686'}}>History</h3>
      <ReactCSSTransitionGroup transitionName="history-panel--item"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {historyItems}
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default HistoryPanel;