import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';

import { MenuSelect } from 'react-instantsearch-dom';

const Filters = () => {
    return (
        <div className="menuSelect">
            <p>Filter by</p>
            <div className="filterMenuSelect">
                <MenuSelect
                    attribute="default_category_value"
                    limit={20}
                    translations={{
                        seeAllOption: 'Categories',
                    }}
                /><FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    )
};


export default Filters;