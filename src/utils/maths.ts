export const randomNumber = () => {
  const min = 1;
  const max = 5;
  const result = min + Math.random() * (max - min);
  return parseInt(result);
};

export const add = (a: number, b: number) => {
  const result = a + b;
  return result;
};

export const minus = (a: number, b: number) => {
  const result = a - b;
  return result;
};

export const times = (a: number, b: number) => {
  const result = a * b;
  return result;
};

export const div = (a: number, b: number) => {
  const result = a / b;
  return result;
};
