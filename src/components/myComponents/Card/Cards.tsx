//shadcnのカードコンポーネントを使用
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

//react-iconsのチェックアイコン
import { FcApproval } from "react-icons/fc";

import { categoryDescription } from "@/app/types";

// プロップスの型定義を修正
interface CardsProps {
  taskItem: categoryDescription;
}

const Cards = ({ taskItem }: CardsProps) => {
  return (
    <div>
      <Card className="relative w-80 sm:w-48 h-60 sm:h-52 m-8 ">
        <CardHeader>
          <CardTitle>{taskItem.taskTitle}</CardTitle>
          <CardDescription className="text-xs line-clamp-4">
            {taskItem.taskDescription}
          </CardDescription>
        </CardHeader>
        <div className="flex">
          <time className="absolute bottom-2 left-2 text-sm text-slate-400">
            Mar 10, 2020
          </time>
          <FcApproval size={48} className="absolute bottom-2 right-2" />
        </div>
      </Card>
    </div>
  );
};

export default Cards;
