import React from "react";
import ImageCard from "../utils/ImageCard";

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="container pt-5">
        <h1 className="port-head text-center ">Portfolio</h1>
        <div className="row pt-4">
          <div className="col-sm-4 ">
            <ImageCard
              imageUrl="assets/Food.PNG"
              Href="https://fodywebsite.netlify.app/"
              Href2="https://github.com/yasinsabri/FoodWebsite"
              Title="Food Website"
            />
          </div>
          <div className="col-sm-4">
            <ImageCard
              imageUrl="assets/logx.PNG"
              Href="https://logxreplica.netlify.app/"
              Href2="https://github.com/yasinsabri/logxreplica"
              Title="Log X"
            />
          </div>
          <div className="col-sm-4">
            <ImageCard
              imageUrl="assets/4chan.PNG"
              Href="https://4chanreplica.netlify.app/"
              Href2="https://github.com/yasinsabri/4chanReplica"
              Title="4Chan Replica"
            />
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-sm-4">
          <ImageCard
              imageUrl="assets/pepex.PNG"
              Href="https://pepexreplica.netlify.app/"
              Href2="https://github.com/yasinsabri/PepeXReplica"
              Title="PepeX Replica"
            />
          </div>
          <div className="col-sm-4">
          <ImageCard
              imageUrl="assets/doge4.PNG"
              Href="https://doge4replica.netlify.app/"
              Href2="https://github.com/yasinsabri/Doge4-Replica"
              Title="Doge4 Replica"
            />
          </div>
          <div className="col-sm-4">
          <ImageCard
              imageUrl="assets/binance.PNG"
              Href="https://binancereplica.netlify.app/"
              Href2="https://github.com/yasinsabri/Binance-Replica"
              Title="Binance Replica"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
