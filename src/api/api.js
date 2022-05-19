const request = async (url) => {
  const res = await fetch(url);
  console.log(res);
  if (!res.ok) throw new Error('Server Error');
  const data = await res.json();
  console.log(data);
  return data;
}

export const api = async () => {
  const products = await request("/data.json");
  console.log(products);
  return products.data;
}