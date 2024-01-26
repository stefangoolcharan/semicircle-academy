import React from 'react';
const ClassSection = () => {
    return (
        <section className="class-section">
            <h1>Classes</h1>

            <section className="card-area pb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-card card-style-one">
                                <div class="card-image">
                                    <img src='/images/kid-math.jpg' alt="Image" />
                                </div>
                                <div class="card-content">
                                    <h4 class="card-title">
                                        <a href='#'>Form 1-3 Math</a>
                                    </h4>
                                    <p class="class-text">
                                        Classes focused on the essential topics for Math between forms 1 to 3
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-card card-style-one">
                                <div class="card-image">
                                    <img src='/images/csecmath.jpg' alt="Image" />
                                </div>
                                <div class="card-content">
                                    <h4 class="card-title">
                                        <a href='#'>CSEC Math</a>
                                    </h4>
                                    <p class="class-text">
                                        An essential and comprehensive outline of classes and topics to prepare for CSEC Math.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-card card-style-one">
                                <div class="card-image">
                                    <img src='/images/music.jpg' alt="Image" />
                                </div>
                                <div class="card-content">
                                    <h4 class="card-title">
                                        <a href='#'>Music</a>
                                    </h4>
                                    <p class="class-text">
                                        Creativly driven classes to inspire students in learning the essentials of music
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </section>
    );
};

export default ClassSection;