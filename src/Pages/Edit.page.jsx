import React, { useState, createRef} from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../Components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";


const EditPage = () => {
    const [params] = useSearchParams();
    const url = params.get("url");

    const [count, setCount] = useState(0);
    const memeRef = createRef();

    const addText = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <div style={{width:"800px", border: "1px solid",}} 
            ref={memeRef} className="meme mt-5 mb-5">
                <img src={url} alt="meme" height="400px" width="400px" />

                {
                    Array(count).fill(0).map((e) => <Text />)
                }
            </div>
            <Button onClick={addText}> Add Text</Button>
            <Button variant = "success" onClick={(e) => exportComponentAsJPEG(memeRef)}> Download</Button>

        </div>
    );
};

export default EditPage;