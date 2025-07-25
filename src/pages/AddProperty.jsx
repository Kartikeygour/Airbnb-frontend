import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addProperty } from '../services/property'

function AddProperty() {
  // create the state
  const [info, setInfo] = useState({
    categoryId: '',
    title: '',
    details: '',
    address: '',
    contactNo: '',
    ownerName: '',
    isLakeView: 0,
    isTV: 0,
    isAC: 0,
    isWifi: 0,
    isMiniBar: 0,
    isBreakfast: 0,
    isParking: 0,
    guests: '',
    bedrooms: '',
    beds: '',
    bathrooms: '',
    rent: '',
  })
  const [photo, setPhoto] = useState(null)

  // get navigate function reference
  const navigate = useNavigate()

  const onCancel = () => {
    // go one step back in back stack
    navigate(-1)
  }

  const onAdd = async () => {
    const {
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
    } = info
    if (title.length == 0) {
      toast.warn('Please enter title')
    } else {
      const result = await addProperty(
        1,
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
      )

      if (result['status'] == 'success') {
        toast.success('Successfully added a property')

        // go back
        navigate(-1)
      } else {
        toast.error(result['error'])
      }
    }
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Add Property</h2>
      <div className='row mb-3'>
        <div className='col'>
          <label htmlFor=''>Title</label>
          <input
            onChange={(e) => setInfo({ ...info, title: e.target.value })}
            type='text'
            className='form-control'
          />
        </div>
        <div className='col'>
          <label htmlFor=''>Address</label>
          <input
            onChange={(e) => setInfo({ ...info, address: e.target.value })}
            type='text'
            className='form-control'
          />
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col'>
          <label htmlFor=''>Owner name</label>
          <input
            onChange={(e) => setInfo({ ...info, ownerName: e.target.value })}
            type='text'
            className='form-control'
          />
        </div>
        <div className='col'>
          <label htmlFor=''>Owner Contact Number</label>
          <input
            onChange={(e) => setInfo({ ...info, contactNo: e.target.value })}
            type='text'
            className='form-control'
          />
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col'>
          <label htmlFor=''>Details</label>
          <textarea
            onChange={(e) => setInfo({ ...info, details: e.target.value })}
            rows={5}
            className='form-control'
          />
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col'>
          <label htmlFor=''>#Guests</label>
          <input
            onChange={(e) => setInfo({ ...info, guests: e.target.value })}
            type='number'
            className='form-control'
          />
        </div>
        <div className='col'>
          <label htmlFor=''>#Bedrooms</label>
          <input
            onChange={(e) => setInfo({ ...info, bedrooms: e.target.value })}
            type='number'
            className='form-control'
          />
        </div>
        <div className='col'>
          <label htmlFor=''>#Beds</label>
          <input
            onChange={(e) => setInfo({ ...info, beds: e.target.value })}
            type='number'
            className='form-control'
          />
        </div>
      </div>

      <div className='row mb-3'>
        <div className='col'>
          <label htmlFor=''>#Bathrooms</label>
          <input
            onChange={(e) => setInfo({ ...info, bathrooms: e.target.value })}
            type='number'
            className='form-control'
          />
        </div>
        <div className='col'>
          <label htmlFor=''>Rent</label>
          <input
            onChange={(e) => setInfo({ ...info, rent: e.target.value })}
            type='number'
            className='form-control'
          />
        </div>
        <div className='col'>
          <label htmlFor=''>Photo</label>
          <input
            onChange={(e) => setPhoto(e.target.files[0])}
            type='file'
            className='form-control'
          />
        </div>
      </div>

      <div className='mb-3 row'>
        <div>
          <input
            onChange={(e) =>
              setInfo({ ...info, isLakeView: e.target.checked ? 1 : 0 })
            }
            type='checkbox'
          />{' '}
          <span>Is Lake View</span>
        </div>
        <div>
          <input
            onChange={(e) =>
              setInfo({ ...info, isTV: e.target.checked ? 1 : 0 })
            }
            type='checkbox'
          />{' '}
          <span>Is TV available</span>
        </div>
        <div>
          <input
            onChange={(e) =>
              setInfo({ ...info, isAC: e.target.checked ? 1 : 0 })
            }
            type='checkbox'
          />{' '}
          <span>Is AC available</span>
        </div>
        <div>
          <input
            onChange={(e) =>
              setInfo({ ...info, isWifi: e.target.checked ? 1 : 0 })
            }
            type='checkbox'
          />{' '}
          <span>Is Wifi available</span>
        </div>
        <div>
          <input
            onChange={(e) =>
              setInfo({ ...info, isMiniBar: e.target.checked ? 1 : 0 })
            }
            type='checkbox'
          />{' '}
          <span>Is Minibar available</span>
        </div>
        <div>
          <input
            onChange={(e) =>
              setInfo({ ...info, isBreakfast: e.target.checked ? 1 : 0 })
            }
            type='checkbox'
          />{' '}
          <span>Is Breakfast available</span>
        </div>
        <div>
          <input
            onChange={(e) =>
              setInfo({ ...info, isParking: e.target.checked ? 1 : 0 })
            }
            type='checkbox'
          />{' '}
          <span>Is Parking available</span>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <button
            onClick={onAdd}
            className='btn btn-success'
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className='btn btn-danger ms-2'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddProperty
