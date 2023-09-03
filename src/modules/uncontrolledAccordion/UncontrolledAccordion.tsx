import React, {useState} from 'react';

type  AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props:AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

       return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
       )
}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h1 onClick={props.onClick}>{props.title}</h1>
        </div>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;