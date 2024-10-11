import { GiHamburgerMenu } from "react-icons/gi";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";

import { category } from "@/app/types"; // category型をインポート

interface NavigationCategoryProps {
  category: category[]; // categoryNameのプロップスとして型定義
}

import { Label } from "@/components/ui/label";

const MenuButton = ({ category }: NavigationCategoryProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <GiHamburgerMenu size={50} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>どのカテゴリを開きますか？</DialogTitle>
          <DialogDescription>カテゴリを選択してください。</DialogDescription>
        </DialogHeader>
        {category.map((category) => (
          <div key={category.id} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Link href={`${category.id}`}>
                <Label htmlFor="title" className="text-right">
                  {category.category}
                </Label>
              </Link>
            </div>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default MenuButton;
