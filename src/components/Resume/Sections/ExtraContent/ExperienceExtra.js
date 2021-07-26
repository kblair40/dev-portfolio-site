import React from "react";
import ResumeSection from "../../ResumeSection";
import ExtraContentContainer from "./ExtraContentContainer";
import classes from "./ExperienceExtra.module.css";

const ExperienceExtra = () => {
  return (
    <div className={classes.container}>
      <ExtraContentContainer>
        <div className={classes.sectionContent}>
          <ResumeSection
            subheader="TimberBlindMetroShade"
            subheaderDetails="District Sales Manager &nbsp;(Feb 2018 - Mar 2020)"
            bullets={[
              "Managed 140 buying customers in IL, WI, MN and MI",
              "Placed 1st in the company in new accounts in 2018 with 69 new accounts, resulting in a 22% increase in sales from 2017",
              "Actively sought and acquired new business through in-person cold calls, buying group and franchise member lists, and a combination of Google and social media searching",
            ]}
          />
          <ResumeSection
            subheader="Strive Lending, Inc."
            subheaderDetails="Mortgage Loan Officer &nbsp;(Apr 2016 - Feb 2018)"
            bullets={[
              "Originated and funded an average of $4.8 million in loans per month",
              "Analyzed applicants’ financial status, credit, and property evaluation to determine loan feasibility",
            ]}
          />
        </div>
      </ExtraContentContainer>
    </div>
  );
};

export default ExperienceExtra;
