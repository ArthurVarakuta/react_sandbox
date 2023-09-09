import {Fragment, useState} from "react";

interface Props {
    items: string[];
    heading: string;

    onSelectitem: (item: string) => void;
}

function ListGroup({items, heading, onSelectitem}: Props) {

    const [selected_index, setSelected_index] = useState(-1);
    return (
        <Fragment>
            <h1>{heading}</h1>
            {items.length === 0 && <span>no items found</span>}
            <ul className="list-group">
                {items.map((item, index) => <li
                    className={selected_index === index ? 'active list-group-item' : 'list-group-item'}
                    onClick={() => {
                        setSelected_index(index)
                        onSelectitem(item);
                    }}
                >{item}</li>)}
            </ul>
        </Fragment>
    );
}

export default ListGroup;