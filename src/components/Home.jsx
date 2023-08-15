import NewsList from "./NewsList";
import useFetch from "../components/UseFetch";

const Home = () => {

    const { data: news, isPending, error } = useFetch("http://localhost:8000/news")

    return (
        <div>
            {error && <div className="text-2xl">⛔{error}</div>}
            {isPending && <div className="text-2xl">L🔃ading...</div>}
            {news && <NewsList news={news} heading="Breaking News⚡" />}
        </div>
    );
}

export default Home;