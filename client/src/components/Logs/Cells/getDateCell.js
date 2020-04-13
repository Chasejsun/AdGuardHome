import React from 'react';

import { formatTime, formatDateTime } from '../../../helpers/helpers';
import { DEFAULT_SHORT_DATE_FORMAT_OPTIONS, LONG_TIME_FORMAT } from '../../../helpers/constants';

const getDateCell = isDetailed =>
    function cell(row) {
        const { value } = row;

        if (!value) {
            return '–';
        }

        return (
            <div className="logs__cell">
                <div className="logs__time">
                    {formatTime(value, LONG_TIME_FORMAT)}
                </div>
                {isDetailed && (
                    <div className="logs__date">
                        {formatDateTime(value, DEFAULT_SHORT_DATE_FORMAT_OPTIONS)}
                    </div>
                )}
            </div>
        );
    };

export default getDateCell;
