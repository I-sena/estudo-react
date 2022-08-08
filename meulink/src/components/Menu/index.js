import './menu.css';
import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://www.instagram.com/' target={'_blank'} rel='noreferrer'>
                <BsInstagram color='#fff' size={24} />
            </a>
            <a className='social' href='https://twitter.com/home' target={'_blank'} rel='noreferrer'>
                <BsTwitter color='#fff' size={24} />
            </a>
            <Link className='menu-links' to="/links">
                Meus links
            </Link>
        </div>
    )
}