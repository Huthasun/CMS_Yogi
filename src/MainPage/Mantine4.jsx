import { AspectRatio, Badge, Button, CardSection, Group, BackgroundImage, Modal, Box, TextInput, NumberInput, Radio, Textarea, Select, MultiSelect } from '@mantine/core';
import { Card, Grid, Footer, Container, Anchor, SimpleGrid, Image, Text, List } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import facebookImage from '../assets/facebook-logo-facebook-icon-transparent-free-png.png';
import Image11 from '../assets/IMG-0069-832x1024.jpg'
import facebookImage1 from '../assets/colored-instagram-logo-new.png';
// import client from '../../../API/api';
import './page.css'
import { MdDone } from 'react-icons/md';
import { ImCross } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { PiWarningFill } from "react-icons/pi";
import Footer1 from './Footer1';
import client from '../API/api';
import Yoga2 from '../assets/yoga2.png'
import Yoga3 from '../assets/yoga3.png'




// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

const Mantine4 = () => {
  const mediumScreen = useMediaQuery("(min-width: 1100px)");
  const largeScreen = useMediaQuery("(min-width: 1440px)");

  const extraLargeScreen = useMediaQuery("(min-width: 1770px)");


  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [loader, setLoader] = useState(false)

  const [successful, setSuccessful] = useState(false)
  const [unsuccessful, setunSuccessful] = useState(false)
  const [emailexist, setEmailExist] = useState(false)
  const [value, setValue] = useState('active');
  const [challenges, setChallenges] = useState([]);
  const [healthissues, sethealthissues] = useState([]);


  const form = useForm({
    initialValues: {
      name: "",
      business_email: "",
      contact_no: "",
      location: "",
      // user_status: value,
      // username: "",
      // category: "",
      age: '',
      gender: '',
      // goal: '',
      challenges: [],
      healthissues: [],
      profession: ''
      // type_of_challange: '',
      // body_type: '',
      // blood_test: '',
      // any_physical_limitations: '',
      // any_concerns: ''

    },

    validate: {
      business_email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      contact_no: (value) => value && /^[6-9]\d{9}$/.test(value) ? null : 'Phone number must be a valid 10-digit number starting with 6-9',
    },

    transformValues: (values) => ({
      name: `${values.name}`,
      business_email: `${values.business_email}`,
      contact_no: `${values.contact_no}`,
      // user_status: `${value}`,
      location: `${values.location}`,
      // username: `${values.business_email}`,
      // category: 'lead',
      age: values.age,
      gender: `${values.gender}`,
      // goal: `${values.goal}`,
      challenges: challenges,
      healthissues: healthissues,
      profession: `${values.profession}`,
      // type_of_challange: `${values.type_of_challange}`,
      // body_type: '',
      // blood_test: '',
      // any_physical_limitations: '',
      // any_concerns: ''

    })

  });

  const handleRegistration = () => {
    if (challenges.length === 0) {
      form.setFieldError('challenges', 'Please select at least one challenge');
      return; // Prevent submission
    } if (healthissues.length === 0) {
      form.setFieldError('healthissues', 'Please select at least one option');
      return; // Prevent submission
    }
    // console.log(form.getTransformedValues());

    setLoader(true);
    client.post("register_user/", form.getTransformedValues())
      .then((resp) => {
        if (resp.data.status === "user_registered_successfully") {
          // notify()

          setTimeout(() => {
            setSuccessful(true)
            setLoader(false)
            close()
            form.reset()
          }, 1000)
        }

        else if (resp.data.status === "failed_to_register") {
          // unsuccessNotify()

          setTimeout(() => {
            setunSuccessful(true)
            setLoader(false)
            close()
            form.reset()

          }, 1000)
        }

        else if (resp.data.status = 'failed') {
          // emailexist()

          setTimeout(() => {
            setEmailExist(true)
            setLoader(false)
            close()
            form.reset()
          }, 1000)
        }

      })

    setTimeout(() => {
      setSuccessful(false);
      setunSuccessful(false)
      setEmailExist(false)
      // setCheckmarkVisible(false); // Hide checkmark after 2 seconds
    }, 5000);
  }


  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length <= 10) {
      form.setFieldValue('contact_no', value);
    }
  };


  return (
    <>

      <Modal opened={successful} onClose={() => setSuccessful(false)} withCloseButton={false} centered
        padding="md"
      >
        <Group align='center'>
          <MdDone className='icon-animation' color='rgb(0, 171, 0)' />
          <p>Submitted Successfully!</p>

        </Group>

      </Modal>

      <Modal opened={unsuccessful} onClose={() => setunSuccessful(false)} withCloseButton={false} centered
        padding="md"
      >
        <Group align='center'>
          <IoMdClose className='icon-animation' color='red' />
          <p>Unsuccessful Submission!</p>

        </Group>
      </Modal>


      <Modal opened={emailexist} onClose={() => setEmailExist(false)} withCloseButton={false} centered
        padding="md"
      >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 12 }}>
          <PiWarningFill className='icon-animation' color='orange' />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Text>Email already exists!</Text>
            <Text>Please enter another email.</Text>
          </div>
        </div>
      </Modal>



      <Modal closeOnClickOutside={false} opened={opened} onClose={close} title="Registration" centered size={isMobile ? "xs" : "md"}>
        <form onSubmit={handleRegistration}>
          <SimpleGrid cols={1}>
            <TextInput

              label="Name"
              name='name'
              placeholder="Enter name"
              required
              {...form.getInputProps('name')}

            />
            <TextInput
              required
              label="Email"
              name='business_email'
              placeholder="user@email.com"

              {...form.getInputProps('business_email')}

            />
            <NumberInput
              placeholder="Your age"
              label="Your age"
              required
              {...form.getInputProps('age')} radius='md'
            />




            <TextInput

              label="Contact No."
              name='contact_no'
              placeholder="Enter Contact No."
              required
              {...form.getInputProps('contact_no')}
              onChange={handleMobileChange}

            />
            <TextInput

              label="Location"
              name='location'
              placeholder="Enter Location"
              required
              {...form.getInputProps('location')}

            />

            <Radio.Group
              name="favoriteFramework"
              label="Gender"

              {...form.getInputProps('gender')} radius='md'
              style={{ color: 'blue' }}
            >
              <Group mt="xs">
                <Radio value="male" label="Male" />
                <Radio value="female" label="Female" />
                <Radio value="other" label="Other" />
              </Group>
            </Radio.Group>

            <TextInput

              label="Profession"
              name='profession'
              placeholder="Enter Profession"
              required
              {...form.getInputProps('profession')}

            />
            {/* 
                  <Textarea maxRows={4} label='Goals' required name='goal' placeholder='Enter here..'
                    {...form.getInputProps('goal')}
                  >
      
                  </Textarea> */}
            {/* <Select
                    required
                    name='how_did_you_learn_about_us'
                    label="What are your current challenges to do fitness consistently?"
                    placeholder="Pick one"
                    searchable
                    nothingFound="No options"
                    data={['Lack of time', 'Where to start and How to Start', 'Not Being Consistent', 'Lack of motivation']}
                    {...form.getInputProps('how_did_you_learn_about_us')}
                  /> */}


            <MultiSelect
              required
              label="What are your current challenges to do fitness consistently?"
              placeholder="Select all that apply"
              searchable
              nothingFound="No options"
              data={[
                'Lack of time',
                'Where to start and How to Start',
                'Not Being Consistent',
                'Lack of motivation',
              ]}
              value={challenges}
              onChange={setChallenges}
            />

            <MultiSelect
              required
              label="Are you Facing any Health Issues (Please mention if Yes)"
              placeholder="Select all that apply"
              searchable
              nothingFound="No options"
              data={[
                'Stree and Anxiety',
                'Back Pain or Neck Pain',
                'Breathing Challenges (Respiratory)',
                'Overweight',
                'Migraine',
                'PCOD / PCOD / Thyroid',
                'Others', 'None',

              ]}
              value={healthissues}
              onChange={sethealthissues}
            />


            {/* <Radio.Group
                    required
                    name='type_of_challange'
                    label="Choose Your Journey"
      
                    {...form.getInputProps('type_of_challange')} radius='md'
                    style={{ color: 'blue' }}
                  >
                    <Group mt="xs">
                      <Radio value="100dayschallenge" label="100 Days Challenge" />
                      <Radio value="longtermjourney" label="Longterm Journey" />
      
                    </Group>
                  </Radio.Group> */}


          </SimpleGrid>
          <Group position="right" mt="md">
            <Button type='submit' loading={loader} bg={'#fe7032'} fullWidth radius='md'>Submit</Button>
          </Group>
        </form>
      </Modal>


      <BackgroundImage
        src="https://t4.ftcdn.net/jpg/13/25/21/53/360_F_1325215320_Cttu4ebE9BgwMuXRg1eq6EpbFJkVSDxE.jpg"
        style={{
          height: isMobile ? 'auto' : '100vh',
          padding: isMobile ? '2rem 0' : '2.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          h="auto"
          align="center"
          justify="center"
          opacity={0.9}
          pb='4rem'
          style={{ padding: isMobile ? '1rem' : 'auto' }}
        >
          <Grid.Col span={12}>
            <Group position="center">
              <SimpleGrid
                cols={isMobile ? 1 : 3}
                spacing={isMobile ? '2rem' : '5rem'}
                m={isMobile ? '1rem' : '0.3rem'}
                pb={isMobile ? '2rem' : '0.9rem'}
                style={{
                  maxWidth: '100%',
                  justifyContent: 'center',
                }}
              >

                <Card
                  shadow="xl"
                  bg="rgb(254, 112, 50)"
                  h="auto"
                  w={isMobile ? '80vw' : '325.33px'}
                  radius="lg"
                  sx={{
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 20px 5px #FBD40B',
                      transform: 'scale(1.05)',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <CardSection>
                    <AspectRatio ratio={9 / 5} >
                      <Image
                        src={Yoga3}
                        width="100%"
                        height='100%'

                      />
                    </AspectRatio>
                  </CardSection>
                  <Text fz="15px" color="#ffffff" fw="500" m="xs" >What can you learn from this Masterclass:</Text>

                  <List style={{ color: 'white' }} fz="14px" m="lg">
                    <List.Item>Secret 1 - Learn 4 Factors to Lead a Happy and Healthy Life</List.Item>
                    <List.Item>Secret 2 - How Breathing Techniques Can Instantly Reduce Your Stress</List.Item>
                    <List.Item>Secret 3 - Learn to Build a Stress-Free Yoga Routine</List.Item>
                    {/* <List.Item>WhatsApp fitness community and challenges given to clients in the community to build synergy and an environment to learn and grow.</List.Item> */}
                  </List>
                </Card>


                <Card
                  shadow="xl"
                  bg="rgb(254, 112, 50)"
                  h="auto"
                  w={isMobile ? '80vw' : '325.33px'}
                  radius="lg"
                  sx={{
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 20px 5px #FBD40B',
                      transform: 'scale(1.05)',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <CardSection>
                    <AspectRatio ratio={9 / 5}>
                      <Image
                        src={Yoga2}
                        width='100%' height="100%"
                        style={{ objectFit: 'cover' }}
                      />
                    </AspectRatio>
                  </CardSection>
                  <Text fz="15px" color="#ffffff" fw="500" m="xs">Challenges we delt</Text>

                  <List style={{ color: 'white' }} fz="14px" m="lg">
                    <List.Item>Postural Imbalances in Working Professionals</List.Item>
                    <List.Item>Lower Back Pain & Sciatica</List.Item>
                    <List.Item>Lifestyle disorders</List.Item>
                    <List.Item>Stress & Anxiety Disorders</List.Item>
                    <List.Item>Limited Flexibility & Mobility</List.Item>
                    <List.Item>Strength & Conditioning for Sports Enthusiasts</List.Item>
                    <List.Item>Fatigue and Lack of Discipline</List.Item>
                    <List.Item>Hormonal Imbalances</List.Item>
                    <List.Item>Clients with Chronic Conditions</List.Item>
                  </List>
                </Card>


                <Card
                  shadow="xl"
                  bg="rgb(254, 112, 50)"
                  h="auto"

                  w={isMobile ? '80vw' : '325.33px'}
                  radius="lg"
                  sx={{
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 20px 5px #FBD40B',
                      transform: 'scale(1.05)',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <CardSection>
                    <AspectRatio ratio={9 / 5}>
                      <Image
                        src="https://peachtreeyoga.com/wp-content/uploads/2016/08/sm-confused-woman-shrug-yoga-mat-dyed-hair-alternative.jpg"
                        width="100%"
                        height='100%'



                      />
                    </AspectRatio>
                  </CardSection>

                  <Text fz="15px" color="#ffffff" fw="500" m="xs" >
                    Have Questions?
                  </Text>
                  <Text fz="14px" m="lg" color='white'>Confused about the right yoga routine for you? </Text>

                  <Text fz="14px" m="lg" color='white'>Want to begin yoga but need direction?</Text>
                  {/* Centering ONLY the Button */}
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: isMobile ? '4rem' : '7rem', marginBottom: isMobile ? '3rem' : 'none' }}>
                    <a href='tel:%20+91%208555983730'>
                      <Button
                        h={isMobile ? '2.5rem' : '3rem'}
                        mt="xs"
                        styles={(theme) => ({
                          root: {
                            backgroundColor: '#FBD40B',
                            color: 'white',
                            padding: isMobile ? '0.3rem 1.5rem' : '0.5rem 2rem',
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: 700,
                            borderRadius: '30px',
                            boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)',
                            transition: 'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
                            backgroundSize: '200%',
                            backgroundImage: 'linear-gradient(90deg, #fe7032,rgb(255, 183, 0), #fe7032)',
                            animation: 'glowAnimation 3s infinite',
                            '&:hover': {
                              backgroundColor: '#FBD40B',
                              boxShadow: '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 165, 0, 0.7)',
                              transform: 'scale(1.05)',
                            },
                          },
                          '@keyframes glowAnimation': {
                            '0%': {
                              backgroundPosition: '-200%',
                            },
                            '100%': {
                              backgroundPosition: '200%',
                            },
                          },
                        })}

                      >
                        Let’s Talk !
                      </Button>
                    </a>

                  </div>
                </Card>


              </SimpleGrid>
            </Group>

          </Grid.Col>

        </Grid>

      </BackgroundImage>
      <Footer1 openModal={open} />
    </>


  )
}

export default Mantine4

