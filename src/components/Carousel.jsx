import React, { useState } from 'react'

export default function Carousel({images}){
  const [i,setI] = useState(0)
  if(!images || images.length===0) return null
  const prev = ()=> setI((i-1+images.length)%images.length)
  const next = ()=> setI((i+1)%images.length)
  return (
    <div className="space-y-3">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img src={images[i]} alt="car" className="w-full h-64 object-cover"/>
      </div>
      <div className="flex gap-2 justify-center">
        <button onClick={prev} className="bg-white/6 text-white px-3 py-2 rounded-lg">◀</button>
        {images.map((s,idx)=>(
          <img key={idx} src={s} onClick={()=>setI(idx)} className={`w-14 h-10 object-cover rounded ${idx===i?'ring-2 ring-teal-400':''}`} alt="thumb"/>
        ))}
        <button onClick={next} className="bg-white/6 text-white px-3 py-2 rounded-lg">▶</button>
      </div>
    </div>
  )
}