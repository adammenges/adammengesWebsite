import React from "react";
import "./businessCard.css";

export default class BusinessCard extends React.PureComponent {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div
        className="BodyLarge"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-anchor="#projectsContainer"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="ContactSectionAll">
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
          <div className="ContactSectionText">
            <div className="WorkSectionBody">
              <div className="WorkSectionBodyCompany">Email – </div>
              <div className="WorkSectionBodyTitle"> adam@adammenges.com</div>
            </div>
            <div className="WorkSectionBody">
              <div className="WorkSectionBodyCompany">Phone – </div>
              <div className="WorkSectionBodyTitle">720-484-0275</div>
            </div>
            {/* places you can find me on the web: */}
            <div className="WorkSectionBody">
              <div className="WorkSectionBodyTitle">
                [] [] [] [] [] [] [] []
              </div>
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
        <div className="horizontalBar" />
      </div>
    );
  }
}
