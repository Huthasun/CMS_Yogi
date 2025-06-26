import { Carousel } from "@mantine/carousel";
import { Card, Avatar, Text, Container, BackgroundImage, getStylesRef, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";


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
const TestimonialCarousel = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const { classes } = useStyles();
    const autoplay = useRef(Autoplay({ delay: 2000, }));
    return (
        <BackgroundImage
            src='https://images.news18.com/ibnlive/uploads/2022/06/bhujangasana-1.jpg'

            style={{
                height: '100vh',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                width: 'auto',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Container size="lg" style={{ width: isMobile ? '100%' : "55%", }} mb={isMobile ? '9rem' : 'none'} mt={isMobile ? '7rem' : 'none'}>
                <Text
                    fz={isMobile ? '1.5rem' : '2.5rem'}
                    align='center'
                    fw='bold'
                    style={{ fontFamily: '"Poppins", Sans-serif' }}
                    color='white'
                    mb='2rem'
                    mt='4rem'
                    pt={isMobile ? '3rem' : '1rem'}
                >
                    EXPERIENCES THAT INSPIRE
                </Text>
                <Carousel slideSize="100%" align="center" loop
                    mb='5rem'
                    withControls={false}
                    withIndicators
                    slideGap='xs'
                    plugins={[autoplay.current]}
                    onMouseEnter={() => autoplay.current.stop()}
                    onMouseLeave={() => autoplay.current.play()}
                >
                    {/* Testimonial 1 */}
                    <Carousel.Slide>
                        <Card
                            shadow="sm"
                            p="xl"

                            radius="md"
                            style={{
                                backgroundColor: "#2d5128",
                                color: "white",
                                textAlign: "center",
                                position: "relative",
                                width: isMobile ? "95%" : "100%",
                                opacity: '0.8',

                                borderRadius: "10px",
                                // paddingTop: isMobile ? "60px" : "80px",
                                paddingBottom: isMobile ? "50px" : "50px",
                                minHeight: isMobile ? "200px" : "450px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            {/* <Avatar
                                src="https://healthcoachsaiteja.com/wp-content/uploads/2024/11/Sandeep_US-Client-254x300.jpg"
                                size={isMobile ? 70 : 90}
                                radius="50%"
                                style={{
                                    position: "absolute",
                                    top: "7px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    backgroundColor: "white",
                                    objectFit: "cover",
                                }}
                            />

                            <Avatar
                                src="https://healthcoachsaiteja.com/wp-content/uploads/2024/11/Sandeep_US-Client-254x300.jpg"
                                size={90}
                                radius="50%"
                                style={{
                                    position: "absolute",
                                    top: "7px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    backgroundColor: "white",
                                    objectFit: "cover",
                                }}
                            /> */}
                            <Text fw={700} size="lg" style={{ color: "yellow", fontFamily: '"Poppins", Sans-serif' }}>

                                Shailendra Mehta
                            </Text>
                            {/* <Text size="sm" mb="md" c="gray.3" style={{ fontFamily: '"Poppins", Sans-serif' }}>
                                Electrical Engineer, UK
                            </Text> */}
                            <Text
                                mt="xl"
                                size="md"
                                fz={isMobile ? "14px" : "18px"}
                                style={{
                                    lineHeight: "1.5",
                                    maxWidth: "90%",
                                    margin: "0 auto",
                                    fontFamily: '"Roboto Condensed",Sans-serif',
                                    color: "rgba(255, 255, 255, 0.8)",
                                }}
                            >
                                Dear Yogesh,
                                I wanted to take a moment to express my gratitude for your guidance and support on this yoga journey. Your passion for yoga is truly inspiring, and your calm, patient approach has made every session not just a workout, but a transformative experience.

                                Through your teachings, I’ve not only grown stronger and more flexible physically, but I’ve also learned to find peace and balance within myself. You’ve shown me that yoga is so much more than poses—it’s a way of life, a path to mindfulness, and a tool for self-discovery.

                                Thank you for sharing your knowledge, energy, and positivity. You’re not just a great yoga coach; you’re a mentor and a source of inspiration. I’m truly grateful to have you as my guide.

                                Wishing you continued success and happiness on your own journey. Namaste!
                            </Text>
                            <Text
                                style={{
                                    position: "absolute",
                                    top: "5px",
                                    right: "20px",
                                    fontSize: "50px",
                                    color: "yellow",
                                }}
                            >
                                ❝
                            </Text>
                        </Card>
                    </Carousel.Slide>

                    {/* Testimonial 2 */}
                    <Carousel.Slide>
                        <Card
                            shadow="sm"
                            p="xl"
                            radius="md"
                            style={{
                                backgroundColor: "#2d5128",
                                color: "white",
                                textAlign: "center",
                                position: "relative",
                                width: isMobile ? "95%" : "100%",
                                opacity: '0.8',
                                maxWidth: isMobile ? "100%" : "800px",
                                // margin: "auto",
                                borderRadius: "10px",
                                // paddingTop: isMobile ? "60px" : "80px",
                                paddingBottom: isMobile ? "40px" : "50px",
                                minHeight: isMobile ? "350px" : "450px", // Adjust height for mobile
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            {/* <Avatar
                                src="https://healthcoachsaiteja.com/wp-content/uploads/2024/11/Sandeep_US-Client-254x300.jpg"
                                size={isMobile ? 70 : 90}
                                radius="50%"
                                style={{
                                    position: "absolute",
                                    top: "7px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    backgroundColor: "white",
                                    objectFit: "cover",
                                }}
                            />

                            <Avatar
                                src="https://healthcoachsaiteja.com/wp-content/uploads/2022/11/RHT6188-1-300x295.jpg"
                                size={90}
                                radius="50%"
                                style={{
                                    position: "absolute",
                                    top: "7px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    backgroundColor: "white",
                                    objectFit: "cover",
                                }}
                            /> */}
                            <Text fw={700} size="lg" style={{ color: "yellow", marginTop: isMobile ? 30 : 40, fontFamily: '"Poppins", Sans-serif' }}>

                                Pawan sir
                            </Text>
                            {/* <Text size="sm" mb="md" c="gray.3" style={{ fontFamily: '"Poppins", Sans-serif' }}>
                                Video Marketing Specialist, Hyderabad
                            </Text> */}
                            <Text
                                mt="xl"
                                size="md"
                                fz={isMobile ? "14px" : "18px"}
                                style={{
                                    lineHeight: "1.5",
                                    maxWidth: "90%",
                                    margin: "0 auto",
                                    fontFamily: '"Roboto Condensed",Sans-serif',
                                    color: "rgba(255, 255, 255, 0.8)",
                                }}
                            >
                                Yogesh Sir is an exceptional yoga instructor, blending deep knowledge with a warm and encouraging teaching style. His sessions are not just about physical postures but also about inner peace, mindfulness, and overall well-being. He has a keen eye for detail, ensuring that every student perfects their asanas while also understanding their spiritual and health benefits. His patience, positivity, and dedication make every class a transformative experience. Learning from Yogesh Sir is not just about practicing yoga; it’s about embracing a healthier and more balanced lifestyle
                            </Text>
                            <Text
                                style={{
                                    position: "absolute",
                                    top: "5px",
                                    right: "20px",
                                    fontSize: "50px",
                                    color: "yellow",
                                }}
                            >
                                ❝
                            </Text>
                        </Card>
                    </Carousel.Slide>

                    <Carousel.Slide>
                        <Card
                            shadow="sm"
                            p="xl"
                            radius="md"
                            style={{
                                backgroundColor: "#2d5128",
                                color: "white",
                                textAlign: "center",
                                position: "relative",
                                width: isMobile ? "95%" : "100%",
                                opacity: '0.8',
                                maxWidth: isMobile ? "100%" : "800px",
                                // margin: "auto",
                                borderRadius: "10px",
                                // paddingTop: isMobile ? "60px" : "80px",
                                paddingBottom: isMobile ? "40px" : "50px",
                                minHeight: isMobile ? "350px" : "450px", // Adjust height for mobile
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            {/* <Avatar
                                src="https://healthcoachsaiteja.com/wp-content/uploads/2024/11/Sandeep_US-Client-254x300.jpg"
                                size={isMobile ? 70 : 90}
                                radius="50%"
                                style={{
                                    position: "absolute",
                                    top: "7px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    backgroundColor: "white",
                                    objectFit: "cover",
                                }}
                            />

                            <Avatar
                                src="https://healthcoachsaiteja.com/wp-content/uploads/2025/01/kiranmai_sai-teja-client_profile-294x300.jpg"
                                size={90}
                                radius="50%"
                                style={{
                                    position: "absolute",
                                    top: "7px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    backgroundColor: "white",
                                    objectFit: "cover",
                                }}
                            /> */}
                            <Text fw={700} size="lg" style={{ color: "yellow", marginTop: isMobile ? 30 : 40, fontFamily: '"Poppins", Sans-serif' }}>

                                Purooshottam sir
                            </Text>
                            {/* <Text size="sm" mb="md" c="gray.3" style={{ fontFamily: '"Poppins", Sans-serif' }}>
                                Home maker, Alberta, Canada
                            </Text> */}
                            <Text
                                mt="xl"
                                size="md"
                                fz={isMobile ? "14px" : "18px"}
                                style={{
                                    lineHeight: "1.5",
                                    maxWidth: "90%",
                                    margin: "0 auto",
                                    fontFamily: '"Roboto Condensed",Sans-serif',
                                    color: "rgba(255, 255, 255, 0.8)",
                                }}
                            >
                                Yogesh Sir is a truly inspiring yoga teacher, guiding his students with wisdom, patience, and dedication. His deep understanding of yoga goes beyond just physical postures—he incorporates breathwork, meditation, and philosophy to create a holistic experience. His calm demeanor and encouraging nature make every session enjoyable and enriching. Whether you are a beginner or an advanced practitioner, he tailors his teaching to suit individual needs, helping each student grow on their yoga journey. Under his guidance, yoga becomes more than just an exercise—it becomes a way of life, bringing peace, strength, and harmony to the body and mind.                            </Text>
                            <Text
                                style={{
                                    position: "absolute",
                                    top: "5px",
                                    right: "20px",
                                    fontSize: "50px",
                                    color: "yellow",
                                }}
                            >
                                ❝
                            </Text>
                        </Card>
                    </Carousel.Slide>

                    <Carousel.Slide>
                        <Card
                            shadow="sm"
                            p="xl"
                            radius="md"
                            style={{
                                backgroundColor: "#2d5128",
                                color: "white",
                                textAlign: "center",
                                position: "relative",
                                width: isMobile ? "95%" : "100%",
                                opacity: '0.8',
                                maxWidth: isMobile ? "100%" : "800px",
                                // margin: "auto",
                                borderRadius: "10px",
                                // paddingTop: isMobile ? "60px" : "80px",
                                paddingBottom: isMobile ? "40px" : "50px",
                                minHeight: isMobile ? "350px" : "450px", // Adjust height for mobile
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            {/* <Avatar
                                src="https://healthcoachsaiteja.com/wp-content/uploads/2024/11/Sandeep_US-Client-254x300.jpg"
                                size={isMobile ? 70 : 90}
                                radius="50%"
                                style={{
                                    position: "absolute",
                                    top: "7px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    backgroundColor: "white",
                                    objectFit: "cover",
                                }}
                            />

                            <Avatar
                                src="https://healthcoachsaiteja.com/wp-content/uploads/2024/04/Image_Editor-150x150.png"
                                size={90}
                                radius="50%"
                                style={{
                                    position: "absolute",
                                    top: "7px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    backgroundColor: "white",
                                    objectFit: "cover",
                                }}
                            /> */}
                            {/* <Text fw={700} size="lg" style={{ color: "yellow", marginTop: isMobile ? 30 : 40, fontFamily: '"Poppins", Sans-serif' }}>

                                Ethan
                            </Text> */}
                            {/* <Text size="sm" mb="md" c="gray.3" style={{ fontFamily: '"Poppins", Sans-serif' }}>
                                Class 6 student
                            </Text> */}
                            <Text
                                mt="xl"
                                size="md"
                                fz={isMobile ? "14px" : "18px"}
                                style={{
                                    lineHeight: "1.5",
                                    maxWidth: "90%",
                                    margin: "0 auto",
                                    fontFamily: '"Roboto Condensed",Sans-serif',
                                    color: "rgba(255, 255, 255, 0.8)",
                                }}
                            >
                                Dear Yogesh Sir,

                                I have fallen in love with yoga: I know I will always continue practicing now.  I have tried yoga a few times over the years and never felt a connection to it. I realise now it is all about the teacher as much as the practice. I have utter confidence in your knowledge and find your classes so stimulating and informative - I love that you describe what is happening in the body with each pose and what it is useful for. I also find your approach wonderful -  you inspire confidence, your instructions are so clear and you have such a calm and positive energy. And apart from that it's worth joining your class to see everyone smile  which is so warm and welcoming! So thank you very much for everything.                            </Text>
                            <Text
                                style={{
                                    position: "absolute",
                                    top: "5px",
                                    right: "20px",
                                    fontSize: "50px",
                                    color: "yellow",
                                }}
                            >
                                ❝
                            </Text>
                        </Card>
                    </Carousel.Slide>

                    {/* <Carousel.Slide>
                        <Card
                            shadow="sm"
                            p="xl"
                            radius="md"
                            style={{
                                backgroundColor: "#2d5128",
                                color: "white",
                                textAlign: "center",
                                position: "relative",
                                width: isMobile ? "95%" : "100%",
                                opacity: '0.8',
                                maxWidth: isMobile ? "100%" : "800px",
                                margin: "auto",
                                borderRadius: "10px",
                                paddingTop: isMobile ? "60px" : "80px",
                                paddingBottom: isMobile ? "40px" : "50px",
                                minHeight: isMobile ? "350px" : "450px", // Adjust height for mobile
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}
                        >
                            <Avatar
                                src="https://healthcoachsaiteja.com/wp-content/uploads/2024/11/Sandeep_US-Client-254x300.jpg"
                                size={isMobile ? 70 : 90}
                                radius="50%"
                                style={{
                                    position: "absolute",
                                    top: "7px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    backgroundColor: "white",
                                    objectFit: "cover",
                                }}
                            />

                            <Avatar
                                src="https://healthcoachsaiteja.com/wp-content/uploads/2022/11/girl-in-gym-HZ25B4W-150x150.jpg"
                                size={90}
                                radius="50%"
                                style={{
                                    position: "absolute",
                                    top: "7px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    backgroundColor: "white",
                                    objectFit: "cover",
                                }}
                            />
                            <Text fw={700} size="lg" style={{ color: "yellow", marginTop: isMobile ? 30 : 40, fontFamily: '"Poppins", Sans-serif' }}>

                                Bhavya
                            </Text>
                            <Text size="sm" mb="md" c="gray.3" style={{ fontFamily: '"Poppins", Sans-serif' }}>
                                Production Manager, Sydney
                            </Text>
                            <Text
                                mt="xl"
                                size="md"
                                fz={isMobile ? "14px" : "18px"}
                                style={{
                                    lineHeight: "1.5",
                                    maxWidth: "90%",
                                    margin: "0 auto",
                                    fontFamily: '"Roboto Condensed",Sans-serif',
                                    color: "rgba(255, 255, 255, 0.8)",
                                }}
                            >
                                In 2021, I approached Health Coach Sai Teja with unrecovered ACL injury and it’s consequential unmeasurable parameters. I had to lift my game to bounce back. Right from listening and understanding your targets to his chronological planning has been appealing. His knowledge in human anatomy and nutritional basics is a great addition for his implementation strategy with me. Starting with basic knee rehab- second level rehab- advanced rehab- overall body strengthening to x level- muscle endurance had been challenging but, Sai has made it a joyous process throughout by highlighting the importance of every workout. His teachings and training prepares an individual to sustain longer. Additionally, his soft skills are very engaging. Thank you Sai for being a great help and good friend.
                            </Text>
                            <Text
                                style={{
                                    position: "absolute",
                                    top: "5px",
                                    right: "20px",
                                    fontSize: "50px",
                                    color: "yellow",
                                }}
                            >
                                ❝
                            </Text>
                        </Card>
                    </Carousel.Slide> */}
                </Carousel>
            </Container>
        </BackgroundImage >
    );
};

export default TestimonialCarousel;
