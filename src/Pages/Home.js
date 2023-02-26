import React from 'react';
import Banner from '../Components/Banner/Banner';
import ImagesLayout from '../Components/Images Layout/ImagesLayout';
import Navbar from '../Components/Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <ImagesLayout />
        </div>
    );
};

export default Home;