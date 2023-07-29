import { Schema ,model } from "mongoose";



const BlogSchema = new Schema({
    title:
    {
        type: String,
    },
    excerpt:
    {
        type: String,
    },
    details:
    {
        type: String,
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
})


const blogModal = model('blogs',BlogSchema);

export default blogModal;