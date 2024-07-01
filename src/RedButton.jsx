function RedButton(props) {
    return (
        <button
            onClick={e => {
                console.log(props.clickMsg)
            }}
            className="red-button"
        >
            {props.message}
        </button>
    )
}

export default RedButton
