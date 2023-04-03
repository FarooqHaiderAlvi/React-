import React from 'react'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: './public/assets/img.jpg',
  imageSize: 90,
};

export default function Hello() {
  return (
    <div>
      <img src={user.imageUrl} alt={'photo of '+user.name} 
      
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}

      />
    </div>
  )
}
