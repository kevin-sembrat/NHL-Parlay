// import { useState, useEffect } from "react";

// export const Data = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // This runs once, on mount, because deps array is empty
//     const fetchData = async () => {
//       try {
//         const res = await fetch("/api/nhl");
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         const json = await res.json();
//         setData(json);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // ← empty array means “only on first render”

//   if (loading) return <p>Loading…</p>;
//   if (error) return <p>Error: {error}</p>;

//   return data
// };
