import React from "react";

const Converter = () => {
  return (
    <div>
      <div className="title">
        <h1>Converter</h1>
      </div>
      <div className="converter-container">
        <form action="/convert" method="post" encrypte="multipart/form-data">
          <div>
            <input type="file" name="file" />
          </div>
          <div>
            <div>
              <label for="to">To:</label>
              <select name="to">
                <option>mp4</option>
                <option>avi</option>
                <option>webm</option>
                <option>mov</option>
              </select>
            </div>
            <br />
            <div>
              <button>Convert</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Converter;
