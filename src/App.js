import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackStat from './components/FeedbackStat';
import FeedbackForm from './components/FeedbackForm';
import { FeedbackProvider } from './context/FeedBackContext';
import About from './pages/About';
import AboutIcon from './AboutIcon';

//import { NavLink } from 'react-router-dom';
//import Card from './components/shared/Card';
//import Post from './components/Post';

function App(){
    //const [feedBack, setFeedBack] = useState(FeedbackData);
    
    return (
        <FeedbackProvider>
        <Router>
            <Header/>
            <div className="container">
            <Routes>
                <Route exact path='/' element={
                <>
                    <FeedbackForm/>
                    <FeedbackStat/>
                    <FeedbackList/>
                </>
                }>   
                </Route>
                <Route path = '/about' element={<About />}/>
            </Routes>
            <AboutIcon/>
            </div>
        </Router>
        </FeedbackProvider>
    ) 
}

export default App

 /**
<Card>
        <NavLink to='/' activeClassName='active'>Home</NavLink>
        <NavLink to='/about' activeClassName='active'>Home</NavLink>
</Card>

<Route path = '/post/:id/:name' element={<Post />}>This is about route.</Route>

<Route path = '/post/*' element={<Post />}>This is about route.</Route>
**/