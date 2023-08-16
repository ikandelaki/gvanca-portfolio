function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="Arrow-Container-Prev">
            <div
                className="PrevArrow"
                onClick={onClick}
            />
        </div>
    );
}

export default PrevArrow;