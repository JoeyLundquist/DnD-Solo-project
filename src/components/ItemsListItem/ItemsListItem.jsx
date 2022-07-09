import { useDispatch } from "react-redux"

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
            <li><p onClick={itemDetails}>{item.name}</p></li>
        </div>
    )
}

export default ItemsListItem;