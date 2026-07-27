export const getTableId = (id: string | string[] | number | number[]) => {
  return Array.isArray(id) ? id.join(',') : String(id);
};
