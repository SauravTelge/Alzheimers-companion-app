import { Quiz } from "@/lib/types";

export const testData: Quiz = {
  id: "1",
  data: [
    {
      type: "text",
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      type: "image",
      question: "What is the capital of France?",
      options: [
        {
          id: "1",
          name: "Paris",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Paris_vue_d%27ensemble_tour_Eiffel.jpg/1920px-Paris_vue_d%27ensemble_tour_Eiffel.jpg",
        },
        {
          id: "2",
          name: "London",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/London%2C_England_-_July_2009.jpg/1920px-London%2C_England_-_July_2009.jpg",
        },
        {
          id: "3",
          name: "Berlin",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_Reichstag_winter_panorama.jpg/1920px-Berlin_Reichstag_winter_panorama.jpg",
        },
      ],
      answer: "1",
    },
  ],
  createdAt: new Date(),
};
