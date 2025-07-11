import React, { useState } from 'react';
import { AppShell, BackgroundImage, Button, Card, Container, Flex, Footer, Text, Group, Radio, TextInput, Modal, Box, NumberInput, Transition, Overlay, SimpleGrid, Textarea, Select, MultiSelect } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
// import client from '../../../API/api';
import './page.css'
// import '../../../../node_modules/react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';
import { MdDone } from 'react-icons/md';
import { ImCross } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { PiWarningFill } from "react-icons/pi";
import client from '../API/api';



const Mantine1 = () => {
  const mediumScreen = useMediaQuery("(min-width: 1100px)");
  const largeScreen = useMediaQuery("(min-width: 1440px)");
  const extraLargeScreen = useMediaQuery("(min-width: 1770px)");

  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 800px)');
  const [loader, setLoader] = useState(false)

  const [successful, setSuccessful] = useState(false)
  const [unsuccessful, setunSuccessful] = useState(false)
  const [emailexist, setEmailExist] = useState(false)
  const [page, setPage] = useState(false)
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




  // const notify = () => {
  //   setPage(true)
  //   toast(
  //     <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
  //       <MdDone className='icon-animation' color='rgb(0, 171, 0)' />
  //       <p>Submitted Successfully!</p>

  //     </div>

  //   );

  // }

  // const unsuccessNotify = () => {
  //   setPage(true)

  //   toast(
  //     <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
  //       <IoMdClose className='icon-animation' color='red' />
  //       <p>Unsuccessful Submission!</p>

  //     </div>

  //   );
  // }

  // const emailExist = () => {
  //   setPage(true)


  //   toast(
  //     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 12 }}>
  //       <PiWarningFill className='icon-animation' color='orange' />
  //       <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  //         <Text>Email already exists!</Text>
  //         <Text>Please enter another email.</Text>
  //       </div>
  //     </div>

  //   );
  // }

  // setTimeout(() => {
  //   setPage(false)
  //   setSuccessful(false);
  //   setunSuccessful(false)
  //   setEmailExist(false)
  // }, 3000)
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length <= 10) {
      form.setFieldValue('contact_no', value);
    }
  };

  return (
    <>
      {/* <Button onClick={() => {
        setSuccessful(true)
      }}>Modal</Button>
      <Button onClick={() => {
        setEmailExist(true)
      }}>UnSuccesful</Button> */}

      {/* <button onClick={emailExist}>Notify!</button> */}
      {/* <div>

        {page && <Overlay>
          <ToastContainer stacked
            position="top-right"
            autoClose={5000}
            hideProgressBar
            // draggable
            theme="light"

          />
        </Overlay>}
      </div> */}
      <Modal opened={successful} onClose={() => setSuccessful(false)} withCloseButton={false} centered
        padding="md"
      >
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
          <MdDone className='icon-animation' color='rgb(0, 171, 0)' />
          <p>Submitted Successfully!</p>

        </div>

      </Modal>

      <Modal opened={unsuccessful} onClose={() => setunSuccessful(false)} withCloseButton={false} centered
        padding="md"
      >
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
          <IoMdClose className='icon-animation' color='red' />
          <p>Unsuccessful Submission!</p>

        </div>
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
              description='Select "None" if no health issues'
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
                'Others', 'None'
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

      {/* <Modal opened ={opened} onClose={close} mr={isMobile? '2rem': "0rem"}>
        hii
      </Modal> */}

      <BackgroundImage
        src="https://plus.unsplash.com/premium_photo-1676815865390-8e3a9336f64b?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000"
        mt="xs"
        // h={isMobile ? "80vh" : "90vh"}
        h='auto'
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Container fluid p={isMobile ? '1rem' : '2rem'}>
          <AppShell
            footer={
              <Footer
                fixed
                height={isMobile ? 60 : 80}
                bg="#2d5128"
                withBorder={false}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: isMobile ? '0 0.5rem' : '0 2rem',
                }}
              >
                <Container
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '1200px',
                  }}
                >
                  {/* Glowing "HURRY UP AND REGISTER" Text */}
                  <Flex direction='column' >
                    <Text
                      sx={{
                        fontFamily: '"Poppins", Sans-serif',
                        background: 'linear-gradient(90deg, #fe7032, #ffffff, #fe7032)',
                        backgroundSize: '200%',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        animation: 'glowAnimation 1.5s infinite',
                        textAlign: isMobile ? 'center' : 'left',
                        '@keyframes glowAnimation': {
                          '0%': { backgroundPosition: '-200%' },
                          '100%': { backgroundPosition: '200%' },
                        },
                      }}
                      fz={isMobile ? '16px' : '28px'}
                      fw={600}
                      ml={isMobile ? '0' : '2rem'}
                    >
                      HURRY UP AND REGISTER
                    </Text>
                    {/* <Text ml={isMobile ? '-1rem' : '2rem'} color='white' style={{ fontfamily: '"Open Sans", Sans-serif', fontSize: isMobile ? '9.5px' : '12px' }}>
                      Designed and Developed by Automac Technologies
                    </Text> */}
                  </Flex>

                  {/* Register Button */}
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
                          boxShadow: '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px #fe7032',
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
                    onClick={() => {
                      open()
                      form.reset()
                    }}
                  >
                    Register Here
                  </Button>


                </Container>

              </Footer>
            }
          >
            {/* Card Section */}
            <Flex mt={isMobile ? '4rem' : '5rem'} mb={isMobile ? '4rem' : '5rem'} justify="center" align="center">
              <Card
                h={isMobile ? '22rem' : '30rem'}
                w={isMobile ? '90vw' : '65rem'}
                bg="#fe7032"
                radius="lg"
                p={isMobile ? '1rem' : '2rem'}
                style={{
                  opacity: '0.8',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{ fontFamily: '"Poppins", Sans-serif', }}
                  fz={isMobile ? '2.2rem' : '3.5rem'}
                  color="white"
                  fw="700"
                  lh="1.4"

                >
                  Stress-Free Yoga Masterclass
                </Text>
                <Text
                  style={{ fontFamily: '"Poppins", Sans-serif' }}
                  fz="20px"
                  color="white"
                  mt="sm"
                >
                  Discover the Secret to lead a Stress-Free Life

                </Text>
                <Text className='yoga-register-text'
                  component="a"
                  onClick={() => {
                    open()
                    form.reset()
                  }}
                  color="dark"
                  fz="18px"
                  fw={600}
                >
                  Register Here
                </Text>
              </Card>
            </Flex>
          </AppShell>
        </Container>
      </BackgroundImage>
    </>
  );
};

export default Mantine1;
