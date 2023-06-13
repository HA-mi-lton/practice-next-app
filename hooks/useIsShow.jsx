import { useCallback, useState } from "react";

export const useIsShow = () => {
  const [isShow, setIsShow] = useState(true);

  //true false
  const handleIsShow = useCallback(() => {
    setIsShow((isShow) => {
      //return isShow ? false : true;
      return !isShow;
    });
  }, []);
  return { isShow, handleIsShow };
};
