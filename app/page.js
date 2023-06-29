import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const App = () => {
  return (
    <div className='w-full px-4 py-1'>
      <div className='text-center w-full'>
        <h1 className='bg-gradient-to-r from-violet-600 via-violet-600 to-[#d32f2f] bg-clip-text text-transparent text-8xl font-bold'>Steden</h1>
      </div>
      <div id="cities" >
        <table className='border-none mx-auto mt-5 border-separate border-spacing-5'>
          <tbody>
            <tr>
              <td className='align-top'>
                <img src="/koekieburg.jpg" width="100" height="100" alt="Koekieburg" className='w-[300px] h-[300px] object-fit' />
              </td>
              <td className='align-top px-2'>
                <h1 className='bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text text-transparent font-bold text-3xl'>Koekieburg</h1>
                <p className='text-neutral-500'>Koekieburg is een prachtige stad dat <br />
                ontstaan is in Mei 2023. Koekieburg heeft <br/>
                een prachtige tuin met allerlei plantjes, <br />
                wandelende bomen en twee huisjes.</p> <br />

                <Link href="https://www.google.nl/maps/place/Prins+Bernhardweg+1a,+7433+DA+Schalkhaar/@52.26809,6.1877363,19z/data=!3m1!4b1!4m6!3m5!1s0x47c7ea34a30c3ab5:0x8eab52196c1cdc24!8m2!3d52.26809!4d6.18838!16s%2Fg%2F11tdwxg2pj?entry=ttu" className='bg-violet-600 text-white rounded-full cursor-pointer p-3' target='_blank'>Bezoek Koekieburg</Link>
              </td>
            </tr>

            

            <tr>
              <td className='align-top px-2'>
                <h1 className='bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text text-transparent font-bold text-3xl'>Weien</h1>
                <p className='text-neutral-500'>Weien is een prachtig stad dat <br /> 
                ontstaan is in Juni 2023. Een mooie <br /> 
                terrasje, een grote wei met allerlei <br /> 
                bomen waar je lekker kan barbecueën en <br />
                een voetbalveld!</p> <br />

                <Link href="https://www.google.nl/maps/place/52%C2%B016'04.4%22N+6%C2%B011'18.7%22E/@52.2678903,6.1878825,19z/data=!3m1!4b1!4m4!3m3!8m2!3d52.2678903!4d6.1885262?entry=ttu" className='bg-violet-600 text-white rounded-full cursor-pointer p-3' target='_blank'>Bezoek Weien</Link>
              </td>
              <td className='align-top'>
                <img src="/weien.jpg" width="100" height="100" alt="Weien" className='w-[300px] h-[300px] object-fit' />
              </td>
            </tr>

            

            <tr>
              <td className='align-top'>
                <img src="/s-autostede.PNG" width="100" height="100" alt="des Autostede" className='w-[300px] h-[300px] object-fit' />
              </td>
              <td className='align-top px-2'>
                <h1 className='bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text text-transparent font-bold text-3xl'>'s Autostede</h1>
                <p className='text-neutral-500'>'s Autostede is een prachtig stad dat <br /> 
                ontstaan is in Juni 2023. Een mooie <br /> 
                attractiepark en een parkeerplaats die altijd bezet is.</p> <br />

                <Link href="https://www.google.nl/maps/place/52%C2%B016'05.9%22N+6%C2%B011'18.6%22E/@52.2683069,6.1878552,19z/data=!3m1!4b1!4m4!3m3!8m2!3d52.2683069!4d6.1884989?entry=ttu" className='bg-violet-600 text-white rounded-full cursor-pointer p-3' target='_blank'>Bezoek Sallandstad</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='text-center w-full  mt-12 p-6' id="au">
        <h1 className='mb-3 bg-gradient-to-r from-[#d32f2f] via-violet-600 to-violet-600 bg-clip-text text-transparent text-8xl font-bold'>Over Ons</h1>
        <hr className='mt-3' />
        <p className='text-neutral-500 mt-3'>Wij zijn Hikeland, <br />
        een land in West-Europa dat door Hieke was gemaakt. <br />
        Wij maken het mogelijk zodat jij binnen onze land <br />
        geld kan verdienen en allerlei andere dingen doen. <br />
        </p>
      </div>

      <div className='bg-violet-600 rounded-xl text-center h-60 p-6 mt-12 mb-3'>
        <h1 className='bg-white bg-clip-text text-transparent font-semibold text-6xl'>Wij hebben een cloud!</h1>

        <br />
        <br />

        <Link href="https://cloud.hikeland.nl" className='bg-zinc-900 text-white p-5 rounded-full'>Naar cloud gaan!</Link>
      </div> 
    </div>
  )
}

export default App