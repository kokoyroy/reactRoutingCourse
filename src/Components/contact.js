import React, { useState } from "react";

const Contact = (props) => {
    const [giannis, setGiannis] = useState({ name: 'giannis' });

    setTimeout(() => {
        // console.log(props);
        props.history.push('/about')
    }, 2000)
    console.log('ta props apo to contact');
    console.log(props);
    return (
        <div className="container">
            <h4 className='center'> contact</h4>
            <h1>{giannis.name}</h1>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi consequatur sed eveniet vitae id quas amet itaque, explicabo consequuntur vel natus porro odio odit molestias dolore. Quibusdam, dolorem vel! consectetur adipisicing elit. Sint quae alias ullam explicabo dolorem a architecto maxime magni ipsum excepturi sed adipisci sapiente, aperiam, laudantium obcaecati odio. Tenetur, rem ex.</p>
        </div>
    )
};

export default Contact;