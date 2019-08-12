function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

function App() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = (value) => setCounter(counter + value);
    return (
        <>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Button onClickFunction={incrementCounter} increment={15} />
            <Display message={counter} />
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
);
