import { Button, Container, Flex, Footer, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import facebookImage from '../assets/facebook-logo-facebook-icon-transparent-free-png.png';
import instagramImage from '../assets/colored-instagram-logo-new.png';
import gmail from '../assets/gmail-logo-main-icon-1.png'
import { useMediaQuery } from '@mantine/hooks';

const Footer1 = ({ openModal }) => {
    const isMobile = useMediaQuery('(max-width: 800px)');


    return (
        <Footer
            zIndex='revert'
            style={{
                // backgroundColor: '#FBD40B',
                minHeight: '9rem',
                display: 'flex',
                alignItems: 'center',
                display: 'flex',
                position: 'relative',
                top: isMobile ? '-3rem' : '-5rem'
            }}
        >
            <Container
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'row' : 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '1rem',
                    gap: isMobile ? '1rem' : '0',
                }}
            >
                {!isMobile && (<Flex direction={'column'}><Text fz={'sm'} fs={'italic'} ml={isMobile ? '-1rem' : '2rem'} style={{ fontfamily: '"Open Sans", Sans-serif' }}>
                    Designed and Developed by <span><Link to={'https://automactechnologies.in/'} target='_blank'>Automac Technologies</Link></span>
                </Text>
                    {/* <Link to={'https://automactechnologies.in/'} target='_blank'><Text fz={'sm'} style={{ fontfamily: '"Open Sans", Sans-serif' }} ml={isMobile ? '-1rem' : '2rem'}>https://automactechnologies.in/</Text></Link> */}
                </Flex>)
                }
                {/* Social Media Links */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        flexDirection: isMobile ? 'row' : 'row',
                    }}
                >
                    <Link to="mailto:lakpathiwaryogesh@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src={'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico'}
                            alt="Gmail"
                            style={{ width: '3rem', height: 'auto' }}
                        />
                    </Link>
                    <Link to="https://www.instagram.com/yogawithyogiii?igsh=MTN5M3piZmkwenhrcA==" target="_blank" rel="noopener noreferrer">
                        <img
                            src={instagramImage}
                            alt="Instagram"
                            style={{ width: '2.5rem', height: 'auto' }}
                        />
                    </Link>
                </div>

                {/* Register Button */}
                <Button
                    radius="xl"
                    size="xl"
                    style={{
                        background: 'linear-gradient(90deg, #2d5128, #6fbf73)',
                        // backgroundSize: '200% 100%',
                        color: 'white',
                        padding: '1rem 2.5rem',
                        fontSize: '18px',
                        fontWeight: 700,
                        borderRadius: '30px',
                        boxShadow: '0 0 20px rgba(255, 253, 208, 0.8)',
                        transition: 'transform 0.3s ease, background-position 0.5s ease-in-out',
                        cursor: 'pointer',
                        backgroundPosition: '0% 50%',
                    }}
                    // onMouseEnter={(e) => (e.target.style.backgroundPosition = '100% 50%')}
                    // onMouseLeave={(e) => (e.target.style.backgroundPosition = '0% 50%')}
                    onClick={openModal}
                >
                    Register Here
                </Button>

            </Container>
        </Footer>
    );
};

export default Footer1;
