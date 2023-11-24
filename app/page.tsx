import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div>
        <h1 className="text-2xl font-bold">Bin2Dec</h1>
        <input type="text" name="binary" id="binaryInput" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">Dec2Bin</h1>
        <input type="text" name="decimal" id="decimalInput" />
      </div>
      <div>
        {/* a diable input for show resualt... */}
      </div>
    </main>
  )
}
