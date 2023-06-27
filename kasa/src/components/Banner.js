import '../style/Banner.css';

export default function Banner ({children, imageUrl,}) {
    
    //const style de banner
    const bannerStyle = {
        backgroundImage:`url(${imageUrl})`
    };

    // retourner div avec image stylisé et overlay
    return(
        <div className = 'banner-img' style={bannerStyle}>
            <div className='banner-overlay'></div>
            {children}
        </div>
    )
}