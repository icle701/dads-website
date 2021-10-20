import * as React from "react"
import NavBar from "../components/Navbar";

const VideoPage = () => {
  return (
      <>
    <body className="body">
      <div>
        <NavBar page="videos" />
        <div className="contact-us wf-section">
          <div>
            <h1 className="contact-us-text">Contact i_cleland@live.com to add more videos of Peter</h1>
          </div>
          <div className="divider" />
        </div>
        <div className="funeral-video-section wf-section">
          <div className="w-container">
            <div className="story-block">
              <div className="story">
                <div style={{paddingTop: '56.17021276595745%'}} className="funeral-video w-video w-embed"><iframe className="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FuhscNKApahg%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuhscNKApahg&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FuhscNKApahg%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" title="YouTube embed" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" /></div>
                <p className="paragraph-5 title">Peter's funeral video</p>
              </div>
            </div>
            <div className="divider" />
          </div>
        </div>
      </div>
      </body>
      <div className="footer w-clearfix wf-section">
      <div className="text-block-2">With all of our love to Peter Cleland 1957-2021</div>
    </div>
    </>
  );
}

export default VideoPage;