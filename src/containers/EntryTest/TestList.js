import React from 'react';
import { TestQuestion } from '../../Helper/DataHelper';
import { Radio, Card } from 'antd';
import * as DeviceHelper from 'Helper/DeviceHelper';

export function TestList(props) {
  const [value, setValue] = React.useState(props.value);

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const hundleChange = e => {
    setValue(setValue);
    props.onChange(e.target.value);
  };

  return (
    <div style={{ height: '500px' }}>
      <div style={{ marginTop: '20px' }}>
        <Card title={TestQuestion[props.number].title} style={{ width: DeviceHelper.isMobile() ? '300px' : '600px' }}>
          <p>{TestQuestion[props.number].content}</p>
          <p>A: {TestQuestion[props.number].a}</p>
          <p>B: {TestQuestion[props.number].b}</p>
          <p>C: {TestQuestion[props.number].c}</p>
          <p>D: {TestQuestion[props.number].d}</p>
        </Card>
      </div>
      <div style={{ marginTop: '10px', marginBottom: '20px' }}>
        <Radio.Group
          style={{
            width: DeviceHelper.isMobile() ? '300px' : '600px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
          value={value}
          buttonStyle="solid"
          onChange={hundleChange}
        >
          <Radio.Button
            style={{ width: DeviceHelper.isMobile() ? '60px' : '100px', display: 'flex', justifyContent: 'center' }}
            value="a"
          >
            A
          </Radio.Button>
          <Radio.Button
            style={{ width: DeviceHelper.isMobile() ? '60px' : '100px', display: 'flex', justifyContent: 'center' }}
            value="b"
          >
            B
          </Radio.Button>
          <Radio.Button
            style={{ width: DeviceHelper.isMobile() ? '60px' : '100px', display: 'flex', justifyContent: 'center' }}
            value="c"
          >
            C
          </Radio.Button>
          <Radio.Button
            style={{ width: DeviceHelper.isMobile() ? '60px' : '100px', display: 'flex', justifyContent: 'center' }}
            value="d"
          >
            D
          </Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
}
