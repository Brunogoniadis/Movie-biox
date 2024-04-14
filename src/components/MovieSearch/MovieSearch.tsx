import { Link } from 'react-router-dom';
import { NoteCalc } from '../NoteCalc/NoteCalc';
import { MovieSearchWrapper } from './styles';

interface MovieProps {
    title: string;
    backdrop_path: string | undefined;
    poster_path: string | undefined;
    vote_average: number;
    id: number;
}

export const MovieSearch = ({ title, backdrop_path, poster_path, vote_average, id }: MovieProps) => {

    console.log('poster_path', backdrop_path)

    return (
        <Link to={`/movie/${id}`} key={id}>
            <MovieSearchWrapper
                background={`url(https://image.tmdb.org/t/p/original/${backdrop_path || poster_path})`}
            >
                <p>{title}</p>

                <div className='starContainer'>
                    <NoteCalc typeOfStyle='min' noteAverage={vote_average} />
                </div>

            </MovieSearchWrapper>
        </Link>
    );
};
