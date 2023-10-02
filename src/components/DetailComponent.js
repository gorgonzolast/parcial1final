import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {FormattedDate} from 'react-intl';

const DetailComponent = ({ rowId }) => {
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/cafes/${rowId}`);
        const data = await response.json();
        setRowData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [rowId]);

  return (
    <div>
      {rowData ? (
        <div>
          <p>{rowData.nombre}</p>
          <p><FormattedDate
            value={new Date(rowData.fecha_cultivo)}
            year='numeric'
            month='long'
            day='numeric'
            weekday='long' 
          /></p>
          <img src={rowData.imagen} alt=""></img>
          <p> <FormattedMessage id="notas" /> </p>
          <p>{rowData.notas}</p>
          <p> <FormattedMessage id="cult" /> </p>
          <p>{rowData.altura } <FormattedMessage id="msnm" /> </p>
          
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default DetailComponent;