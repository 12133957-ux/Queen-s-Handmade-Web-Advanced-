import notfound from '../Assests/Notfound.png'
import '../Styles/NewArrival.css'
const NewArrivalItem =({img, title, description ='test'})=>{
    if(title==='' || title=== null)
    {
        title='Not Found';
        img= notfound;
    }
    return(
        <div className='menuItem'>
        <div style={{ backgroundImage: `url(${img})`}}>
        </div>
        {

        }
        <h2>{title}</h2>
        <p>{description}</p>

        </div>
    )
}
export default NewArrivalItem;