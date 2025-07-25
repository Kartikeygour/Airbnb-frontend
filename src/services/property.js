import axios from 'axios'
import { config } from './config'

export async function addProperty(
  categoryId,
  title,
  details,
  address,
  contactNo,
  ownerName,
  isLakeView,
  isTV,
  isAC,
  isWifi,
  isMiniBar,
  isBreakfast,
  isParking,
  guests,
  bedrooms,
  beds,
  bathrooms,
  rent,
  photo
) {
  try {
    // create url
    const url = `${config.serverUrl}/property/`

    // create the body
    const body = new FormData()
    body.append('categoryId', categoryId)
    body.append('title', title)
    body.append('details', details)
    body.append('address', address)
    body.append('contactNo', contactNo)
    body.append('ownerName', ownerName)
    body.append('isLakeView', isLakeView)
    body.append('isTV', isTV)
    body.append('isAC', isAC)
    body.append('isWifi', isWifi)
    body.append('isMiniBar', isMiniBar)
    body.append('isBreakfast', isBreakfast)
    body.append('isParking', isParking)
    body.append('guests', guests)
    body.append('bedrooms', bedrooms)
    body.append('beds', beds)
    body.append('bathrooms', bathrooms)
    body.append('rent', rent)
    body.append('photo', photo)

    // get the token
    const token = sessionStorage.getItem('token')

    // make the API call
    const response = await axios.post(url, body, {
      headers: {
        token,
      },
    })

    // return response body
    return response.data
  } catch (ex) {
    console.error('exception: ', ex)
  }
}
