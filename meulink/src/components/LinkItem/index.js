import {FiX, FiClipboard} from 'react-icons/fi';
import './link-item.css';

export default function LinkItem({closeModal, content}){         //Criando uma propriedade pro componente.
    async function copyLink(){
        await navigator.clipboard.writeText(content.link)
        alert("URL copiada com sucesso!")
    }

    return(
        <div className="container-modal">

            <div className="modal-header">
                <h2>Link encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="#000"/>
                </button>
            </div>

            <span>
                {content.long_url}
            </span>

            <button className='modal-link' onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color="#fff"/>
            </button>
        </div>
    )
}