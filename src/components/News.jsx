import { useState, useEffect } from 'react';
import Heading from './Heading';
import { FaLongArrowAltRight } from 'react-icons/fa';

const News = () => {
  const [articles, setArticles] = useState({
    movieNews: [],
    interviews: [],
    filmReviews: [],
    behindTheScenes: []
  });

  const [selectedCategory, setSelectedCategory] = useState('movieNews'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./articles.json');
        const data = await response.json();
        setArticles(data); 
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  const categoryArticles = articles[selectedCategory] || [];

  return (
    <div className="container mx-auto ">
      {/* Title  */}
      <Heading
      title={'Movie News and Articles'}
      subtitle={'Get the latest updates, exclusive interviews, and behind-the-scenes insights from the world of cinema. Stay in the know!'}
      ></Heading>
     

      {/* Category Buttons */}
      <div className="mb-6 text-center">
        <button
          className={`btn ${selectedCategory === 'movieNews' ? 'btn-primary' : ' '} mx-2`}
          onClick={() => setSelectedCategory('movieNews')}
        >
          Movie News
        </button>
        <button
          className={`btn ${selectedCategory === 'interviews' ? 'btn-primary' : ' '} mx-2`}
          onClick={() => setSelectedCategory('interviews')}
        >
          Interviews
        </button>
        <button
          className={`btn ${selectedCategory === 'filmReviews' ? 'btn-primary' : ' '} mx-2`}
          onClick={() => setSelectedCategory('filmReviews')}
        >
          Film Reviews
        </button>
        <button
          className={`btn ${selectedCategory === 'behindTheScenes' ? 'btn-primary' : ' '} mx-2`}
          onClick={() => setSelectedCategory('behindTheScenes')}
        >
          Behind the Scenes
        </button>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {selectedCategory === 'movieNews' && 'Movie News'}
          {selectedCategory === 'interviews' && 'Interviews'}
          {selectedCategory === 'filmReviews' && 'Film Reviews'}
          {selectedCategory === 'behindTheScenes' && 'Behind the Scenes'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryArticles.map(item => (
            <div key={item.id} className="card w-full bg-base-100 shadow-xl pt-10">
              <figure><img src={item.image} alt={item.title} /></figure>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                <button className="shadow-2xl shadow-primary border-2 rounded-2xl px-4 flex items-center
            gap-3 text-xl font-bold">
              Read More<FaLongArrowAltRight /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
