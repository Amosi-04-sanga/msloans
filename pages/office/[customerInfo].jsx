import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import OfficeNav from '../../components/OfficeNav'


const CustomerInfo = () => {

  const [customer, setCustomer] = useState(null)

  const Router = useRouter()
  const { customerInfo } = Router.query
  console.log(customerInfo);

  useEffect(() => {

    const getCustomer = async () => {
      await axios.get(`/api/customers/${customerInfo}`)
      .then(res => {
        const { data } = res
        console.log(data)
        setCustomer(data)
      }).catch(error => console.log(error))
    }

   getCustomer()

  }, [customerInfo])





  return (
    <div>
      < OfficeNav />
      <div className="w-40 h-40">
        <p>hello amos</p>

        {
          customer ? (
            <div className="mt-10 grid">
              <div className="my-8 w-40 h-40">
                <p> {customer.debtorName} </p>
                <img className='w-full h-full' src={customer.debtorPhoto} alt={customer.debtorName} />
              </div>

              <div className="my-8 w-40 h-40">
                <p> {customer.sponsorName} </p>
                <img className='w-full h-full' src={customer.sponsorPhoto} alt={customer.sponsorName} />
              </div>
            </div>
          ) : 
          "loading..."
        }
      </div>
    </div>
  )
}

export default CustomerInfo

// 

