import { Box, Grid, Text, Button } from "@chakra-ui/react"
import { StarIcon, Icon} from "@chakra-ui/icons"
import { AiOutlineTeam } from "react-icons/ai";
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
        <Box alignItems="center" p="2%" bg="lightgray">
            <Grid alignItems="center" templateColumns='repeat(4, 1fr)' >
            <Box paddingRight="40rem" display="flex" flexDir="Row" gap="30%" w="100%">
                <Button w="20%" bg="lightyellow" border="solid 1px" borderRadius="1rem" colorScheme="yellow"><StarIcon border="grey"/></Button>   
            <Box>
                <Text>EXEMPLO DE SALA</Text>
                <Text>exemplo</Text>
            </Box>
            <Menu closeOnSelect={false}>
            <MenuButton height="60%" w="40%" alignItems="center" as={Button} colorScheme='yellow'>
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
            <Button w="30%" bg="Gainsboro" border="grey solid 1px" borderRadius="1rem" colorScheme="yellow"><AiOutlineTeam /></Button>
            <Button w="30%" bg="Gainsboro" border="grey solid 1px" borderRadius="1rem" colorScheme="yellow"><StarIcon border="grey"/></Button>
            <Button w="30%" bg="Gainsboro" border="grey solid 1px" borderRadius="1rem" colorScheme="yellow"><StarIcon border="grey"/></Button>
            </Grid>
        </Box>
    )
}

export default MeetingComponent