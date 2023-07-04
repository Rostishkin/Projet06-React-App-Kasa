import '../sass/components/Banner.scss';
 
// la fonction Banner
export default function Banner ({children, imageUrl}) {
    
    //const bannerStyle qui contien l'image
    const bannerStyle = {
        backgroundImage:`url(${imageUrl})`,
    };

    // retourner div avec image stylisé et overlay
    return(
        <div className = 'banner-img' style={bannerStyle}>
            <div className='banner-img--overlay'></div>
            {children}
        </div>
    )
}