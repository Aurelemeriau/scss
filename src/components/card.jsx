import Avis from './avis'

const Card = ({image, titre, année, description, avis }) => {


    return (

  <div className="container">     
    <div className="box">
        <div className="image">
            <img src={image} alt={titre} />
        </div>

        <div className="info">
            <h1>{titre}</h1>
            <p>{année}</p>
            <p>{description}</p>
        </div>
    </div>
        <div className="avis">
            <p>Rate this album</p>
            <Avis/>
        </div>
  </div> 

    );
};

export default Card;