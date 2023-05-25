import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Featured.css'

const Featured = () => {
    return (
        <div className='max-w-screen-xl mx-auto featured-item  bg-fixed my-10'>
            <div className='bg-black bg-opacity-60'>
            <div className='md:p-10 p-3 text-white'>
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'Featured Items'}
                ></SectionTitle>
                <div className="md:flex justify-centerW items-center md:px-16 px-7  text-white">
                    <div className='md:py-12 md:px-8 md:pl-10'>
                        <img className='rounded-lg' src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-7 md:mt-0 mt-5">
                        <p>Aug 20, 2027</p>
                        <p className="uppercase text-xl">where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta ut autem quae, ad accusantium optio laudantium pariatur quis dolorum hic! Explicabo maxime eos, fugit a repellat natus incidunt. Distinctio!</p>
                        <button className="btn btn-outline mt-2 uppercase border-b-4 rounded-lg border-0 text-white border-white">Read More</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;