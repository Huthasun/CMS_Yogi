import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Card, Text, BackgroundImage, Image, getStylesRef, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image1 from '../assets/Certificates/Ace-certificate.png';
import Image2 from '../assets/Certificates/Certified-supplement-coach.png';
import Image3 from '../assets/Certificates/Diploma-in-nutrition.png';
import Image4 from '../assets/Certificates/funtional-and-group.png';
import Image5 from '../assets/Certificates/sports-injuries.png';
import Image6 from '../assets/Certificates/Strength-and-conditioning.png';

import Autoplay from 'embla-carousel-autoplay';

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },
  root: {
    '&:hover': {
      [`& .${getStylesRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}));

const Mantine3 = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const { classes } = useStyles();
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <BackgroundImage
      src="https://getwallpapers.com/wallpaper/full/9/7/9/200446.jpg"
      style={{ height: isMobile ? '100vh' : '120vh' }}
    >
      <div style={{ height: isMobile ? "70vh" : "100vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Text
          fz={isMobile ? '1.5rem' : '2.5rem'}
          align='center'
          fw='bold'
          style={{ fontFamily: '"Poppins", Sans-serif' }}
          color='white'
          pt={isMobile ? '8.5rem' : 'none'}
        >
          CERTIFICATES
        </Text>

        <Carousel
          classNames={classes}
          mx="auto"
          withControls
          controlsOffset='sm'
          w={isMobile ? '85vw' : '65vw'}
          h={isMobile ? 520 : 500}
          slideSize={isMobile ? '75%' : '5rem'}
          slidesToScroll={1}
          draggable
          withIndicators
          slideGap={isMobile ? '1rem' : '2rem'}
          opacity={0.9}
          loop
          mt={isMobile ? '3rem' : '5rem'}
          plugins={[autoplay.current]}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}

        >
          <Carousel.Slide>
            <Card
              bg='#1F3469'
              h={"auto"}
              w={isMobile ? '100%' : '340px'}
              radius='15px'
            >
              <Image src={Image1} radius='sm'></Image>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card
              bg='#1F3469'
              h={"auto"}
              w={isMobile ? '100%' : '340px'}
              radius='15px'
            >
              <Image src={Image2} radius='sm'></Image>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card
              bg='#1F3469'
              h={"auto"}
              w={isMobile ? '100%' : '340px'}
              radius='15px'
            >
              <Image src={Image3} radius='sm'></Image>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card
              bg='#1F3469'
              h={"auto"}
              w={isMobile ? '100%' : '340px'}
              radius='15px'
            >
              <Image src={Image4} radius='sm'></Image>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card
              bg='#1F3469'
              h={"auto"}
              w={isMobile ? '100%' : '340px'}
              radius='15px'
            >
              <Image src={Image5} radius='sm'></Image>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card
              bg='#1F3469'
              h={"auto"}
              w={isMobile ? '100%' : '340px'}
              radius='15px'
            >
              <Image src={Image6} radius='sm'></Image>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </div>
    </BackgroundImage>
  );
};

export default Mantine3;
