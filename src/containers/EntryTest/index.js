import { TestList } from './TestList'
import { Steps, Button, message, Typography } from 'antd';
import { makeSelectLevel } from './test.selectors';
import { postEntryTestAction } from './test.actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'global.selectors';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './test.reducer';
import saga from './test.saga';

const key = 'test';

function EntryTest(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { Title } = Typography;
  const { Step } = Steps;

  var [answer, setAnswer] = React.useState({})
  const [currentNum, setCurrent] = React.useState(0);
  const [isTestAll, setIsTestAll] = React.useState(false)

  const handleChange = (e) => {
    let newAnswer = { ...answer, [currentNum]: e }
    setAnswer(newAnswer)
  }

  React.useEffect(() => {
    let count = 0
    for (let i = 0; i < 8; i++) {
      if (answer[i] === undefined) {
        count += 1
      }
    }
    if (count === 0) {
      setIsTestAll(true)
    }
  }, [answer])

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
      }
    ];


  const next = () => {
    setCurrent(currentNum + 1);
  };

  const prev = () => {
    setCurrent(currentNum - 1);
  };

  const levelCal = (answer) => {
    let incomeLevel = 0
    let experienceLevel = 0
    let riskLevel = 0

    let income = 0
    let experience = 0
    let risk = 0
    for (let i = 0; i < 8; i++) {
      if (answer[i] === undefined) {
        message.warning(`Test has not completed`)
        return { incomeLevel, experienceLevel, riskLevel }
      }
    }
    switch (answer[0]) {
      case "a":
        income += 1
        break;
      case "b":
        income += 2
        break;
      case "c":
        income += 3
        break;
      case "d":
        income += 4
        break;
    }
    switch (answer[1]) {
      case "a":
        income += 1
        break;
      case "b":
        income += 2
        break;
      case "c":
        income += 3
        break;
      case "d":
        income += 4
        break;
    }
    switch (answer[2]) {
      case "a":
        income += 2
        break;
      case "b":
        income += 3
        break;
      case "c":
        income += 4
        break;
      case "d":
        income += 1
        break;
    }
    if (income > 7) {
      incomeLevel = 1
    }
    switch (answer[3]) {
      case "a":
        experience += 4
        break;
      case "b":
        experience += 3
        break;
      case "c":
        experience += 2
        break;
      case "d":
        experience += 1
        break;
    }
    switch (answer[4]) {
      case "a":
        experience += 1
        break;
      case "b":
        experience += 2
        break;
      case "c":
        experience += 3
        break;
      case "d":
        experience += 4
        break;
    }
    if (experience > 3) {
      experienceLevel = 1
    }
    switch (answer[5]) {
      case "a":
        risk += 1
        break;
      case "b":
        risk += 1
        break;
      case "c":
        risk += 0
        break;
      case "d":
        risk += 0
        break;
    }
    switch (answer[6]) {
      case "a":
        risk += 1
        break;
      case "b":
        risk += 2
        break;
      case "c":
        risk += 3
        break;
      case "d":
        risk += 4
        break;
    }
    switch (answer[7]) {
      case "a":
        risk += 1
        break;
      case "b":
        risk += 2
        break;
      case "c":
        risk += 3
        break;
      case "d":
        risk += 4
        break;
    }
    if (risk / 4 > 2) {
      riskLevel = 1
    }
    message.success(`Processing complete!`)
    return { incomeLevel, experienceLevel, riskLevel }
  }

  const handleSubmit = (email) => {
    const level = levelCal(answer)

    const { postEntryTest } = props
    postEntryTest({
      email: props.user.email,
      level: {
        income: level.incomeLevel,
        experience: level.experienceLevel,
        risk: level.riskLevel
      }
    })
  }


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
          <Button disabled={isTestAll === false} type="primary" onClick={() => handleSubmit(props.user.email)}>
            Submit
          </Button>
        )}
        {currentNum > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div></div> </div>)
}



EntryTest.propTypes = {
  level: PropTypes.object,
  postEntryTest: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  level: makeSelectLevel(),
  user: makeSelectUser(),
});

const mapDispatchToProps = dispatch => ({
  postEntryTest: (req) => dispatch(postEntryTestAction(req)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(EntryTest);

