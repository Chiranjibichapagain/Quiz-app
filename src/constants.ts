import { OptionCategoryType, OptionType } from './componentTypes';

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

export const screenGreaterThan = () => {
  if (window.innerWidth > 1024) {
    const style = { width: 230, height: 50, font: 18 };
    return style;
  } else if (window.innerWidth < 415) {
    const style = { width: 300, height: 60, font: 22 };
    return style;
  } else {
    const style = { width: 530, height: 80, font: 28 };
    return style;
  }
};
