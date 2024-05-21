import React, { useEffect, useRef, useState } from "react";

const AvatarCanvas = () => {
  return (
    <div>
      <canvas
        ref={canvasRef}
        id="avatarCanvas"
        style={{ width: "500px", height: "500px" }}
      ></canvas>
      <div>
        <button className="resetBtn" onClick={resetAvatar}>
          Reset
        </button>
        <button className="randomizeBtn" onClick={randomizeAvatar}>
          Randomize
        </button>
        <button className="downloadBtn" onClick={downloadAvatar}>
          Download
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default AvatarCanvas;
