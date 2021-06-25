function Home({ videos }) {
  return (
    <div className="bg-gray-100 p-6 videos">
      {videos &&
        videos.map((video) => {
          return (
            <div className="videos-row__item" key={video.id}>
              <div className="relative">
                <img
                  className="w-full h-auto align-middle"
                  src={video.image}
                  alt=""
                />
                <div className="absolute inline-block bg-black text-white text-xs font-semibold px-1 videos-row__minute">
                  {video.time}
                </div>
              </div>
              <div className="videos-row__item-des pt-3">
                <div>
                  <img
                    className="rounded-full w-full h-auto align-middle"
                    src={video.channelImage}
                    alt=""
                  />
                </div>
                <div>
                  <p className="overflow-ellipsis text-sm font-semibold">
                    {video.title}
                  </p>
                  <p className="text-sm text-gray-600 pt-2">{video.channel}</p>
                  <p className="text-sm text-gray-600">
                    {video.nViews} . {video.createdDate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
