// Quiz questions types:

export type Quiz = {
  id: string;
  data: TextQuestion | ImageQuestion;
  createdAt: Date;
};

export type TextQuestion = {
  type: "text";
  question: string;
  answer: string;
};

export type ImageQuestion = {
  type: "image";
  question: string;
  options: {
    id: string;
    name: string;
    url: string;
  }[];
  answer: string;
};
