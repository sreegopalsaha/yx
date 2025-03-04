import { Schema, model } from 'mongoose';

const userInsightSchema = new Schema({
    insight: {
        type: String,
        required: true
    },
}, { timestamps: true });

const User = model('User', userInsightSchema);

export default User;