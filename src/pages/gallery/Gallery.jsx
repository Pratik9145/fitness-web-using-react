import './gallery.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header1.jpg';

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Explore moments of dedication, energy, and transformation captured in our fitness community. Every image tells a story of strength and perseverance.
      </Header>

      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
