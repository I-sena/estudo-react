import './links.css'
import { FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import {Link} from 'react-router-dom'


export default function Links(){
  return(
    <div className='link-container'>
      
      <div className='links-header'>
        <Link to={"/"}>
          <FiArrowLeft size={38} color="#fff"/>
        </Link>
        <h1>Meus links</h1>
      </div>

      <div className='link-items'>
        <button className='link'>
          <FiLink size={18} color="#fff"/>
          link
        </button>
        <button className='link-delete'>
          <FiTrash size={24} color="#ff5454"/>
        </button>
      </div>

    </div>
  )
}