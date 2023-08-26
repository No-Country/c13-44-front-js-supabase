
import { Input } from '@nextui-org/react'
import { MapView } from '../components'


export const Screen = () => {
  return (
    <>
      <div className='flex flex-row-reverse justify-end gap-72 '>
        <MapView/>
        <div>
          <div className="bg-gray-100 py-12 rounded-xl">
            <div className="px-6 font-mono">
              <h2 className="text-xl text-center font-bold mb-4 text-primary">Contáctanos</h2>
              <form className="w-72">
                <div className="mb-4">
                  <Input
                    type="text"
                    label="Tu nombre"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    type="email"
                    label="Email"

                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-primary font-bold mb-2">Mensaje</label>
                  <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" rows={4}></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary font-bold text-white px-6 py-2 rounded-lg hover:bg-primary-600 "
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
