import React from 'react';
import axios from 'axios';
import Post from './Post';
import './Posts.css';

class Posts extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("https://www.reddit.com/r/all/.json")
            .then(
                res => {
                    console.log(res.data.data.children);
                    this.setState({
                        posts: res.data.data.children
                    });
                },
                err => console.log("err ", err)
            );
    }

    render() {
        const posts = this.state.posts;
        return (
            <div className="col-md-5">
                {posts.map((post) =>
                    <Post key={post.data.id} data={post.data} />
                )}
            </div>
        )
    }

}

export default Posts;