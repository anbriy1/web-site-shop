import images from '../images';

export default function BrandsSection() {
  return (
    <>
      <div className='footer-up-text'>
        <h1 className='text-top-footer'>BRAND</h1>
      </div>
      <div className="brands-container">
        <div className='Brand-row'>
          <img className='intel' src={images.intel} alt="Intel" />
          <img className='nvidia' src={images.nvidia} alt="Nvidia" />
          <img className='logitech' src={images.logitech} alt="Logitech" />
        </div>
        <div className='Brand-row2'>
          <img className='msi' src={images.msi} alt="MSI" />
          <img className='hyperx' src={images.hyperx} alt="HyperX" />
          <img className='benq' src={images.benq} alt="BenQ" />
        </div>
      </div>
    </>
  );
}
