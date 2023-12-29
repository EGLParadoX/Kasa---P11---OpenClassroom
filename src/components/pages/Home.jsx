import PropTypes from "prop-types";
import HomeSection from "../sections/HomeSection";

const Home = ({ articles }) => {
  return (
    <div>
      <HomeSection articles={articles} />
    </div>
  );
};

Home.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Home;
