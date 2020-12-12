import React from "react";
import { Link } from "react-router-dom";
import pokeball from '../pokeball.png';
import pica from '../picachu.png'
import './styles.css';
import { connect } from 'react-redux';

const Home = (props) => {


    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(res => {
    //             let tempArr = res.slice(0, 10);
    //             console.log(tempArr);
    //             setData(tempArr)
    //         })
    // }, []);

  

    // console.log(props);

    const data = props.posts
    //prepare post preshow
    const postList = data.length ? (data.map((data) => {
        return (
            <div key={data.id} className="card  post home"  >
                <img className='poke' src={pokeball} alt="pokeball" />
                <img className='pica' src={pica} alt="picachu" />
                <Link to={'/' + data.id} >
                    <span className="card-title red-text">{data.title}</span>
                </Link>
                <p className='card-content' >{data.body}</p>
            </div>
        )
    })) : (<div className="center">no posts yet</div>);

    return (


        <div className="container">
            <h4 className='center'> home</h4>
            {postList}
            
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}




export default connect(mapStateToProps)(Home);