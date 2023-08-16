function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="Arrow-Container-Next">
            <div
                className="NextArrow"
                onClick={onClick}
            />
        </div>
    );
}

export default NextArrow;