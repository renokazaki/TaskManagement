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

interface TaskAddButtonProps {
  setCategory: (category: category[]) => void;
}

const TaskAddButton: React.FC<TaskAddButtonProps> = ({ setCategory }) => {
  //Category名の入力用
  const [text, setText] = useState("");

  const handleSubmit = () => {
    addCategory(text);
    setText(""); // フィールドをクリア
    fetchCategories(); // カテゴリを再取得
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

export default TaskAddButton;
