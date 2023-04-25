//modifyItem.js
export const modifyItem = async (groceryItem, token) => {
  console.log(groceryItem)
  const response = await fetch('/api/data', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({updatedData:{...groceryItem}}),
  });

  if (!response.ok) {
    throw new Error(`Error adding grocery item: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};