import { useEffect, useState } from 'react';
import { NoteWrapper } from './styles';

interface IStarsCalcProps {
    noteAverage: number | undefined;
}

export const NoteCalc = ({ noteAverage }: IStarsCalcProps) => {

    console.log('noteAverage', noteAverage)

    const [stars, setStars] = useState<JSX.Element[]>([]);

    useEffect(() => {
        if (typeof noteAverage === 'number') {
            calculateStars(noteAverage);
        }
    }, [noteAverage]);

    const calculateStars = (average: number) => {
        const ratingInt = Math.floor(average);
        const decimalPart = average - ratingInt;

        const starsArray: JSX.Element[] = [];


        const addStar = (index: number) => {

            starsArray.push(<i key={index} className="material-icons icon-small gold-star">star</i>);
            setStars([...starsArray]);


            if (index < ratingInt) {
                setTimeout(() => {
                    addStar(index + 1);
                }, 100);
            }

            else if (decimalPart >= 0.25 && decimalPart < 0.75) {
                setTimeout(() => {
                    starsArray.push(<i key="half" className="material-icons icon-small gold-star">star_half</i>);
                    setStars([...starsArray]);
                }, 10);
            }

            else if (decimalPart >= 0.75) {
                setTimeout(() => {
                    starsArray.push(<i key="full" className="material-icons icon-small gold-star">star</i>);
                    setStars([...starsArray]);
                }, 10);
            }
        };
        addStar(0);
    };

    return (
        <NoteWrapper>
            {stars}
        </NoteWrapper>
    );
};
