import { useLoaderData, LoaderFunction } from 'remix'
import { Map, View } from 'ol';
import { TileLayer } from 'ol/layer'
import { OSM } from 'ol/source'
import { useBoxRandom } from '~/utils/hooks';

interface LoaderData {
  coordinates: number[]
}

export const loader: LoaderFunction = async (): Promise<LoaderData> => {
  const { data } = await useBoxRandom()
  return {
    coordinates: data.location.split(" ")
  }
}

export default function MapsPage() {
  const data = useLoaderData<LoaderData>()
  new Map({
    layers: [
      new TileLayer({source: new OSM()})
    ],
    view: new View({
      center: data.coordinates,
      zoom: 2
    }),
    target: 'map'
  });

  return <div id="map" style="width: 100%, height: 400px"></div>
}
