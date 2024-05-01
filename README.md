<a href="">
  <img alt="InterVueSense – Redefining Interviews with AI" src="">
  <h1 align="center">InterVueSense Interviews</h1>
</a>

<p align="center">
  Interview Simulator with AI-Powered Feedback
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#one-click-deploy"><strong>One-click Deploy</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

InterVueSense is an interview taking tool that provides AI feedback on your interview to respective Companies.

## Tech Stack + Features

![Landing Page](Image Url need to attach)

![Interview Selection](Image Url need to attach)

### Frameworks
- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [HeadlessUI](https://headlessui.com/) - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS

### Code Quality
- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Miscellaneous
## How it all works

InterVueSense uses FFmpeg to transcode the raw video into MP3. Chrome, Safari, and Firefox all record with different codecs, and FFmpeg is great for standardizing them.

We then send the audio directly to be transcribed by OpenAI's Whisper endpoint, and then stream feedback from the edge using OpenAI's gpt-3.5-turbo.

## Author

- Perumall Pardhiv
- Vishal Kumar
- Sai Vasanth
- Vamshi Krishna
- Harini
