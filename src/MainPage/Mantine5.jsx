import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Card, Image, Text, createStyles, getStylesRef } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';

import Image1 from '../assets/session-1.png';
import Image2 from '../assets/session-2.png';
import Image3 from '../assets/session-3.png';
import Image4 from '../assets/session-4.png';
import Image5 from '../assets/session-5.png';
import Image6 from '../assets/session-6.png';
import Image7 from '../assets/session-7.png';
import Image8 from '../assets/session-8.png';

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

const Mantine5 = () => {
    const { classes } = useStyles();
    const isMobile = useMediaQuery('(max-width: 800px)');
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    const imageHeight = isMobile ? 230 : 270;
    const imageWidth = isMobile ? '100%' : 305;

    return (
        <div
            style={{
                height: isMobile ? '70vh' : '100vh',
                backgroundColor: '#fe7032',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text
                fz={isMobile ? '1.5rem' : '2.5rem'}
                align="center"
                fw="bold"
                style={{ fontFamily: '"Poppins", Sans-serif' }}
                color="white"
                pt={isMobile ? '2rem' : '1rem'}
            >
                MY SESSIONS
            </Text>

            <Carousel
                classNames={classes}
                mx="auto"
                withControls
                controlsOffset="sm"
                w={isMobile ? '85vw' : '70vw'}
                h={imageHeight + 20}
                slideSize="auto"
                slidesToScroll={1}
                draggable
                withIndicators
                slideGap="md"
                mt={isMobile ? '2rem' : '3rem'}
                loop
                plugins={[autoplay.current]}
                onMouseEnter={() => autoplay.current.stop()}
                onMouseLeave={() => autoplay.current.play()}
            >
                {[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8].map((img, idx) => (
                    <Carousel.Slide key={idx} style={{ width: imageWidth }}>

                        <Image
                            radius={'md'}
                            src={img}
                            alt={`Slide ${idx}`}
                            height={imageHeight}
                            width="100%"
                            fit="cover"
                        />

                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    );
};

export default Mantine5;
// import React, { useRef } from 'react';
// import { Carousel } from '@mantine/carousel';
// import { Image, Text, createStyles, getStylesRef } from '@mantine/core';
// import { useMediaQuery } from '@mantine/hooks';
// import Autoplay from 'embla-carousel-autoplay';

// const useStyles = createStyles(() => ({
//   controls: {
//     ref: getStylesRef('controls'),
//     transition: 'opacity 150ms ease',
//     opacity: 0,
//   },
//   root: {
//     '&:hover': {
//       [`& .${getStylesRef('controls')}`]: {
//         opacity: 1,
//       },
//     },
//   },
// }));

// const Mantine5 = () => {
//   const { classes } = useStyles();
//   const isMobile = useMediaQuery('(max-width: 800px)');
//   const autoplay = useRef(Autoplay({ delay: 2000 }));

//   const imageHeight = isMobile ? 230 : 270;
//   const imageWidth = isMobile ? '100%' : 305;

//   // 🔥 Use public folder path directly
//   const images = Array.from({ length: 8 }, (_, i) => `/assets/session-${i + 1}.jpeg`);

//   return (
//     <div
//       style={{
//         height: isMobile ? '70vh' : '100vh',
//         backgroundColor: '#fe7032',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Text
//         fz={isMobile ? '1.5rem' : '2.5rem'}
//         align="center"
//         fw="bold"
//         style={{ fontFamily: '"Poppins", Sans-serif' }}
//         color="white"
//         pt={isMobile ? '2rem' : '1rem'}
//       >
//         MY SESSIONS
//       </Text>

//       <Carousel
//         classNames={classes}
//         mx="auto"
//         withControls
//         controlsOffset="sm"
//         w={isMobile ? '85vw' : '70vw'}
//         h={imageHeight + 20}
//         slideSize="auto"
//         slidesToScroll={1}
//         draggable
//         withIndicators
//         slideGap="md"
//         mt={isMobile ? '2rem' : '3rem'}
//         loop
//         plugins={[autoplay.current]}
//         onMouseEnter={() => autoplay.current.stop()}
//         onMouseLeave={() => autoplay.current.play()}
//       >
//         {images.map((img, idx) => (
//           <Carousel.Slide key={idx} style={{ width: imageWidth }}>
//             <Image
//               radius="md"
//               src={img}
//               alt={`Slide ${idx + 1}`}
//               height={imageHeight}
//               width="100%"
//               fit="cover"
//             />
//           </Carousel.Slide>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Mantine5;
