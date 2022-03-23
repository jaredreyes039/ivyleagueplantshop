import './App.css'
import { Blogitems } from './Blogitems';
function Blog(){
    return(
        <>
        <div className='blog'>
            <h1>BLOG</h1>
            <nav>
                <ul>
                    <Blogitems />
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Blog;