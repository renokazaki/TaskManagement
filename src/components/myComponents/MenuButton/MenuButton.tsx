"use client";

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { category } from "@/app/types"; // category型をインポート
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import CategoryAddButton from "../AddButton/CategoryAddButton";

import { getCategory } from "../../../lib/supabasefunction";

const MenuButton = () => {
  //分割代入の一種
  //categoryList プロパティの値を initialCategoryList という変数名で受け取ります。

  const [isOpen, setIsOpen] = useState(false);

  //カテゴリ名格納用
  const [category, setCategory] = useState<category[]>([]);

  // ダイアログを開閉する関数
  const handleDialogToggle = () => setIsOpen(true);

  // Linkをクリックした際にダイアログを閉じる
  const handleLinkClick = () => setIsOpen(false);

  // カテゴリ追加後の処理
  const handleCategoryAdd = (newCategories: category[]) => {
    setCategory(newCategories);
  };

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
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <GiHamburgerMenu size={50} onClick={handleDialogToggle} />
        </DialogTrigger>
        <DialogContent className="max-w-[300px] h-3/4">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="ml-4">
                どのカテゴリを開きますか？
              </DialogTitle>
              <CategoryAddButton setCategory={handleCategoryAdd} />
            </div>
          </DialogHeader>
          <ScrollArea className="rounded-md border p-4 overflow-y-auto">
            {category.map((category) => (
              <div
                key={category.id}
                className="grid gap-4 py-4  hover:bg-gray-600 border-b border-black"
              >
                <Link href={`${category.id}`} onClick={handleLinkClick}>
                  <div className="flrx flex-wrap items-center gap-4  w-full ">
                    <Label
                      htmlFor="title"
                      className="text-right cursor-pointer"
                    >
                      {category.category}
                    </Label>
                  </div>
                </Link>
              </div>
            ))}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuButton;
