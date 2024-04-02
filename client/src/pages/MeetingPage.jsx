import React from "react"
import { Box,
    Input, Button, Avatar,  WrapItem, Grid, InputGroup, InputLeftElement, Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'

import { BellIcon, SearchIcon} from '@chakra-ui/icons'
import MettingComponent from "../Components/Meetings/Meeting"



const MeetingPage = () => {
    return (
    <Box>
        <Box position="relative" w="100%" display="flex" flexDir="column" >
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <Box position="absolute" left="5%" top="4rem" w="30%" > 
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input type="text" variant='filled' placeholder='Search' />
            </InputGroup>
            </Box>
            <Box position="absolute" left="40%" top="4rem" w="20%"> 
                <Input type="date" variant='filled' placeholder='Filled' />
            </Box>
            <Box position="absolute" right="10rem" top="2rem">
                <Button colorScheme='yellow' variant='solid'>
                    <BellIcon/>
                </Button>
            </Box>
            <Box position="absolute" right="5rem" top="2rem" >
            <Button colorScheme='yellow' variant='solid'>
            <WrapItem>  
                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
            </WrapItem>
            </Button>
            </Box>
            </Grid>
        </Box>
            <Box ml="5%" display="flex" justifyContent="center" flexDir="column" bg='' mt="8rem">
                <Box fontSize="x-large" m="10px 10px 20px 10px">
                Mettings
                </Box>
                    <Tabs w="95%">
                        <TabList gap={12} >
                            <Tab>Upcoming</Tab>
                            <Tab>Past</Tab>
                            <Tab>Archived</Tab>
                        </TabList>
        
                        <TabPanels>
                            <TabPanel bg="f1f1f1">
                                <p><MettingComponent/></p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    )
}

export default MeetingPage;