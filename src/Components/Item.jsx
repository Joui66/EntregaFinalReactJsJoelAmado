import React, { useContext } from 'react'
import { Card, CardHeader, CardFooter, Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export const Item = ({ name, id, image }) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Heading size='md'>{name}</Heading>
                </CardHeader>
                    <img src={image} width="150" height="80" alt={`imagen de ${name}`}/>
                <CardFooter>
                    <Button>
                        <Link to={`/item/${id}`}>
                            Detalles
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </>

    )
}