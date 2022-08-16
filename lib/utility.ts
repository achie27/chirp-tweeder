interface ILocalStorageItem {
  key: string;
  value: unknown;
}

export const setLocalStorageItem = (
  item: ILocalStorageItem,
  fallback?: unknown
) => {
  global.localStorage.setItem(item.key, JSON.stringify(item.value || fallback));
};

export const getLocalStorageItem = (key: string, fallback?: unknown) => {
  const rawItem = global.localStorage.getItem(key);
  return rawItem ? JSON.parse(rawItem) : fallback;
};
