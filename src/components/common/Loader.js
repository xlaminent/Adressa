const Loader = ({message}) => {
    return (
        <div className="loader">
            <span className="loader__circle"></span>
            <p>{message}</p>
        </div>
    )
}

export default Loader;