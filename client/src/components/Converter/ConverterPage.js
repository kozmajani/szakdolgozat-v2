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
  const [gif, setGif] = useState();

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  useEffect(() => {
    load();
  }, []);

  const convertToGif = async () => {
    ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));

    await ffmpeg.run(
      "-i",
      "test.mp4",
      "-t",
      "2.5",
      "-ss",
      "2.0",
      "-f",
      "gif",
      "out.gif"
    );

    const data = ffmpeg.FS("readFile", "out.gif");

    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/gif" })
    );

    setGif(url);
  };

  return ready ? (
    <div className="converter-container">
      <div className="titles">CONVERTER</div>
      <div>
        {video ? (
          <video
            className="videoplayer"
            controls
            width="960"
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
      <div style={{ padding: "1.3rem" }}>
        <button className="convert-button" onClick={convertToGif}>
          CONVERT
        </button>
      </div>
      <div>
        {gif ? (
          <img
            className="videoplayer"
            src={gif}
            width="960"
            alt="result-file"
          />
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
