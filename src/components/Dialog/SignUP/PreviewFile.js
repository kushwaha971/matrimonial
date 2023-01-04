import React from "react";

function PreviewFile({ file }) {
  const [preview, setPreview] = React.useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <>
      <img src={preview} alt="preview" height="100px" width="100px" />
    </>
  );
}

export default PreviewFile;
