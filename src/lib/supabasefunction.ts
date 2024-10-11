import {supabase} from "./supabase"

//=====================================================================================================================
//category取得用
export const getCategory = async () =>{
    const category = await supabase.from("category").select("*").order("id", { ascending: true }); // idで昇順に並べる
    return category
}
//category追加用
export const addCategory = async (category : string) =>{
    await supabase.from("category").insert({category:category})
}
//=====================================================================================================================


//=====================================================================================================================

//category内のtaskの詳細取得用
export const getCategoryDescription = async (category_Id : number) =>{
    const categoryDescription = await supabase
    .from("categoryDescription")
    .select("*")
    .eq("category_id", category_Id)
    return categoryDescription
}

//categoryにtask追加用
export const addTask = async (category_id : number,taskTitle : string,taskDescription : string) =>{
    await supabase.from("categoryDescription").insert({category_id:category_id,taskTitle:taskTitle ,taskDescription:taskDescription})
}
//=====================================================================================================================



// //削除用
// export const deleteTodo = async (id:number)=>{
//     await supabase.from("chat").delete().eq("id",id)
// }

// //更新用
// export const updateTodo = async (id:number,isCompleted:boolean)=>{
//     await supabase.from("chat").update({isCompleted:isCompleted}).eq("id",id)
// }