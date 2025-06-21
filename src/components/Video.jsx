import React, { useEffect, useState } from "react";

// ✅ All video imports
import vid from "../images/video (15).mp4";
import vid1 from "../images/video (2).mp4";
import vid2 from "../images/video (3).mp4";
import vid3 from "../images/video (4).mp4";
import vid4 from "../images/video (5).mp4";
import vid5 from "../images/video (6).mp4";
import vid6 from "../images/video (7).mp4";
import vid7 from "../images/video (8).mp4";
import vid8 from "../images/video (9).mp4";
import vid9 from "../images/video (10).mp4";
import vid10 from "../images/video (11).mp4";
import vid11 from "../images/video (12).mp4";
import vid12 from "../images/video (13).mp4";
import vid13 from "../images/video (14).mp4";
import vid14 from "../images/video (1).mp4";
import vid15 from "../images/video (16).mp4";
import { Link } from "react-router-dom";

const videos = [
  vid, vid1, vid2, vid3, vid4, vid5, vid6, vid7,
  vid8, vid9, vid10, vid11, vid12, vid13, vid14, vid15,
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedVideo]);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen w-screen bg-black text-white px-4 py-10 overflow-x-hidden">
      <h1 className="text-4xl font-bold text-center mb-10">Sweet Moments!</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            onClick={() => openVideo(video)}
            className="cursor-pointer group relative overflow-hidden rounded-xl border border-white/10"
          >
            <video
              src={video}
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              muted
              loop
              autoPlay
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
              ▶️ Play
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeVideo();
              }}
              className="absolute top-2 right-2 text-white bg-red-600 px-3 py-1 rounded-full hover:bg-red-700 text-sm z-10"
            >
              ✖
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Home Button */}
      <Link to="/">
      <button
        className="mx-auto mt-12 block bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
      >
        ➡️ Home
      </button>
        </Link>
    </div>
  );
}
