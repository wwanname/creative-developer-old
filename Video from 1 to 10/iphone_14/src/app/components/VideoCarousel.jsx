import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'; // Đảm bảo gsap được nhập để sử dụng các hiệu ứng động
import { replayImg } from '../utils';

const VideoCarousel = () => {
    // Sử dụng useRef để lưu trữ tham chiếu đến các phần tử video và các phần tử span để hiệu ứng động
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);

    // Khởi tạo trạng thái video với các thuộc tính cần thiết
    const [video, setVideo] = useState({
        isEnd: false, // Biến để theo dõi khi video kết thúc
        startPlay: false, // Biến để xác định khi nào video bắt đầu phát
        videoId: 0, // ID của video hiện tại, dùng để chọn video cụ thể từ mảng videoRef
        isLastVideo: false, // Biến để theo dõi xem đây có phải là video cuối cùng không
        isPlaying: false, // Biến để theo dõi trạng thái phát của video
    });

    // Trạng thái lưu trữ dữ liệu đã tải
    const [loadedData, setLoadedData] = useState([]);

    // Destructuring trạng thái video để dễ sử dụng
    const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

    // useEffect để quản lý hành động phát hoặc dừng video dựa trên trạng thái
    useEffect(() => {
        // Kiểm tra nếu mảng loadedData có nhiều hơn 3 phần tử
        if (loadedData.length > 3) {
            // Nếu video không đang phát, dừng video
            if (!isPlaying) {
                videoRef.current[videoId]?.pause();
            } else {
                // Nếu video đang được yêu cầu phát, phát video
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [startPlay, videoId, isPlaying, loadedData]); // Chạy lại effect khi các giá trị trong mảng dependency thay đổi

    // useEffect để xử lý hiệu ứng động với GSAP
    useEffect(() => {
        const span = videoSpanRef.current[videoId];
        if (span) {
            // Tạo hiệu ứng động với GSAP
            let anim = gsap.to(span, {
                onUpdate: () => {
                    // Xử lý cập nhật hiệu ứng khi animation đang chạy
                },
                onComplete: () => {
                    // Xử lý khi hiệu ứng hoàn thành
                }
            });
            return () => anim.kill(); // Cleanup animation khi component unmount
        }
    }, [videoId]); // Chạy lại effect khi videoId thay đổi

    const handleProcess = (type, i) => {
        switch (type) {
          case "video-end":
            setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
            break;
    
          case "video-last":
            setVideo((pre) => ({ ...pre, isLastVideo: true }));
            break;
    
          case "video-reset":
            setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
            break;
    
          case "pause":
            setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
            break;
    
          case "play":
            setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
            break;
    
          default:
            return video;
        }
      };

    return (
        <>
            <div className='flex items-center'>
                <div id="slider" className='sm:pr-20 pr-10'>
                    <div className='relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]'>
                        <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                            <video
                                id="video"
                                playsInline={true} // Đảm bảo video phát trực tiếp trong chế độ xem không toàn màn hình
                                preload='auto' // Tải video trước khi phát để cải thiện hiệu suất
                                muted // Video sẽ không phát âm thanh
                                ref={(el) => (videoRef.current[0] = el)} // Lưu tham chiếu đến phần tử video đầu tiên trong mảng videoRef
                                onPlay={() => {
                                    // Khi video bắt đầu phát, cập nhật trạng thái video
                                    setVideo((prevVideo) => ({
                                        ...prevVideo, // Sao chép các thuộc tính hiện tại của trạng thái video
                                        isPlaying: true // Cập nhật isPlaying thành true để cho biết video đang phát
                                    }));
                                }}
                            >
                                <source src="/assets/videos/highlight-first.mp4" type="video/mp4" />
                                {/* Nguồn video được cung cấp cho phần tử video */}
                            </video>
                        </div>

                        <div className='absolute top-12 left-[5%] z-10'>
                            <p className='md:text-2xl text-xl font-medium'>
                                Enter A17 Pro,
                                Game‑changing chip,
                                Groundbreaking performance,
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative flex-center mt-10'>
                <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
                    {videoRef.current.map((_, i) => (
                        <span
                            key={i}
                            ref={() => (videoDivRef.current[i] =
                                el)}
                            className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'
                        >
                            <span className='absolute h-full w-full rounded-full' ref={(el) => (videoSpanRef.current[i] = el)} >

                            </span>
                        </span>
                    ))}
                </div>
            </div>

            <button
                className='control-btn'
                src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} alt={isLastVideo ? 'replay' : !isPlaying? 'play' : 'pause'}
                onClick={isLastVideo ? () => handleProcess('video-reset') : !isPlaying ? () => handleProcess('play') : () => handleProcess('pause')}
            >
            </button>
        </>
    );
};

export default VideoCarousel;
