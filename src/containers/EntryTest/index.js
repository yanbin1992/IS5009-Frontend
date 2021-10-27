import React from 'react';
import { Alert } from 'antd';
import { TestList } from './TestList'
import { Steps, Button, message, Typography } from 'antd';


function EntryTest() {
  const { Title } = Typography;
  const { Step } = Steps;

  var [answer, setAnswer] = React.useState({})
  const [currentNum, setCurrent] = React.useState(0);

  const handleChange = (e) => {
    let newAnswer = { ...answer, [currentNum]: e }
    setAnswer(newAnswer)
  }

  const steps =
    [
      {
        title: '1',
        content: < TestList value={answer[currentNum]} number={0} onChange={handleChange} />,
      },
      {
        title: '2',
        content: < TestList value={answer[currentNum]} number={1} onChange={handleChange} />,
      },
      {
        title: '3',
        content: < TestList value={answer[currentNum]} number={2} onChange={handleChange} />,
      },
      {
        title: '4',
        content: < TestList value={answer[currentNum]} number={3} onChange={handleChange} />,
      },
      {
        title: '5',
        content: < TestList value={answer[currentNum]} number={4} onChange={handleChange} />,
      },
      {
        title: '6',
        content: < TestList value={answer[currentNum]} number={5} onChange={handleChange} />,
      },
      {
        title: '7',
        content: < TestList value={answer[currentNum]} number={6} onChange={handleChange} />,
      },
      {
        title: '8',
        content: < TestList value={answer[currentNum]} number={7} onChange={handleChange} />,
      },
      {
        title: '9',
        content: < TestList value={answer[currentNum]} number={8} onChange={handleChange} />,
      },
      {
        title: '10',
        content: < TestList value={answer[currentNum]} number={9} onChange={handleChange} />,
      },
    ];


  const next = () => {
    setCurrent(currentNum + 1);
  };

  const prev = () => {
    setCurrent(currentNum - 1);
  };


  return (<div style={{ display: "flex" }}><Steps current={currentNum} direction="vertical">
    {steps.map(item => (
      <Step key={item.title} />
    ))}
  </Steps>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Title level={3}>Entry Test</Title>
      <div className="steps-content">{steps[currentNum].content}</div>
      <div style={{ display: "flex", justifyContent: "center" }} className="steps-action">
        {currentNum < steps.length - 1 && (
          <Button disabled={answer[currentNum] === undefined} type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {currentNum === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success(`Processing complete!`)}>
            Done
          </Button>
        )}
        {currentNum > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div></div> </div>)


}

export default EntryTest;
