# ✨ Nova AI Studio

Nova AI Studio is a simple AI Playground built using Next.js, TypeScript and Tailwind CSS.

The idea of this project is to provide a clean interface where users can experiment with prompts, switch between AI models, adjust parameters and view generated responses.

Since this is a frontend assessment, the AI response is currently mocked instead of calling a real API.

---

## Research

Before designing Nova AI Studio, I explored different AI interfaces to understand common layouts and features.

Platforms reviewed:

- OpenAI Playground
- Anthropic Claude
- Hugging Face Spaces
- Microsoft Copilot

Features I liked and included:

- Clean workspace layout
- Model selector
- Prompt editor
- Parameter controls
- Theme toggle
- Response section with copy functionality

## Features

- AI model selection
- Prompt editor with live character count
- Prompt templates (Dummy JSON)
- Adjustable Temperature and Max Tokens
- Mock AI response generation
- Copy generated response
- Download response as JSON
- Light/Dark theme toggle (saved using Local Storage)
- Local Storage support for prompt, model and parameters
- Responsive UI

---

## Design

I designed a simple one-page interface focusing on ease of use.

Main sections:

- Navbar
- Hero section
- AI Workspace
- Response Card

Tailwind Mapping:

- Primary background: bg-slate-900
- Cards: rounded-2xl border border-slate-700
- Primary button: bg-gradient-to-r from-purple-500 to-blue-500
- Text: text-white / text-slate-400

Screenshots:
### Dark mode 
![Dark Mode](./screenshots/dark-mode.png)


### Light Mode

![Light Mode](./screenshots/light-mode.png)

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4

---

## Folder Structure


app/
components/
data/
public/


---


## Development

Implementation Notes

- Built using Next.js App Router.
- Components were separated for better reusability.
- State is managed inside the Workspace component.
- Theme preference and prompt data are stored using localStorage.
- Mock responses simulate AI output without calling a real API.

Known Limitations

- AI responses are mocked.
- Prompt templates are static.
- Clipboard API depends on browser support.

## How to Run

Clone the repository

```bash
git clone <repository-url>
```

Go inside the project

```bash
cd ai-playground
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

---

## Future Improvements

If I continue working on this project, I would like to add:

- Real AI API integration (OpenAI / Claude / Gemini)
- Chat history
- User authentication
- Save custom prompt templates
- Better animations and loading states

---

## What I Learned

While building this project I learned a lot about:

- Next.js App Router
- Component-based architecture
- React state management
- TypeScript interfaces
- Local Storage
- Theme persistence
- Building reusable components
- Tailwind CSS v4

---


## Storybook

Storybook was used to develop and test reusable UI components independently from the application.

Implemented stories:

- GenerateButton
- Slider
- ModelSelector
- ResponseCard


## Live Demo
https://ai-playground-pied.vercel.app/

## Author

Muskan Bhushan Roy

Built as part of a Frontend Assessment using Next.js, TypeScript and Tailwind CSS.
