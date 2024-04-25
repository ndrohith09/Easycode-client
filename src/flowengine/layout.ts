import { Edge, Node, Position } from "reactflow";

// import dagre from "@dagrejs/dagre";

// export const WIDTH = 250;
// export const HEIGHT = 80;

// export const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
//   console.log("getLayoutedElements");
//   const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
//   dagreGraph.setGraph({
//     ranker: "network-simplex", 
//   });

//   nodes.forEach((node) =>
//     dagreGraph.setNode(node.id, {
//       width: WIDTH,
//       height: HEIGHT,
//     }),
//   );

//   edges.forEach((edge) => dagreGraph.setEdge(edge.source, edge.target));
//   dagre.layout(dagreGraph);

//   nodes.forEach((node) => {
//     const nodeWithPosition = dagreGraph.node(node.id); 

//     node.position = {
//       x: nodeWithPosition.x - WIDTH / 2,
//       y: nodeWithPosition.y - HEIGHT / 2,
//     };
//   }); 

//   return { nodes, edges };
// };
