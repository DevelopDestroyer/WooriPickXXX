import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React from 'react';

const HomePage: React.FC = () => {
    // const [currentPage, setCurrentPage] = useState<>()

    return (
        <>
            <BottomNavigation>
                <BottomNavigationAction label="Recents" value="recents" />
                <BottomNavigationAction label="Favorites" value="favorites" />
                <BottomNavigationAction label="Nearby" value="nearby" />
                <BottomNavigationAction label="Folder" value="folder" />
            </BottomNavigation>
        </>
    );
};

export default HomePage;
