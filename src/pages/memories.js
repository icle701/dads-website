import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import NavBar from "../components/Navbar";

import '../styles/style1.css'

// markup
const MemoriesPage = () => {
  return (
    <body class="body">
        <div>
          <NavBar page={"memories"} />
          <div className="contact-us wf-section">
            <div>
              <h1 className="contact-us-text">Contact i_cleland@live.com to add more memories of Peter</h1>
            </div>
            <div className="divider" />
          </div>
          <div className="stories-section wf-section">
            <div className="w-container">
              <div className="story-block">
                <div className="story">
                  <StaticImage src="https://uploads-ssl.webflow.com/61664f74b63c193b0d86ae01/616b4d2aeea5c36f25f5ee2c_Document_20211013_0013.jpg" />
                  <p className="paragraph-5">A text message Peter sent to his friend once about Adrienne, "Adrienne remains the busy little bunny that is always worried about the number of emails she hasn 't responded to, despite getting 150 to 200 a day to complete as well as the other aspects of her job. Still it 's a constant in our lives that hasn’t changed in the last 20 years but she loves her job.&nbsp;I try to ensure I take her out for something special at least once a week and that seems to keep her smiling. Adrienne doesn’t like people to know it but we had our 38th wedding anniversary this year.&nbsp;Adrienne thinks that if people know how long we have been married, it will be easy to tell how old she is, but she like the rest of us cannot stop the flow of time.&nbsp;I have loved every minute of our marriage and wouldn 't swap her for anything, not even a new iPhone lol."</p>
                </div>
                <div className="story-divider" />
                <div className="story">
                  <StaticImage src="https://uploads-ssl.webflow.com/61664f74b63c193b0d86ae01/616b4d1c0666a5c65da521f2_received_600274967771159(1).jpeg" />
                  <p className="paragraph-5">Peter loved people. He connects families and friends. He found out that his brothers in law Robert and Mark Chrystall both love phantom comics and he's been sending them down ever since. If he sent comics to Mark, he would ring up Robert to tell him all about it and vice versa.</p>
                </div>
                <div className="story-divider" />
                <div className="story">
                  <StaticImage src="https://uploads-ssl.webflow.com/61664f74b63c193b0d86ae01/616ba2c9afee102d879d9018_246107806_399341378450306_1484461100249221588_n.jpg" />
                  <p className="paragraph-5">Peter found Bailey at Remuera Baptist Church. He even chased her down. Peter has never admitted that he loved Bailey. Although, as we all can see, he still enjoyed the little fella. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer w-clearfix wf-section">
            <div className="text-block-2">With all of our love to Peter Cleland 1957-2021</div>
          </div>
        </div>
    </body>
  );
}


export default MemoriesPage
