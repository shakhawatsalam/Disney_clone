import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUserName } from '../features/user/userSlice';
import { db } from '../firebase';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import { Recommends } from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from 'firebase/firestore';
import { useState } from 'react';
import { setMovies } from '../features/movie/movieSlice';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userName = useSelector(selectUserName);
  const [movies, setMoviess] = useState([]);
  // const [recommends, setRecommends] = useState([]);
  // let newDisneys = [];
  // let originals = [];
  // let trending = [];
  useEffect(() => {
    if (!userName) {
      navigate('/')
    }
  }, [userName])

  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = () => {
    const movieCollectionRef = collection(db, "movies")
    getDocs(movieCollectionRef).then(res => {
      // console.log(res.docs.data())
      const mov = res.docs.map(doc => ({
        data: doc.data(),
        id: doc.id,
      }))
      setMoviess(mov)
    })
  }
  // console.log(movies)
  useEffect(() => {
    const recommends = movies.filter(movie => movie.data.type === "recommend");
    const newDisneys = movies.filter(movie => movie.data.type === "new");
    const originals = movies.filter(movie => movie.data.type === "original");
    const trending = movies.filter(movie => movie.data.type === "trending");

    dispatch(setMovies({
      recommend: recommends,
      newDisney: newDisneys,
      original: originals,
      trending: trending,
    }));

  }, [movies]);


  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
      content: '';
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;

  }
`;



export default Home
