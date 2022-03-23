import './BlogPost.css'
import { Link } from 'react-router-dom'
import { postlinks } from './PostLinks'
import { blogPostData as data} from './BlogPostData'
import { useState } from 'react'

// TO CREATE A NEW BLOG POST:
// 1. COPY THIS TEMPLATE TO NEW BLOGPOST FILE INDEXED AT THE NEXT AVAILABLE VALUE
// (I.E. BLOGPOST(N))
// 2. Ensure author data is loaded in AuthorData.js
// 3. Ensure BlogPostData is loaded in BlogPostData.js
// 4. Update template indeces to match corresponding data pulls
// 5. OPTIONAL: If you want your post recommended on a page
// 6. IMPORTANT: You MUST MUST MUST add a path your new blog in the App.js Route for it to be linkable



export default function BlogPost1(){
    //Selects Recommended Articles from Link PostLinkData

    let rec = []
    for(let i=0; i<3;i++){
        let j = Math.floor(Math.random()*postlinks.links.length)
        let header = postlinks.links[j].Header;
        let desc = postlinks.links[j].Desc;
        let link = postlinks.links[j].link;
        let image = postlinks.links[j].Image;
        rec.push({header: header, desc: desc, link: link, image: image})
        console.log(rec)
    }

    // Blog Post
    // Use BlogPostData to complete Author information, Header, and Desc

    return(
        <>
            <h1>{data[0].BlogPost1.Header}</h1>
            <Link to = '/Blog'><button>Back to Blog</button></Link>
            <img src = "https://previews.123rf.com/images/golubovy/golubovy1901/golubovy190100172/116050468-simple-plant-composition-environmental-concept-bright-green-young-stems-on-green-background-.jpg"></img>
            <hr></hr>
            <div class = 'row'>
            <img className='postImg' src = {data[0].BlogPost1.AuthorAvatar}></img>
            <div class = 'postData'>
                <h2>{data[0].BlogPost1.Author}</h2>
                <h3>{data[0].BlogPost1.Date}</h3>
                <h3>{data[0].BlogPost1.AuthorMotto}</h3>
                <h3 className='tags'>{data[0].BlogPost1.Tags}</h3>
            </div>
            </div>
            <hr></hr>
            <div class = 'postArticle'>
            <h2>{data[0].BlogPost1.Desc}</h2>
            <article>
                Donec erat massa, elementum quis magna ut, placerat euismod eros. Nam posuere ac dolor vitae elementum. Aenean commodo ex in fermentum commodo. Vivamus suscipit vel neque eu accumsan. Quisque diam nisi, laoreet sed porttitor et, gravida ac arcu. Aenean finibus ligula quis scelerisque blandit. Curabitur malesuada tincidunt purus, non molestie diam.

Phasellus vestibulum metus non pretium interdum. In fringilla justo eget tortor vehicula feugiat ut non arcu. Duis at fringilla nisl. Mauris pretium nibh augue, sit amet porta purus viverra nec. Morbi eget sem nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ullamcorper magna sit amet convallis pulvinar. Curabitur ornare, elit non aliquet mattis, justo dolor vehicula arcu, in pretium turpis velit et tortor. Integer arcu purus, dictum ut tellus eget, sagittis placerat enim. Vestibulum ultricies non leo vel laoreet. Nulla facilisi. Donec vel metus eu mauris congue consectetur. Mauris urna ligula, tincidunt eget lacinia gravida, auctor non felis. Pellentesque sagittis orci nec diam tristique ultricies. Maecenas aliquet purus vel velit pellentesque, ac ornare lacus vestibulum.

Sed elementum velit eu faucibus fermentum. Proin nulla massa, condimentum a turpis nec, feugiat mollis metus. Cras facilisis blandit suscipit. In hac habitasse platea dictumst. Fusce id blandit nisi, vitae feugiat elit. Nullam nulla est, blandit quis vulputate aliquet, feugiat vitae velit. Nunc facilisis nisi et tortor ultricies ullamcorper. Phasellus maximus ex vitae tortor iaculis, ac ullamcorper est bibendum.

Vestibulum ac ligula cursus, rutrum ipsum nec, ultricies elit. Sed venenatis arcu diam, vitae ultricies est vestibulum et. Etiam scelerisque volutpat turpis, non sodales metus sagittis vel. Donec in luctus velit. Ut cursus augue ante. Donec in lacus enim. Morbi nec turpis consequat, consequat odio quis, semper eros. Sed feugiat nisl nec ante ullamcorper viverra.
            </article>
            <h2>Take Advantage of the Minimal Dorm Space</h2>
            <article>
                Donec erat massa, elementum quis magna ut, placerat euismod eros. Nam posuere ac dolor vitae elementum. Aenean commodo ex in fermentum commodo. Vivamus suscipit vel neque eu accumsan. Quisque diam nisi, laoreet sed porttitor et, gravida ac arcu. Aenean finibus ligula quis scelerisque blandit. Curabitur malesuada tincidunt purus, non molestie diam.

Phasellus vestibulum metus <br></br>non pretium interdum. In fringilla justo eget tortor vehicula feugiat ut non arcu. Duis at fringilla nisl. Mauris pretium nibh augue, sit amet porta purus viverra nec. Morbi eget sem nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ullamcorper magna sit amet convallis pulvinar. Curabitur ornare, elit non aliquet mattis, justo dolor vehicula arcu, in pretium turpis velit et tortor. Integer arcu purus, dictum ut tellus eget, sagittis placerat enim. Vestibulum ultricies non leo vel laoreet. Nulla facilisi. Donec vel metus eu mauris congue consectetur. Mauris urna ligula, tincidunt eget lacinia gravida, auctor non felis. Pellentesque sagittis orci nec diam tristique ultricies. Maecenas aliquet purus vel velit pellentesque, ac ornare lacus vestibulum.

Sed elementum velit <br></br>eu faucibus fermentum. Proin nulla massa, condimentum a turpis nec, feugiat mollis metus. Cras facilisis blandit suscipit. In hac habitasse platea dictumst. Fusce id blandit nisi, vitae feugiat elit. Nullam nulla est, blandit quis vulputate aliquet, feugiat vitae velit. Nunc facilisis nisi et tortor ultricies ullamcorper. Phasellus maximus ex vitae tortor iaculis, ac ullamcorper est bibendum.

Vestibulum ac ligula cursus, rutrum ipsum nec, ultricies elit. Sed venenatis arcu diam, vitae ultricies est vestibulum et. Etiam scelerisque volutpat turpis, non sodales metus sagittis vel. Donec in luctus velit. Ut cursus augue ante. Donec in lacus enim. Morbi nec turpis consequat, consequat odio quis, semper eros. Sed feugiat nisl nec ante ullamcorper viverra.
            </article>
            <h2>Window Gardens are a Must for Windowed Dorms</h2>
            <article>
                Donec erat massa, elementum quis magna ut, placerat euismod eros. Nam posuere ac dolor vitae elementum. Aenean commodo ex in fermentum commodo. Vivamus suscipit vel neque eu accumsan. Quisque diam nisi, laoreet sed porttitor et, gravida ac arcu. Aenean finibus ligula quis scelerisque blandit. Curabitur malesuada tincidunt purus, non molestie diam.

Phasellus vestibulum metus <br></br>non pretium interdum. In fringilla justo eget tortor vehicula feugiat ut non arcu. Duis at fringilla nisl. Mauris pretium nibh augue, sit amet porta purus viverra nec. Morbi eget sem nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ullamcorper magna sit amet convallis pulvinar. Curabitur ornare, elit non aliquet mattis, justo dolor vehicula arcu, in pretium turpis velit et tortor. Integer arcu purus, dictum ut tellus eget, sagittis placerat enim. Vestibulum ultricies non leo vel laoreet. Nulla facilisi. Donec vel metus eu mauris congue consectetur. Mauris urna ligula, tincidunt eget lacinia gravida, auctor non felis. Pellentesque sagittis orci nec diam tristique ultricies. Maecenas aliquet purus vel velit pellentesque, ac ornare lacus vestibulum.

Sed elementum velit.
            </article>
            <img src = 'https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/7/24/0/Original_window-herb-garden1.jpg.rend.hgtvcom.966.725.suffix/1452964280701.jpeg'></img>
            <article>
                Donec erat massa, elementum quis magna ut, placerat euismod eros. Nam posuere ac dolor vitae elementum. Aenean commodo ex in fermentum commodo. Vivamus suscipit vel neque eu accumsan. Quisque diam nisi, laoreet sed porttitor et, gravida ac arcu. Aenean finibus ligula quis scelerisque blandit. Curabitur malesuada tincidunt purus, non molestie diam.

Phasellus vestibulum metus <br></br>non pretium interdum. In fringilla justo eget tortor vehicula feugiat ut non arcu. Duis at fringilla nisl. Mauris pretium nibh augue, sit amet porta purus viverra nec. Morbi eget sem nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ullamcorper magna sit amet convallis pulvinar. Curabitur ornare, elit non aliquet mattis, justo dolor vehicula arcu, in pretium turpis velit et tortor. Integer arcu purus, dictum ut tellus eget, sagittis placerat enim. Vestibulum ultricies non leo vel laoreet. Nulla facilisi. Donec vel metus eu mauris congue consectetur. Mauris urna ligula, tincidunt eget lacinia gravida, auctor non felis. Pellentesque sagittis orci nec diam tristique ultricies. Maecenas aliquet purus vel velit pellentesque, ac ornare lacus vestibulum.

Sed elementum velit.
            </article>
            </div>
            <h2 class = 'recHead'>Enjoy This Article? Check Out These Amazing Pieces from Our Fantastic Authors!</h2>
            <div className='recGrid'>
            {rec.map((item)=>{
                return(
                    // Makes use of already stored PostLinkData, this is the Reccommended or 'Rec'
                    <div className='recPost'>
                        <img src = {item.image}></img>
                        <h3>{item.header}</h3>
                        <h4>{item.desc}</h4>
                    </div>
                )
            })}
            </div>
        </>
    )
}