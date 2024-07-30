import PropTypes from "prop-types"
import axios from "../../../../axios.js"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function TournamentsPage({ events }) {

    const [fetchedImage, setFetchedImage] = useState([])

    async function fetchImage() {
        try {
            const data = await axios.get("/cricket/image")
            console.log(data)
            setFetchedImage(data.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchImage()
    }, [])
    return <>
        <Link to={"/cricket"}>
            <button type="button" className="w-full flex items-center justify-center m-20 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-slate-200 border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
            </button>
        </Link>

        <div className="min-h-screen max-w-screen-4xl  static dark:bg-slate-800 gap-10   flex flex-col mt-5 mb-28 items-center justify-items-center ">


            {events.data && events?.data.map((tournament) => {
                return (
                    <div key={tournament._id}>
                        <Link to={`/cricket/teams/${tournament.country_1}/vs/${tournament.country_2}`}>
                            <div className="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
                                <div className="flex items-center gap-8 w-300">
                                    <div className=" justify-between">
                                        {fetchedImage?.map((countryImage) => (

                                            < div key={countryImage._id} >
                                                {countryImage.team === tournament.country_1 ? <img src={countryImage.image}
                                                    className="w-32 group-hover:w-36 group-hover:h-36 h-32 m-5 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                                                /> : undefined}


                                            </div>
                                        ))}
                                        <div className="w-fit transition-all transform duration-500 ">
                                            <h1 className="text-gray-600 dark:text-gray-200 font-bold">
                                                {tournament.country_1}
                                            </h1>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 m-10">VS</p>
                                    <div className="">
                                        {fetchedImage?.map((countryImage) => (

                                            < div key={countryImage._id} >
                                                {countryImage.team === tournament.country_2 ? <img src={countryImage.image}
                                                    className="w-32 group-hover:w-36 group-hover:h-36 h-32 m-5 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                                                /> : undefined}


                                            </div>
                                        ))}

                                        <div className="w-fit transition-all transform duration-500 items-center">
                                            <h1 className="text-gray-600 dark:text-gray-200 font-bold">
                                                {tournament.country_2}
                                            </h1>
                                        </div>
                                    </div>

                                </div>



                            </div>
                        </Link>
                    </div>









                )
            })}
        </div >
    </>
}


TournamentsPage.propTypes = {
    events: PropTypes.any,
};

export default TournamentsPage