import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitch, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import RightCarousel from './RightCarousel';

const RightNav = () => {
    return (
        <div className=''>
            <div className="d-grid gap-2 text-center">
                <Button size="lg" className='d-flex align-items-center mb-1 justify-content-center' variant='outline-success'>
                    <FaGoogle className='me-2'></FaGoogle> Login
                </Button>
                <Button size="lg" className='d-flex align-items-center mb-1 justify-content-center' variant='outline-dark'>
                    <FaGithub className='me-2'></FaGithub> GitHub
                </Button>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Whats App</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube /> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <h4 className='my-2'>Our Partners</h4>
                <RightCarousel></RightCarousel>
            </div>
        </div>
    );
};

export default RightNav;