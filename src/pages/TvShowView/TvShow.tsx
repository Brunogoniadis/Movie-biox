import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TVShowData, getTVShowById } from '../../services/getTvShowById';
import { TvShowScreen } from './styles';
import { NoteCalc } from '../../components/NoteCalc/NoteCalc';
import { getTVShowRelacioned, TVShowDataRelacioned } from '../../services/getTVShowRelacioned';
import Carousel from '../../components/Carousel/Carousel';

interface IuseParams {
  id: string | undefined;
  [key: string]: string | undefined;
}

export const TvShow = () => {
  const { id } = useParams<IuseParams>();
  const [tvShow, setTvShow] = useState<TVShowData | null>(null);
  const [tvShowsRelacioned, setTvShowsRelacioned] = useState<TVShowDataRelacioned[]>([]);

  useEffect(() => {
    const fetchTvShow = async () => {
      const tvShowData = await getTVShowById(id);
      setTvShow(tvShowData);
    };
    const fetchRelacionedTvShows = async () => {
      const relacionedTvShows = await getTVShowRelacioned(id);
      setTvShowsRelacioned(relacionedTvShows);
    };
    fetchTvShow();

    fetchRelacionedTvShows();
  }, [id]);

  console.log('tvShowsRelacioned', tvShowsRelacioned);

  return (
    <TvShowScreen
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${tvShow?.backdrop_path})`
      }}
    >
      <div className="mainTvShowWrapper">
        <div className="TvShowdetails">
          <h2 className="movietitle">{tvShow?.name}</h2>
          <p className="tvDetail"
            style={{ height: '90px' }}
          >{tvShow?.overview}</p>
          <p className="tvDetail">Release Date: {tvShow?.first_air_date}</p>
          <p className="tvDetail">Number of Sessions: {tvShow?.number_of_seasons}</p>
          <p className="tvDetail">Number of Episodes: {tvShow?.number_of_episodes}</p>
          <p className="tvDetail">Average Vote: {tvShow?.vote_average}</p>
          <NoteCalc noteAverage={tvShow?.vote_average} />
        </div>
      </div>
      <div className="caroselWrapper">
        <Carousel typeOfStyle={'min'} data={tvShowsRelacioned} />
      </div>
      <div className="bottomblur"></div>
      <div className="leftblur"></div>
      <div className="overblur"></div>
    </TvShowScreen>
  );
}
