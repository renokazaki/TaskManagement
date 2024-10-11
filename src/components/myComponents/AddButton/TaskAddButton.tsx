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

import { FcPlus } from "react-icons/fc";

import { addTask, getCategoryDescription } from "../../../lib/supabasefunction";
import { useState } from "react";

import { categoryDescription } from "@/app/types";
import { useParams } from "next/navigation";

interface TaskAddButtonProps {
  setTaskDescription: (categoryDescription: categoryDescription[]) => void;
}

const TaskAddButton: React.FC<TaskAddButtonProps> = ({
  setTaskDescription,
}) => {
  const { id } = useParams(); // ページのIDを取得
  const categoryId = parseInt(id as string, 10); // IDを整数に変換

  //タスクの詳細入力用
  const [title, setTitle] = useState("");
  const [description, setDescrpiton] = useState("");

  const handleSubmit = async () => {
    await addTask(categoryId, title, description);
    setTitle(""); // フィールドをクリア
    setDescrpiton(""); // フィールドをクリア
    await fetchAllTask(); // タスクの情報を再取得
  };

  // タスクを再取得する関数
  const fetchAllTask = async () => {
    const updateTask = await getCategoryDescription(categoryId);
    if (updateTask.data) {
      setTaskDescription(updateTask.data);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <FcPlus size={60} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>タスクの追加</DialogTitle>
          <DialogDescription>
            タスクの詳細を入力してください。
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
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              詳細
            </Label>
            <Input
              id="description"
              className="col-span-3"
              onChange={(e) => setDescrpiton(e.target.value)}
              value={description}
            />
          </div>
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
