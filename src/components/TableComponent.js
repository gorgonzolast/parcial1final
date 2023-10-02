import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const TableComponent = ({ data, onRowClick }) => {
    return (
        <table className="custom-table">
            <thead>
                <tr>
                <th>#</th>
                <th><FormattedMessage id="nombre" /></th>
                <th><FormattedMessage id="tipo" /></th>
                <th><FormattedMessage id="region" /></th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                <tr key={item.id} onClick={() => onRowClick(item.id)}>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.tipo}</td>
                    <td>{item.region}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;