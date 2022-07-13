import { Button, Modal } from "react-bootstrap";
import './style.css'


function MovieModal(props) {
  const { modalShow, setModalShow, currentMovieToModal } = props;
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {currentMovieToModal.Title}<br />
            <img className="img-modal" src={currentMovieToModal.Poster} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Writer: {currentMovieToModal.Writer}</h4>
          <p>
            {currentMovieToModal.Plot && <div><p className="p-modal">Plot:</p> {currentMovieToModal.Plot}</div>}
            {currentMovieToModal.Language && <div><p className="p-modal">Language:</p> {currentMovieToModal.Language}</div>}
            {currentMovieToModal.Year && <div><p className="p-modal">Year:</p> {currentMovieToModal.Year}</div>}
            {currentMovieToModal.Country && <div><p className="p-modal">Country: </p>{currentMovieToModal.Country}</div>}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={setModalShow}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieModal;
