
import './portfolio.css'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Skills from './skills'
import Education from './Education'
import Additional from './Additional'
import Home from './Home'
import Projects from './project'
export default function Portfolio(){
 
 return <body>
    <div class="navbar">

<BrowserRouter>
<a ><Link className='selected' to='/'>home</Link></a>
<a ><Link className='selected' to='/skills'>skills</Link></a>
<a ><Link className='selected'   to='/education'>education</Link></a>
<a ><Link className='selected' to='/additional'>additional</Link></a>
<a ><Link className='selected' to='/projects'>projects</Link></a>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/education' element={<Education/>}/>
    <Route path='/additional' element={<Additional/>}/>
    <Route path='/projects' element={<Projects/>}/>
</Routes>

</BrowserRouter>

</div>


</body>






 

 }   







    

