import React from "react";
import { Select, Box } from '@chakra-ui/react'


export function Sort({ onSortChange }) {
    const [type, setType] = React.useState('title')
    const [direction, setDirection] = React.useState('1')

    React.useEffect(() => {
        onSortChange({ type, direction })
    }, [type, direction, onSortChange])


    return <Box display="grid" justifyContent="right">
        <Select w="120px" variant='outline' size="xsm" onChange={event => setType(event.target.value)} >
            <option value="title">Tytuł</option>
            <option value="date">Data</option>

        </Select>
        <Select w="120px" variant='outline' size="xsm" paddingBottom={2} onChange={event => setDirection(event.target.value)}>
            <option value="default">Domyślne</option>
            <option value="1">Rosnąco</option>
            <option value="-1">Malejąco</option>
        </Select>
    </Box>
}

