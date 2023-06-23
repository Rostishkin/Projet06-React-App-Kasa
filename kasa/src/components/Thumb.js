import '../style/Thumb.css';

export default function Thumb ({logements}) {
    const {id, title, cover} = logements;

    return (
        <div className='card' key={id}>
            <div className='card-overlay'></div>
            <img className='image-cover' src={cover} alt={title}></img>
            <h2 className='titre-logement'>{title}</h2>
        </div>
    );
}