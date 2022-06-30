import React from "react";
import PropTypes from 'prop-types';
import format from "date-fns/format";
import parseISO from 'date-fns/parseISO';
import { pl } from 'date-fns/locale';
import { Text } from "@chakra-ui/react";


export function ArticleDate({ date }) {

    const parsedDate = parseISO(date)
    const formattedDate = format((parsedDate), 'd MMMM yyyy', {
        locale: pl,
    })

    return <Text textAlign={"right"} marginRight={20}>{formattedDate}</Text>

}

ArticleDate.propTypes = {
    date: PropTypes.PropTypes.string.isRequired
}
