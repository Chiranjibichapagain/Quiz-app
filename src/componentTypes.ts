export type QuizType = {
  question: string;
  correct: string;
  wrong: string[];
};

export type NavProp = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export type QuizPageProp = {
  quiz: QuizType[];
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setQuiz: React.Dispatch<React.SetStateAction<QuizType[] | []>>;
};

export type QuizProp = {
  quiz: QuizType;
};
