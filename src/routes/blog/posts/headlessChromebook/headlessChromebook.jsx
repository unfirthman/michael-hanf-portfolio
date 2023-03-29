


import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
// import "./headlessChromebook.css"



function HeadlessChromebook() {
    const [post, setPost] = useState('');


    useEffect(() => {
        import('./headlessChromebookBlog_final.md')
        .then(res => {
                fetch(res.default)
                .then(res => res.text())
                .then(res => setPost(res))
            })
        .catch(err => console.log(err));
    });

    return(
    <div style={{marginTop: 150}}>
            <Markdown>
                {post}
            </Markdown>
        </div>
    )
}

export default HeadlessChromebook
