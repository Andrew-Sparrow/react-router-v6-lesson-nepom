import {Routes, Route} from 'react-router-dom';

import {Homepage} from './pages/Homepage';
import {About} from './pages/Aboutpage';
import {Blogpage} from './pages/Blogpage';
import SinglePage from './pages/SinglePage';
import {Notfoundpage} from './pages/Notfoundpage';
import {Layout} from './components/Layout'
import CreatePost from './pages/CreatePost';
import EditArticle from './pages/EditArticle';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditArticle />} />
          <Route path="posts/new" element={<CreatePost />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
