import {Grid, Typography, List} from '@mui/material';
import GroceryListItem from './GroceryListItem';

const CheckedItems = ({items, handleItemCheck, handleRemoveClick, onEdit}) => {
  const header = items.length > 0
    ? <Grid
        variant="h6"
        component={Typography}
        item
        xs={12}
        sm={8}
        sx={{margin: '0 auto'}}
      >
        Checked Items
      </Grid>
    : '';
  return (
    <Grid container>
      {header}
      <Grid item component={List} xs={12} sm={8} sx={{margin: '0 auto'}}>
        {items.map (item => (
          <GroceryListItem
            item={item}
            handleitemcheck={handleItemCheck}
            handleRemoveClick={handleRemoveClick}
            key={item.id}
            onEdit={onEdit}
            checked
          />
        ))}
      </Grid>
    </Grid>
  );
};
export default CheckedItems;
