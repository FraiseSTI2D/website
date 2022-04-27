import { ActionFunction, LoaderFunction } from 'remix'
import { useCheckAuth } from '~/utils/hooks'

export const loader: LoaderFunction = async ({ request }) => {
  await useCheckAuth(request)
  return null
}

export const action: ActionFunction = ({ request }) => {
  const form = request.formData()
}

export default function AddBox() {}
