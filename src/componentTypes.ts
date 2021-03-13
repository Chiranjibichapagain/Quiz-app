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
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  next: () => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export type ResultProp = {
  rightAnswers: number;
  total: number;
};

export type OptionCategoryType = {
  value: number;
  label: string;
};
export type OptionType = {
  value: string;
  label: string;
};

export type UserData = {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
};

export type QuizResponse = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct: string;
  incorrect_answers: string[];
};

export type Result = {
  response_code: number;
  results: QuizResponse;
};

export type PropType = {
  option: any;
};
