import { useEffect, useState } from 'react';
import { NoteWrapper } from './styles';

interface IStarsCalcProps {
    noteAverage: number | undefined;
    typeOfStyle?: string
}

export const NoteCalc = ({ noteAverage, typeOfStyle }: IStarsCalcProps) => {
    let starWidth = '28px';
    let starClass = 'gold-star';

    if (typeOfStyle === "min") {
        starWidth = '18px';
        starClass = 'gold-star-no-anim';
    }

    const [stars, setStars] = useState<JSX.Element[]>([]);

    useEffect(() => {
        if (typeof noteAverage === 'number') {
            if (typeOfStyle === "min") {
                calculateStarsWithoutAnimation(noteAverage);
            } else {
                calculateStarsWithAnimation(noteAverage);
            }
        }
    }, [noteAverage, typeOfStyle]);

    const calculateStarsWithAnimation = (average: number) => {
        const ratingInt = Math.floor(average);
        const decimalPart = average - ratingInt;

        const starsArray: JSX.Element[] = [];

        for (let i = 0; i < ratingInt; i++) {
            starsArray.push(<i key={i} className={`material-icons icon-small ${starClass}`}>star</i>);
        }
        if (decimalPart >= 0.25 && decimalPart < 0.75) {
            starsArray.push(<i key="half" className={`material-icons icon-small ${starClass}`}>star_half</i>);
        } else if (decimalPart >= 0.75) {
            starsArray.push(<i key="full" className={`material-icons icon-small ${starClass}`}>star</i>);
        }
        setStars(starsArray);
    };
    const calculateStarsWithoutAnimation = (average: number) => {
        const starsArray: JSX.Element[] = [];
        const ratingInt = Math.round(average);

        for (let i = 0; i < ratingInt; i++) {
            starsArray.push(<i key={i} className={`material-icons icon-small ${starClass}`}>star</i>);
        }
        if (average - ratingInt >= 0.25 && average - ratingInt < 0.75) {
            starsArray.push(<i key="half" className={`material-icons icon-small ${starClass}`}>star_half</i>);
        } else if (average - ratingInt >= 0.75) {
            starsArray.push(<i key="full" className={`material-icons icon-small ${starClass}`}>star</i>);
        }
        setStars(starsArray);
    };
    return (
        <NoteWrapper starWidth={starWidth}>
            {stars}
        </NoteWrapper>
    );
};
