import '../Styles/NewArrival.css';
import Dior from '../Assests/Dior.jpeg'
import Acrylic from '../Assests/Acrylic.jpeg';
import Crystals from '../Assests/Crystals.jpeg';
import NewArrivalItem from '../Components/NewArrivalItem';
const NewArrival =() => {
    return(
        <div className='newarrival-container'>
            <NewArrivalItem img={Dior} title='Dior' description='Size: Medium 
            price:60$ '></NewArrivalItem>
            <NewArrivalItem img={Acrylic} title='Acrylic' description='Size: Medium price:40$ '></NewArrivalItem>
            <NewArrivalItem img={Crystals} title='Crystals' description='Size: Big price:70$ '></NewArrivalItem>
           
        </div>
    )
}
export default NewArrival;