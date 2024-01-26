import React from 'react';

const Resources = () =>{
    return (
        <section className="resource-section">
            <div class="col-lg-6 col-md-7 col-sm-9 resource-info">
                <h1>Online Resources</h1>
                <p>Due to cognitive dissonance, students often loose attention for long drawn out class times, and is actually counterproductive to student understanding and performance.
                    This is why, especially for Mathematics, we at The Semicircle Academy prefer to make efficient use of shorter class times and resources for outside the classroom, so students will not become fatigued.
                </p>
                <p>
                    Only our registered students can access our resources, so sign up now!
                </p>
                <button>View Resources</button>
                <div className='online-img'>
                    <img src='/images/online.jpg' />
                </div>
            </div>
            
        </section>
    );
};

export default Resources;