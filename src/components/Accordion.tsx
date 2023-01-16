import Link from "next/link"
import React, { useState, useRef } from "react"
type AccordionProps = {
    title: string
    subItems: {
        title: string
        link: string
    }[]
    link: string
}
const Accordion = ({ title, link, subItems }: AccordionProps) => {
    const [isOpened, setOpened] = useState<boolean>(false)
    const [height, setHeight] = useState<string>("0px")
    const contentElement = useRef<any>(null)

    const HandleOpening = () => {
        setOpened(!isOpened)
        setHeight(!isOpened ? `${contentElement.current?.scrollHeight}px` : "0px")
    }
    return (
        <div onClick={HandleOpening} className="hover:cursor-pointer">
            <div className={"bg-gray-800 p-2 flex justify-between text-white hover:bg-gray-700"}>
                <h4>{title}</h4>
                {subItems.length != 0 ? isOpened ? '>' : '=' : ''}
            </div>
            <div
                ref={contentElement}
                style={{ height: height }}
                className="bg-gray-800 overflow-hidden text-white transition-all duration-200"
            >

                {subItems.map((item, index) => (
                    <Link key={index} href={item.link}>
                        <div className="pl-10 py-2 hover:bg-gray-700" key={index}>{item.title}</div>
                    </Link>
                ))}
                {/* <p className="p-4">{subItems.map((item, idx) => (
                    <div key={idx} >{item.title}</div>
                ))}</p> */}
            </div>
        </div >
    )
}

export default Accordion
