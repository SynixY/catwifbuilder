import React, { useEffect, useRef, useState } from "react";
//import "./css/style.css";
import AvatarCanvas from "./jj";

export default function BuildPage() {
  // Get a reference to the root element
  const rootElement = document.getElementById("root");

  // Add the class "page-wrapper" to the root element
  rootElement.classList.add("page-content");

  // LOGIC
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const defaultParts = {
    bg: "bg.png",
    head: "main.png",
    aura: "none.png",
    cat: "normal.png",
    face: "none.png",
    hat: "none.png",
    eyes: "none.png",
    hands: "none.png",
    outfit: "none.png",
    friends: "none.png",
  };

  const [selectedParts, setSelectedParts] = useState({
    bg: "/images/bg/bg.png",
    aura: "/images/aura/none.png",
    head: "/images/head/main.png",
    cat: "/images/cat/none.png",
    eyes: "/images/eyes/none.png",
    hat: "/images/hat/none.png",
    outfit: "/images/outfit/none.png",
    hands: "/images/hands/none.png",
    friends: "/images/friends/none.png",
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
    adjustCanvasForHighDPI(canvas);
    updateAvatar();
  }, []);

  const adjustCanvasForHighDPI = (canvas) => {
    const dpi = window.devicePixelRatio || 1;
    const style = getComputedStyle(canvas);
    const width = parseInt(style.width) * dpi;
    const height = parseInt(style.height) * dpi;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width / dpi}px`;
    canvas.style.height = `${height / dpi}px`;
    ctxRef.current.scale(dpi, dpi);
  };

  const drawPart = (partPath) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous"; // Enable CORS
      img.onload = function () {
        ctxRef.current.drawImage(
          img,
          0,
          0,
          canvasRef.current.width / window.devicePixelRatio,
          canvasRef.current.height / window.devicePixelRatio
        );
        resolve();
      };
      img.src = partPath;
    });
  };

  const updateAvatar = async () => {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width / window.devicePixelRatio,
      canvasRef.current.height / window.devicePixelRatio
    );
    for (const part of Object.keys(selectedParts)) {
      await drawPart(selectedParts[part]);
    }
  };

  const onPartChange = (part, fileName) => {
    setSelectedParts((prevParts) => ({
      ...prevParts,
      [part]: `/images/${part}/${fileName}`,
    }));
  };

  const handleSelectChange = (event, part) => {
    const { value } = event.target;
    console.log(part, value, "gay");
    onPartChange(part, value);
  };

  const getRandomOption = (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex].value;
  };

  const resetAvatar = () => {
    Object.entries(defaultParts).forEach(([part, defaultValue]) => {
      document.getElementById(part).value = defaultValue;
      onPartChange(part, defaultValue);
    });
  };

  const randomizeAvatar = () => {
    [
      "bg",
      "head",
      "aura",
      "cat",
      "hat",
      "eyes",
      "hands",
      "outfit",
      "friends",
    ].forEach((part) => {
      const selectElement = document.getElementById(part);
      const randomValue = getRandomOption(selectElement.options);
      selectElement.value = randomValue;
      onPartChange(part, randomValue);
    });
  };

  const downloadAvatar = () => {
    canvasRef.current.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.download = "myQUOK.png";
      downloadLink.href = url;
      downloadLink.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  };

  useEffect(() => {
    updateAvatar();
  }, [selectedParts]);
  // END LOGIC
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/images/icon.png" alt="Logo" />
          <h1>CatWifBuilder</h1> {/* Move h1 next to the logo */}
        </div>
      </nav>
      <div id="avatarPreview">
        <canvas
          ref={canvasRef}
          id="avatarCanvas"
          width={1000}
          height={1000}
          style={{ width: 500, height: 500 }}
        />
      </div>
      <div class="selectors-container">
        <div class="select-container">
          <label for="bg">Background</label>
          <select id="bg" onChange={(e) => handleSelectChange(e, "bg")}>
            <option value="bg.png">Home</option>
            <option value="1.png">Freedom</option>
            <option value="2.png">Playground</option>
            <option value="3.png">Poor</option>
            <option value="4.png">Frends</option>
            <option value="5.png">Charting</option>
          </select>
        </div>

        <div class="select-container-head">
          <label for="head">Head</label>
          <select id="head" onChange={(e) => handleSelectChange(e, "head")}>
            <option value="main.png">Head 1</option>
          </select>
        </div>

        <div class="select-container">
          <label for="aura">Back</label>
          <select id="aura" onChange={(e) => handleSelectChange(e, "aura")}>
            <option value="none.png">None</option>
            <option value="1.png">Lambo</option>
            <option value="2.png">Electric</option>
            <option value="3.png">Rage</option>
            <option value="4.png">Super</option>
            <option value="5.png">Fire</option>
          </select>
        </div>

        <div class="select-container">
          <label for="hat">Hat</label>
          <select id="hat" onChange={(e) => handleSelectChange(e, "hat")}>
            <option value="none.png">None</option>
            <option value="1.png">Hardhat</option>
            <option value="2.png">Cult</option>
            <option value="3.png">McDonalds</option>
            <option value="4.png">King</option>
            <option value="5.png">Cat</option>
          </select>
        </div>

        <div class="select-container">
          <label for="cat">Type</label>
          <select id="cat" onChange={(e) => handleSelectChange(e, "cat")}>
            <option value="none.png">Clean</option>
            <option value="1.png">Golden</option>
            <option value="2.png">Acid</option>
            <option value="3.png">Nigga</option>
            <option value="4.png">Albino</option>
            <option value="5.png">Solana</option>
          </select>
        </div>

        <div class="select-container">
          <label for="eyes">Eyes</label>
          <select id="eyes" onChange={(e) => handleSelectChange(e, "eyes")}>
            <option value="none.png">Normal</option>
            <option value="1.png">Lazer</option>
            <option value="2.png">Trippin</option>
            <option value="3.png">Glowing</option>
            <option value="4.png">Mad</option>
            <option value="5.png">Vipers</option>
            <option value="6.png">Apple Vision</option>
          </select>
        </div>

        <div class="select-container">
          <label for="friends">Frends</label>
          <select
            id="friends"
            onChange={(e) => handleSelectChange(e, "friends")}
          >
            <option value="none.png">Coming Soon!</option>
          </select>
        </div>

        <div className="select-container">
          <label htmlFor="hands">Left Hand</label>
          <select id="hands">
            <option value="none.png">None</option>
            <option value="1.png">Lean</option>
            <option value="2.png">Gun</option>
            <option value="3.png">Fuck off</option>
            <option value="4.png">Red Bull</option>
            <option value="5.png">Jazz Tobacco</option>
            <option value="6.png">Knife</option>
            <option value="7.png">Miter Saw</option>
          </select>
        </div>

        <div className="select-container">
          <label htmlFor="outfit">Right Hand</label>
          <select id="outfit">
            <option value="none.png">None</option>
            <option value="1.png">Infinity Gauntlet</option>
            <option value="2.png">Gun</option>
            <option value="3.png">Pepet</option>
            <option value="4.png">Bible</option>
            <option value="5.png">Drill</option>
            <option value="6.png">Sword</option>
            <option value="7.png">C4</option>
          </select>
        </div>
      </div>
      <div>
        <button className="downloadBtn" onClick={downloadAvatar}>
          Download
        </button>
        <button className="randomizeBtn" onClick={randomizeAvatar}>
          Randomize{" "}
        </button>
        <button className="resetBtn" onClick={resetAvatar}>
          Reset Image
        </button>
      </div>
    </>
  );
}
