import { groq } from "next-sanity";

export const allChefs = groq `*[_type == "chef"]`;

export const four = groq `*[_type == "chef"][0...4]`;

export const allFoods = groq `*[_type == "food"]`;

export const three = groq `*[_type == "food"][0...3]`;

