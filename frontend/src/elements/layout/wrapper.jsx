import { ToastContainer } from 'react-toastify'

import { ScrollToTop } from '@/elements'

export default function Wrapper({ children }) {
  return (
    <>
      {children}
      <ScrollToTop />
      <ToastContainer />
    </>
  )
}
