import { Fragment, useState } from "react";
import Card from "../components/Card";


function HomePage() {
    const [readMore, setReadMore] = useState(false);

    const text = "Lorem ipsum dolor sit amet. Non aliquid autem sit optio possimus eos omnis maxime et illum iure non optio asperiores At quaerat corporis. Ad galisum similique et omnis voluptatem ut illum consequatur. Aut error cupiditate est officiis esse quo enim nisi. Aut voluptatibus incidunt aut voluptatum accusantium in quos praesentium? Sit atque consequatur eos alias voluptas qui itaque provident ut nemo nisi. Et alias nulla ut quod alias et voluptatem ipsum sit minus quam qui veritatis aliquid. \n Et consequatur eius ad fugiat harum et amet odio qui error quia. Sed repellat nihil rem rerum blanditiis est tempora culpa? 33 doloremque nemo sed vero sunt sed reprehenderit dolor est ratione eaque cum nobis voluptas."

    function readMoreHandler() {
        setReadMore(!readMore);
    };


    return (
        <Fragment>
            <Card>
                <h1>Welcome!</h1>
                <p>Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.</p>
            </Card>
            <Card>
                <p>
                    {!readMore ? text.substring(0, 100) : text}

                    <button
                        className="readMore"
                        data-testid="readMoreBtn"
                        onClick={readMoreHandler}>
                        {readMore ? "Show Less" : "...Read More"}
                    </button>
                </p>
            </Card>
        </Fragment>
    );
}

export default HomePage;
