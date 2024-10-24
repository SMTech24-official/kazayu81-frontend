// fetch data  using only fetch in next js
export const fetchData = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
