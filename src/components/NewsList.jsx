import { Link } from "react-router-dom";

const NewsList = ({ news, heading }) => {

    return (
        <div>
            <h2 className="text-xl font-semibold">{heading}</h2>
            {news.map((newsList) => (
                <div key={newsList.id} className="my-[20px] mx-[0] p-[20px] bg-gray-300 rounded-[5px] hover:shadow-lg">
                    <Link to={`/news/${newsList.id}`}>
                        <h1 className="text-2xl font-semibold">{newsList.title}</h1>
                        <p>{newsList.news}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default NewsList;