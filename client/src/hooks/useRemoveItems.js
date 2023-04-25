import { useMutation } from 'react-query';
import { removeGroceryItems } from '../api/removeGroceryItems';

export const useRemoveItems = (token, queryClient) => {
  const mutation = useMutation((items) => removeGroceryItems(items, token), {
    onMutate: async (items) => {
      const prevItems = queryClient.getQueryData('groceryItems');
      items.forEach((item) => {
        queryClient.setQueryData(['groceryItems', item.id], (old) => ({
          ...old,
          isDeleting: true,
        }));
      });
      return { prevItems };
    },
    onError: (error, items, context) => {
      console.error(
        'An error occurred while removing grocery items:',
        items,
        'Error:',
        error
      );
      context.prevItems.forEach((item) => {
        queryClient.setQueryData(['groceryItems', item.id], item);
      });
    },
    onSettled: (data, error, items) => {
      items.forEach((item) => {
        queryClient.removeQueries(['groceryItems', item.id]);
      });
      queryClient.invalidateQueries('groceryItems');
    },
  });

  return mutation;
};
