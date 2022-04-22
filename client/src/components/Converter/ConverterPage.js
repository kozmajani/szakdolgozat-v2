import React from "react";
import { useState, useEffect } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import { Alert, AlertTitle } from "@material-ui/lab";
import * as AiIcons from "react-icons/ai";
import "./converter.css";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const ffmpeg = createFFmpeg({
  log: true,
});

function Converter() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [output, setOutput] = useState();
  const [error, setError] = useState("");

  const [outputType, setOutputType] = useState("");
  const [outputFormat, setOutputFormat] = useState("");
  const [outputStart, setOutputStart] = useState("0");
  const [outputLength, setOutputLength] = useState("2");

  const [open, setOpen] = useState(false);

  const handleClickConvert = () => {
    setOpen(true);
    convertTo();
  };

  const handleFinish = () => {
    setOpen(false);
  };

  const load = async () => {
    try {
      if (ffmpeg.isLoaded(true)) {
        setReady(true);
      } else {
        await ffmpeg.load();
        setReady(true);
      }
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    load();
  }, []);

  function getTypeValue() {
    setOutputFormat(document.getElementById("types").value);
    console.log(document.getElementById("types").value);

    if (document.getElementById("types").value === "gif") {
      setOutputType("image");
    } else {
      setOutputType("video");
    }
  }

  function getStartValue() {
    setOutputStart(document.getElementById("start").value);
    console.log("start at:" + document.getElementById("start").value);
  }

  function getLengthValue() {
    setOutputLength(document.getElementById("length").value);
    console.log(document.getElementById("length").value);
  }

  const convertTo = async () => {
    try {
      ffmpeg.FS("writeFile", "input.mp4", await fetchFile(video));

      await ffmpeg.run(
        "-i", //input
        "input.mp4", //input-name.inpformat
        "-t",
        `${outputLength}`, //length(s)
        "-ss", //starting second
        `${outputStart}`,
        "-f", //force format
        `${outputFormat}`, //outformat
        `out.${outputFormat}` //output-name.outpformat
      );

      const data = ffmpeg.FS("readFile", `out.${outputFormat}`);

      const url = URL.createObjectURL(
        new Blob([data.buffer], { type: `${outputType}/${outputFormat}` })
      );

      setOutput(url);
      handleFinish();
      console.log(url, `out.${outputFormat}`, `${outputType}`);
      console.log(document.getElementById("types").value);
    } catch (e) {
      setError("Choose an output format!");
    }
  };

  return ready ? (
    <div className="converter-container">
      <div style={{ color: "white", padding: "1rem" }}>
        <h1>CONVERTER</h1>
      </div>
      <div>
        <div className="input-file">
          <input
            style={{ width: "100%" }}
            type="file"
            onChange={(e) => setVideo(e.target.files?.item(0))}
          />
        </div>
        <div>
          {video ? (
            <video
              className="videoplayer"
              controls
              width="768"
              src={URL.createObjectURL(video)}
            ></video>
          ) : (
            <div className="previews">Preview</div>
          )}
        </div>
      </div>
      <div>
        {error !== "" ? (
          <Alert
            severity="error"
            onClose={() => {
              setError("");
            }}
          >
            <AlertTitle>
              <strong>Error</strong>
            </AlertTitle>
            You must choose an <strong>OUTPUT</strong> format!
          </Alert>
        ) : null}

        <select id="types" className="types-dropdown" onChange={getTypeValue}>
          <option value="" defaultValue={""}>
            CONVERT TO
          </option>
          <option value="gif">GIF</option>
          <option value="mp4">MP4</option>
          <option value="mov">MOV</option>
          <option value="webm">WEBM</option>
        </select>
        <select id="start" className="start-dropdown" onChange={getStartValue}>
          <option value="" defaultValue={""}>
            START AT(s)
          </option>
          <option value="0">0 (start)</option>
          <option value="2">2 s</option>
          <option value="4">4 s</option>
        </select>
        <select
          id="length"
          className="length-dropdown"
          onChange={getLengthValue}
        >
          <option value="" defaultValue={""}>
            LENGTH (s)
          </option>
          <option value="2">2 s</option>
          <option value="4">4 s</option>
          <option value="8">8 s</option>
        </select>
      </div>
      <div style={{ padding: "1.3rem" }}>
        <button className="convert-button" onClick={handleClickConvert}>
          CONVERT
        </button>
        <Dialog open={open}>
          <DialogContent>
            <DialogContentText>
              <div style={{ margin: "2rem" }}>
                <div>
                  <center>
                    <h2>Converting...</h2>
                    <h5>(this might take a while)</h5>
                  </center>
                </div>
                <div className="rotate">
                  <AiIcons.AiOutlineLoading />
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        {output ? (
          outputType === "image" ? (
            <a href={output} download>
              <img
                className="videoplayer"
                src={output}
                width="720"
                alt="result-file"
              />
            </a>
          ) : (
            <video className="videoplayer" src={output} width="720" controls />
          )
        ) : (
          <div className="results">Result</div>
        )}
      </div>
    </div>
  ) : (
    <div className="titles">Converter is loading...</div>
  );
}

export default Converter;
