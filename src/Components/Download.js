import React from 'react';
import Figure from 'react-bootstrap/esm/Figure';
import FigureImage from 'react-bootstrap/esm/FigureImage';

export const Download = () => {
  let bgImage = {
    backgroundImage: 'URL("https://wallpaperaccess.com/full/1287373.jpg")',
    height: "85vh",


  }
  let downloadButton = {
    backgroundColor: "black", 
    border: "none",
    color: "white",
    padding: "15px 32px",
    marginLeft: "23vh",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "20px"

  }

  return (
    <div style={bgImage}>

      <h5 style={{ color: 'black', marginLeft: '4vh', paddingTop: '2vh' }} className="fw-bold">Click on the image or "Download" button to download the image:</h5><br />
      <a rel="nofollow" download="" target="_blank" className="_2jBzD _1nvjo _3jtP1 _3d86A _1CBrG _1WPby xLon9 _asSA _19rc8 hhSId _1B083 _3d86A _22Rl1 _1AA_u untracked" data-test="non-sponsored-photo-download-button" title="Download photo" href="https://unsplash.com/photos/odxB5oIG_iA/download?force=true"><button style={downloadButton}>Download</button><br /><br />

        <Figure>
          <Figure.Image
            width={500}
            height={300}
            alt="171x180"
            src="https://unsplash.com/photos/odxB5oIG_iA/download?force=true"

          />
        </Figure>
      </a>


    </div>

  )
}
