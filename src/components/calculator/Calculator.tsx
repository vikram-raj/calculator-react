import React, { useState } from 'react';

import OutputScreen from '../outputScreen/OutputScreen';
import Button from '../button/Button';
import HistoryPanel from '../HistoryPanel/HistoryPanel'
import { generateUUID } from '../../utils'

import './Calculator.scss';

const Calculator: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [history, setHistory] = useState([{question: '', answer: '', id: ''}]);
  const textColor = '#ffffff';
  const equalBGColor = '#00C535';

  const handleClick = (event: any) => {
    let val = '';
    if(event.target.value) {
      val = event.target.value;
    }
    switch(val) {
      case '=': {
        if(question !== '') {
          let ans = '';
          try {
            // eslint-disable-next-line no-eval
            ans = eval(question);
            if (ans === undefined) {
              setAnswer('Math Error');
            } else {
              setAnswer(ans);
              setHistory([...[{question: question,
                answer: ans,
                id: generateUUID()}],
                ...history].slice(0, 10));
              setQuestion('');
            }
          }
          catch(err) {
            setAnswer('Math Error');
          }
        }
        break;
      }
      case 'Clear': {
        setQuestion('');
        setAnswer('');
        break;
      }
      case 'Delete': {
        let q = question;
        q = q.substr(0, q.length - 1);
        setQuestion(q);
        break;
      }
      case '': {
        break;
      }
      default: {
        let q = question;
        setQuestion(q += val);
        break;
      }
    }
  }

  return (
    <div className="calculator">
      <OutputScreen question={question} answer={answer}/>
      <div className="calculator--button-row">
        <Button label={'('} handleClick={handleClick} />
        <Button label={')'} handleClick={handleClick} />
        <Button label={'Clear'} handleClick={handleClick} />
        <Button label={'Delete'} handleClick={handleClick} />
      </div>
      <div className="calculator--button-row">
        <Button label={'7'} handleClick={handleClick} />
        <Button label={'8'} handleClick={handleClick} />
        <Button label={'9'} handleClick={handleClick} />
        <Button label={'*'}
          handleClick={handleClick} />
      </div>
      <div className="calculator--button-row">
        <Button label={'4'} handleClick={handleClick} />
        <Button label={'5'} handleClick={handleClick} />
        <Button label={'6'} handleClick={handleClick} />
        <Button label={'-'}
          handleClick={handleClick} />
      </div>
      <div className="calculator--button-row">
        <Button label={'1'} handleClick={handleClick} />
        <Button label={'2'} handleClick={handleClick} />
        <Button label={'3'} handleClick={handleClick} />
        <Button label={'+'}
          handleClick={handleClick} />
      </div>
      <div className="calculator--button-row">
        <Button label={'0'} handleClick={handleClick} />
        <Button label={'.'} handleClick={handleClick} />
        <Button label={'='}
          handleClick={handleClick}
          backgroundColor={equalBGColor}
          textColor={textColor}/>
        <Button label={'/'}
          handleClick={handleClick} />
      </div>
      <HistoryPanel items={history} />
    </div>
  )
}

export default Calculator;