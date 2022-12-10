import React, { useEffect, useState } from "react";
import { Button, Form, Grid, Header, Icon, Image, Segment } from "semantic-ui-react";
import agent from "../../app/api/agent";
import LoadingIndicator from "../../app/common/loadingIndicator";
import { RenderingRequest, RenderingResponse } from "../../models/rendering"

export default function Renderer() {

    const [structureImage, setStructureImage] = useState("");
    const [textInput, setTextInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (event: any) => {
        setTextInput(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = async () => {
        setLoading(true);
        let requestStructure = textInput.replace(/\r?\n/g, "\n");
        const struct: RenderingRequest[] = [{ barcode: "", structure: requestStructure.toString() }];
        try {
            let result = await agent.RenderingTool.render(struct);
            let image = result.Data[0].StructurePng;
            setStructureImage(image);
        }
        catch (error) {
            console.log(error);

        }
        setLoading(false);

    }
    if (loading) return <LoadingIndicator />
    return (
        <Segment inverted style={{ marginTop: '0px', height: '87vh' }}>
            <Form inverted onSubmit={handleSubmit}>
                <Grid >
                    <Grid.Row >
                        <Grid.Column width={6} verticalAlign="middle" >
                            <div className="field" >
                                <label>MOL</label>
                                <textarea rows={26} value={textInput} onChange={handleChange} id='inputTextArea' />
                            </div>
                            <Segment vertical textAlign="right" >
                                <Button type='submit' size="huge" content="Render" color="green" />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={10} verticalAlign="middle" textAlign="center">
                            {
                                structureImage == "" ? (
                                    // <Header inverted>Enter a MOL to render</Header>
                                    <Icon.Group size='huge'>
                                        <Icon loading size='big' name='utensil spoon' />
                                    </Icon.Group>)
                                    :
                                    (
                                        <Image rounded bordered centered style={{ background: "white" }}
                                            src={`data:image/jpeg;base64,${String(structureImage)}`}
                                            size="big"
                                        />
                                    )
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Form>
        </Segment>
    )

}