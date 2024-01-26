import React from 'react';
const Location = () => {
    return (
        <section class="map">
            <div className='contact' >
                <ul>
                    <li>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.17881968403!2d-61.4867495886286!3d10.247157568689289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c358dd507424905%3A0xde9653f782f437f7!2sThe%20Semicircle%20Academy!5e0!3m2!1sen!2stt!4v1697427452589!5m2!1sen!2stt" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </li>
                    <li>
                        <div className='socials'>
                            <h3>Let's connect and begin this journey!</h3>
                            <p>Email: thesemicircleacademy@gmail.com</p>
                            <p>Contact: 1-868-123-xxx</p>
    
                            <a className='map-btn' target="blank" href='https://maps.app.goo.gl/NBGyJfXSu6A5NkqZA'><button>Open Maps</button></a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Location;