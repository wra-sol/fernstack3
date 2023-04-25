//...useModifyItem.js

import { useMutation } from 'react-query';
import { modifyItem } from '../api/modifyItem';

export const useModifyItem = (token, queryClient) => {
  const mutation = useMutation({
    mutationFn: ({ id, updateData }) => modifyItem({ id, ...updateData }, token),
    onMutate: async ({ id, updateData }) => {
      await queryClient.cancelQueries({ queryKey: ['groceryItems', id] });
      const prevItem = queryClient.getQueryData(['groceryItems', id]);
      const newItem = { ...prevItem, ...updateData };
      queryClient.setQueryData(['groceryItems', id], newItem);
      return { prevItem, newItem };
    },
    onError: (error, { id }, context) => {console.log('An error occurred while updating the grocery item: ',id,'Error: ',error);
      queryClient.setQueryData(['groceryItems', id], context.prevItem);
      return context.prevItem;
    },
    onSuccess: (data) => {console.log('Grocery item updated successfully:', data);},
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['groceryItems'] });
    },
  });
  return mutation;
};