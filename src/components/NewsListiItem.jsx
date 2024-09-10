/* eslint-disable react/prop-types */
const NewsListiItem = ({ info }) => {
  return (
    <div className="w-[600px] border">
      <div className="p-3 w-full">
        <img src={info.image} alt="News Photo" className="object-contain" />
      </div>
      <p>{info.title}</p>
    </div>
  );
};

export default NewsListiItem;
