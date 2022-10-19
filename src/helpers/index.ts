export const getClassNames = (
  ...classNames: (string | boolean | undefined)[]
) => {
  return classNames.filter(Boolean).join(" ");
};
