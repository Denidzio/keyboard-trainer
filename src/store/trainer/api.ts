export const trainerApi = {
  fetchText: async () => {
    const response = await fetch("http://metaphorpsum.com/paragraphs/1");
    return await response.text();
  },
};
