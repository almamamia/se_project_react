export const baseUrl = "http://localhost:3001";

export const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getClothingItems = async () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  }).then(checkServerResponse);
};

export const addNewClothingItem = (item) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weather,
    }),
  }).then(checkServerResponse);
};

export const deleteClothingItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
};
