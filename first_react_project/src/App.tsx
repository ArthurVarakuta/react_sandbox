import listGroup from "./assets/Components/ListGroup";
import ListGroup from "./assets/Components/ListGroup";

function App() {
    let items = [
        'a',
        'b',
        'c',
        'd',
        'e'
    ]
    const handle_select_item = (item: string) => {
        console.log(item)
    }
    return <div><ListGroup items={items} heading={"letters"}
                           onSelectitem={handle_select_item}/></div>;
}

export default App;