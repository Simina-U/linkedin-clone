import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberNewIcon from "@mui/icons-material/FiberNew";

export default function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__article-left">
        <FiberNewIcon />
      </div>
      <div className="widgets__article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Elections season in France",
        "Macron to face Le Pen in French election runoff"
      )}
      {newsArticle(
        "New Techie Tech",
        "The new Android Auto 7.5 update is available from the Play Store"
      )}
      {newsArticle(
        "Latest on Amazon",
        "Amazon files its appeal of historic union vote at New York City warehouse"
      )}
      {newsArticle(
        "SpaceX just launched paying customers to the ISS",
        "Here's everything you need to know"
      )}
    </div>
  );
}
