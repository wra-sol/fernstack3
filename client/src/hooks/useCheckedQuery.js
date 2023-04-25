//...useCheckedQuery.js

import { useQuery, useQueryClient } from 'react-query';

const useCheckedQuery = () => {
  const queryClient = useQueryClient();
  return useQuery('checkedItems', () => queryClient.getQueryData('checkedItems') || { list: [] });
};

export default useCheckedQuery