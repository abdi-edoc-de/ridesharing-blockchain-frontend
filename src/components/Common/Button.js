const Button = ({ title, onClick }) => {
    return (
        <div>
            <div className="btn" onClick={onClick}>
                {title}
            </div>
        </div>
    )
}

export default Button
