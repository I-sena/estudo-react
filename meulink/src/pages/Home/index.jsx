import {useState} from 'react'
import {FiLink} from 'react-icons/fi'
import './home.css';
import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'
import api from '../../services/api'
import {saveLink} from '../../services/storeLinks'

export default function Home(){
  
  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  async function hadleShortLink(){
    try {
      const response = await api.post('/shorten',{
        long_url: link
      })

      console.log(response)

      setData(response.data)
      setShowModal(true)

      saveLink('@encurtaLink', response.data)
      setLink('')

    } catch {
      alert("error")
      setLink('')
    }
  }

  return(
    <div className="container-home">
      
      <div className='logo'>
        <img src="/logo.png" alt="Encurta links Logo"/>
        <h1>Encurta link</h1>
        <span>Cole seu link aqui para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={18} color="#fff"/>
          <input
            placeholder='Cole seu link aqui...'
            value={link}
            onChange = {(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={hadleShortLink}>Encurtar Link</button>
      </div>

      <Menu/>

      {showModal && (
        <LinkItem 
          closeModal = {() => setShowModal(false)}
          content = {data}
        />
      )}
    </div>
  )
}