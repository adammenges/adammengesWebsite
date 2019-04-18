import React from "react";
import "./projects.css";

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
        <div
          className="HeadingLargeName nameHeader"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-anchor="#projectsContainer"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          Adam Menges
        </div>
        <div className="horizontalBar" />
        <div
          className="BodyLarge"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-anchor="#projectsContainer"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* <div className="ContactSectionHeader">Contact</div> */}
          <div className="ContactSectionAll">
            <div className="ContactSectionText">
              <div className="WorkSectionBody">
                <div className="WorkSectionBodyCompany">Email – </div>
                <div className="WorkSectionBodyTitle"> adam@adammenges.com</div>
              </div>
              <div className="WorkSectionBody">
                <div className="WorkSectionBodyCompany">Phone – </div>
                <div className="WorkSectionBodyTitle">720-484-0275</div>
              </div>
              {/* Just Icons for the rest of these */}
              {/* <div className="WorkSectionBody">
                <div className="WorkSectionBodyCompany">Instagram – </div>
                <div className="WorkSectionBodyTitle">@adammenges</div>
              </div>
              <div className="WorkSectionBody">
                <div className="WorkSectionBodyCompany">Twitter – </div>
                <div className="WorkSectionBodyTitle">@adammenges</div>
              </div>
              <div className="WorkSectionBody">
                <div className="WorkSectionBodyCompany">Telegram – </div>
                <div className="WorkSectionBodyTitle">@adammenges</div>
              </div>
              <div className="WorkSectionBody">
                <div className="WorkSectionBodyCompany">KeyBase – </div>
                <div className="WorkSectionBodyTitle">@adammenges</div>
              </div> */}
            </div>
            <div className="ImageSection">
              <img src="/me.jpg" width="150" height="150" />
            </div>
          </div>
        </div>
        <div className="horizontalBar" />
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
          <div className="WorkSectionHeader">Projects</div>
          <div className="WorkSectionBody">
            <div className="WorkSectionBodyCompany">Lobe</div>
            <div className="WorkSectionBodyImage">[image or video]</div>
            <div className="WorkSectionBodyContent">
              Visual programing language for developing nural networks. Passion
              / research project done along side my two co founders -- Mike
              Matas and Markus Beisinger
              <div className="WorkSectionBodyContentListHeader">Resources:</div>
              <div className="WorkSectionBodyContentList">
                - website <br />
                - some article
              </div>
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
