import "./gallery.css";

import Header from "../../Components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
function Gallery() {
  const galleryLenght = 15;
  const Images =[]
  for(let i=1;i<=galleryLenght;i++){
    Images.push(require(`../../images/gallery${i}.jpg`))
  }
  return (
    <>
      <Header title={"Gallery"} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        temporibus ullam vel incidunt deleniti illum fugit accusamus sit debitis
        maiores!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            Images.map((image,index)=>{
              return <article key={index}>
                <img src={image} alt={`Gallery image ${index}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  );
}

export default Gallery;
