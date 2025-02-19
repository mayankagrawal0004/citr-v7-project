import Carousel from "./Carousel";
import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true,showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false}, json.pets[0]));
  }

  toggleModal = () => this.setState({showModal: !this.state.showModal});

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button onClick={this.toggleModal} style={{backgroundColor: this.props.theme}}>Adopt {name}</button>
          <p>{description}</p>
          
      {showModal? (
        <Modal>
            <div>
                <h1> Do you want to adopt {name}?</h1>
                <div className="buttons">
                <a href="https://bit.ly/pet-adopt">Yes</a>
                <button onClick={this.toggleModal}>No</button>
                </div>
            </div>
        </Modal>):null
        }
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  const [theme] = useContext(ThemeContext);
  return (
    <ErrorBoundary>
      <Details theme={theme} params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;