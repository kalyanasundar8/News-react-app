import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNews = () => {

    const [title, setTitle] = useState('')
    const [news, setNews] = useState('')
    const [fullNews, setFullNews] = useState('')
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newsDetails = { title, news, fullNews }

        fetch("http://localhost:8000/news", {
            method: 'POST',
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(newsDetails)
        })
            .then(() => {
                setIsPending(false)
                navigate('/');
                console.log("News created")
            })
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Create your news</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="news">News</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="news"
                        placeholder="News"
                        value={news}
                        onChange={(e) => setNews(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="fullnews">FullNews</label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="fullnews"
                        placeholder="FullNews"
                        value={fullNews}
                        onChange={(e) => setFullNews(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    {!isPending && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>}
                    {isPending && <button disabled className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" type="submit">Submit...</button>}
                </div>
            </form>
        </div>
    );
}

export default CreateNews;