import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
    {
        title: 'Widok ogólny',
        path: '/overwiev',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overwiev/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Users1',
                path: '/overwiev/users1',
                icon: <IoIcons.IoIosAlarm />,
            }
        ]
    },
    {
        title: 'Prace domowe',
        path: '/homework',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Nowe',
                path: '/homework/new',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Archiwum',
                path: '/homework/archive',
                icon: <IoIcons.IoIosAlarm />,
            }
        ]
    },
    {
        title: 'Widok ogólny',
        path: '/overwiev',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overwiev/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Users1',
                path: '/overwiev/users1',
                icon: <IoIcons.IoIosAlarm />,
            }
        ]
    }

]