import git from "../../../../images/github.png";
import linkedin from "../../../../images/linkedin.png";

import Pill from "../../Pill";
import ContentBox from "../../ContentBox";
import Links from "../../Links";
import Jobs from "../../Jobs";

import "./index.css";
import lang from "../../../translations";

function Main({ lng }) {
  return (
    <main className="Main">
      <section className="Main--container">
        <ContentBox tittle={lang[lng].main.links.title}>
          <Links description="LINKEDIN/minde.ziur" img={linkedin}></Links>
          <Links description="GITHUB/mindenzn" img={git}></Links>
        </ContentBox>
        <ContentBox tittle={lang[lng].main.aboutMe.title}>
          <p>{lang[lng].main.aboutMe.infoText}</p>
        </ContentBox>
      </section>
      <div className="Main--colors">
        <h2 className="Main-colors-title">{lang[lng].main.color.title}</h2>
        <Pill color="green">{lang[lng].main.color.good}</Pill>
        <Pill color="yellow">{lang[lng].main.color.average}</Pill>
        <Pill color="red">{lang[lng].main.color.bad}</Pill>
      </div>
      <section className="Main--container-hero">
        <ContentBox tittle={lang[lng].main.education.title}>
          <aside className="Main--container-education">
            <p className="Main--container-textBold ">PPPVM</p>
            <p className="Main--container-textBold ">2008-2011</p>
            <p className="Main--container-textBold ">
              {lang[lng].main.education.degree.first}
            </p>
          </aside>
          <aside>
            <p className="Main--container-textBold ">CodeAcademy</p>
            <p className="Main--container-textBold ">2020-2021</p>
            <p className="Main--container-textBold ">
              {lang[lng].main.education.degree.second}
            </p>
          </aside>
        </ContentBox>
        <ContentBox tittle={lang[lng].main.orgSkills.title}>
          <Pill color="green">{lang[lng].main.orgSkills.teamwork}</Pill>
          <Pill color="green">{lang[lng].main.orgSkills.communication}</Pill>
          <Pill color="yellow">{lang[lng].main.orgSkills.organization}</Pill>
        </ContentBox>
        <ContentBox tittle={lang[lng].main.techSkills.title}>
          <Pill color="green">HTML</Pill>
          <Pill color="green">CSS/SCCS</Pill>
          <Pill color="yellow">JAVASCRIPT</Pill>
          <Pill color="yellow">PHP</Pill>
          <Pill color="red">REACT</Pill>
        </ContentBox>
        <ContentBox tittle={lang[lng].main.lang.title}>
          <Pill color="green">{lang[lng].main.lang.lt}</Pill>
          <Pill color="yellow">{lang[lng].main.lang.en}</Pill>
        </ContentBox>
        <ContentBox tittle={lang[lng].main.driver.title}>
          <Pill color="green">{lang[lng].main.driver.car}</Pill>
          <Pill color="green">{lang[lng].main.driver.worklift}</Pill>
        </ContentBox>
      </section>
      <ContentBox tittle={lang[lng].main.work.title}>
        <aside className="Main--container-grid">
          <Jobs
            position={lang[lng].main.work.jobs.job1.title}
            company=" UAB Lemora"
            years="2011 - 2014"
            description={lang[lng].main.work.jobs.job1.text}
          ></Jobs>
          <Jobs
            position={lang[lng].main.work.jobs.job2.title}
            company="Norsk Sjomat AS"
            years="2014 - 2019"
            description={lang[lng].main.work.jobs.job2.text}
          ></Jobs>
          <Jobs
            position={lang[lng].main.work.jobs.job3.title}
            company=" UAB CoffeAdrress"
            years="2019 - 2020"
            description={lang[lng].main.work.jobs.job3.text}
          ></Jobs>
        </aside>
      </ContentBox>
    </main>
  );
}
export default Main;
