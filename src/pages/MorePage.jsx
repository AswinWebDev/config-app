import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import uploadIconSvg from "../assets/icons/uploadIcon.svg";
import { useState } from "react";

const MorePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 1070px;
  // max-height: 550px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  opacity: 1;
`;
const UrlContainer = styled.div`
  margin-top: 56px;
`;
const UrlForm = styled.form``;
const UrlInput = styled.input`
  width: 959px;
  height: 48px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dcdcdc;
  opacity: 1;
  &::placeholder {
    font: normal normal normal 17px/26px Poppins;
    letter-spacing: 0px;
    color: #aaaaaa;
    opacity: 1;
  }
  &:not(:placeholder-shown) {
    font: normal normal normal 17px/26px Poppins;
    letter-spacing: 0px;
    color: #7e7a7a;
    opacity: 1;
  }
`;
const UploadContainer = styled.div`
  width: 959px;
  height: 324px;
  background: #eef6ff 0% 0% no-repeat padding-box;
  opacity: 1;
  text-align: center;
  margin-top: 47px;
`;
const UploadIcon = styled.img`
  margin-top: 116px;
`;
const UploadText = styled.div`
  font: normal normal normal 18px/27px Poppins;
  letter-spacing: 0px;
  color: #7e7a7a;
  opacity: 1;
  margin-top: 16px;
`;
const UploadButton = styled.div`
  background: #04356b 0% 0% no-repeat padding-box;
  border-radius: 4px;
  padding: 4px 14px;
  opacity: 1;
  margin-right: auto;
  margin-left: 55px;
  margin-top: 19px;
  margin-bottom: 25px;
  // text
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  cursor: pointer;
`;

const MorePage = () => {
  const [files, setFiles] = useState(null);
  const [url, setUrl] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles[0]);
    setUrl(null);
    //
  };
  const handleUrlChange = async (event) => {
    const url = event.target.value;
    const response = await fetch(url);
    // console.log(response);
    const blob = await response.blob();
    setUrl(blob);
    setFiles(null);
    // console.log(url);
    //
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  return (
    <MorePageContainer>
      {/* url to upload */}
      <UrlContainer>
        <UrlForm>
          <UrlInput
            type="text"
            name="url"
            placeholder="Add Url Links"
            onChange={(event) => {
              handleUrlChange(event);
            }}
          />
        </UrlForm>
      </UrlContainer>
      {/* click to upload */}
      <UploadContainer>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <UploadIcon src={uploadIconSvg} alt="Upload Icon" />
          {files ? (
            <UploadText>Selected File : {files.name}</UploadText>
          ) : (
            <UploadText>Upload Files/HTML Files</UploadText>
          )}
        </div>
      </UploadContainer>
      <UploadButton>Upload Files</UploadButton>
    </MorePageContainer>
  );
};

export default MorePage;
