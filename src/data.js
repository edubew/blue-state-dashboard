import { BiHome, BiBarChartAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineSetting, AiOutlineOrderedList } from "react-icons/ai";
import { SiElement } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { FaWpforms } from "react-icons/fa";
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
                icon: AiOutlineUser,
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
]