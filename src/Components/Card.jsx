import NFT from '../images/image-equilibrium.jpg';
import Avatar from '../images/image-avatar.png';
import ET from '../images/icon-ethereum.svg';
import Clock from '../images/icon-clock.svg';
import View from '../images/icon-view.svg';
const Card = () => {
  return <div className="card">
    <div className="card-body">
          <img src={NFT} alt="NFT card" className='img-nft'/>
        <div className='view'>
          <img src={View} alt="view" />
        </div>
      <h2>Equilibrium #3429</h2>
      <p className='description'>Our Equilibrium collection promotes balance and calm.</p>
      <ul className='info-nft'>
        <li className='price'><img src={ET} alt="Ethereum"/>  0.04ETH</li>
        <li className='days-left'><img src={Clock} alt="Clock" />3 days left</li>
      </ul>
      </div>
      <footer>
        <img src={Avatar} alt="Avatar" className='img-avatar'/>
        <p className='copyright'>Creation of <a href="/">Jules Wyvern</a></p>
      </footer>
        </div>;
    };

export default Card;
