import React from 'react';

import OutputField from '../outputField/OutputField';

export interface OutputScreenProps {
  question: string;
  answer: string;
}

const OutputScreen: React.FC<OutputScreenProps> = ({question, answer}) => {
  return <div className="output-screen">
    <OutputField value={question} />
    <OutputField value={answer} />
  </div>
}

export default OutputScreen;