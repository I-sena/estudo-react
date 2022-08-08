import {FiLink} from 'react-icons/fi'
import './home.css';
import Menu from '../../components/Menu'

export default function Home(){
  return(
    <div className="container-home">
      
      <div className='logo'>
        <img src="/logo.png" alt="Encurta links Logo"/>
        <h1>Encurta link</h1>
        <span>Cole seu link aqui para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff"/>
          <input
            placeholder='Cole seu link aqui...'
          />
        </div>

        <button>Encurtar Link</button>
      </div>

      <Menu/>
    </div>
  )
}