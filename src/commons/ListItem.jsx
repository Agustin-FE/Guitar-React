import {Link} from "react-router-dom";

const ListItem = ({ nombre, precio, categorias, imagen }) =>{
    
    return (<>
            <div className="list-item">
               <br/>
               <div>
                    <img src={imagen} alt={nombre} height="100px" width="80px"/>
                </div>
               <div>
                    <p > <strong>{nombre} </strong></p>
                    <p > ${precio} </p>
                    <p > {categorias} </p>
                </div>
            </div>
        </>
    )
};

export default ListItem;