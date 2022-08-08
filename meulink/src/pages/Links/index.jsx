import {useState, useEffect} from 'react'
import './links.css'
import { FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import Menu from '../../components/Menu'
import {getLinksSave, deleteLink} from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'


export default function Links(){

  const [myLink, setMyLink] = useState([])
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [emptyList, setEmptyList] = useState(false)

  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSave('@encurtaLink')

      if(result.length === 0){
        console.log("lista vazia")
        setEmptyList(true)
      }

      setMyLink(result)
    }

    getLinks()
  }, [])

  function handleOpenLink(link){
    setData(link)
    setShowModal(true)
  }

  async function handleDelete(id){
    const result = await deleteLink(myLink, id)

    if(result.length ===0){
      setEmptyList(true)
    }

    setMyLink(result)
  }


  return(
    <div className='link-container'>
      
      <div className='links-header'>
        <Link to={"/"}>
          <FiArrowLeft size={38} color="#fff"/>
        </Link>
        <h1>Meus links</h1>
      </div>

      {emptyList && (
        <div className='links-items'>
          <h2 className='empty-text'>Sua lista está vazia!</h2>
        </div>
      )}

      { myLink.map(link => (
        <div key={link.id} className='link-items'>
          <button className='link' onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color="#fff"/>
            {link.link}
          </button>
          <button className='link-delete' onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color="#ff5454"/>
          </button>
        </div>

      ))}

      <Menu/>
      { showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )

      }
    </div>
  )
}