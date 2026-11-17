import '../Styles/TrackOrder.css';
const TrackOrder =() => {
    return(
        <div>
            <section>
            <div className="trackorder">
                <div className="order-card">
                <h2>Order Confirmed!</h2>
                <h3>Order #cc-84920</h3>
                <h6>Thank you for your order,we've received your custom bag parameters and our studio team is preparing your build.</h6>
                <h4>Item: Custom Bead Bag - $184.00</h4>
                <h4>Specs: Pearl Strap</h4> 
                <h4>Est.Delivery: 5-10 Busness Days</h4>
                <button>Track Order</button>
                <button>Download Receipt(PDF)</button>
                </div>
            </div>
</section>
        </div>
    )
}
export default TrackOrder;