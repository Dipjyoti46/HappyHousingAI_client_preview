import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faMapMarkerAlt, 
  faClock, 
  faBuilding,
  faCheckCircle,
  faTimesCircle,
  faSpinner,
  faSearch,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

const MyBookings = () => {
  // Mock data - replace with actual API calls
  const [bookings] = useState([
    {
      id: 1,
      propertyName: "Modern Downtown Apartment",
      address: "123 Main St, City",
      date: "2024-03-20",
      time: "14:00",
      status: "confirmed",
      type: "viewing"
    },
    {
      id: 2,
      propertyName: "Luxury Villa",
      address: "456 Park Ave, City",
      date: "2024-03-22",
      time: "11:00",
      status: "pending",
      type: "realtor"
    },
    // Add more mock bookings as needed
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />;
      case 'pending':
        return <FontAwesomeIcon icon={faSpinner} className="text-yellow-500" />;
      case 'cancelled':
        return <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">My Bookings</h1>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search bookings..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
              </div>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FontAwesomeIcon icon={faFilter} className="mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <div 
              key={booking.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    {getStatusIcon(booking.status)}
                    <span className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {getStatusText(booking.status)}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {booking.propertyName}
                  </h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-400" />
                    <span>{booking.address}</span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Date & Time</div>
                    <div className="font-medium text-gray-900">
                      {new Date(booking.date).toLocaleDateString()}
                    </div>
                    <div className="text-gray-600">{booking.time}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center text-gray-600">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-gray-400" />
                    <span>{new Date(booking.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-400" />
                    <span>{booking.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FontAwesomeIcon icon={faBuilding} className="mr-2 text-gray-400" />
                    <span className="capitalize">{booking.type} appointment</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    Reschedule
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors duration-200">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="max-w-sm mx-auto">
              <div className="text-gray-400 mb-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-5xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
              <p className="text-gray-500">You haven't made any bookings yet. Start exploring properties to schedule viewings.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings; 