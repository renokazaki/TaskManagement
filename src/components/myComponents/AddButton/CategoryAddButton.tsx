"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { LuFolderPlus } from "react-icons/lu"; //react-iconよりカテゴリ追加マーク

import { getCategory, addCategory } from "../../../lib/supabasefunction";
import { useState } from "react";

import { category } from "@/app/types";

interface CategoryAddButtonProps {
  setCategory: (category: category[]) => void;
}

//両方とも引数はcategory型のreturnなしの関数を受け取っている(setCategoryにしても、handleCategoryAddにしても。)
//useStateのsetCategoruなら、ここでsetする
//handleCategoryAdd(useStateではなし関数)であるならば、引数を指定して呼び出しという事になって、
//受け渡し先の親要素で実行される。
const CategoryAddButton: React.FC<CategoryAddButtonProps> = ({
  setCategory,
}) => {
  //Category名の入力用
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    await addCategory(text);
    setText(""); // フィールドをクリア
    await fetchCategories(); // カテゴリを再取得
  };

  // カテゴリを再取得する関数
  const fetchCategories = async () => {
    const updateCategory = await getCategory();
    if (updateCategory.data) {
      setCategory(updateCategory.data);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <LuFolderPlus size={40} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>カテゴリの追加</DialogTitle>
          <DialogDescription>
            カテゴリのタイトルを入力してください。
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              タイトル
            </Label>
            <Input
              id="title"
              className="col-span-3"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" className="col-span-3" />
          </div> */}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            追加する
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryAddButton;
