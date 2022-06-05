import './Counter.css';

function Counter(props) {
    
    return (
        <div className='counter'>
            <p className="title">
                {props.title}
            </p>
            <h1 className='value'>
                { props.valueHandler(props.value) }
            </h1>
        </div>
    );
}

export default Counter;