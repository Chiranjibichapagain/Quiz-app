export type OptionType = {
  value: string;
  label: string;
};

export const categories: OptionType[] = [
  { value: '1', label: 'General Knowledge' },
  { value: '2', label: 'Entertainment:Books' },
  { value: '10', label: 'Science:Computers' },
  { value: '4', label: 'Science:Mathematics' },
  { value: '5', label: 'Mythology' },
  { value: '6', label: 'Sports' },
  { value: '7', label: 'History' },
  { value: '8', label: 'Geography' },
  { value: '9', label: 'Politics' },
  { value: '10', label: 'Art' },
  { value: '11', label: 'Animal' }
];

export const difficultyLevel: OptionType[] = [
  { value: 'Any Difficulty', label: 'Any Difficulty' },
  { value: 'Easy', label: 'Easy' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Hard', label: 'Hard' }
];

export const questionType: OptionType[] = [
  { value: 'Any Type', label: 'Any Type' },
  { value: 'Multiple Choice', label: 'Multiple Choice' },
  { value: 'True/False', label: 'True/False' }
];
