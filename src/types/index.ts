export interface Question {
  id: string;
  question: string;
  options: {
    id: string;
    image: string;
    description: string;
    isCorrect: boolean;
  }[];
  explanation: string;
}

export interface Theme {
  id: string;
  title: string;
  emoji: string;
  categories: {
    id: string;
    title: string;
    emoji: string;
    questions: Question[];
  }[];
}

export interface GameState {
  currentTheme: string | null;
  currentCategory: string | null;
  completedQuestions: string[];
  currentQuestionIndex: number;
  score: number;
}