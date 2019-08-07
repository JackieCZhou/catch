import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
// import { url } from 'inspector';
import image1 from '../../cssPages/ImageGallery/linkedinlogo.jpg';
import image2 from '../../cssPages/ImageGallery/linkedinlogo.jpg';
import image3 from '../../cssPages/ImageGallery/linkedinlogo.jpg';



export default class Test extends React.Component {
  state = {
    images: [
      '../../cssPages/ImageGallery/trimming.png',
      '../../cssPages/ImageGallery/pineneedles.png',
      '../../cssPages/ImageGallery/aeration.png',
      '../../cssPages/ImageGallery/removal.png'
    ]
  }


  componentWillMount() {
    this.setState({
      children: [],
      images: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        //
      })
    }, 100);
  }

  createChildren = n => range(n).map(i => <div key={i} style={{ height: 300, background: this.state.images }}>{i}</div>);

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <h1 style={{ background: 'transparent', color: 'orangered', fontStyle: 'bold' }}>Catch</h1>
            <br />
            <h4 style={{ color: 'navy', fontStyle: 'bold' }}>The new wave in job hunting and recruiting</h4>
            < br ></br >
          </div>
        </div>


        <br /> <br />
        <ItemsCarousel
          // Placeholder configurations
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 300, background: 'url(images[i])' }}></div>}

          // Carousel configurations
          numberOfCards={3}
          gutter={12}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}

          // Active item configurations
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}

          chevronWidth={24}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={false}
        >
          {children}

          {Array.from(new Array(10)).map((_, i) =>
            <div
              key={i}
              style={{
                height: 2,
                background: 'url(images[i])'
              }}

            />

          )}


        </ItemsCarousel>

        <img src={image1} className="grass1" alt="grass" />
        <img src={image2} className="grass2" alt="grass" />
        <img src={image3} className="grass3" alt="grass" />

        <br></br>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 flex-center">
            <div className="jumbotron pt-3 smallReview">
              <br />
              <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'left' }}>“Whether you think you can or you think you can’t, you’re right.” – Henry Ford</h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'left' }}>"If your ship doesn't come in, swim out to meet it.”― Jonathan Winters</h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'left' }}>“Never put off till tomorrow what you can do today.” – Thomas Jefferson</h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'left' }}>“Opportunities don’t happen, you create them.” – Chris Grosser</h4>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className='card-review' style={{ border: 'none' }}>
                          <h4 style={{ textAlign: 'left' }}>"If you are afraid of confrontation you are not going to do very well" - Bill Parcels</h4>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div classNameName="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div >


    );
  }
}

