// SchemeDetails.js

import React from "react";
import { useParams } from "react-router-dom";

const schemesData = [
  { id: 1, title: "Prime Minister Matsya Sampada Yojana", description: "Details about Prime Minister Matsya Sampada Yojana." },
  { id: 2, title: "PM-KUSUM Scheme", description: "Details about PM-KUSUM Scheme." },
  { id: 3, title: "Sub-Mission on Agricultural Mechanization (SMAM)", description: "Details about Sub-Mission on Agricultural Mechanization (SMAM)." },
  { id: 4, title: "National Agriculture Market Scheme (NAM or e-NAM)", description: "Details about National Agriculture Market Scheme." },
  { id: 5, title: "Pradhan Mantri Kisan Samman Nidhi Yojana", description: "Details about Pradhan Mantri Kisan Samman Nidhi Yojana." },
  { id: 6, title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)", description: "Details about Pradhan Mantri Fasal Bima Yojana (PMFBY)." },
  { id: 7, title: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)", description: "Details about Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)." },
  { id: 8, title: "Pradhan Mantri Kisan Mandhan Scheme", description: "Details about Pradhan Mantri Kisan Mandhan Scheme." },
  { id: 9, title: "Kisan Credit Card Scheme", description: "Details about Kisan Credit Card Scheme." },
  { id: 10, title: "Soil Health Card Scheme", description: "Details about Soil Health Card Scheme." },
  { id: 11, title: "Agriculture Infrastructure Fund (AIF) Scheme", description: "Details about Agriculture Infrastructure Fund (AIF) Scheme." },
  { id: 12, title: "Krishi Udan Scheme", description: "Details about Krishi Udan Scheme." },
  { id: 13, title: "Feed and Fodder Development Scheme", description: "Details about Feed and Fodder Development Scheme." },
  { id: 14, title: "Rashtriya Krishi Vikas Yojana (RKVY)", description: "Details about Rashtriya Krishi Vikas Yojana (RKVY)." },
  { id: 15, title: "Paramparagat Krishi Vikas Yojana (PMVY)", description: "Details about Paramparagat Krishi Vikas Yojana (PMVY)." },
  { id: 16, title: "Farmer Development Certificate Scheme", description: "Details about Farmer Development Certificate Scheme." },
  { id: 17, title: "Rashtriya Gokul Mission (RGM)", description: "Details about Rashtriya Gokul Mission (RGM)." },
  { id: 18, title: "Dairy Entrepreneurship Development Scheme", description: "Details about Dairy Entrepreneurship Development Scheme." },
  { id: 19, title: "National Horticulture Mission", description: "Details about National Horticulture Mission." },
  { id: 20, title: "National Mission for Sustainable Agriculture(NMSA)", description: "Details about National Mission for Sustainable Agriculture(NMSA)." },
  { id: 21, title: "Seed Village Scheme", description: "Details about Seed Village Scheme." },
  { id: 22, title: "Organic Farming Incentive Scheme", description: "Details about Organic Farming Incentive Scheme." },
  { id: 23, title: "Farmer Producer Organization (FPO)", description: "Details about Farmer Producer Organization (FPO)." },
  { id: 24, title: "Drones for Precision Farming", description: "Details about Drones for Precision Farming." },
  { id: 25, title: "National Beekeeping and Honey Mission Scheme", description: "Details about National Beekeeping and Honey Mission Scheme." },
];

function SchemeDetails() {
  const { id } = useParams();
  const scheme = schemesData.find(s => s.id === parseInt(id));

  return (
    <div>
      {scheme ? (
        <>
          <h1>{scheme.title}</h1>
          <p>{scheme.description}</p>
        </>
      ) : (
        <p>Scheme not found.</p>
      )}
    </div>
  );
}

export default SchemeDetails;   