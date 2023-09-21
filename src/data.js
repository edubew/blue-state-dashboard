import { BiHome, BiBarChartAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineSetting, AiOutlineOrderedList } from "react-icons/ai";
import { SiElement } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { FaWpforms } from "react-icons/fa";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { MdOutlineBackup, MdOutlinePostAdd, MdOutlineProductionQuantityLimits } from "react-icons/md";

export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: BiHome,
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: AiOutlineUser,
            },
        ],
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: PiUsersThreeDuotone,
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: MdOutlineProductionQuantityLimits,
            },
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: AiOutlineOrderedList,
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: MdOutlinePostAdd,
            }
        ],
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: SiElement,
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: MdOutlinePostAdd,
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: FaWpforms,
            },
            {
                id: 4,
                title: "Calender",
                url: "/",
                icon: SlCalender,
            }
        ],
    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: AiOutlineSetting,
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: MdOutlineBackup,
            },
        ],
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: BiBarChartAlt,
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: AiOutlineUser,
            },
        ],
    },
];

export const transactions = [
    {
        id: 1,
        username: "Winnie",
        email: "winnie@gmail.com",
        amount: "3.25",
    },
    {
        id: 2,
        username: "Nikki",
        email: "nikki@gmail.com",
        amount: "5.25",
    },
    {
        id: 3,
        username: "Pam",
        email: "pam@gmail.com",
        amount: "3.25",
    },
    {
        id: 4,
        username: "Dishan",
        email: "dishan@gmail.com",
        amount: "1.25",
    },
    {
        id: 5,
        username: "Davy",
        email: "davy@gmail.com",
        amount: "6.25",
    },
    {
        id: 6,
        username: "Divan",
        email: "divan@gmail.com",
        amount: "0.25",
    },
    {
        id: 7,
        username: "Edube",
        email: "edube@gmail.com",
        amount: "4.25",
    },
];

export const chartBoxUser = {
    color: "#fd1f4a",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
};

export const chartBoxProduct = {
    color: "skyblue",
    title: "Total Bookings",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
        { name: "Sun", products: 400 },
        { name: "Mon", products: 600 },
        { name: "Tue", products: 500 },
        { name: "Wed", products: 700 },
        { name: "Thu", products: 400 },
        { name: "Fri", products: 500 },
        { name: "Sat", products: 450 },
    ],
};

export const chartBoxRevenue = {
    color: "teal",
    title: "Total Revenue",
    number: "$56.238",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 600 },
        { name: "Tue", revenue: 500 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 400 },
        { name: "Fri", revenue: 500 },
        { name: "Sat", revenue: 450 },
    ],
};

export const chartBoxConversion = {
    color: "gold",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 15,
    chartData: [
        { name: "Sun", ratio: 400 },
        { name: "Mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "Fri", ratio: 500 },
        { name: "Sat", ratio: 450 },
    ],
};

export const barChartBoxVisit = {
    color: "#fd1f4a",
    title: "Total Visit",
    dataKey: "visit",
    chartData: [
        { name: "Sun", visit: 4000 },
        { name: "Mon", visit: 3000 },
        { name: "Tue", visit: 2000 },
        { name: "Wed", visit: 7000 },
        { name: "Thu", visit: 4000 },
        { name: "Fri", visit: 5000 },
        { name: "Sat", visit: 4500 },
    ],
};

export const barChartBoxRevenue = {
    color: "#fbbd0d",
    title: "Profit Earned",
    dataKey: "profit",
    chartData: [
        { name: "Sun", profit: 4000 },
        { name: "Mon", profit: 3000 },
        { name: "Tue", profit: 2000 },
        { name: "Wed", profit: 2780 },
        { name: "Thu", profit: 1890 },
        { name: "Fri", profit: 2390 },
        { name: "Sat", profit: 3490 },
    ],
};

export const userRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', title: 'Manager', age: 35, email: 'snow@gmail.com'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', title: 'Director', age: 42, email: 'cersei@gmail.com'},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', title: 'Accountant', age: 45, email: 'jaime@gmail.com'},
    { id: 4, lastName: 'Stark', firstName: 'Arya', title: 'Assistant', age: 16, email: 'arya@gmail.com'},
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', title: 'Marketing', age: 36, email: 'danny@gmail.com'},
];

export const productRows = [
    { 
        id: 1, 
        img: 'https://i.pinimg.com/564x/80/f8/b0/80f8b0f22c6c30b86e9410f1a37780ab.jpg', 
        title: '3 bedroom modern contemporary house', 
        location: 'Mombasa', 
        price: '$800', 
        createdAt: '21.09,2023'
    },
    { 
        id: 2, 
        img: 'https://i.pinimg.com/564x/80/f8/b0/80f8b0f22c6c30b86e9410f1a37780ab.jpg', 
        title: '3 bedroom modern contemporary house', 
        location: 'Mombasa', 
        price: '$800', 
        createdAt: '21.09,2023'
    },
    { 
        id: 3, 
        img: 'https://i.pinimg.com/564x/80/f8/b0/80f8b0f22c6c30b86e9410f1a37780ab.jpg', 
        title: '3 bedroom modern contemporary house', 
        location: 'Mombasa', 
        price: '$800', 
        createdAt: '21.09,2023'
    },
    { 
        id: 4, 
        img: 'https://i.pinimg.com/564x/80/f8/b0/80f8b0f22c6c30b86e9410f1a37780ab.jpg', 
        title: '3 bedroom modern contemporary house', 
        location: 'Mombasa', 
        price: '$800', 
        createdAt: '21.09,2023'
    },
    { 
        id: 5, 
        img: 'https://i.pinimg.com/564x/80/f8/b0/80f8b0f22c6c30b86e9410f1a37780ab.jpg', 
        title: '3 bedroom modern contemporary house', 
        location: 'Mombasa', 
        price: '$800', 
        createdAt: '21.09,2023'
    },
    { 
        id: 6, 
        img: 'https://i.pinimg.com/564x/80/f8/b0/80f8b0f22c6c30b86e9410f1a37780ab.jpg', 
        title: '3 bedroom modern contemporary house', 
        location: 'Mombasa', 
        price: '$800', 
        createdAt: '21.09,2023'
    },
    { 
        id: 7, 
        img: 'https://i.pinimg.com/564x/80/f8/b0/80f8b0f22c6c30b86e9410f1a37780ab.jpg', 
        title: '3 bedroom modern contemporary house', 
        location: 'Mombasa', 
        price: '$800', 
        createdAt: '21.09,2023'
    },
    { 
        id: 9, 
        img: 'https://i.pinimg.com/564x/80/f8/b0/80f8b0f22c6c30b86e9410f1a37780ab.jpg', 
        title: '3 bedroom modern contemporary house', 
        location: 'Mombasa', 
        price: '$800', 
        createdAt: '21.09,2023'
    },  
];