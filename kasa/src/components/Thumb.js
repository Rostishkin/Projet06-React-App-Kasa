import '../sass/components/Thumb.scss';

export default function Thumb ({logements}) {
    const {id, title, cover} = logements;

    return (
        <div className='card' key={id}>
            <div className='card--overlay'></div>
            <img className='card--cover' src={cover} alt={title}></img>
            <h2 className='card--title'>{title}</h2>
        </div>
    );
}