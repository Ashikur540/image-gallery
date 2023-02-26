import React from 'react';
import { Card } from '../Cards/Card';

const ImagesLayout = () => {
    const images = [
        {
            title: "Photo title",
            img:
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            title: "Photo title",
            img:
                "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            title: "Photo title",
            img:
                "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            title: "Photo title",
            img:
                "https://images.unsplash.com/photo-1543297031-d102cd432d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },

        {
            title: "Photo title",
            img:
                "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            title: "Photo title",
            img:
                "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            title: "Photo title",
            img:
                "https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            title: "Photo title",
            img:
                "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
            title: "Photo title",
            img:
                "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
    ];
    return (
        <section id="all-images" className="w-full px-4 md:px-20 lg:px-28 gap-5 py-12">
            <div className="md:masonry-2-col lg:masonry-3-col box-border mx-auto">
                {
                    images.map((image, i) => <Card key={i} image={image} />)
                }
            </div>
        </section>
    );
};

export default ImagesLayout;