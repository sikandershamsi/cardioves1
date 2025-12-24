import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VideoCarousel = ({ 
  videos: propVideos = null, // Allow manual override if needed
  showDots = false,
  showArrows = true,
  maxVideos = 8, // Maximum number of videos to display (latest 10)
}) => {
  const [sliderRef, setSliderRef] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If videos are provided as props, use them directly
    if (propVideos && propVideos.length > 0) {
      setVideos(propVideos);
      setLoading(false);
      return;
    }

    // Otherwise, fetch from YouTube channel
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/youtube-videos?maxResults=${maxVideos}`);
        const data = await response.json();

        if (response.ok && data.videos) {
          // Videos are already limited by the API
          setVideos(data.videos);
        } else {
          setError(data.message || 'Failed to fetch videos');
          // Fallback to empty array or default videos
          setVideos([]);
        }
      } catch (err) {
        console.error('Error fetching YouTube videos:', err);
        setError('Failed to load videos');
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [propVideos, maxVideos]);

  const settings = {
    dots: showDots,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (loading) {
    return (
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-[250px] md:h-[300px] lg:h-[350px]">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-[#D4274B] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 text-lg">Loading videos...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || videos.length === 0) {
    return (
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-[250px] md:h-[300px] lg:h-[350px]">
          <div className="text-gray-500 text-center">
            {error || 'No videos available'}
            {error && error.includes('API key') && (
              <p className="text-sm mt-2">Please configure YOUTUBE_API_KEY in your environment variables</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 py-8">
        <Slider {...settings} ref={setSliderRef} className="video-carousel">
          {videos.map((video, index) => (
            <div key={video.id || index} className="px-2">
              <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title || `Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                />
              </div>
            </div>
          ))}
        </Slider>

        {showArrows && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => sliderRef?.slickPrev()}
              className="flex items-center justify-center h-12 w-12 rounded-full bg-white border-2 border-[#D4274B] hover:bg-[#D4274B] hover:text-[#FFFFFF] transition-all text-[#D4274B] cursor-pointer shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => sliderRef?.slickNext()}
              className="flex items-center justify-center h-12 w-12 rounded-full bg-white border-2 border-[#D4274B] hover:bg-[#D4274B] hover:text-[#FFFFFF] transition-all text-[#D4274B] cursor-pointer shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}

        <style jsx global>{`
          .video-carousel .slick-dots {
            bottom: -40px;
          }
          .video-carousel .slick-dots li button:before {
            color: #D4274B;
            font-size: 12px;
          }
          .video-carousel .slick-dots li.slick-active button:before {
            color: #D4274B;
          }
        `}</style>
      </div>
    </>
  );
};

export default VideoCarousel;

