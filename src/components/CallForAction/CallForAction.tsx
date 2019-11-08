import React from 'react';

interface CallForActionProps {
  question: string,
  answer: string,
  onClickHandler: () => void;
}

const CallForAction: React.FC<CallForActionProps> = ({ question, answer, onClickHandler }) => (
  <p className="arciform body-text-2 text-white">
    {question}
    <span 
      className="text-purple margin-left-05"
      onClick={onClickHandler}
    >
      {answer}
    </span>
  </p>
);

export default CallForAction;
