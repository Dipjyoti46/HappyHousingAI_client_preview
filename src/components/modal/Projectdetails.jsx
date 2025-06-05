import React, { useState, useEffect } from 'react'
import img1 from '../../img/property/dayasagr/rangoni/img1.jpg'
import img4 from '../../img/property/dayasagr/rangoni/img4.jpg'
import img7 from '../../img/property/dayasagr/rangoni/img7.jpg'
import img10 from '../../img/property/dayasagr/rangoni/img10.jpg'
import img2 from '../../img/property/dayasagr/metro_height/img2.jpg'
import img3 from '../../img/property/dayasagr/metro_height/img3.jpg'
import img6 from '../../img/property/dayasagr/metro_height/img6.jpg'
import img5 from '../../img/property/dayasagr/bkb/img5.jpg'
import img8 from '../../img/property/dayasagr/bkb/img8.jpg'
import img9 from '../../img/property/dayasagr/bkb/img9.jpg'


const Projectdetails = ({ toggleProjectdetails,rera,gmc_noc,gmda_pp,buildername }) => {
  const [activeSection, setActiveSection] = useState('project-details');
  const [fileError, setFileError] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleFileDownload = (fileUrl, fileName) => {
    if (!fileUrl) {
      setFileError(`Unable to access ${fileName}. Please try again later.`);
      return;
    }

    try {
      window.open(fileUrl, '_blank');
      setFileError(null);
    } catch (error) {
      setFileError(`Error accessing ${fileName}. Please try again later.`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['project-details', 'firm-details', 'pastprojects'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-3/4 h-[80vh] bg-white p-0 rounded-xl shadow-lg relative overflow-hidden'>
      {/* Header */}
      <div className='w-full h-20 bg-blue-800/90 rounded-tl-xl rounded-tr-xl p-5 relative'>
        <button
          onClick={toggleProjectdetails}
          className='absolute w-10 h-10 rounded-xl top-2 right-2 bg-white text-black font-bold text-xl'
        >
          X
        </button>
        <h1 className='text-2xl font-bold text-white'>Information</h1>
      </div>

      {/* Scrollspy Navigation */}
      <div className='sticky top-0 bg-white shadow-md z-10'>
        <nav className='flex justify-center space-x-8 p-4'>
          <button
            onClick={() => scrollToSection('project-details')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeSection === 'project-details'
                ? 'bg-blue-800 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Project Details
          </button>
          <button
            onClick={() => scrollToSection('firm-details')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeSection === 'firm-details'
                ? 'bg-blue-800 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Firm Details
          </button>
          <button
            onClick={() => scrollToSection('pastprojects')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeSection === 'pastprojects'
                ? 'bg-blue-800 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Past Projects
          </button>
        </nav>
      </div>

      {/* Vertically scrollable content */}
      <div className='h-[calc(100%-8rem)] overflow-y-auto overflow-x-hidden p-5 text-black'>
        {/* Project Details Section */}
        <section id="project-details" className='mb-8'>
          <h2 className='text-2xl font-bold mb-4 text-black'>Project Details</h2>
          <div className='space-y-4'>
            <table className='w-full border-collapse rounded-lg overflow-hidden shadow-lg'>
              <tbody className='divide-y divide-gray-200'>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Project Name</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Project Code</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>RERA ID</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Location</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Starting Date</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Completion Date</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Total Land Area</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>No of Blocks</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Size of Flat</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>
                    <div className='flex gap-4'>
                      <span className='hover:scale-105 transition-transform duration-300'>Write Something</span>
                      <span className='hover:scale-105 transition-transform duration-300'>Write Something</span>
                    </div>
                  </td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Total No. of Flat</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='space-y-4'>
            <p className='font-bold text-xl mt-10'>Facilties of Dayasagar Residency</p>
            <table className='w-full border-collapse rounded-lg overflow-hidden shadow-lg'>
              <tbody className='divide-y divide-gray-200'>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Tiles</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Bathroom Fittings</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Modular Kithchen</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Kithchen Fittings</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Door & Window</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Wall Putty</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Wall Color</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Covered Balcony</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Fall Ceilling</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Wardrobe</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>
                      <span className='hover:scale-105 transition-transform duration-300'>Write Something</span>
                  </td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Furnished</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>GYM</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Community Hall</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Swimming Pool</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Children Play Ground</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Terrece Garden</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Lift</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Ground Water</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Water Storage</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Guest Parking</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Garbage Disposal System</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Rain Water Haveting</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Security and Fire Fitting</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>Something to Write Here</td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>CCTV</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>
                    <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800'>
                      <span className='w-2 h-2 mr-2 rounded-full bg-red-500 animate-pulse'></span>
                      No
                    </span>
                  </td>
                </tr>
                <tr className='hover:bg-blue-50 transition-all duration-300 ease-in-out group'>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200 group-hover:bg-blue-800/20 transition-colors duration-300'>Solar Energy System</th>
                  <td className='py-3 px-4 text-black group-hover:text-blue-800 transition-colors duration-300'>
                    <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800'>
                      <span className='w-2 h-2 mr-2 rounded-full bg-green-500'></span>
                      Yes
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='space-y-4'>
            <p className='font-bold text-xl mt-10'>Project Document at Your DoorSteps</p>
            <table className='w-full border-collapse rounded-lg overflow-hidden shadow-lg'>
              <tbody className='divide-y divide-gray-200'>
                <tr>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200'>Architectural Drawing</th>
                  <td className='py-3 px-4 text-black'>
                    <button className='px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Apply</button>
                  </td>
                </tr>
                <tr>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200'>Trace Map</th>
                  <td className='py-3 px-4 text-black'>
                    <button className='px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Apply</button>
                  </td>
                </tr>
                <tr>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200'>CAD Drawing</th>
                  <td className='py-3 px-4 text-black'>
                    <button className='px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Apply</button>
                  </td>
                </tr>
                <tr>
                  <th className='py-3 px-4 text-left bg-blue-800/10 text-black font-semibold w-1/3 border-r border-blue-200'>Structural Drawing</th>
                  <td className='py-3 px-4 text-black'>
                    <button className='px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Apply</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='mt-8 p-6 bg-blue-50 rounded-lg'>
              <p className='text-gray-700 leading-relaxed'>
                <span className='font-bold'>RERA (Real Estate Regulatory Authority)</span> aims to reform India's Real Estate Sector and also serves as an adjudicating body for speedy dispute resolution. RERA verifies all the documents related to the projects. After verification, RERA issues a certificate for construction. Here are some of the certificates of DAYASAGAR RESIDENCY.
              </p>
              {fileError && (
                <div className='mt-4 p-3 bg-red-100 text-red-700 rounded-lg'>
                  {fileError}
                </div>
              )}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                <button 
                  onClick={() => handleFileDownload(rera, 'RERA NOC')}
                  className='flex items-center justify-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  RERA NOC
                </button>
                <button 
                  onClick={() => handleFileDownload(gmc_noc, 'GMC NOC')}
                  className='flex items-center justify-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  GMC NOC
                </button>
                <button 
                  onClick={() => handleFileDownload(gmda_pp, 'GMDA PP')}
                  className='flex items-center justify-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  GMDA PP
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Firm Details Section */}
        <section id="firm-details" className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Firm Details</h2>
          <div className='space-y-4'>
            <p>Para of about the {buildername} Construction Firm</p>
          </div>
        </section>

        {/* Media Section */}
        <section id="pastprojects" className='mb-8'>
          <h2 className='text-2xl font-bold mb-2'>Past Projects</h2>
          <div className='space-y-4'>
            <p>Past projects under the {buildername} Construction Firm</p>
          </div>
          <div className='flex flex-col mt-1'>
            <div className='bg-blue-50 rounded-lg p-6 mt-5'>
              <p className='text-xl font-bold'>Dayasagar Metro Height</p>
              <div className='flex gap-5 mt-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-blue-100 hover:scrollbar-thumb-blue-900'>
                <img className='w-80 h-100 rounded-lg flex-shrink-0' src={img1} alt="" />
                <img className='w-80 h-100 rounded-lg flex-shrink-0' src={img4} alt="" />
                <img className='w-80 h-100 rounded-lg flex-shrink-0' src={img7} alt="" />
                <img className='w-80 h-100 rounded-lg flex-shrink-0' src={img10} alt="" />
              </div>
            </div>
            <div className='bg-blue-50 rounded-lg p-6 mt-10'>
              <p className='text-xl font-bold'>Dayasagar Bluebell Rangoni </p>
              <div className='flex gap-5 mt-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-blue-100 hover:scrollbar-thumb-blue-900'>
                <img className='w-auto h-100 rounded-lg flex-shrink-0' src={img2} alt="" />
                <img className='w-auto h-100 rounded-lg flex-shrink-0' src={img3} alt="" />
                <img className='w-auto h-100 rounded-lg flex-shrink-0' src={img6} alt="" />
              </div>
            </div>
            <div className='bg-blue-50 rounded-lg p-6 mt-10'>
              <p className='text-xl font-bold'>Dayasagar BKB Complex</p>
              <div className='flex gap-5 mt-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-blue-100 hover:scrollbar-thumb-blue-900'>
                <img className='w-auto h-100 rounded-lg flex-shrink-0' src={img5} alt="" />
                <img className='w-auto h-100 rounded-lg flex-shrink-0' src={img8} alt="" />
                <img className='w-auto h-100 rounded-lg flex-shrink-0' src={img9} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projectdetails
