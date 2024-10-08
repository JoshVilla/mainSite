export const objFormat = (arr: any) => {
  if (arr.length === 1) return arr[0];
  return new Error("Only works when array has only one element");
};
