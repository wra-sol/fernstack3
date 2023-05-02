// GroceryList.jsx
import React, {useMemo} from 'react';
import {useFetchGroceryItems} from '../hooks/useFetchGroceryItems';
import {CircularProgress, Typography, Grid, List, Button} from '@mui/material';
import GroceryListItem from './GroceryListItem';
import CheckedItems from './CheckedItems';
import { useModifyItem } from '../hooks/useModifyItem';
import { useQueryClient } from 'react-query';
import { useRemoveItems } from '../hooks/useRemoveItems';

const GroceryList = ({token}) => {
  
  const {data: groceryItems, error, isLoading} = useFetchGroceryItems (token);

  const queryClient = useQueryClient();
  const modifyItem = useModifyItem(token, queryClient);
  const removeItems = useRemoveItems(token, queryClient);
  
  const handleItemCheck = item => {
    if (checkedItems?.includes (item)) {
      modifyItem.mutate ({...item, updateData:{checked: false}});
    } else {
      modifyItem.mutate ({...item, updateData:{checked: true}});
    }
  };
  const handleItemEdit = (item, updateData) => {
    modifyItem.mutate({...item, updateData:{...updateData}})
  }
  const handleRemoveClick = (items) => {
    removeItems.mutate(items)
  }

  const checkedItems = useMemo(() => {
    if (!groceryItems) {
      return [];
    }
    return Object.values(groceryItems).filter((item) => item.checked === true);
  }, [groceryItems]);


  if (isLoading || !groceryItems) {
    return (
      <Grid container py={4}>
        <Grid item xs={12} textAlign={'center'}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }
  if (error) {
    return (
      <Grid container py={4}>
        <Grid item xs={12} textAlign={'center'}>
          <Typography variant="h6" color="error">
            Error: {error.message}
          </Typography>
        </Grid>
      </Grid>
    );
  }
  if (groceryItems)
    return (
      <Grid container>
        <Grid item xs={12}>
        <Grid container>
        <Grid item component={List} xs={12} sm={8} sx={{margin: '0 auto'}}>
          {Object.values (groceryItems)
            .filter (item => !item.checked)
            .map (item => (
              <GroceryListItem
                item={item}
                handleitemcheck={handleItemCheck}
                key={item.id}
                handleRemoveClick={handleRemoveClick}
                onEdit={handleItemEdit}
              />
            ))}
            </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
        <CheckedItems items={checkedItems} handleItemCheck={handleItemCheck} handleRemoveClick={handleRemoveClick} onEdit={handleItemEdit}/>
        </Grid>
        <Grid container justifyContent={'center'} py={2}>
          <Grid 
              item 
              xs={6} 
              sm={2} 
              variant={'contained'} 
            >
              <Button
                disabled={!checkedItems.length} 
                variant={'contained'}
                onClick={() => handleRemoveClick(checkedItems)}
              >
              Complete trip
              </Button>
            </Grid>
        </Grid>
      </Grid>
    );
};

export default GroceryList;
