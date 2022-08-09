import { Component } from "react";

export default class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 0
        }
       // this.handleImageClick = this.handleImageClick.bind(this);
    }
    static defaultProps = {
          images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    }

    handleImageClick = (event) => {
        console.log(this);
        this.setState({
            active: +event.target.dataset.index,
        });
    }

    render() {
        const {active} = this.state;
        const {images} = this.props;
        return (
            <div className="carousel">
            <img src={images[active]} alt="animal" />
            <div className="carousel-smaller">
            {images.map((photo, index) => (
                  // eslint-disable-next-line
                <img
                key={photo}
                src={photo}
                onClick={this.handleImageClick}
                data-index={index}
                className={index === active ? "active" : ""}
                alt = "animal thumbnail"
                />
            ))}
            </div>
        </div>
        )
    }
}