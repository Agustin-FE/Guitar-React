import {Link} from "react-router-dom";

const ListItem = ({ id,nombre, precio, categorias, imagen }) =>{
    
    return (<>
            <Link to={"/guitar/" + id}>
            <div className="list-item-cart">
                <hr/>
               <div>
                    <img src={imagen} alt={nombre} height="100px" width="80px"/>
                </div>
               <div>
                    <p > <strong>{nombre} </strong></p>
                    <p > <strong>u$s {precio} </strong></p>
                    <p > {categorias} </p>
                </div>
            </div>
            </Link>
        </>
    )
};

export default ListItem;