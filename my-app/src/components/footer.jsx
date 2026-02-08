import images from '../images';
import '../App.css'; 

function Footer(){
    return(
        <footer className='footer-shop'>
        <div className='footer-text'>
            <p>©PCTRAXERS</p>
            <p>Privacy Policy</p>
        </div>

        <div className='footer-image'>
         <img src={images.visa} alt="Visa" />
         <img src={images.mastercard} alt="Mastercard" />
         <img src={images.myr} alt="Mir" />
        </div>
        </footer>
    )
}

export default Footer;