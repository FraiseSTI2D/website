import { LoaderFunction, useLoaderData } from 'remix'
import { useBox, useCheckAuth } from '~/utils/hooks'
import { Box } from '~/utils/types'

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<Box> => {
  await useCheckAuth(request)
  const id = parseInt(params.id as unknown as string)
  if (typeof id !== 'number') throw new Response()
  const { data } = await useBox(request, id)
  return data
}

export default function Box() {
  const data = useLoaderData<Box>()
  return <>{JSON.stringify(data)}</>
}
