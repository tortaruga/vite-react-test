import reactLogoBlue from '../assets/react-blue.svg'

export default function Navbar() {
    return (
        <nav>
          <div className='nav-group'>
            <img className='nav-logo' alt="react logo" src={reactLogoBlue}/>
            <h1 className='nav-heading heading'>ReactFacts</h1>
          </div>
        </nav>
    );
}
