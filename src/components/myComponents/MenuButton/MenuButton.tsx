import { useState } from "react";
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

interface NavigationCategoryProps {
  categoryList: category[]; // categoryNameのプロップスとして型定義
}

const MenuButton = ({
  //分割代入の一種
  //categoryList プロパティの値を initialCategoryList という変数名で受け取ります。
  categoryList: initialCategoryList,
}: NavigationCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // ダイアログを開閉する関数
  const handleDialogToggle = () => setIsOpen(true);

  // Linkをクリックした際にダイアログを閉じる
  const handleLinkClick = () => setIsOpen(false);

  const [categoryList, setCategoryList] =
    useState<category[]>(initialCategoryList);

  // カテゴリ追加後の処理
  const handleCategoryAdd = (newCategories: category[]) => {
    setCategoryList(newCategories);
  };

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
            {categoryList.map((category) => (
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
