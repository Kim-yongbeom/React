import { useEffect, useRef, useState } from "react";

const useCount = (end: number, start: number, duration: number) => {
  const [count, setCount] = useState<number>(start);
  const stepTime = Math.abs(Math.ceil(duration / (end - start)));
  // useEffect 내부에서 'currentNumber'
  // 변수에 대한 할당은 각 렌더링 후에 손실.
  // 시간이 지남에 따라 값을 유지하려면 useRef Hook에 저장
  let currentNumber = useRef<number>(end);

  useEffect(() => {
    const counter = setInterval(() => {
      setCount(Math.ceil(end - currentNumber.current));

      if (currentNumber.current < 0) {
        clearInterval(counter);
      }
      const step = currentNumber.current / Math.ceil(end / 5);
      currentNumber.current -= step;
    }, stepTime);
  }, [end, start, stepTime]);

  return count;
};

export default useCount;
