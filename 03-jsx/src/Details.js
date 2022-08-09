import { useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams();
    return (
<h2>check to see any curse {id}</h2>
    )};

export default Details;