import React from 'react';
import { Image, BackgroundImage, Text, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import './page.css'
const Mantine2 = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <BackgroundImage
      src="https://dailytimes.com.pk/assets/uploads/2019/04/04/fitness.jpg"
      style={{
        height: isMobile ? '75vh' : '80vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Centering Wrapper with full height */}
      <div
        style={{
          height: '100%', // FULL HEIGHT is required here
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '1rem' : '2rem',
        }}
      >
        <Flex
          direction={isMobile ? 'column' : 'row'}
          align="center"
          justify="center"
          gap={isMobile ? 'sm' : 'lg'}
          style={{ width: '100%', maxWidth: '1200px' }}
        >
          {/* Image Section */}


          {/* Text Section */}
          <Flex
            className="yoga-text-section"
            direction="column"
            align={isMobile ? 'center' : 'flex-start'}
            justify="center"
            mt={isMobile ? '1rem' : 0}
            px={isMobile ? '1rem' : '2rem'}
          >
            <Text
              className="yoga-heading-text"
              style={{ fontFamily: '"Poppins", Sans-serif' }}
              fz={isMobile ? '22px' : '34px'}
              fw="bold"
              align={isMobile ? 'center' : 'left'}
            >
              "Gift yourself a lifetime of clarity and calm. all it takes is 90 minutes of yoga!"
            </Text>
            <Text
              className="yoga-description-text"
              style={{  fontFamily: '"Poppins", Sans-serif'  }}
              fz={isMobile ? '14px' : '18px'}
              fw="300"
              mt="md"
              align={isMobile ? 'center' : 'left'}
            >
              Yoga a day can transform your life -
With gentle movements, deep breathing, and quiet meditation, yoga melts away stress, sharpens focus, and brings peace to your busy day.
It’s more than a workout—it’s a daily ritual of care for your body and mind.
Start today… and feel the calm grow from within.
            </Text>
          </Flex>
          <Flex justify="center" className="yoga-image-section">
            <Image
              src="https://t3.ftcdn.net/jpg/09/02/46/30/360_F_902463036_VKP2Vcgv7cd2Nmsn4LUJsptzXuw6eYV4.jpg"
              height={isMobile ? '8rem' : '20rem'}
              width={isMobile ? '8rem' : '20rem'}
              style={{ objectFit: 'contain' }}
            />
          </Flex>
        </Flex>
      </div>
    </BackgroundImage>
  );
};

export default Mantine2;
