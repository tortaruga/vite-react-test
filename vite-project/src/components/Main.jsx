import reactLogoGrey from '../assets/react-grey.svg'

export default function Main() {
    return (
        <main>
            <h1 className="main-heading heading">Fun facts about React</h1>
            <ul className="main-list">
                <li className="main-li">Was first released in 2013</li>
                <li className="main-li">Was originally created by Jordan Walke</li>
                <li className="main-li">Has well over 200K stars on GitHub</li>
                <li className="main-li">Is maintained by Meta</li>
                <li className="main-li">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>

            <img src={reactLogoGrey} alt="react logo" className='main-logo' />
        </main>
    )
}