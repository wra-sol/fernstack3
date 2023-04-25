export const removeGroceryItems = async (items, token) => {
    const response = await fetch(`/api/data`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({items}),
    });
  
    if (!response.ok) {
      throw new Error(`Error deleting grocery items: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data;
  };