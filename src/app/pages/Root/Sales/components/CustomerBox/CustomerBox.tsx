import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MemberForm from './components/MemberForm'

function CustomerBox() {
  return (
    <Card >
      <CardHeader className="pb-2">
        <CardTitle>
          <h3 className="heading-secondary">Customer Selection</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <MemberForm />
      </CardContent>
    </Card>
  )
}

export default CustomerBox
