import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import NavBar from "../components/Navbar";

import '../styles/style1.css'

// markup
const AboutPage = () => {
  return (
    <body className="body-2">
        <NavBar page={"about"} />
        <div class="quote-section wf-section">
            <div class="quote-block">
                <blockquote class="quote">&quot;Peter has adequate resources of time, knowledge and skills, is highly intelligent, a deep compassion, a strong moral compass, a wicked sense of humour and most importantly a desire for the wellbeing of those around him.&quot;</blockquote>
            </div>
        </div>
        <div class="photo-drvider-long wf-section">
            <div class="div-block-9"></div>
        </div>
        <section id="cards-section" class="cards-section-2 wf-section">
            <div class="centered-container w-container">
                <h2 class="heading-6">About Peter</h2>
                <p class="paragraph-6">Let &#x27;s take a moment to learn about Peter &#x27;s interests, contributions, and achievements.</p>
                <div class="cards-grid-container">
                    <div id="w-node-_8cf6573d-3eba-bed2-85ec-32865a5636c4-8d86ae04" class="div-block-8 white">
                        <h3 class="heading-7 white-box">Careers</h3>
                        <ul role="list" class="list">
                            <li>Entrepreneur - Molesworth Fruite Akl.Ltd (2015 - 2020) &amp; Maggie Martins Irish Foods (2005 - 2009)</li>
                            <li>Academic - Co-authored a book entitled Science, Technology and the Diffusion of Knowledge, Understandingthe Dynamics of Innovation Systems in Asia Pacific. Edited by Tim Turpin and V. V. Krishna (2007) &amp;Teaching Assistant at Massey University (2003-2005)</li>
                            <li>General Manager of the New Zealand Horticulture and Food Research Institute (1990 - 1995)</li>
                        </ul>
                    </div>
                    <div id="w-node-_2a2647ca-3d3d-918e-0447-4f6fb429c1e7-8d86ae04" class="div-block-8">
                        <h3 class="heading-7">Social Contributions</h3>
                        <ul role="list" class="list-2">
                            <li>Trustee of Mangere Community Law Centre (2011 – 2021) &amp;Lindor Charitable Trust (2012-2021)</li>
                            <li>Chairman of Mangere East Family Services Centre (2008 - 2021)</li>
                            <li>Remuera Rotary Club (2009-2011)</li>
                            <li>Board Member and Past Chairman for Palmerston North Community Access Radio</li>
                            <li>Past Board Member for Hastings/ Guilin Sister City Board (1998-2001) and Relationship Services, Palmerston North (1991 - 1992)</li>
                            <li>Past Trustee of Palmerston North PANCERT Trust, promotion board of The Knowledge Centre (1991 - 1992)</li>
                            <li>Past Chairman of the New Zealand Institute of Food, Science and Technology, Wellington Branch (1988 - 1990), Palmerston North Te Aroha Noa Community Gymnasium (1990 - 1991), and the Massey University / HortResearch Consultative Committee (1995-1998).</li>
                        </ul>
                    </div>
                    <div id="w-node-_90f1535d-5845-1908-cb28-88ac54656b59-8d86ae04" class="div-block-8">
                        <h3 class="heading-7">Personality</h3>
                        <p class="paragraph-8">Peter was extroverted, social, cheerful, clever, full of life, cheeky, quirky, impulsive, soft-hearted, generous, loving, kind, supportive, considerate, and funny.</p>
                    </div>
                    <div id="w-node-f0ae5a17-adf7-3a0d-74c3-085dbd857e1a-8d86ae04" class="div-block-8 white">
                        <h3 class="heading-7 white-box">Hobbies</h3>
                        <p class="paragraph-8 white-box">Peter has never been boring. He &#x27;s got over 100 different interests and ideas. </p>
                        <ul role="list" class="list">
                            <li>Apple technologies</li>
                            <li>Singing, and playing the guitar. </li>
                            <li>Photography, writing, reading, and painting. </li>
                            <li>Train sets, his plant babies, martial arts, and golf.</li>
                            <li>Do magic tricks, and collect stamp &amp;microscope.</li>
                            <li class="list-item-3">
                                Acting career - being an extra, and a feature.<br/>
                                https://www.talento.co.nz/talent/<br/>
                                1080/peter-cleland<br/>
                                2019 Partners Life - Business Man<br/>
                                2015 Qualcomm - Airplane Extra (Australia)<br/>
                                2011 Nothing Trivial - Proud Manager<br/>
                                2011 NZ Lotteries &#x27;Big Wednesday &#x27;- Featured<br/>2010 Anchor Milk &#x27;The Great Milk Run &#x27;- Featured 
                            </li>
                        </ul>
                    </div>
                    <div id="w-node-dc4cc1d1-063c-5fb9-0431-1c199f440798-8d86ae04" class="div-block-8 grey">
                        <h3 class="heading-7">Education</h3>
                        <ul role="list" class="list-3">
                            <li>M.B.A - Masssey University (1991)</li>
                            <li class="list-item">Bachelors of Technology (Biotech) from Massey University (1985)</li>
                            <li class="list-item-2">Diploma in Diary Technology (1981)</li>
                        </ul>
                    </div>
                    <div id="w-node-_6d03134f-490e-6904-8cb2-ddeb902ba82d-8d86ae04" class="div-block-8 white">
                        <h3 class="heading-7 white-box">Facts</h3>
                        <ul role="list" class="list">
                            <li>Height: 188cm</li>
                            <li>Eye: Green</li>
                            <li>Accent: New Zealand</li>
                            <li>
                                Ethnicity: 39% Scotland, 33% Sweden &amp;Denmark, 11% England &amp;Northwestern Europe, 9% Ireland (<strong>very proudly</strong>
                                ), 6% Norway, and 2% Eastern Europe &amp;Russia. 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div class="photo-drvider-long wf-section">
            <div>
                <h1 class="heading-5">Thank you for loving Peter!</h1>
            </div>
            <img src="https://uploads-ssl.webflow.com/61664f74b63c193b0d86ae01/61668f82224296b4247595cf_yan-ming-w1MrSC_JMs8-unsplash.jpg" class="image-6"/>
        </div>
        <div class="footer w-clearfix wf-section">
            <div class="text-block-2">With all of our love to Peter Cleland 1957-2021</div>
        </div>
    </body>
  );
}


export default AboutPage
