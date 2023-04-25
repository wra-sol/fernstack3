import {Grid, TextField, ListItem, ListItemText, MenuItem} from '@mui/material';
import {commonMeasurements} from '../utils/commonMeasures';

const ListItemForm = ({
  item,
  inputValues,
  handleChange,
  isEditable,
  checked,
}) => {
  const isCheckedColor = checked ? 'rgba(28,46,18,.6)' : 'unset';

  return (
    <Grid item xs={8} sm={8} component={ListItem} key={item.id}>
      {!isEditable
        ? <ListItemText
            primary={item.name}
            secondary={checked ? '' : `${item.quantity} ${item.measurement}`}
            sx={{color: isCheckedColor}}
          />
        : <Grid container spacing={1}>
            <Grid
              item
              component={TextField}
              id="name"
              value={inputValues.name}
              onChange={handleChange}
            />
            <Grid
              item
              component={TextField}
              id="quantity"
              value={inputValues.quantity}
              onChange={handleChange}
              flex={'1 1 100px'}
            />
            <Grid
              item
              component={TextField}
              select
              id="measurement"
              value={inputValues.measurement}
              onChange={handleChange}
            >
              {commonMeasurements.map (unit => (
                <MenuItem key={unit} value={unit}>
                  {unit}{item.quantity > 1 ? 's' : ''}
                </MenuItem>
              ))}
            </Grid>
          </Grid>}
    </Grid>
  );
};
export default ListItemForm;
