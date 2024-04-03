import { Box, Grid, Text, Button } from "@chakra-ui/react"
import { StarIcon, Icon} from "@chakra-ui/icons"
import { AiOutlineTeam, AiOutlineSliders, AiOutlinePlus  } from "react-icons/ai";
import { Progress } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

const MeetingComponent = () => {
    return(
        <Box alignItems="center" p="2%" bg="rgb(101, 110, 110, 0.3)" >
            <Box opacity="1">
            <Grid alignItems="center" templateColumns='repeat(5, 1fr)' >
            <Box alignItems="center" paddingRight="40rem" display="flex" flexDir="Row" gap="30%" w="100%">
                <Button w="20%" borderRadius="1rem"><StarIcon border="grey"/></Button>   
            <Box>
                <Text>EXEMPLO DE SALA</Text>
                <Text>data</Text>
            </Box>
            <Menu closeOnSelect={false}>
            <MenuButton display="flex" flexDir="row" minWidth="100px" alignItems="center" as={Button} colorScheme='gray' border="black 1px solid">
                menu

            </MenuButton>
            <MenuList minWidth='100px'>
                <MenuOptionGroup defaultValue='asc' type='radio'>
                <MenuItemOption value='asc'>Ascending</MenuItemOption>
                <MenuItemOption value='desc'>Descending</MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
            </Menu>
            </Box>
            <Button w="50%" bg="Gainsboro" border="grey solid 1px" borderRadius="1rem" colorScheme="yellow"><AiOutlineTeam /></Button>
            <Button w="50%" bg="Gainsboro" border="grey solid 1px" borderRadius="1rem" colorScheme="yellow"><AiOutlineSliders /></Button>
            <Progress w="60px" value={30} colorScheme='blue' />
            <Button w="50%"  border="grey solid 1px" borderRadius="1rem" colorScheme="yellow"><AiOutlinePlus /></Button>
            </Grid>
            </Box>
        </Box>
    )
}

export default MeetingComponent