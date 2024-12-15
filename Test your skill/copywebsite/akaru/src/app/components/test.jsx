import React, { useRef, useState, useEffect } from "react";

function IntersectionObserverExample() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null, // Quan sát trong cửa sổ trình duyệt
        rootMargin: "100px 0px", // Mở rộng vùng kiểm tra thêm 100px trên và dưới
        threshold: 0.1, // Ngưỡng khi phần tử được coi là nằm trong vùng nhìn thấy
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div style={{ height: "200vh", overflow: "hidden" }}>
      {" "}
      {/* Tạo không gian cuộn lớn */}
      <div style={{ height: "100px", marginTop: "100px" }}>
        <div
          ref={ref}
          style={{
            height: "200px",
            backgroundColor: inView ? "lightgreen" : "lightcoral",
            transition: "background-color 0.5s",
          }}
        >
          Phần tử này sẽ thay đổi màu sắc khi vào vùng nhìn thấy mở rộng!
        </div>
      </div>
    </div>
  );
}

export default IntersectionObserverExample;
