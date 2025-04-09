import React, { useContext } from "react";
import "./YouTubeSection.scss";
import { youtubeSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function YouTubeSection() {
  const { isDark } = useContext(StyleContext);

  if (!youtubeSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main youtube-section">
        <h1 className="youtube-section-title">{youtubeSection.title}</h1>
        <p className={isDark ? "dark-mode youtube-subtitle" : "subTitle youtube-subtitle"}>
          {youtubeSection.subtitle}
        </p>
        <div className="youtube-embed-wrapper">
          {youtubeSection.videos.map((url, idx) => (
            <iframe
              key={idx}
              className="youtube-embed"
              src={url}
              title={`YouTube video ${idx}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </Fade>
  );
}
