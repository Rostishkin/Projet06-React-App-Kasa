import '../style/HomeBanner.css';

export default function HomeBanner({children}) {

    return (
        <div className='banner-img'>
            <div className='banner-cover'/>
            {children}
        </div>
    )
}