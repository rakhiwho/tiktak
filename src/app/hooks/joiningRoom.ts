import axios from "axios";

export const fetchdata = async()=>{
 try {
    const item = await axios.get('/api/users/allUser') 
 
    if(!item.data.type){
        return "cant fetch data";
    }
    return item.data.type;
 } catch (error) {
    console.log(error)
    return('something went wroing')
 }
   
 
}
