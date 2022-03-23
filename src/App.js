import './App.css';
import { NavBar } from './Navbar';
import { Header } from './Header';
import { Homepage } from './Homepage';
import Blog from './Blog';
import Shop from './Shop';
import Mission from './Mission';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useLocation
} from "react-router-dom";
import { useEffect, useState } from 'react';
import BlogPost1 from './BlogPosts/BlogPost1';
import BlogPost2 from './BlogPosts/BlogPost2';
import BlogPost3 from './BlogPosts/BlogPost3';
// When adding a new blogpost link, add to the Route path and Import the Component


function App() {
  let [disp, setDisp] = useState('unset')
  let location = useLocation();
  console.log(location)
  useEffect(()=>{
    if(location.pathname !== '/'){
      setDisp('none')
    }else{
      setDisp('unset')
    }
  })
  return (
    <>
    <Header/>

    <NavBar />
    <Routes>
    <Route path="/" exact>
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Shop" element = {<Shop />} />
          <Route path="/Mission" element = {<Mission />} />
          <Route path = "/BlogPost1" element = {<BlogPost1 />} />
          <Route path = "/BlogPost2" element = {<BlogPost2 />} />
          <Route path='/BlogPost3' element = {<BlogPost3/>}/>
          <Route path="*"/>
        </Route>
      </Routes>
    <Homepage disp = {disp} />
    </>
  )
}

export default App;
