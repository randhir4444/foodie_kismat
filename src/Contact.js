import React from 'react';
import contactus from "./image/contactus.png";
import Common from "./Common";

function Contact() {
    return (
        <div>
            <Common 
                start="Contact us"
                name="Feel free to contact us anytime."
                des="We're fulfilling this mission by improving life in the kitchen
                    for millions of home cooks around the world."
                btn="Contact us"
                img={contactus}
            />
        </div>
    )
}

export default Contact
