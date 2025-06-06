import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const RealtorSchedule = ({ toggleRealotrSchedule }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(null)
  
  // Demo available time slots (you can replace this with real data later)
  const demoAvailableSlots = {
    '2024-03-20': ['9:00 AM - 10:00 AM', '11:00 AM - 12:00 PM', '2:00 PM - 3:00 PM', '4:00 PM - 5:00 PM'],
    '2024-03-21': ['10:00 AM - 11:00 AM', '1:00 PM - 2:00 PM', '3:00 PM - 4:00 PM'],
    '2024-03-22': ['9:00 AM - 10:00 AM', '2:00 PM - 3:00 PM', '4:00 PM - 5:00 PM'],
  }

  // Demo realtor data (replace with actual data later)
  const realtorData = {
    name: "Sarah Johnson",
    role: "Senior Real Estate Agent",
    experience: "8+ years",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces"
  }
  
  // Generate time slots from 9 AM to 5 PM with ranges
  const timeSlots = Array.from({ length: 9 }, (_, i) => {
    const startHour = i + 9
    const endHour = startHour + 1
    const formatTime = (hour) => {
      const period = hour < 12 ? 'AM' : 'PM'
      const displayHour = hour > 12 ? hour - 12 : hour
      return `${displayHour}:00 ${period}`
    }
    return `${formatTime(startHour)} - ${formatTime(endHour)}`
  })

  // Check if a time slot is available for the selected date
  const isTimeSlotAvailable = (timeSlot) => {
    const dateStr = selectedDate.toISOString().split('T')[0]
    return demoAvailableSlots[dateStr]?.includes(timeSlot) || false
  }

  // Handle time slot selection
  const handleTimeSlotClick = (timeSlot) => {
    if (isTimeSlotAvailable(timeSlot)) {
      setSelectedTime(timeSlot)
    }
  }

  // Handle booking
  const handleBooking = () => {
    if (selectedTime) {
      // Here you would typically make an API call to save the booking
      alert(`Booking confirmed for ${selectedTime} on ${selectedDate.toLocaleDateString()}`)
      toggleRealotrSchedule() // Close the modal after booking
    }
  }

  return (
    <div className='w-[95%] md:w-3/4 h-[90vh] md:h-[80vh] bg-white p-0 rounded-xl shadow-lg relative overflow-hidden flex flex-col mx-auto mt-5 md:mt-10'>
      {/* Header */}
      <div className='w-full h-16 md:h-20 bg-blue-800/90 rounded-tl-xl rounded-tr-xl p-3 md:p-5 relative'>
        <button
          onClick={toggleRealotrSchedule}
          className='absolute w-8 h-8 md:w-10 md:h-10 rounded-xl top-2 right-2 bg-white text-black font-bold text-lg md:text-xl'
        >
          X
        </button>
        <h1 className='text-xl md:text-2xl font-bold text-white'>Schedule Time</h1>
      </div>

      {/* Scrollable content */}
      <div className='flex-1 overflow-y-auto p-3 md:p-5'>
        <div className='flex flex-col gap-4 md:gap-8'>
          {/* Realtor Details */}
          <div className='bg-gray-200 rounded-xl p-2 shadow-sm'>
            <div className='flex items-center gap-3 md:gap-6'>
              <div className='relative'>
                <img 
                  src={realtorData.image} 
                  alt={realtorData.name}
                  className='w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-md'
                />
                <div className='absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
                  Available
                </div>
              </div>
              <div className='flex-1'>
                <h2 className='text-lg md:text-2xl font-bold text-gray-800'>{realtorData.name}</h2>
                <p className='text-sm md:text-base text-gray-600'>{realtorData.role}</p>
                <div className='flex items-center gap-2 md:gap-4 mt-1 md:mt-2'>
                  <div className='flex items-center gap-1'>
                    <span className='text-yellow-400'>★</span>
                    <span className='font-semibold text-sm md:text-base'>{realtorData.rating}</span>
                    <span className='text-gray-500 text-sm md:text-base'>({realtorData.reviews} reviews)</span>
                  </div>
                  <span className='text-gray-500'>•</span>
                  <span className='text-gray-600 text-sm md:text-base'>{realtorData.experience} experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar and Time Slots Section */}
          <div className='w-full flex flex-col md:flex-row gap-5 md:gap-10'>
            {/* Calendar Section */}
            <div className='w-full md:w-1/3'>
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="react-calendar w-full border-none rounded-xl shadow-md
                  [&_.react-calendar__navigation]:bg-blue-800/90 [&_.react-calendar__navigation]:rounded-t-xl
                  [&_.react-calendar__navigation__label]:text-white [&_.react-calendar__navigation__label]:font-bold
                  [&_.react-calendar__navigation__arrow]:text-white [&_.react-calendar__navigation__arrow]:text-xl
                  [&_.react-calendar__month-view__weekdays]:bg-blue-50 [&_.react-calendar__month-view__weekdays]:text-blue-800
                  [&_.react-calendar__month-view__weekdays__weekday]:py-2
                  [&_.react-calendar__tile]:p-2 [&_.react-calendar__tile]:text-gray-700
                  [&_.react-calendar__tile--now]:bg-blue-100 [&_.react-calendar__tile--now]:text-blue-800
                  [&_.react-calendar__tile--active]:bg-blue-800 [&_.react-calendar__tile--active]:text-white
                  [&_.react-calendar__tile:hover]:bg-blue-50 [&_.react-calendar__tile:hover]:text-blue-800
                  [&_.react-calendar__month-view__days__day--neighboringMonth]:text-gray-400"
                minDate={new Date()}
              />
            </div>

            {/* Time Slots Section */}
            <div className='w-full md:w-2/3'>
              <h2 className='text-lg md:text-xl font-semibold mb-3 md:mb-4'>
                Available Time Slots for {selectedDate.toLocaleDateString()}
              </h2>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4'>
                {timeSlots.map((time) => {
                  const isAvailable = isTimeSlotAvailable(time)
                  const isSelected = selectedTime === time
                  return (
                    <button
                      key={time}
                      onClick={() => handleTimeSlotClick(time)}
                      className={`p-3 md:p-4 text-center border rounded-lg transition-colors text-sm md:text-base
                        ${isAvailable 
                          ? 'bg-green-100 hover:bg-green-200 text-green-800 border-green-300' 
                          : 'bg-red-100 text-red-800 border-red-300 cursor-not-allowed'
                        }
                        ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
                      `}
                      disabled={!isAvailable}
                    >
                      {time}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className='w-full p-3 md:p-5 bg-transparent'>
        <h1 className='text-lg md:text-xl font-bold mb-2'>{selectedTime ? `Schedule for ${selectedTime} on ${selectedDate.toLocaleDateString()}` : 'Select the time slot'}</h1>
        <button 
          onClick={handleBooking}
          className='w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl text-lg md:text-xl transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed'
          disabled={!selectedTime}
        >
          BOOK SLOT
        </button>
      </div>
    </div>
  )
}

export default RealtorSchedule
