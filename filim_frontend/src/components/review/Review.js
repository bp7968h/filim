import React, { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "./ReviewForm";

const Review = ({ getMovieData, movie, reviews, setReviews }) => {
  const refText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const rev = refText.current;

    try {
        const response = await api.post('/api/v1/reviews', {
            reviewBody: rev.value,
            imdbId: movieId
        })
    
        const updatedReviews = [...reviews, {body: rev.value}];
        rev.value = "";
        setReviews(updatedReviews);
    } catch (e) {
        console.log(e);
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews for {movie?.title}</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt={movie?.title} style={{maxHeight: '75vh'}} />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    labelText="Write a Review!"
                    handleSubmit={addReview}
                    refText={refText}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <React.Fragment key={movie.imdbId}>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </React.Fragment>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Review;
