import React from 'react';
import './PostPreview.css';

const PostPreview = (props) => {

    function urlFormatter(url) {
        return url.replace(new RegExp('&lt;', 'g') , '<').replace(new RegExp('&amp;', 'g'), '&').replace(new RegExp('&gt;', 'g'), '>');
    }

    function getPreview() {

        if (!props.data){
            return null;
        }

        if (props.data.selftext_html){
            return (
                <div className="preview-text" dangerouslySetInnerHTML={{__html: urlFormatter(props.data.selftext_html)}} />
            )
        }

        if (props.data.preview) {
            if (props.data.preview.media_embed) {
                return (
                    <div className="preview-embeded">
                        {urlFormatter(props.data.preview.media_embed.content)}
                    </div>
                )
            }
            if (props.data.preview.reddit_video_preview) {
                return(
                    <video className="preview-video" controls autoPlay muted>
                        <source src={urlFormatter(props.data.preview.reddit_video_preview.dash_url)} />
                        <source src={urlFormatter(props.data.preview.reddit_video_preview.fallback_url)} />
                        <source src={urlFormatter(props.data.preview.reddit_video_preview.hls_url)} />
                    </video>
                )
            }
            if (props.data.preview.images && props.data.preview.images.length > 0) {
                return (
                    <img className="preview-img" src={urlFormatter(props.data.preview.images[0].source.url)} alt="preview image" className="preview-img col-auto" />
                )
            }
        }

        return null;
    }

    return (
        getPreview()
    )
}

export default PostPreview;