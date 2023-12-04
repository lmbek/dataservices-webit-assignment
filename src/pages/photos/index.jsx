import React, { useEffect, useState } from 'react';
import style from "./index.module.css"

function Index() {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [photosPerPage, setPhotosPerPage] = useState(20);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setPhotos(data);
            } catch (error) {
                console.error('Error fetching photos:', error.message);
            }
        };

        fetchPhotos();
    }, []);

    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <h1>Photos</h1>
            <article className={style.container}>
                {currentPhotos.map((photo) => (
                    <div key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <p>{photo.title}</p>
                    </div>
                ))}
            </article>
        </>
    );
}

export default Index;
