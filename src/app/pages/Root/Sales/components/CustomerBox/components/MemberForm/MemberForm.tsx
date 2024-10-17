import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import CreateCustomerBtn from './components/CreateCutomerBtn'
import CustomerHistory from './components/CustomerHistory'
import useFocusOnKeyPress from '@/hooks/useFocusOnKeyPress'

function MemberForm() {
  const [phoneNo, setPhoneNo] = useState('') // Keep using state for tracking
  const [memberId, setMemberId] = useState('')
  const [memberName, setMemberName] = useState('')
  const [created, setCreatedAt] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isNewCustomer, setIsNewCustomer] = useState(false)
  const [isCreateCustomerOpen, setIsCreateCustomerOpen] = useState(false)

  // Use the hook to focus on the phoneNo input initially and on F1 key press
  const phoneNoRef = useFocusOnKeyPress<HTMLInputElement>(
    'F4',
    (input) => input?.focus(),
    true // Focus initially
  )

  // Simulate customer lookup
  const checkCustomerExists = (phoneNo: string) => {
    const mockCustomer = {
      memberName: 'John Doe',
      memberId: '123456',
      createdDate: '2022-05-16',
    }

    return phoneNo === '1234567890' ? mockCustomer : null
  }

  // Handle input changes
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    if (name === 'phoneNo') {
      setPhoneNo(value)
    } else if (name === 'memberName') {
      setMemberName(value)
    } else if (name === 'memberId') {
      setMemberId(value)
    }
  }

  useEffect(() => {
    if (phoneNo.length === 10) {
      const customer = checkCustomerExists(phoneNo)
      if (customer) {
        setIsNewCustomer(false)
        setMemberName(customer.memberName)
        setMemberId(customer.memberId)
        setCreatedAt(customer.createdDate)
        setErrorMessage('')
      } else {
        setIsNewCustomer(true)
        setMemberName('')
        setMemberId('')
        setCreatedAt('')
        setErrorMessage('Customer not found. Do you want to create a new one?')
      }
    } else if (phoneNo.length > 0 && phoneNo.length < 10) {
      setErrorMessage('Invalid phone number format. It must be 10 digits.')
    } else {
      setErrorMessage('')
    }
  }, [phoneNo])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsCreateCustomerOpen(true)
  }

  // Close the modal
  const handleCloseModal = () => {
    setIsCreateCustomerOpen(false)
  }

  return (
    <form className="flex flex-wrap gap-3 mt-2" onSubmit={handleSubmit}>
      {/* Member Phone Number Field */}
      <Label className="flex flex-col gap-2">
        Phone Number
        <Input
          ref={phoneNoRef} // Use ref for focus, state for value
          placeholder="Enter Phone Number"
          onChange={handleChange}
          value={phoneNo}
          name="phoneNo"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </Label>

      {/* Display Error Message */}

      {phoneNo.length === 10 && !isNewCustomer && (
        <>
          {/* Member Name Field */}
          <Label className="flex flex-col gap-2">
            Member Name
            <Input placeholder="Enter Member name" name="memberName" value={memberName} disabled />
          </Label>

          {/* Member ID Field */}
          <Label className="flex flex-col gap-2">
            Member Id
            <Input placeholder="Enter Member Id" name="memberId" value={memberId} disabled />
          </Label>

          {/* Created At Field */}
          <Label className="flex flex-col gap-2">
            Created At
            <Input placeholder="Created At" value={created} disabled />
          </Label>

          {/* Submit Button */}
          <div className="ml-auto flex flex-col">
            <CustomerHistory />
          </div>
        </>
      )}

      {phoneNo.length === 10 && isNewCustomer && (
        <div className="ml-auto flex flex-col">
          <CreateCustomerBtn isOpen={isCreateCustomerOpen} onClose={handleCloseModal} />
        </div>
      )}
    </form>
  )
}

export default MemberForm
