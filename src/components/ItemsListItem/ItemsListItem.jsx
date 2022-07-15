import { useDispatch } from "react-redux"
import './itemListItem.css'

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 150,
}));

const ItemsListItem = ({item}) => {
    const dispatch = useDispatch();
    const itemDetails = () => {
        dispatch({
            type: 'FETCH_ITEM_DETAILS',
            payload: {url: item.url}
        })
    }

    return(
        <div>
            <Stack spacing={1} alignItems="flex-start">
                <Item sx={{m:1}} className="item-list-item" onClick={itemDetails}><Button>{item.name}</Button></Item>
            </Stack>
        </div>
    )
}

export default ItemsListItem;