import React from 'react';

const hotels = [
  {
    name: 'Gedung Brawijaya',
    price: 'Rp15.000.000 per malam',
    location: 'Kota Surabaya',
    description: 'Gedung Brawijaya menawarkan fasilitas mewah dan layanan yang ramah.',
  },
  {
    name: 'Gedung Serbaguna Sidoarjo',
    price: 'Rp8.000.000 per malam',
    location: 'Kota Sidoarjo',
    description: 'Gedung Serbaguna Sidoarjo adalah tempat yang nyaman dan multifungsi.',
  },
  {
    name: 'Gedung Ksatria',
    price: 'Rp7.000.000 per malam',
    location: 'Kota Surabaya',
    description: 'Gedung Ksatria adalah pilihan terbaik untuk penginapan yang terjangkau.',
  },
];

const IndexPage = () => {
  return (
    <div>
      <h2>Daftar Gedung</h2>
      {hotels.map((hotel, index) => (
        <div key={index} className="hotel">
          <h2>{index+1}. {hotel.name}</h2>
          <p><strong>Harga:</strong> {hotel.price}</p>
          <p><strong>Lokasi:</strong> {hotel.location}</p>
          <p><strong>Deskripsi:</strong> {hotel.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
