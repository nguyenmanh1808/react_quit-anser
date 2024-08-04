
import videoHomePage  from '../../assets/video-homepage.mp4'
const HomePage = (props) =>{
    return (
        <div className="homepage-container">
            <video autoPlay  muted loop>
                <source 
                    src={videoHomePage} type='video/mp4'
                />
            </video>
            <div className='homepage-content'>
                <div className='home-title1'>Make forms worth filling out</div>
                <div className='home-title2'>Get more data—like signups, feedback, and anything else—with forms designed to be <span>refreshingly different</span>.</div>
                <div className='home-title3'>
                    <button className='btn'>Get started - it's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;