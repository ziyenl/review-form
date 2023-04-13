import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function About() {
  return (
    <Card>
        <h1>React Feedback System</h1>
        <div className='about'>
            <p>React app to leave feedback or a product service</p>
            <p>Version: 1.0.0</p>
            <Link to='/'>Back To Main</Link>
        </div>
    </Card>
    
  )
}

export default About