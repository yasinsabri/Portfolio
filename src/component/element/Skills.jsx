import React from "react";
import SkillCard from "../utils/SkillCard";

const Skills = () => {
  return (
    <React.Fragment>
      <div className="container pb-5">
        <h1 className="skill-head text-center">MY SKILLS</h1>
        <div className="row pt-5  ">
          <div className="col-sm-3">
            <SkillCard imgUrl="assets/html.svg" Title="HTML" name=" w-50" />
          </div>
          <div className="col-sm-3">
            <SkillCard imgUrl="assets/css.svg" Title="CSS" name=" w-50" />
          </div>
          <div className="col-sm-3">
            <SkillCard imgUrl="assets/js.png" Title="Javascript" name=" w-50" />
          </div>
          <div className="col-sm-3">
            <SkillCard imgUrl="assets/react.svg" Title="React" name=" w-75" />
          </div>
        </div>
        <div className="row pt-5  ">
          <div className="col-sm-3">
            <SkillCard
              imgUrl="assets/blockchain.svg"
              Title="BlockChain"
              name=" w-50 pt-5"
            />
          </div>
          <div className="col-sm-3">
            <SkillCard
              imgUrl="assets/firebase.svg"
              Title="FireBase"
              name=" w-50 pt-5"
            />
          </div>
          <div className="col-sm-3">
            <SkillCard
              imgUrl="assets/canva.png"
              Title="Canva"
              name=" w-50 pt-5"
            />
          </div>
          <div className="col-sm-3">
            <SkillCard
              imgUrl="assets/web3.png"
              Title="Web 3.0"
              name=" w-50 pt-5"
            />
          </div>
        </div>
        <div className="row pt-5  ">
          <div className="col-sm-3">
            <SkillCard
              imgUrl="assets/marketing.png"
              Title="Digital Marketing"
              name=" w-75"
            />
          </div>
          <div className="col-sm-3">
            <SkillCard
              imgUrl="assets/ps.svg"
              Title="Adobe Photoshop"
              name=" w-50 pt-5"
            />
          </div>
          <div className="col-sm-3">
            <SkillCard
              imgUrl="assets/vs.svg"
              Title="Visual Studio"
              name=" w-50 pt-5"
            />
          </div>
          <div className="col-sm-3">
            <SkillCard imgUrl="assets/r&d.png" Title="R&D" name=" w-50 pt-5" />
          </div>
        </div>
        
           </div>
        
         
     
    </React.Fragment>
  );
};

export default Skills;
