// import React from "react";
// import { ForceGraph2D } from "react-force-graph";

// function Animation() {

//   const data = {
//     nodes: [
//       { id: "A" },
//       { id: "B" },
//       { id: "C" },
//       { id: "D" },
//       { id: "E" },
//       { id: "F" },
//     ],

//     links: [
//       { source: "A", target: "B" },
//       { source: "A", target: "C" },
//       { source: "B", target: "D" },
//       { source: "C", target: "E" },
//       { source: "D", target: "F" },
//       { source: "E", target: "F" },
//     ],
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         backgroundColor: "black",
//       }}
//     >
//       <ForceGraph2D
//         graphData={data}

//         nodeCanvasObject={(node, ctx) => {
//           ctx.beginPath();
//           ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI);

//           ctx.fillStyle = "#00ffff";
//           ctx.shadowColor = "#00ffff";
//           ctx.shadowBlur = 20;

//           ctx.fill();
//         }}

//         linkColor={() => "#00ffff"}

//         linkDirectionalParticles={2}
//         linkDirectionalParticleSpeed={0.01}
//       />
//     </div>
//   );
// }

// export default Animation;