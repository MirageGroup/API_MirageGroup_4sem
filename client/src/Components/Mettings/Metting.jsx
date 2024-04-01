import { Box, Grid, Text, Button } from "@chakra-ui/react"
import { StarIcon, Icon} from "@chakra-ui/icons"
import { MdGroupWork } from 'react-icons/md'

const MettingComponent = () => {
    return(
        <Box textAlign="center" alignItems="center" p="2%" bg="lightgray">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <Button w="20%" bg="Gainsboro" border="grey solid 1px" borderRadius="1rem" colorScheme="yellow"><StarIcon border="grey"/></Button>
            <Box display="flex"flexDir="column" w="100%">
            <Text>EXEMPLO</Text>
            <Text>EXEMPLO</Text>
            </Box>
            <Button w="20%" bg="Gainsboro" border="grey solid 1px" borderRadius="1rem" colorScheme="yellow"><Icon as={MdGroupWork} w={8} h={8} color='red.500' /></Button>
            <Button w="20%" bg="Gainsboro" border="grey solid 1px" borderRadius="1rem" colorScheme="yellow"><StarIcon border="grey"/></Button>
            <Button w="20%" bg="Gainsboro" border="grey solid 1px" borderRadius="1rem" colorScheme="yellow"><StarIcon border="grey"/></Button>
            </Grid>
        </Box>
    )
}

export default MettingComponent