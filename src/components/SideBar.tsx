import { subtle } from 'crypto'
import Link from 'next/link'
import React from 'react'
import Accordion from './Accordion'
// type Props = {
//     sub:Sub
// }
// const SideBar = ({ sub }:Props) => {

const SideBar = () => {
    return (
        <div className='mobile-size:hidden  w-72 overflow-scroll h-screen bg-gray-800'>
            <p className='p-3 text-bold text-gray-400 border-b-2 border-gray-600'>
                <Link href='/' className='hover:cursor-pointer'>
                    Claculate anything
                </Link>
            </p>
            {sideNavItems.map((item, index) => (
                <Accordion key={index} title={item.title} link={item.link} subItems={item.subItems} />
            ))}
        </div>
    )
}

const sideNavItems = [
    {
        title: 'weight',
        link: '/',
        subItems: [
            {
                title: 'kg ⇨ g',
                link: '/weight/kgg',
                subItems: [],
            },
            {
                title: 'kg ⇨ mg',
                link: '/weight/kgmg',
                subItems: [],
            },
            {
                title: 'kg ⇨ oz',
                link: '/weight/kgoz',
                subItems: [],
            },
            {
                title: 'kg ⇨ lb',
                link: '/weight/kglb',
                subItems: [],
            },
            {
                title: 'kg ⇨ gr',
                link: '/weight/kggr',
                subItems: [],
            },
            {
                title: 'oz ⇨ mg',
                link: '/weight/ozmg',
                subItems: [],
            },
            {
                title: 'oz ⇨ g',
                link: '/weight/ozg',
                subItems: [],
            },
            {
                title: 'oz ⇨ kg',
                link: '/weight/ozkg',
                subItems: [],
            },
            {
                title: 'oz ⇨ lb',
                link: '/weight/ozlb',
                subItems: [],
            },
            {
                title: 'oz ⇨ gr',
                link: '/weight/ozgr',
                subItems: [],
            },


        ]
    },
    {
        id: 200,
        title: 'length',
        link: '/',
        subItems: [

        ]
    },

]

export default SideBar
