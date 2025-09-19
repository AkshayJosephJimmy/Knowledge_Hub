import mongoose from "mongoose";



const DocumentSchema = new mongoose.Schema({
    title:String,
    content:String,
    team:[{type:mongoose.Schema.Types.ObjectId, ref:'Team'}],
    tags:String,
    summary:String,
    createdAt:{type:Date, default:Date.now},
    createdBy:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    updatedAt:{type:Date, default:Date.now}
    
});

const DocumentModel=mongoose.model('Document',DocumentSchema);

export default DocumentModel;