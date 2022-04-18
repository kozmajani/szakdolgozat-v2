import React from "react";
import { useState, useEffect } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import "./converter.css";

const ffmpeg = createFFmpeg({
  log: true,
});

function Converter() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [output, setOutput] = useState();

  const [outputType, setOutputType] = useState("");
  const [outputFormat, setOutputFormat] = useState("");
  const [outputLength, setOutputLength] = useState("2");
  const [inputFormat, setInputFormat] = useState("mp4");

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  useEffect(() => {
    load();
  }, []);

  function setInput(file) {
    setVideo(file);
    getInputExtension(file);
    console.log(inputFormat);
  }

  function getInputExtension(filename) {
    var parts = filename.toString().split(".");
    setInputFormat(`${parts[parts.length - 1]}`);
  }

  function getTypeValue() {
    setOutputFormat(document.getElementById("types").value);
    console.log(document.getElementById("types").value);

    if (document.getElementById("types").value === "gif") {
      setOutputType("image");
    } else {
      setOutputType("video");
    }
  }

  function getLengthValue() {
    setOutputLength(document.getElementById("length").value);
    console.log(document.getElementById("length").value);
  }

  const convertTo = async () => {
    ffmpeg.FS("writeFile", "input.mp4", await fetchFile(video));

    await ffmpeg.run(
      "-i", //input
      `input.${inputFormat}`, //input-name.inpformat
      "-t",
      `${outputLength}`, //length(s)
      "-ss", //starting second
      "2",
      "-f", //force format
      `${outputFormat}`, //outformat
      `out.${outputFormat}` //output-name.outpformat
    );

    const data = ffmpeg.FS("readFile", `out.${outputFormat}`);

    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: `${outputType}/${outputFormat}` })
    );

    setOutput(url);
    console.log(url, `out.${outputFormat}`, `${outputType}`);
    console.log(document.getElementById("types").value);
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
            onChange={(e) => setInput(e.target.files?.item(0))}
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
        <select id="types" className="types-dropdown" onChange={getTypeValue}>
          <option value="" defaultValue={""}>
            CONVERT TO
          </option>
          <option value="gif">GIF</option>
          <option value="mp4">MP4</option>
          <option value="avi">AVI</option>
          <option value="webm">WEBM</option>
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
        <button className="convert-button" onClick={convertTo}>
          CONVERT
        </button>
      </div>
      <div>
        {output ? (
          outputType === "image" ? (
            <img
              className="videoplayer"
              src={output}
              width="720"
              alt="result-file"
            />
          ) : (
            <video
              className="videoplayer"
              controls
              width="720"
              src={output}
            ></video>
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
