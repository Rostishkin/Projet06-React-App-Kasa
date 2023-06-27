import '../style/Banner.css';

export default function Banner ({children, imageUrl, marginTop, marginBottom}) {
    
    //const style de banner

    const bannerStyle = {
        backgroundImage:`url(${imageUrl})`,
        marginTop,
        marginBottom,
    };

    // retourner div avec image stylisé et overlay
    return(
        <div className = 'banner-img' style={bannerStyle}>
            <div className='banner-img--overlay'></div>
            {children}
        </div>
    )
}