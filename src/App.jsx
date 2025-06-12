import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import propgpt from './components/Propgpt'
import SearchPage from './components/SearchPage'
import ProfilePage from './components/profile/ProfilePage'
import AccountDetails from './components/profile/components/AccountDetails'
import SavedProperties from './components/profile/components/SavedProperties'
import ViewingAppointments from './components/profile/components/ViewingAppointments'
import RealtorMeetings from './components/profile/components/RealtorMeetings'
import MyListings from './components/profile/components/MyListings'
import Preferences from './components/profile/components/Preferences'
import MyBookings from './components/profile/components/MyBookings'
import PropEditPage from './components/EditProperty/PropEditPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propgpt" element={<propgpt />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/edit/*" element={<PropEditPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route index element={<AccountDetails />} />
          <Route path="saved-properties" element={<SavedProperties />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="viewing-appointments" element={<ViewingAppointments />} />
          <Route path="realtor-meetings" element={<RealtorMeetings />} />
          <Route path="my-listings" element={<MyListings />} />
          <Route path="preferences" element={<Preferences />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
