import { useCallback, useState } from "react";

// function useInputArray() {
//   const [text, setText] = useState("");
//   const [array, setArray] = useState([]);

//   //string
//   const handleChange = (e) => {
//     if (e.target.value.length > 5) {
//       alert("5文字以内で入力してください");
//       return;
//     }
//     setText(e.target.value.trim()); //trim()は空白を打てなくさせる
//   };

//   //一覧表示させるためのコンポーネント
//   const handleAdd = useCallback(() => {
//     setArray((prevArray) => {
//       const newArray = [...prevArray, text];
//       return newArray;
//     });
//   }, [text]);
//   return text, array, handleChange, handleAdd;
// }

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在します。");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);
  return { text, array, handleChange, handleAdd };
};
