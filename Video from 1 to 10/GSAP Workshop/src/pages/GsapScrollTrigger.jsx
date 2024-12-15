import gsap from "gsap"; // Nhập thư viện GSAP để thực hiện các hiệu ứng động
import { ScrollTrigger } from "gsap/all"; // Nhập plugin ScrollTrigger để kích hoạt hiệu ứng dựa trên cuộn trang
import { useGSAP } from "@gsap/react"; // Nhập hook useGSAP để dễ dàng sử dụng GSAP trong React
import { useRef } from "react"; // Nhập useRef để lưu trữ tham chiếu đến phần tử DOM

gsap.registerPlugin(ScrollTrigger); // Đăng ký plugin ScrollTrigger với GSAP

const GsapScrollTrigger = () => {
  // useRef để lưu trữ tham chiếu đến phần tử chứa các hộp (scrollRef)
  const scrollRef = useRef();
  

  // useGSAP hook để thực hiện các hiệu ứng GSAP khi component mount
  useGSAP(() => {
    // Chuyển đổi các phần tử con của scrollRef thành mảng và lưu vào biến boxes
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    // Lặp qua từng phần tử trong mảng boxes và áp dụng hiệu ứng GSAP
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 5), // Di chuyển phần tử theo trục x
        rotation: 360, // Xoay phần tử 360 độ
        borderRadius: '100%', // Làm cho các góc của phần tử tròn
        scale: 1.5, // Phóng to phần tử lên 1.5 lần
        scrollTrigger: {
          trigger: box, // Phần tử kích hoạt hiệu ứng
          start: 'bottom bottom', // Bắt đầu hiệu ứng khi đáy phần tử kích hoạt chạm đáy của viewport
          end: 'top 10%', // Kết thúc hiệu ứng khi đỉnh của phần tử chạm 10% viewport từ trên
          scrub: true, // Kích hoạt chế độ scrub, đồng bộ hóa hiệu ứng với cuộn trang
          ease: 'power1.inOut' // Hiệu ứng easing để làm cho chuyển động mượt mà hơn
        }
      });
    });
  }, []); // Chạy hiệu ứng chỉ một lần khi component mount

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
