import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";



const Footer = () => {
    return (
        <div>
            <div className='py-5 bg-[#FBC42D] text-black text-center text-3xl font-extrabold'>GUARANTEED TOUGH.</div>
            <footer className="flex justify-between p-10 footer bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">SYSTEMS</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">SUPPORT</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="flex justify-between px-10 py-4 border-t footer bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img style={{ width: 150 }} src="https://i.ibb.co/HzpCshd/dewalt.png" alt="Logo" />
                    <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
                </div>
                <div className="flex items-center justify-center text-2xl">
                    <FaFacebookF className='m-1' />
                    <FaInstagram className='m-1' />
                    <FaTwitter className='m-1' />
                    <FaLinkedin className='m-1' />
                    <FaYoutube className='m-1' />
                </div>
            </footer>
        </div>
    );
};

export default Footer;