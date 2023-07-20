import banner from '../../public/image/banner.jpg'
import style from '../../src/styles/mainBanner.css'


export const MainBanner = () =>{
    return(
        <div>
            <h1 className='h1Banner'>Surfline</h1>
            <div className='bannerDiv'>
                <div>
                    <img className='bannerImg' src={banner} alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nesciunt sapiente, delectus debitis voluptate odit iusto facere cum, numquam voluptas laborum ullam nulla ex sed totam, amet minus eveniet dicta.</p>
                    <button>Ver mas</button>
                </div>
            </div>

            
            

        </div>
    )
 
}