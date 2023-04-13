import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function AboutIcon() {
    /**
     * <Link to = {{
     *      pathname: '/about',
     *      search: '?sort=name',
     *      hash: '#hello',
     * }}/>
     */
  return (
    <div className='about-link'>
        <Link to='/about'>
            <FaQuestion size={30}/>
        </Link>
    </div>
  )
}

export default AboutIcon