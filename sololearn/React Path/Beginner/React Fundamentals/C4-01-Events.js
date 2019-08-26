
function Clicker({ handleClick }) {
    return (
        <div>
            <button onClick={e => handleClick('A')}>A</button>
            <button onClick={e => handleClick('B')}>B</button>
            <button onClick={e => handleClick('C')}>C</button>
        </div>
    );
}

ReactDOM.render(<Clicker handleClick={letter => console.log(`${letter} clicked !`)} />,
    document.getElementById('root'));


// function Clicker(props) {
//     return (
//         <div>
//             <button onClick={e => props.handleClick('A')}>A</button>
//             <button onClick={e => props.handleClick('B')}>B</button>
//             <button onClick={e => props.handleClick('C')}>C</button>
//         </div>
//     );
// }

// ReactDOM.render(<Clicker handleClick={letter => console.log(`${letter} clicked !`)} />, 
//     document.getElementById('root'));
