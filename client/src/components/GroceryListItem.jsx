//GroceryListItem.jsx
import {useState} from 'react';
import {Grid, IconButton} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AutoRenewIcon from '@mui/icons-material/Autorenew';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import ListItemForm from './ListItemForm.jsx';

const GroceryListItem = ({
  item,
  handleitemcheck,
  handleRemoveClick,
  onEdit,
}) => {
  const [isEditable, setIsEditable] = useState (false);
  const [inputValues, setInputValues] = useState ({
    name: item.name,
    quantity: item.quantity,
    measurement: item.measurement,
  });

  const handleChange = e => {
    setInputValues (prevValues => ({
      ...prevValues,
      [e.target.id || 'measurement']: e.target.value,
    }));
  };
  const handleEdit = () => {
    setIsEditable (!isEditable);
  };
  const handleClick = () => {
    if (isEditable) {
      handleRemoveClick ([item]);
      return;
    }
    handleitemcheck (item);
  };
  const handlePublishChanges = () => {
    onEdit (item, {
      name: inputValues.name || item.name,
      quantity: inputValues.quantity || item.quantity,
      measurement: inputValues.measurement || item.measurement,
    });
    setIsEditable (false);
  };
  return (
    <Grid container alignItems={'center'}>
      <Grid item xs={2}>
        <Grid container>
          {isEditable &&
            <Grid
              item
              xs={12}
              sm={6}
              component={IconButton}
              onClick={handleEdit}
            >
              <ClearIcon />
            </Grid>}
          <Grid
            item
            xs={12}
            sm={6}
            component={IconButton}
            onClick={!isEditable ? handleEdit : handlePublishChanges}
          >
            {!isEditable
              ? <EditIcon />
              : <PublishedWithChangesIcon color="success" />}
          </Grid>
        </Grid>
      </Grid>
      <ListItemForm
        item={item}
        inputValues={inputValues}
        handleChange={handleChange}
        isEditable={isEditable}
      />
      <Grid item xs={2} component={IconButton} onClick={handleClick}>
        {isEditable
          ? <ClearIcon color="error" />
          : item.checked
              ? <AutoRenewIcon color="warning" />
              : <CheckIcon color="success" />}
      </Grid>
    </Grid>
  );
};
export default GroceryListItem;
