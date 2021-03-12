export type OptionCategoryType = {
  value: number;
  label: string;
};
export type OptionType = {
  value: string;
  label: string;
};

export const categories: OptionCategoryType[] = [
  { value: 9, label: 'General Knowledge' },
  { value: 10, label: 'Entertainment:Books' },
  { value: 18, label: 'Science:Computers' },
  { value: 19, label: 'Science:Mathematics' },
  { value: 20, label: 'Mythology' },
  { value: 21, label: 'Sports' },
  { value: 22, label: 'Geography' },
  { value: 23, label: 'History' },
  { value: 24, label: 'Politics' },
  { value: 25, label: 'Art' },
  { value: 26, label: 'Celebraties' },
  { value: 27, label: 'Animal' }
];

export const difficultyLevel: OptionType[] = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' }
];

export const questionType: OptionType[] = [
  { value: 'multiple', label: 'Multiple Choice' },
  { value: 'boolean', label: 'True/False' }
];
