import './Tabitem.css';

const TabItem = (props) =>{
    const {tabListItems,changeActiveId, isActive} = props;
    const {tabId, displayText} = tabListItems;

    const onDelete = () =>{
        changeActiveId(tabId)
    }

    return(
        <>
        <li style={{textAlign:"center"}}>
            <button type="button" className={isActive ? 'btn-active' : ""}
             onClick={onDelete}>{displayText}</button>
        </li>
        </>
    )
}

export default TabItem;