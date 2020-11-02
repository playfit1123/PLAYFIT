import React from 'react';
import Cover from '../components/Cover';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Cover>
                <Banner 
                title="discover"
                subtitle="venues,events,deals & more"
                >
                <Link to="/rooms" className="btn-primary">our Enimities</Link>
                </Banner>
            </Cover>
            <Services/>
            <FeaturedRooms />
        </React.Fragment>
    )
}

export default Home
