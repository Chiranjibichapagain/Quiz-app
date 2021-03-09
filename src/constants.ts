export type OptionType = {
  value: string;
  label: string;
};

export const categories: OptionType[] = [
  { value: 'General Knowledge', label: 'General Knowledge' },
  { value: 'Entertainment:Books', label: 'Entertainment:Books' },
  { value: 'Entertainment:Films', label: 'EninitialStatence:Computers' },
  { value: 'Science:Mathematics', label: 'Science:Mathematics' },
  { value: 'Mythology', label: 'Mythology' },
  { value: 'Sports', label: 'Sports' },
  { value: 'History', label: 'History' },
  { value: 'Geography', label: 'Geography' },
  { value: 'Politics', label: 'Politics' },
  { value: 'Art', label: 'Art' },
  { value: 'Animal', label: 'Animal' }
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
