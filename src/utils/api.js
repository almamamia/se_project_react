export const baseUrl = "http://localhost:3001";

export const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  }).then(checkServerResponse);
};

export const parseClothingItemData = (data) => {
  console.log(data);
  const clothingItems = {
    item: {
      names: data.name,
      url: data.imageUrl,
      weather: data.weatherType,
    },
  };
  return clothingItems;
};

export const addNewClothingItem = (item) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${item.token}`,
    },
    body: JSON.stringify({
      name: item.name,
      weather: item.weather,
      imageUrl: item.imageUrl,
    }),
  }).then(checkServerResponse);
};

export const deleteClothingItems = (id, token) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkServerResponse);
};
