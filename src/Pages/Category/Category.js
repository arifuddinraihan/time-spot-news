import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews)
    return (
        <div>
            <h2>This is Category has news: {categoryNews.length}</h2>
            {
                categoryNews.map(news =>
                    <NewsCard
                        key={news.id}
                        news={news}
                    >
                    </NewsCard>)
            }
        </div>
    )
};

export default Category;