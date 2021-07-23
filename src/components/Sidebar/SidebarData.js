import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from "react-icons/bs"

export const SidebarData = [
  
  {
    title: 'Dashboard',
   
    icon: <BsIcons.BsCircleFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Home 1',
        path: '/',
        icon: <BsIcons.BsCircleFill/>,
        cName: 'sub-nav'
      },
      {
        title: 'Home 2',
        path: '/home2',
        icon: <BsIcons.BsCircleFill />,
        cName: 'sub-nav'
      },
      {
        title: 'Home 3',
        path: '/home3',
        icon: <BsIcons.BsCircleFill/>
      }
      ,
      {
        title: 'Home 4',
        path: '/home4',
        icon: <BsIcons.BsCircleFill/>
      }
    ]
  },
  {
    title: 'Exhibition',
    icon: <BsIcons.BsCircleFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Exhibition 1',
        path: '/exhibition',
        icon: <BsIcons.BsCircleFill/>,
        cName: 'sub-nav'
      },
      {
        title: 'Exhibition 2',
        path: '/exhibition2',
        icon: <BsIcons.BsCircleFill />,
        cName: 'sub-nav'
      },
      {
        title: 'Exhibition 3',
        path: '/exhibition3',
        icon: <BsIcons.BsCircleFill/>
      }     
    ]
  },
  {
    title: 'Aritist',
    path: '/artist',
    icon: <BsIcons.BsCircleFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Aritist 1',
        path: '/artist01',
        icon: <BsIcons.BsCircleFill/>,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Artwork',
    path: '/artwork',
    icon: <IoIcons.IoIosBrush />
  }
  
];