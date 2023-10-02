import React, { useState, useEffect } from 'react';
import TableComponent from './TableComponent';
import DetailComponent from './DetailComponent';


export default function CajaDisplay(){
  const [login, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleRowClick = (rowId) => {
    setSelectedRowId(rowId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  

    const authApiEndpoint = 'http://localhost:3001/login/';

    try {
      const response = await fetch(authApiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      if (response.ok) {
        // Authentication successful
        setIsAuthenticated(true);
      } else {
        // Authentication failed
        setIsAuthenticated(false);
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  useEffect(() => {
    const dataApiEndpoint = 'http://localhost:3001/cafes';

    const fetchData = async () => {
      try {
        const response = await fetch(dataApiEndpoint);
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setData(result);
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data only if authentication is successful
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  return (
    <div className="cajadisplay-cont">
        {isAuthenticated ? (
            <div className='info-cont'>
                <TableComponent data={data} onRowClick={handleRowClick} />
                {selectedRowId && <DetailComponent rowId={selectedRowId} />}
            </div>
        )   	  
        : 
        (   
            <div>
                <div className="subtitle-cont">
                    <div className="subtitle"> Inicio de sesión </div>
                </div>
                <div className="light-red-frame">
                    <form className="form" onSubmit={handleSubmit}>
                      <div>
                        <label> Nombre de usuario </label>
                      </div>
                      <input className="rectangle4" type="text" value={login} onChange={handleUsernameChange}></input>
                      <div>
                        <label> Contraseña </label>
                      </div>
                        <input className="rectangle5" type="password" value={password} onChange={handlePasswordChange}></input>

                      <div>
                        <div className="rectangle6">
                        <button className="ingresar" type="submit">Ingresar</button>
                        </div>
                        <div className="rectangle7">
                        <button className="cancelar">Cancelar</button>
                        </div>
                      </div>
                        
                    </form>
                </div>
            </div>
            
        )}    
    </div>
  )
}