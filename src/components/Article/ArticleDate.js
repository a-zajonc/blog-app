import React from "react";
import PropTypes from 'prop-types';
import format from "date-fns/format";
import parseISO from 'date-fns/parseISO';
import { pl } from 'date-fns/locale'


export function ArticleDate({ date }) {

    const parsedDate = parseISO(date)
    const formattedDate = format((parsedDate), 'd MMMM yyyy', {
        locale: pl,
    })

    return <div>{formattedDate}</div>

}

ArticleDate.propTypes = {
    date: PropTypes.PropTypes.string.isRequired
}
