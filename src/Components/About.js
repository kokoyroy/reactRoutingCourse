import React from "react";
import rainbow from '../Hoc/Rainbow';
const about = () => {
    return(
     <div className="container">
         <h4 className='center'> about</h4>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae alias ullam explicabo dolorem a architecto maxime magni ipsum excepturi sed adipisci sapiente, aperiam, laudantium obcaecati odio. Tenetur, rem ex.</p>
     </div>
    )
};

export default  rainbow(about);