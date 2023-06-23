import '../style/Banner.css';

export default function Banner ({children}) {

    return(
        <div className = 'banner-img'>
            <div className='banner-overlay'></div>
            {children}
        </div>
    )
}