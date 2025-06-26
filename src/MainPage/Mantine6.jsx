import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { BackgroundImage, Container, Image, Text } from '@mantine/core';
import Image1 from '../assets/yogesh.png';

const Mantine6 = () => {
    const isMobile = useMediaQuery('(max-width: 800px)');

    return (
        <BackgroundImage src='https://i.pinimg.com/originals/83/14/fa/8314fa065fabcfdb87a634ce0cdaaa7d.jpg'>
            <div
                style={{
                    height: isMobile ? '85vh' : '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: 'none',
                }}
            >
                <Container
                    size='lg'
                    fluid
                    p={0}
                // mb={isMobile ? '3rem' : 'none'}
                // mt={isMobile ? '2rem' : 'lg'}

                >
                    <div
                        style={{
                            height: isMobile ? '85vh' : '60vh',
                            backgroundColor: 'rgba(253, 114, 50, 0.95)', // semi-transparent background
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottom: 'none',
                            flexDirection: isMobile ? 'column' : 'row',

                            paddingLeft: "10%",
                            paddingRight: "10%"
                        }}
                    >
                        <div
                            style={{
                                flex: 0.1,
                                borderBottom: 'none',
                                margin: isMobile ? '1rem' : '3rem',
                            }}
                        >
                            <Image
                                height={isMobile ? '15rem' : '20rem'}
                                width={isMobile ? '12rem' : '15rem'}
                                mb={isMobile ? '0rem' : 'none'}
                                src={Image1}
                                radius='md'
                            />
                        </div>
                        <div
                            style={{
                                flex: 0.7,
                                borderBottom: 'none',
                            }}
                        >
                            <Text
                                fz={isMobile ? '1.5rem' : '2.5rem'}
                                align={isMobile ? 'center' : 'left'}
                                fw="bold"
                                style={{
                                    fontFamily: '"Poppins", Sans-serif',
                                    color: 'white',
                                }}
                                mb="sm"
                            >
                                ABOUT ME
                            </Text>
                            <Text
                                fz={isMobile ? '14px' : '16px'}
                                fw="500"
                                align={isMobile ? 'center' : 'left'}
                                style={{
                                    fontFamily: '"Poppins", Sans-serif',
                                    color: 'rgba(255, 255, 255, 0.85)',
                                    lineHeight: 1.6,
                                }}
                            >
                                I'm Yogesh, I completed my graduation from JNTUH and a Master's in MSc Yoga and Psychology.
                                Since 2019, I've trained Indian Army personnel, students, corporate professionals, and residential groups.
                                Many have experienced transformative results tailored to their individual conditions.
                            </Text>
                        </div>
                    </div>
                </Container>
            </div>
        </BackgroundImage>

    );
};

export default Mantine6;
