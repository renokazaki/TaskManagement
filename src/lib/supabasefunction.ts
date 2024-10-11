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
export const getCategoryDescription = async (categoryId : number) =>{
    const categoryDescription = await supabase
    .from("categoryDescription")
    .select("*")
    .eq("category_id", categoryId)
    return categoryDescription
}

//categoryにtask追加用
export const sentMessage = async (room_id : number,chat : string) =>{
    await supabase.from("roomDescription").insert({room_id:room_id,chat:chat})
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