import arrow from '../assets/images/icon-arrow.svg';

const Img = () =>{
    return (
        <div className={'img-container'}>
            <hr/>
            <div className='image'>
                <img src={arrow} alt={'arrow'}/>
            </div>
        </div>
    )
};

export default Img;