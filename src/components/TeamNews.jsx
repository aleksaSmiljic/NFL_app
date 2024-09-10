/* eslint-disable react/prop-types */
import NewsListiItem from "./NewsListiItem";

const TeamNews = ({ news }) => {
  return (
    <div className="flex justify-center mt-10">
      <ul className="grid grid-cols-3 gap-4">
        {news.map((info, i) => (
          <NewsListiItem key={i} info={info} />
        ))}
      </ul>
    </div>
  );
};

export default TeamNews;
