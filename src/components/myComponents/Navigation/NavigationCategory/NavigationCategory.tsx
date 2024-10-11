import { category } from "@/app/types"; // category型をインポート
import Link from "next/link";

interface NavigationCategoryProps {
  category: category[]; // categoryNameのプロップスとして型定義
}

const NavigationCategory = ({ category }: NavigationCategoryProps) => {
  return (
    <div>
      {category.map((category) => (
        <div key={category.id} className=" flex flex-col justify-center">
          <Link href={`${category.id}`}>
            <h2 className="hover:bg-slate-700 hover:border-r-green-500  hover:border-r-4 h-20 border-b-2 border-black">
              {category.category}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavigationCategory;
