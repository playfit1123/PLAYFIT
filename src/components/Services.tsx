import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer ,FaFutbol , FaHandshake , FaComment , FaCubes } from 'react-icons/fa';
import Title from './Title';

interface Service {
    icon: JSX.Element | string;
    title: string;
    info: string;
}

interface IStateServices {
    services: Service[];
}

export default class Services extends Component<{}, IStateServices> {

    public readonly state: Readonly<IStateServices> = {
        services: [
            {
                icon: <FaFutbol />,
                title: "brand portfollio",
                info: "A belief that you can play when you want...where you want...how you want, and not have to suffer the agony of wait. A belief to create a world where you can lose yourself and yet rediscover yourself, where you can be both the victor and the vanquished and laugh at being both"
            },
            {
                icon: <FaHandshake />,
                title: "User Meetups",
                info: " We warmly welcome you to Play-Fit, your singular destination for sports, fitness, fun and all things recreational. Come, relive those cherished childhood moments when you exchanged high fives or wept as one for a loss. Time to get your lovable varsity jersey out and give your neighbour a shout or go challenge your colleague...better still make a new friend. Get Addicted to Play...and create your own happily ever after!"
            },
            {
                icon: <FaComment />,
                title: "Play Fit Academy",
                info: "The Company has setup Play Fit Academy, a professional sports academy to impart high-quality coaching to children and adults interested in learning various sports. Currently, Netplay Academy offers coaching programs for Basketball, Table Tennis, Squash, Football and Netplay Kiddies (multi-sport program for 3-8-year-olds). The program is delivered through trained and certified coaches at Playfit and other locations such as schools and residential communities."
            },
            {
                icon: <FaCubes />,
                title: "Corporate Outings",
                info: "Playfit Corporate Team Sports Offerings: We have designed and delivered on a series of sporting challenges, group initiatives, and leadership exercises that are designed to challenge and stimulate both the mind and the body."
            },
        ]
    }

    public render() {
        const { services } = this.state;
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {services.map((item: Service, index: number) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
