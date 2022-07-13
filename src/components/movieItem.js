import { Card, Button } from 'react-bootstrap'


function MovieItem(props) {
  const { movie, setModalShow, setCurrentMovieToModal } = props;

  const showCurrentMovieInModal = (movie) =>{
    setModalShow(true);
    setCurrentMovieToModal(movie);
  }
  if (movie)
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
              {movie.Plot}
            </Card.Text>
            <Card.Text>
              {movie.imdbRating}
            </Card.Text>
            <Button variant="secondary" onClick={()=>showCurrentMovieInModal(movie)}>Show in modal</Button>
          </Card.Body>
        </Card>
    );
}
export default MovieItem;


