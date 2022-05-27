function Energy(props) {
    const{energy} = props;

    return (
        <div className="energy">
            <span>
                <i
                    className={
                       energy >= 1
                        ? 'fas fa-star'
                        : energy >= 0.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                    }
                />
            </span>
            <span>
                <i
                    className={
                        energy >= 2
                        ? 'fas fa-star'
                        : energy >= 1.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                    }
                />
            </span>
            <span>
                <i
                    className={
                       energy >= 3
                        ? 'fas fa-star'
                        : energy >= 2.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                    }
                />
            </span>
            <span>
                <i
                    className={
                       energy >= 4
                        ? 'fas fa-star'
                        : energy >= 3.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                    }
                />
            </span>
            <span>
                <i
                    className={
                       energy >= 5
                        ? 'fas fa-star'
                        : energy >= 4.5
                        ? 'fas fa-star-half-alt'
                        : 'far fa-star'
                    }
                />
            </span>
            
        </div>
    );


}

export default Energy;
