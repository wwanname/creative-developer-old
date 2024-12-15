const { useState } = require("react");
const { useEffect } = require("react");

const useDimension = () => {
  const [dimension, setDimension] = useState({ width: null, height: null });
  // trích xuất height từ đây

  const updateDimenstion = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    updateDimenstion();
    window.addEventListener("resize", updateDimenstion);
    return () => {
      window.removeEventListener("resize", updateDimenstion);
    };
  }, []);

  return dimension;
};

export default useDimension;
