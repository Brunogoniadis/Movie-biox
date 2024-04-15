import { Link } from 'react-router-dom';
import { PlayButtonWrapper } from './styles';

interface PlayButtonProps {
    id: number;
}

export const PlayButton = ({ id }: PlayButtonProps) => {
    return (
        <PlayButtonWrapper>
            <Link
                key={id}
                to={
                    `/movie/${id}`}>
                <i className="material-icons icon-small">play_arrow</i>
            </Link>
        </PlayButtonWrapper>
    );
};

