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
        : <Grid container>
            <Grid item xs={9}>
              <TextField
                id="name"
                value={inputValues.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="quantity"
                value={inputValues.quantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4} sm={12} mx={'.1rem'} py={1}>
              <TextField
                select
                id="measurement"
                value={inputValues.measurement}
                onChange={handleChange}
                fullWidth
              >
                {commonMeasurements.map (unit => (
                  <MenuItem key={unit} value={unit}>
                    {unit}{item.quantity > 1 ? 's' : ''}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>}
    </Grid>
  );
};
export default ListItemForm;
