import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://images.unsplash.com/photo-1632558610168-8377309e34c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWFuJTIwYmJxfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://wallpapercave.com/wp/wp3495545.jpg" alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
