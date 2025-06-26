import React from 'react'
import { Flex, Image } from '@mantine/core'
import Logo from "../assets/yogalogo.png"

const MantinePage = () => {
  return (
    <div style={{ justifyContent: 'center', display: 'flex', width: '100%', }}>
      <div>
        <Flex >

          <Image src={Logo} maw={"15rem"}>

          </Image>

        </Flex>
      </div>
    </div>
  )
}

export default MantinePage
