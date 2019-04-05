import React from 'react';
import './Post.css';
import PostPreview from './PostPreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = (props) => {

    function countFormatter(count){
        if (count > 1000){
            return Math.floor(count/1000) + 'k';
        }
        return count;
    }

    const timeSincePost = Math.floor((Date.now() - (props.data.created * 1000)) / 36e5);
    return (
        <div className="post" onClick={() => document.location.href = "https://www.reddit.com" + props.data.permalink}>
            <div className="upvote-count d-flex flex-column justify-content-start align-items-center">
                <button className="btn">
                    <FontAwesomeIcon icon="arrow-up" className="arrow upvote"/>
                </button>
                <div className="count">
                    {countFormatter(props.data.score)}
                </div>
                <button className="btn">
                    <FontAwesomeIcon icon="arrow-down" className="arrow downvote"/>
                </button>
            </div>
            <div className="header d-flex d-justify-content-left">
                <div className="subreddit"><a href={"https://www.reddit.com/r/" + props.data.subreddit}>r/{props.data.subreddit}</a></div>
                <div className="author">Posted by <a href={"https://www.reddit.com/u/" + props.data.author}> u/{props.data.author}</a></div>
                <div className="time">{timeSincePost} hours ago</div>
            </div>
            <div className="content">
                <div className="title col">{props.data.title}</div>
                <PostPreview data={props.data}/>
            </div>
            <div className="footer d-flex">
                <a className="comment" href={"https://www.reddit.com" + props.data.permalink}>
                    <FontAwesomeIcon className="comment" icon="comment-alt"/>
                    {props.data.num_comments} Comments
                </a>
                {/* <a className="share" href={"https://www.reddit.com" + props.data.permalink}>
                    <FontAwesomeIcon className="comment" icon="share"/>
                    Share
                </a> */}
            </div>
        </div>
    )
}

export default Post;
