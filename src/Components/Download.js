import React from 'react'

export const Download = () => {
  let bgImage = {
    backgroundImage: 'URL("https://cdn.wallpapersafari.com/23/67/04HRGZ.jpg")',

  }
  let downloadButton = {
    backgroundColor: "black", /* Green */
    border: "none",
    color: "white",
    padding: "15px 32px",
    marginLeft: "20vh",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "20px"

  }

  return (
    <div style={bgImage}>

      <h5 style={{ color: 'black', marginLeft: '4vh', paddingTop: '2vh' }} className="fw-bold">Click on the image or "Download" button to download the image:</h5><br />
      <a href="./logo192.png" download><button style={downloadButton}>Download</button><br />
        <img src="./logo192.png" alt="Random Image" width="400px" height="400" style={{ marginLeft: "5vh" }} />
      </a>


    </div>
  )
}
