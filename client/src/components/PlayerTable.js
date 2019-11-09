import React, { useState } from 'react';
import NavBar from './NavBar.js';
import useDarkMode from '../hooks/useDarkMode.js';
import { Table } from 'semantic-ui-react';

const PlayerTable = ({playerList, handleSort, column, direction}) => {

    const [darkMode, setDarkMode] = useDarkMode('darkMode', false);
    const [tableColor, setTableColor] = useState('orange')
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
        setTableColor(tableColor === 'orange' ? 'black' : 'orange')
    };

    return(
        <>
        <NavBar toggleMode={toggleMode} darkMode={darkMode} />
        <Table sortable striped columns={3} color={tableColor} inverted>
            <Table.Header>
                <Table.Row textAlign='center'>
                    <Table.HeaderCell
                        sorted={column === 'name' ? direction : null}
                        onClick={handleSort('name')}
                        className='hover'
                    >
                        Player Name
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'country' ? direction : null}
                        onClick={handleSort('country')}
                    >
                        Country
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'searches' ? direction : null}
                        onClick={handleSort('searches')}
                    >
                        # Of Searches
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {playerList.map(player => {
                    return(
                        <Table.Row key={player.id} textAlign='center'>
                            <Table.Cell>{player.name}</Table.Cell>
                            <Table.Cell>{player.country}</Table.Cell>
                            <Table.Cell>{player.searches}</Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    </>
    )
}

export default PlayerTable