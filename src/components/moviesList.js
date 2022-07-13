import { Container, Button, Col, Row, Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { actions } from "../redux/actions";
import MovieItem from "./movieItem";
import MovieModal from "./MovieModal";
import './style.css'

const mapStateToProps = (state) => ({
  moviesToView: state.moviesReducer.moviesToView,
  modalShow: state.moviesReducer.modalShow,
  currentMovieToModal: state.moviesReducer.currentMovieToModal
})
const mapDispatchToProps = (dispatch) => {
  return {
    getTop10Movies: () => dispatch(actions.getTop10Movies()),
    setModalShow: (showOrHide) => dispatch(actions.setModalShow(showOrHide)),
    setCurrentMovieToModal: (currentMovie) => dispatch(actions.setCurrentMovieToModal(currentMovie)),
    setSearchMovie: (value) => dispatch(actions.searchMovie(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(function MoviesList(props) {
  const { moviesToView, getTop10Movies, setModalShow, modalShow, setCurrentMovieToModal, setSearchMovie, currentMovieToModal } = props;
  const searchInput = useRef('');
  const [validateSearch, setValidateSearch] = useState(false);

  useEffect(() => {
    getTop10Movies();
  }, []);
  const searchMovie = () => {
    let valueSearchInput = searchInput.current.value
    if (valueSearchInput !== '') {
      setValidateSearch(false)
      setSearchMovie(valueSearchInput);
    } else {
      setValidateSearch(true)
    }
  }
  return (
    <Container>
      <h2 className="my-5 header-movies">Top 10 Movies</h2>
      <Row className="search-movies">
        <Col xs='3'>
          <Form.Control
            type="text"
            id="inputSearch"
            aria-describedby="passwordHelpBlock"
            ref={searchInput}
          />
        </Col>
        <Col xs='2'><Button variant="secondary" onClick={() => searchMovie()}>Search</Button>{' '}</Col>
      </Row>
      <br/>

      {validateSearch && <p className="validation-input">Please enter a search word</p>}

      <Row>
        {Array.isArray(moviesToView) && moviesToView?.map((movie, key) => {
          return (
            <Col>
              <MovieItem
                movie={movie}
                key={key}
                setModalShow={(showOrHide) => setModalShow(showOrHide)}
                setCurrentMovieToModal={(currentMovie) => setCurrentMovieToModal(currentMovie)}
              />
            </Col>
          );
        })}
      </Row>
      <MovieModal
        modalShow={modalShow}
        setModalShow={() => setModalShow()}
        currentMovieToModal={currentMovieToModal}
      />
    </Container>
  );
}
)
