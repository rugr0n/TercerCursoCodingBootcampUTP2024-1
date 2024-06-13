const BASE_URL = 'https://api.mercadolibre.com';

export const getProducts = async (sellerId, categoryId) => {
  let url = `${BASE_URL}/sites/MLA/search?seller_id=${sellerId}`;
  if (categoryId) {
    url += `&category=${categoryId}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/sites/MLA/categories`);
  const data = await response.json();
  return data;
};
