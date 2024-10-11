"use client";

// import NavigationCategory from "./NavigationCategory/NavigationCategory";

import { getCategory } from "../../../lib/supabasefunction";
import { useEffect, useState } from "react";

//タイプ
import { category } from "@/app/types";
// import AddButton from "../AddButton/CategoryAddButton";
import MenuButton from "../MenuButton/MenuButton";

const Navigation = () => {
  //カテゴリ名格納用
  const [category, setCategory] = useState<category[]>([]);

  //画面表示時にCategory名を表示するため
  useEffect(() => {
    //Category名取得用function
    const getCategoryName = async () => {
      const texts = await getCategory();
      if (texts.data) {
        setCategory(texts.data);
      }
    };
    getCategoryName();
  }, []);

  return (
    <>
      <MenuButton category={category} />
      {/* <div>
        <h1 className="flex justify-between text-2xl my-8 w-full border-b-2 border-white">
          カテゴリ一覧
          <AddButton setCategory={setCategory} />
        </h1>
      </div>
      <NavigationCategory category={category} /> */}
    </>
  );
};

export default Navigation;
