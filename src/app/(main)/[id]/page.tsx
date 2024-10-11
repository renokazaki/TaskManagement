"use client";

import Cards from "@/components/myComponents/Card/Cards";

import { getCategoryDescription } from "../../../lib/supabasefunction";
import { useEffect, useState } from "react";

import { categoryDescription } from "@/app/types";
import TaskAddButton from "@/components/myComponents/AddButton/TaskAddButton";
// import MenuButton from "@/components/myComponents/MenuButton/MenuButton";

interface Params {
  params: { id: number };
}

export default function CategoryDescrptionPage({ params }: Params) {
  const [taskDescription, setTaskDescription] = useState<categoryDescription[]>(
    []
  );

  useEffect(() => {
    const categoryId = params.id;

    // Only fetch data if categoryId is valid
    if (categoryId) {
      const getCategoryTask = async () => {
        const result = await getCategoryDescription(categoryId);
        if (result.data) {
          setTaskDescription(result.data);
        }
      };
      getCategoryTask();
    }
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-around">
        {taskDescription.map((taskItem) => (
          <div key={taskItem.id} className="flex flex-wrap justify-around">
            <Cards taskItem={taskItem} />
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 right-4 ">
        <TaskAddButton setTaskDescription={setTaskDescription} />
      </div>
    </div>
  );
}
