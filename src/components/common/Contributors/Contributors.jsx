import { useMemo } from 'react';

import faker from '@faker-js/faker';

import Box from '@mui/material/Box';

import AutoSizer from '../AutoSizer';

export const Contributors = () => {
    const authors = useMemo(() => Array(1000).fill('').map(() => faker.name.findName()).join(', '), []);
    return (
        <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            fontSize: 8,
            textAlign: 'justify',
        }}>
            <AutoSizer>
                {({height, width}) => (
                    <Box height={height} width={width}>
                        {authors}
                    </Box>
                )}
            </AutoSizer>
        </Box>
    );
};

export default Contributors;
