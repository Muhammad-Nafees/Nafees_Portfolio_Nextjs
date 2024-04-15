
export const sliceInFromLeft= (delay) => {
      return{
         hidden:{x:100,opacity:0},
         visible:{
             x:0,
            opacity:1,
            transition:{
                 delay:delay,
                 duration:0.5
            }
         }
      }
}


export const sliceInFromRight= (delay) => {
    return{
       hidden:{x:100,opacity:0},
       visible:{
           x:0,
          opacity:1,
          transition:{
               delay:delay,
               duration:0.5
          }
       }
    }
}



export const sliceInFromTop={
       hidden:{x:-100,opacity:0},
       visible:{
           x:0,
          opacity:1,
          transition:{
               delay:0.5,
               duration:0.5
          }
       }
}
