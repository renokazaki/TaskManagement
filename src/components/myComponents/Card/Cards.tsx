//shadcnのカードコンポーネントを使用
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

//react-iconsのチェックアイコン
import { FcApproval } from "react-icons/fc";

const Cards = () => {
  return (
    <div>
      <Card className="relative w-80 sm:w-48 h-60 sm:h-52 m-8 ">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription className="text-xs line-clamp-4">
            Card Description
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
