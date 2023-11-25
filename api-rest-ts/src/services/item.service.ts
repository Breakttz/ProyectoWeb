import { Notice } from "../interfaces/notice.interface";
import itemModel from "../models/item"

const insertNotice = async (item:Notice) =>{
    const responseInsert = await itemModel.create(item);
    return responseInsert;
};

const getNotices =async () => {
    const responseItem = await itemModel.find({})
    return responseItem  
};

const getNotice = async (id:string) => {
    const responseItem = await itemModel.findOne({ _id : id})
    return responseItem;
}

const udpateNotice = async (id:string, data : Notice) => {
    const responseItem = await itemModel.findOneAndUpdate(
        { _id : id},
        data,
        {new : true}
        );
    return responseItem;
}
const deleteNotice = async (id:string) => {
    const responseItem = await itemModel.findOneAndDelete({_id:id})
    return responseItem;
}


export {insertNotice,getNotice, getNotices,udpateNotice , deleteNotice};