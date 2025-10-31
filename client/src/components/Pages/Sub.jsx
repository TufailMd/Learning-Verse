import { useParams, useLocation } from 'react-router-dom';

function Sub() {
    const { subName } = useParams();
    const { state } = useLocation();
    const { title, cards } = state || {};

    console.log(cards);


    return (
        <div className="bg-gray-50">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                {title || subName}
            </h1>
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {(cards || []).map((card, index) => (
                        <SubCard key={index} title={card.title} url={card.link} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Sub;