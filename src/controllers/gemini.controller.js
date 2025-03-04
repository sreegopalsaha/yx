import asyncHandler from "../utils/asyncHandler.js";
import organizedPrompt from "../utils/organizedPrompt.js";
import getAiResponse from "../utils/getAIResponse.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";

export const getInsights = asyncHandler(async(req, res)=> {
    const data = req.body
    if(!data) throw new ApiError(400, "Data is required to get insights");
    const prompt = await organizedPrompt(data);
    const aiRes = await getAiResponse(prompt);
    if(!aiRes) throw new ApiError(500, "Unable to get AI response");
    await User.create({insight: aiRes});

    res.status(200).send("Done! Your device has no problem");
});