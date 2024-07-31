import React from 'react'

 const parseData = async (items) => {
     console.log(items);
     
     const videoIDs = [];
     const channelIDs = [];

     items.forEach(element => {
         channelIDs.push(element.snippet.channelID)
         videoIDs.push(element.id.channelID);
     });
  return (
      <div>
      
      </div>
  )
}
export default parseData