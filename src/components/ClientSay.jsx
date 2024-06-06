export const ClientSay = {
    getClientSayData() {
        return [
            {
                id: 1,
                image: "./person.svg",
                name: "Wanjiku chanice",
                disc: "The platform has helped me connect with a wider range of potential clients and partners. I've been able to build new relationships and expand my network.",
            },
            {
                id: 2,
                image: "/person.svg",
                name: "Asanga kevin",
                disc: "I'm grateful for the exclusive partnership opportunities that I've been able to access through the platform. These partnerships have helped me take my business to the next level.",
            },
            {
                id: 3,
                image: "/person.svg",
                name: "Mr. Tennee",
                disc: "The platform has provided me with access to valuable tools and resources that have helped me grow my business. I'm confident that I'll continue to see success in the future.",
            },
            {
                id: 4,
                image: "/person.svg",
                name: "duke karanja",
                disc: "I've been using this platform for a while now and I'm really impressed with the results. I've been able to bring in new clients and grow my business significantly.",
            },
        ];
    },
    GetClientSay() {
        return Promise.resolve(this.getClientSayData().slice(0, 10));
    },
};
