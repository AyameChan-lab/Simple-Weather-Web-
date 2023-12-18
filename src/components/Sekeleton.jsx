import React from 'react'

function Sekeleton() {
  return (
    <>
     <div className="sekeleton-left">
       <div className="animate-pulse">
         <p className="skel-01"></p>
         <p className="skel-03"></p>
         <p className="skel-01"></p>
         <p className="skel-02"></p>
         <p className="skel-02"></p>
       </div>
     </div>
     <div className="sekeleton-right">
       <div className="in-skel-r">
         <div className="skel-icon"></div>
         <p className="skel-04"></p>
       </div>
     </div>
    </>
  )
}

export default Sekeleton