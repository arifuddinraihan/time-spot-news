import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightNav = () => {
    return (
        <div className=''>
            <div className="d-grid gap-2 text-center">
                <Button size="lg" className='d-flex align-items-center mb-1 justify-content-center' variant='outline-primary'>
                    <FaGoogle className='me-2'></FaGoogle> Login
                </Button>
                <Button size="lg" className='d-flex align-items-center mb-1 justify-content-center' variant='outline-dark'>
                    <FaGithub className='me-2'></FaGithub> GitHub
                </Button>
            </div>
        </div>
    );
};

export default RightNav;