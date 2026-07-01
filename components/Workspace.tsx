"use client";

import ModelSelector from "./ModelSelector";
import PromptEditor from "./PromptEditor";
import ParameterPanel from "./ParameterPanel";
import GenerateButton from "./GenerateButton";
import ResponseCard from "./ResponseCard";
import { useState,useEffect } from "react";
import TemplateSelector from "./TemplateSelector";


export default function Workspace(){

const [selectedModel, setSelectedModel] = useState("GPT-4");


const [prompt, setPrompt] = useState("");
  

const [temperature, setTemperature] = useState(50);


 const [tokens, setTokens] = useState(500);


const [response, setResponse] = useState("");
const [loading, setLoading] = useState(false);

const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  const savedPrompt = localStorage.getItem("prompt");
  const savedModel = localStorage.getItem("selectedModel");
  const savedTemperature = localStorage.getItem("temperature");
  const savedTokens = localStorage.getItem("tokens");

  if (savedPrompt) setPrompt(savedPrompt);
  if (savedModel) setSelectedModel(savedModel);
  if (savedTemperature) setTemperature(Number(savedTemperature));
  if (savedTokens) setTokens(Number(savedTokens));

  setIsLoaded(true);
}, []);

useEffect(() => {
  if (!isLoaded) return;

  localStorage.setItem("prompt", prompt);
}, [prompt, isLoaded]);

useEffect(() => {
  if (!isLoaded) return;

  localStorage.setItem("selectedModel", selectedModel);
}, [selectedModel, isLoaded]);

useEffect(() => {
  if (!isLoaded) return;

  localStorage.setItem("temperature", temperature.toString());
}, [temperature, isLoaded]);

useEffect(() => {
  if (!isLoaded) return;

  localStorage.setItem("tokens", tokens.toString());
}, [tokens, isLoaded]);

const generateResponse = () => {
 console.log({
    selectedModel,
    prompt,
    temperature,
    tokens,
  });

    setLoading(true);

    setTimeout(() => {

        const mockResponse = `

Based on your prompt:

"${prompt}"

----------------------------------------

Here's a mock AI response generated using ${selectedModel}.

This demonstrates how an AI assistant could respond to your request.

Current Parameters

• Model : ${selectedModel}

• Temperature : ${temperature}

• Max Tokens : ${tokens}

----------------------------------------

Thank you for using Nova AI Studio 

`;


        setResponse(mockResponse);

        setLoading(false);

    },1500);

}



    return (
<section className="mx-auto
  mt-20
  max-w-5xl
  rounded-2xl
  border
  border-slate-300
  dark:border-slate-700
  bg-white
  dark:bg-slate-900
  p-8
  transition-all
  duration-300
  hover:border-purple-500
  shadow-purple-500/10">
 <h1 className="text-5xl font-bold text-slate-900 dark:text-white"> AI Workspace</h1>
<p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">Configure your AI model and generate responses.</p>

<ModelSelector 
selectedModel={selectedModel}
setSelectedModel={setSelectedModel}/>

<TemplateSelector
setPrompt={setPrompt} />

<PromptEditor 
prompt={prompt}
setPrompt={setPrompt}/>
<ParameterPanel 
  temperature={temperature}
  setTemperature={setTemperature}
  tokens={tokens}
  setTokens={setTokens}/>
  <GenerateButton 
  onGenerate={generateResponse}
   loading={loading}/>
  {/* <ResponseCard 
  response={response}/> */}

  <ResponseCard
  response={response}
  selectedModel={selectedModel}
  prompt={prompt}
  temperature={temperature}
  tokens={tokens}
/>
</section>
    );
}