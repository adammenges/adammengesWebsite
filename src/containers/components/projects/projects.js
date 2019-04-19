import React from "react";
import "./projects.css";
import ProjectScroller from "./projectScroller/projectScroller";
import BusinessCard from "./businessCard/businessCard";

export default class Projects extends React.PureComponent {
  componentDidMount() {}

  componentWillUnmount() {}

  getWindowSize() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    return [width, height];
  }

  render() {
    return (
      <div id="projectsContainer" className="section">
        <BusinessCard />
        {/* now for work */}
        {/* <div
          className="BodyLarge"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-anchor="#projectsContainer"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="WorkSectionHeader">Work</div>
          <div className="WorkSectionBody">
            <div className="WorkSectionBodyCompany">Lobe – </div>
            <div className="WorkSectionBodyTitle"> Founder & CEO</div>
          </div>
          <div className="WorkSectionBody">
            <div className="WorkSectionBodyCompany">Apple – </div>
            <div className="WorkSectionBodyTitle">
              Machine Learning Engineer / Product Manager
            </div>
          </div>
          <div className="WorkSectionBody">
            <div className="WorkSectionBodyCompany">SendGrid – </div>
            <div className="WorkSectionBodyTitle">
              Machine Learning Engineer
            </div>
          </div>
        </div> */}
        {/* now for the projects section */}
        <div
          className="BodyLarge"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-anchor="#projectsContainer"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* <div className="WorkSectionHeader">Projects</div> */}

          <div className="WorkSectionBody">
            <div className="WorkSectionBodyCompany">Lobe</div>
            <div className="WorkSectionBodyImage">
              <ProjectScroller baseImageUrl="/lobe/base.jpg" />
            </div>
            <div className="WorkSectionBodyContent">
              Helping more people build intelligence into their apps by making
              it simple and understandable. Acquired by Microsoft.
              {/* Maybe put stuff like this at the end of the scoller */}
              {/* <div className="WorkSectionBodyContentListHeader">Resources:</div>
              <div className="WorkSectionBodyContentList">
                - website <br />
                - some article
              </div>
              <div className="WorkSectionBodyContentListHeader">With:</div>
              <div className="WorkSectionBodyContentList">
                - Mike Matas <br />
                - Markus Bisinger
              </div> */}
            </div>
          </div>

          <div className="WorkSectionBody">
            <div className="WorkSectionBodyCompany">Cloud of Petals</div>
            <div className="WorkSectionBodyImage">[image]</div>
            <div className="WorkSectionBodyContent">
              Art peiece that traveled art galiries around the world including
              Paris, New York, Brussels, Portland, and more. I designed and
              build the nural network used in Lobe, and generated new rose
              petals based on a dataset collected by workers in a rented out old
              Bell Labs building. Sarah and I gathered in my apartment, pointed
              a RED camera at my iMac, and began filmming the on screen parts of
              the video over the course of several days.
              <div className="WorkSectionBodyContentListHeader">Resources:</div>
              <div className="WorkSectionBodyContentList">
                - website <br />
                - some article
              </div>
            </div>
          </div>

          <div className="WorkSectionBody">
            <div className="WorkSectionBodyCompany">Fresh Eyes</div>
            <div className="WorkSectionBodyImage">[image or video]</div>
            <div className="WorkSectionBodyContent">
              I lead a workshop at Smart Geoamary 2018. We used machine learning
              in the generative artitecture process. Letting computers build new
              buildings all on their own.
              <div className="WorkSectionBodyContentListHeader">Resources:</div>
              <div className="WorkSectionBodyContentList">
                - website <br />
                - some article
              </div>
            </div>
          </div>

          <div className="WorkSectionBody">
            <div className="WorkSectionBodyCompany">Apple</div>
            <div className="WorkSectionBodyImage">[image or video]</div>
            <div className="WorkSectionBodyContent">
              Product Manager and Machine Learnning Engineer. Mindful Bicycles.
            </div>
          </div>

          <div className="WorkSectionBody">
            <div className="WorkSectionBodyCompany">SendGrid</div>
            <div className="WorkSectionBodyImage">[image or video]</div>
            <div className="WorkSectionBodyContent">
              Earily Engineer, using machine learning to stop spam. Acquired by
              Twilio.
            </div>
          </div>

          <div className="WorkSectionBody">
            <div className="WorkSectionBodyCompany">
              <a href="http://headline.adammenges.com">Headline</a>
            </div>
            <div className="WorkSectionBodyImage">[image or video]</div>
            <div className="WorkSectionBodyContent">
              Headline sources Hacker News, various sub-reddits, and twitter;
              then it uses machine learning to extract the best articles (based
              on my liked and disliked articles over the years), and
              automatically adds them to a users Pocket/Instapaper account.
              Thousands of users accross the word.
              <div className="WorkSectionBodyContentListHeader">Resources:</div>
              <div className="WorkSectionBodyContentList">
                - <a href="http://headline.adammenges.com">Headline</a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
