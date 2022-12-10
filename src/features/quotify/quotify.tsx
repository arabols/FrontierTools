import React, { useRef, useState } from "react";
import { Button, Form, Grid, GridColumn, Segment } from "semantic-ui-react";

export default function Quotify() {

    const [textInput, setTextInput] = useState("");
    const [textOutput, setTextOutput] = useState("");
    const handleChange = (event: any) => {
        setTextInput(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = (event: any) => {
        const result = textInput.split(/\r?\n/);
        result.forEach(function (part, index) {
            if (result[index] === "") return;

            if (index === (result.length - 1))
                result[index] = "'" + result[index] + "'";
            else
                result[index] = "'" + result[index] + "',";
        });
        setTextOutput("(" + result.join('\r\n') + ")");
    }


    return (
        <Segment inverted style={{ marginTop: '0px', height: '87vh' }}>
            <Form inverted size="large" onSubmit={handleSubmit} >

                <Grid >
                    <Grid.Row divided centered stretched >
                        <GridColumn width={4} stretched verticalAlign="middle" >
                            <div className="field" >
                                <label>Raw Input</label>
                                <textarea rows={26} onChange={handleChange} id='inputTextArea' />
                            </div>
                        </GridColumn>
                        <GridColumn width={4} stretched verticalAlign="middle">
                            <div className="field" >
                                <label>Output</label>
                                <textarea readOnly rows={26} value={textOutput} id='outputTextArea' />
                            </div>
                        </GridColumn>
                    </Grid.Row>
                    <Grid.Row divided centered stretched >
                        <Button type='submit' color="green" >ify</Button>
                    </Grid.Row>

                </Grid>
            </Form>
        </Segment>

    )
}