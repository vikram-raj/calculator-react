import React from 'react';

import './OutputField.scss';

export interface OutputFieldProps {
  value: string | number;
}

const OutputField: React.FC<OutputFieldProps> = ({value}) => {
  return <div className="output-field">
    <input type="text" value={value} className="output-field--input" readOnly/>
  </div>
}

export default OutputField;