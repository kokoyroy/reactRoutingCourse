import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Post extends Component {


    deleteHandler = () => {
        this.props.deletePost(this.props.match.params.post_id)
        this.props.history.push('/')
    }


    render() {
        console.log(this.props);
        const postToShow = this.props.posts.map(post => {
            return post.id === this.props.match.params.post_id ? (
                <div key={post.id}>
                    <span className="card-title">{post ? post.title : 'loading'}</span>
                    <p>{post ? post.body : 'loading'}</p>
                    <div className="center">
                        <button className="btn grey" onClick={this.deleteHandler} >delete post</button>
                    </div>
                </div>) : null
        })

        return (
            <div className='container' >
                <div className="row">
                    <div className="">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                {postToShow}
                            </div>
                            <div className="card-action">
                                <Link to='/'>go home</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}

//tha parei apo to state toy store to posts kai tha to valei sto this.props.posts kai apo ekei tha einai accessible
const stateToProps = Reduxstate => {
    return {
        posts: Reduxstate.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
    }


}

export default connect(stateToProps, mapDispatchToProps)(Post);