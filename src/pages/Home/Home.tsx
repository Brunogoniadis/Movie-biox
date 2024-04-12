import { useEffect } from "react";
import { getMoviesCategory } from "../../services/getMoviesCategory"
import { HomeWrapper } from "./styles";


export const Home = () => {

    useEffect(() => {
        const fetchAndDisplayMovies = async () => {
            const movies = await getMoviesCategory();
            console.log(movies);
        };
        fetchAndDisplayMovies();
    }, []);

    return (
        <HomeWrapper>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est ligula, iaculis sit amet nunc vitae, fermentum sagittis neque. Fusce eu varius mauris. Donec sed est at purus dapibus aliquet. Nullam lectus felis, aliquet a facilisis id, pulvinar pharetra elit. Integer vitae consequat mi. Morbi efficitur blandit purus vitae lacinia. Praesent dapibus feugiat lectus, quis ultrices libero tincidunt et. Praesent luctus aliquam elit, nec dapibus libero pellentesque feugiat. Quisque eget bibendum purus. Nunc neque lacus, bibendum in convallis non, sodales ut elit.

                In dapibus finibus risus non gravida. Sed purus sem, varius sit amet velit ut, faucibus eleifend lorem. Vivamus viverra nulla et elementum venenatis. Integer hendrerit commodo arcu vel egestas. Pellentesque dapibus sapien a lobortis iaculis. Duis quis ante eu nunc dignissim dictum ut eget felis. Fusce quis mauris dui. Curabitur tincidunt urna justo, sed finibus urna pulvinar nec. Phasellus pulvinar ullamcorper ligula ut mattis. Mauris arcu nunc, ultricies ut velit nec, congue accumsan dolor.

                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.
                Quisque sapien ante, dictum eu dui sit amet, dapibus condimentum lectus. Pellentesque eu metus quam. Maecenas interdum odio eu iaculis aliquam. Fusce non nisi elementum, condimentum sem quis, accumsan est. Aenean consectetur nunc ac augue convallis, tempus facilisis leo molestie. Phasellus tempus id mi in pulvinar. Morbi eu dignissim nulla, at venenatis velit. Cras nec egestas neque. Fusce fringilla mollis tempus. Vestibulum in turpis turpis.

                Aenean felis diam, luctus ac feugiat ut, condimentum et eros. Aliquam eleifend rhoncus est a facilisis. Proin porttitor aliquam velit quis facilisis. Sed congue metus nec purus imperdiet, sed pulvinar ligula ornare. Suspendisse id euismod leo, sit amet interdum odio. Mauris ut tempus felis. Integer enim massa, efficitur gravida ante quis, vulputate ornare lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                Pellentesque nec vehicula elit. In vel lectus viverra, pellentesque enim in, tincidunt felis. Sed maximus ipsum vel mollis aliquet. Proin ut diam varius, scelerisque ex nec, venenatis massa. Pellentesque iaculis leo mi, sit amet efficitur diam volutpat vitae. Aenean mollis purus a enim dictum viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean neque ipsum, ullamcorper eu ligula sed, fringilla condimentum mi. Quisque varius nunc ipsum, facilisis vehicula ante suscipit rhoncus. In eleifend dui vitae lectus condimentum mattis. Duis eleifend finibus nunc, in tincidunt mi pharetra eget.</div>
        </HomeWrapper>
    )
}
