

function List({ list1,list2,list3,list4}){
    return(
    <ul>
        <li>{list1} </li>
        <li>{list2} </li>
        <li>{list3} </li>
        <li>{list4} </li>
    </ul>
)}

function Heading( {title} ){
    return (
        <h1>{title}</h1>
        
)}

export {List, Heading}