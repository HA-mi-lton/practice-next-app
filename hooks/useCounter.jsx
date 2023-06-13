import { useState, useCallback } from "react";

// export const useCounter = () => {
//   const [count, setCount] = useState(0);

//   const handleCounter = useCallback(
//     () => {
//       if (count < 10) {
//         setCount((count) => count + 1);
//       }
//     },
//     [count] //ここが空だと無限ループ
//   );

//   return { count, handleCounter };
// };
export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const handleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((count) => count + 1);
        console.log(count);
      }
    },
    [count]
  );
  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => {
      return isShow ? false : true;
      // return !isShow
    });
  }, []);
  return { count, isShow, handleClick, handleDisplay };
};
