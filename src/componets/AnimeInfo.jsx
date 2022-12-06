import { useEffect } from "react";
import { useState } from "react";
import "./AnimeInfo.css";
import { Container, Row, Col, CardGroup } from "react-bootstrap";

const AnimeInfo = () => {
  const [AnimeData, SetData] = useState([]);

  useEffect(() => {
    fetch("https://gogoanime.consumet.org/recent-release")
      .then((response) => response.json())
      .then((animelist) => SetData(animelist));
  }, []);

  function AnimeInfo(props) {
    return (
      <>
        <div className="Container">
          <div className="Card">
            <img src={props.animeImg} width="200px" height="200px" alt="Img" />
            <p>{props.animeTitle}</p>
            <a href={props.episodeUrl}>Wattch</a>
            {/* <Button variant="primary" href={props.episodeUrl}>
              Watch Now
            </Button> */}
          </div>
        </div>
      </>
    );
  }

  function IanimeInfo(val) {
    return (
      <AnimeInfo
        animeImg={val.animeImg}
        animeTitle={val.animeTitle}
        episodeNum={val.episodeNum}
        episodeUrl={val.episodeUrl}
      />
    );
  }
  return (
    <>
      <h1>yo Whats up!!</h1>
      <div className="Container">{AnimeData.map(IanimeInfo)}</div>
    </>
  );
};

export default AnimeInfo;
