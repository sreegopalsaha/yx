import { GoogleGenerativeAI } from "@google/generative-ai";

const getAiResponse = async (prompt) => {

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL });

    const result = await model.generateContent(prompt);
    if (!result) throw new ApiError(500, "Unable to get AI response");
    
    const cleanText = result.response.text()
        .replace(/\*\*/g, '')
        .replace(/\n/g, ' ') 
        .trim();

    return cleanText;
}

export default getAiResponse;