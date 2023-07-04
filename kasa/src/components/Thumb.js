import '../sass/components/Thumb.scss';

//function miniature 
//prise de parametre logement
export default function Thumb ({logements}) {
   //extraction de id/titre/photo
    const {id, title, cover} = logements;
//sortie
    return (
        <div className='card' key={id}>
            <div className='card--overlay'></div>
            <img className='card--cover' src={cover} alt={title}></img>
            <h2 className='card--title'>{title}</h2>
        </div>
    );
}