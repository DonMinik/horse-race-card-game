import './Card';
import Card from "./Card";

class Jockey extends Card {
    constructor(props) {
        props.value = "J";
        super(props);
        this.state.position = props.position;
    }
}

export default Jockey;