function Button() {
    //useState():
    //a)state object(getter)
    //b)updater function(setter)
    const [counter, setCounter] = useState(0);//useState is a hook
    return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}

ReactDOM.render(
    <Button />,
    document.getElementById('mountNode'),
);
