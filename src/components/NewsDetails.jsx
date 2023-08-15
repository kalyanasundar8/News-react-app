import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const NewsDetails = () => {

    const { id } = useParams();
    const { data: news, isPending, error } = useFetch("http://localhost:8000/news/" + id)

    return (
        <div>
            {isPending && <div>L🔃ading...</div>}
            {error && <div className="text-2xl">⛔{error}</div>}
            {news && (
                <article>
                    <h2 className="text-xl text-gray-400 font-semibold mb-5">{news.title}</h2>
                    <h1 className="text-4xl font-bold mb-5">"{news.news}"</h1>
                    <p>{news.fullNews}</p>
                </article>
            )}
        </div>
    );
}

export default NewsDetails;