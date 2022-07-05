import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'


export function BackButton() {
    return <Breadcrumb padding={1} fontSize="sm">
        <BreadcrumbItem>
            <BreadcrumbLink href='/'>Strona główna</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink href='/articles'>Lista artykułów</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Artykuł</BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
}