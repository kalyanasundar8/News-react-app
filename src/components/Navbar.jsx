const Navbar = () => {
    return (
        <div className="p-20 flex justify-between items-center max-w-5xl mx-auto my-0">
            <h1 className="text-3xl font-bold">Neews</h1>
            <div className="text-lg">
                <a href="/" className="m-10">Home</a>
                <a href="/create">Create news</a>
            </div>
        </div>
    );
}

export default Navbar;