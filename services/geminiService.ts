import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;
  private modelId = 'gemini-2.5-flash';

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async explainChord(chordName: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: this.modelId,
        contents: `
          You are a professional guitar teacher.
          Please provide a brief, helpful guide for the guitar chord: "${chordName}".
          
          Include:
          1. A quick tip on how to finger it properly to avoid muting strings.
          2. The theory behind it (what notes are in it).
          3. A list of 3 popular songs (international or Korean) that use this chord prominently.
          
          Keep the tone encouraging and concise. Format with Markdown.
        `,
      });
      return response.text || "Sorry, I couldn't generate an explanation at this time.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Unable to connect to the AI Tutor. Please check your API key configuration.";
    }
  }

  async chat(history: {role: string, text: string}[], message: string): Promise<string> {
    try {
        // Construct chat history for context if needed, 
        // but for this simple implementation we'll just send the message with context instructions.
        const response = await this.ai.models.generateContent({
            model: this.modelId,
            contents: `You are a friendly guitar tutor. The user asks: "${message}". Answer concisely and helpfully.`
        });
        return response.text || "I didn't catch that.";
    } catch (error) {
        console.error("Gemini Chat Error:", error);
        return "Error connecting to AI service.";
    }
  }
}

export const geminiService = new GeminiService();