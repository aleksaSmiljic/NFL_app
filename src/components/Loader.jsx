const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-800">
      <img
        src="nfl_logo.png"
        alt="nfl logo"
        className="w-[50px] h-[60px] mx-4"
      />
      <p className="text-white text-3xl">LOADING...</p>
    </div>
  );
};

export default Loader;
