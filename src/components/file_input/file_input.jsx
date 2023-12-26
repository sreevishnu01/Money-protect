import { useState, useEffect } from "react";
import classes from "./file_input.module.css";

const FileInput = ({ id = "xyz", label = "", widthFr = 1, onChange }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    onChange(id, selectedFile);
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div style={{ width: `${widthFr * 100}%`, height: "100%" }}>
      {label && <p className={classes.label}>{label}</p>}
      <div
        className={classes.container}
        onClick={() => document.getElementById(id).click()}
      >
        {selectedFile ? (
          <img style={{ maxWidth: "100%", maxHeight: "400px" }} src={preview} />
        ) : (
          <>
            <svg
              width="45"
              height="44"
              viewBox="0 0 45 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_908_4229)">
                <rect
                  x="2.5"
                  y="1"
                  width="40"
                  height="40"
                  rx="8"
                  fill="white"
                />
                <rect
                  x="3"
                  y="1.5"
                  width="39"
                  height="39"
                  rx="7.5"
                  stroke="#EAECF0"
                />
                <path
                  d="M19.1667 24.3333L22.5001 21M22.5001 21L25.8334 24.3333M22.5001 21V28.5M29.1667 24.9524C30.1847 24.1117 30.8334 22.8399 30.8334 21.4167C30.8334 18.8854 28.7814 16.8333 26.2501 16.8333C26.068 16.8333 25.8976 16.7383 25.8052 16.5814C24.7185 14.7374 22.7121 13.5 20.4167 13.5C16.965 13.5 14.1667 16.2982 14.1667 19.75C14.1667 21.4718 14.863 23.0309 15.9892 24.1613"
                  stroke="#DBA953"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_908_4229"
                  x="0.5"
                  y="0"
                  width="44"
                  height="44"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_908_4229"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_908_4229"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <p>
              <span>Click to upload </span>
              or drag and drop SVG, JPG or GIF (max. 800x400px)
            </p>
          </>
        )}

        <input
          id={id}
          type="file"
          hidden
          accept="image/*"
          onChange={onSelectFile}
        />
      </div>
    </div>
  );
};

export default FileInput;
