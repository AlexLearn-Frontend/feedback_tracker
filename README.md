# Feedback Tracker

A simple and minimalist feedback collection application built with React.

## Features

- **Feedback Form** - Submit feedback with title and message
- **Feedback List** - View all submitted feedback items
- **UI Components** - Reusable button, card, input, and textarea components
- **Toast Notifications** - User feedback via Sonner notifications

## Project Structure

```
src/
├── components/
│   ├── FeedbackForm.jsx
│   ├── FeedbackItem.jsx
│   ├── FeedbackList.jsx
│   └── ui/
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       ├── textarea.jsx
│       └── sonner.jsx
├── lib/
│   └── utils.js
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

Install dependencies and run the development server to start collecting feedback.
### Prerequisites

- Node.js (v14 or higher)
- npm/pnpm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AlexLearn-Frontend/feedback_tracker.git
cd feedback_tracker
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.
