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

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  useEffect(() => {
    load();
  }, []);

  function getSelectValue() {
    setOutputFormat(document.getElementById("types").value);
    console.log(document.getElementById("types").value);

    if (outputFormat == "gif") {
      setOutputType("image");
    } else {
      setOutputType("video");
    }
  }

  const convertTo = async () => {
    ffmpeg.FS("writeFile", "input.mp4", await fetchFile(video));

    await ffmpeg.run(
      "-i", //input
      "input.mp4", //input name
      "-t",
      "2.5", //length
      "-ss", //starting second
      "2.2",
      "-f", //format
      `${outputFormat}`,
      `out.${outputFormat}`
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
        {video ? (
          <video
            className="videoplayer"
            controls
            width="768"
            src={URL.createObjectURL(video)}
          ></video>
        ) : (
          <div className="previews">
            <input
              type="file"
              onChange={(e) => setVideo(e.target.files?.item(0))}
            />
          </div>
        )}
      </div>
      <div>
        <select id="types" onChange={getSelectValue}>
          <option value="" selected>
            --CONVERT TO--
          </option>
          <option value="mp4">MP4</option>
          <option value="avi">AVI</option>
          <option value="webm">WEBM</option>
          <option value="gif">GIF</option>
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
              width="768"
              alt="result-file"
            />
          ) : (
            <video
              className="videoplayer"
              controls
              width="768"
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
