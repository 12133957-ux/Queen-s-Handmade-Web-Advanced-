import React from 'react';
import { useState } from 'react';
import { Button } from "@mui/material";
import '../Styles/CustomStudio.css';
const CustomStudio =() => {
    const [bagStyle, setBagStyle] = useState("Evening Clutch");
    const [beadType, setBeadType] = useState("Freshwater Pearl Beads");
    const [beadColor, setBeadColor] = useState("Ivory Pearl");
    const [strap, setStrap] = useState("Hand-Woven Beaded Handle");
    const [total, setTotal] = useState(85);
    return(
        <div>
            <section className= "grid">
            <div className="card">
                <h3>1. Bag Shape</h3>
                <button onClick={() => { setBagStyle("Evening Clutch"); setTotal(80);}}>Evening Clutch ($85)</button>
                <button onClick={() => { setBagStyle("Mini Tote bag"); setTotal(40);}}>Mini Tote Bag ($40)</button>
                <button onClick={() => {setBagStyle("Crossbody Bag"); setTotal(60);}}>Crossbody Bag ($60)</button>
               
                <h3>2. Bead Type & Pattern</h3>
                <button onClick={() => setBeadType("Freshwater Pearl Beads")}>Freshwater Pearl</button>
                <button onClick={() => setBeadType("Faceted Crystal Beads")}>Faceted Crystal</button>
                <button onClick={() => setBeadType("Glossy Acrylic Beads")}>Glossy Acrylic</button>

                <h3>3. Bead Color</h3>
                <button onClick={() => setBeadColor("Ivory Pearl")}>Ivory Pearl</button>
                <button onClick={() => setBeadColor("Champagne Gold")}>Champagne Gold</button>
                <button onClick={() => setBeadColor("Purple Crystal")}>Purple Crystal</button>
                <button onClick={() => setBeadColor("Blue")}>Blue</button>

                <h3>4. Strap Style</h3>
                <button onClick={() => setStrap("Hand Woven Beaded Handle")}>Hand Woven Beaded</button>
                <button onClick={() => setStrap("Detachable Gold Chain")}>Gold chain</button>                
            </div>
            <div className="card">
                <h3>Your Beaded Bag Preview</h3>
                <p><strong>Shape: </strong>{bagStyle}</p>
                <p><strong>Beads: </strong>{beadType}</p>
                <p><strong>Color: </strong>{beadColor}</p>
                <p><strong>Strap: </strong>{strap}</p>
            </div>
            <div className="card">
                <h3> Custom Beaded Bag Summary</h3>
                <h4>Bag Model: {bagStyle}</h4>
                <h4>Bead Material: {beadType}</h4>
                <h4>Color: {beadColor}</h4>
                <h4>Strap: {strap}</h4>
                <h3>Total: ${total}</h3>
                <Button href="/TrackOrder" className="btn">Order Custom Beaded Bag</Button>
            </div>
        </section>
     </div>
    )
}
export default CustomStudio;