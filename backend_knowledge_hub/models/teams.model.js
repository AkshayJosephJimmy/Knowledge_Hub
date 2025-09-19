import mongoose from "mongoose";

const teamSchema= new mongoose.Schema({
    name:String,
    description:String,
    members:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    admins:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    documents:[{type:mongoose.Schema.Types.ObjectId,ref:'Document'}]
})

const teamModel=mongoose.model('Team',teamSchema);

export default teamModel;