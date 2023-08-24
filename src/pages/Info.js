import { useParams } from "react-router-dom";

const Infor = () => {

    const {id} = useParams();

    return ( 
        <h1>Mais inforações sobre o Produto: {id}</h1>
     );
}
 
export default Infor;