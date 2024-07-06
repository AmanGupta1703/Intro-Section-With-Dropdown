import {
  IconTodo,
  IconCalender,
  IconReminders,
  IconPlanning,
  ClientDatabiz,
  ClientAudioPhile,
  ClientMeet,
  ClientMaker,
} from "../images";

export const headerMainNavigation = [
  {
    id: 1,
    text: "Features",
    href: "",
    dropdown: [
      {
        id: 1,
        text: "Todo List",
        href: "/todo-list",
        icon: IconTodo,
      },
      {
        id: 2,
        text: "Calender",
        href: "/calender",
        icon: IconCalender,
      },
      {
        id: 3,
        text: "Reminders",
        href: "/reminders",
        icon: IconReminders,
      },
      {
        id: 4,
        text: "Planning",
        href: "/planning",
        icon: IconPlanning,
      },
    ],
  },
  {
    id: 2,
    text: "Company",
    href: "",
    dropdown: [
      {
        id: 1,
        text: "History",
        href: "/history",
      },
      {
        id: 2,
        text: "Our team",
        href: "/our-team",
      },
      {
        id: 3,
        text: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    id: 3,
    text: "Careers",
    href: "",
    dropdown: [],
  },
  {
    id: 4,
    text: "About",
    href: "",
    dropdown: [],
  },
];

export const clientsImages = [
  {
    text: "Databiz",
    imgSrc: ClientDatabiz,
  },
  {
    text: "AudioPhile",
    imgSrc: ClientAudioPhile,
  },
  {
    text: "Meet",
    imgSrc: ClientMeet,
  },
  {
    text: "Maker",
    imgSrc: ClientMaker,
  },
];
