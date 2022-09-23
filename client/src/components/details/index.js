import React, { useState, useEffect, useCallback } from "react";


import { Button, message, Steps } from 'antd';

const { Step } = Steps;
const steps = [
  {
    title: 'Listing',
    content: 'First-content',
  },
  {
    title: 'Sale',
    content: 'Second-content',
  },
  {
    title: 'Documents',
    content: 'Last-content',
  },
  {
    title: 'Photos',
    content: 'Last-content',
  },
  {
    title: 'Property',
    content: 'Last-content',
  },
  {
    title: 'Secure Information',
    content: 'Last-content',
  },
  {
    title: 'Financials',
    content: 'Last-content',
  },
  {
    title: 'Highlights',
    content: 'Last-content',
  },
  {
    title: 'Contacts',
    content: 'Last-content',
  },
];


function Details() {
  const [current, setCurrent] = useState(0);

   const next = () => {
     setCurrent(current + 1);
   };

   const prev = () => {
     setCurrent(current - 1);
   };

  return (
    <div className="step-container">
    <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}

export default Details;
