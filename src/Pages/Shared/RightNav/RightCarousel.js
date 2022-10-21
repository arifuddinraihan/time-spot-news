import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/Brand1.png'
import Brand2 from '../../../assets/Brand2.png'

const RightCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="First Sponsor"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="Second Sponsor"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default RightCarousel;