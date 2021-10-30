import React from "react";
import { TestQuestion } from "../../Helper/DataHelper"
import { Radio, Card } from 'antd'


export function TestList(props) {
    console.log(props)
    const [value, setValue] = React.useState(props.value)

    React.useEffect(() => {
        setValue(props.value)
    }, [props.value])

    const hundleChange = (e) => {
        setValue(setValue)
        props.onChange(e.target.value)
    }

    return <div>
        <div style={{ marginTop: "20px" }}>
            <Card title={TestQuestion[props.number].title} extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>{TestQuestion[props.number].content}</p>
                <p>A:{TestQuestion[props.number].a}</p>
                <p>B:{TestQuestion[props.number].b}</p>
                <p>C:{TestQuestion[props.number].c}</p>
                <p>D:{TestQuestion[props.number].d}</p>
            </Card>
        </div>
        <div style={{ marginTop: "10px", marginBottom: "20px" }}>
            <Radio.Group style={{ width: "300px", display: "flex", justifyContent: "space-around" }} value={value} buttonStyle="solid" onChange={hundleChange}>
                <Radio.Button style={{ width: "60px", display: "flex", justifyContent: "center" }} value='a'>A</Radio.Button>
                <Radio.Button style={{ width: "60px", display: "flex", justifyContent: "center" }} value='b'>B</Radio.Button>
                <Radio.Button style={{ width: "60px", display: "flex", justifyContent: "center" }} value='c'>C</Radio.Button>
                <Radio.Button style={{ width: "60px", display: "flex", justifyContent: "center" }} value='d'>D</Radio.Button>
            </Radio.Group>
        </div>
    </div>
}