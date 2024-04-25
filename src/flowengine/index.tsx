import ReactFlow, {
    ReactFlowProvider,
    Background,
    Controls,
    Edge,
    Node,
    BackgroundVariant,
    Panel,
    useReactFlow,
  } from "reactflow";
//   import { edgeTypes, nodeTypes } from "./constants";
//   import { getLayoutedElements } from "./layout";
//   import { useEffect, useState } from "react";
//   import { NodeSlideOver } from "./NodeHub/NodeHub";
//   import { useNodeHubStore } from "./Store/NodeHubStore/NodeHubStore";
//   import {
//     RFAction,
//     RFState,
//     useLumosEngineStore,
//   } from "./Store/LumosEngineStore/LumosEngineStore";
//   import { NodeRaw, NodeTypeEnum } from "./Nodes/types/types";
//   import ModalHub from "./ModalHub/ModalHub";
//   import { useModalHubStore } from "./Store/ModalHubStore/ModalHubStore";
//   import { FlowEngineProps } from "./App";
//   import { BackwardIcon } from "@heroicons/react/24/solid";
//   import { LumosNodeEditor } from "components/LumosNodeEditor/LumosEngine.Editor"; 
  
//   export interface ExtendedNode extends Node {
//     parentId?: string;
//   }
  
 
  
  
//   const LumosEngine = (props: FlowEngineProps) => {
//     const [flowId, setFlowID] = useState("");
  
//     const options = {
//       minZoom: 0.5,
//       maxZoom: 1.5,
//     };
  
//     const {
//       nodes,
//       edges,
//       onNodesChange,
//       onEdgesChange,
//       onConnect,
//       goBacktoPrevRootNode,
//       currentRoot,
//     } = useLumosEngineStore((state) => ({
//       nodes: state.nodes,
//       edges: state.edges,
//       onNodesChange: state.onNodesChange,
//       onEdgesChange: state.onEdgesChange,
//       onConnect: state.onConnect,
//       setNodes: state.setNodes,
//       setEdges: state.setEdges,
//       goBacktoPrevRootNode: state.goBacktoPrevRootNode,
//       currentRoot: state.rootStack.length === 0 ? null : state.rootStack[0],
//     }));
   
//     useEffect(() => { 
//       setFlowID(props.flowId);
//       const updatedPropsNodes = props.nodes;
//       if (props.nodes.length !== 0) {
//         console.log("84-->", updatedPropsNodes);
//         useLumosEngineStore
//           .getState()
//           .initialize(updatedPropsNodes as NodeRaw[], props.edges);
//         autoLayout();
//       }
//     }, [props, props.flowId]);
  
//     useEffect(() => {
//       if (flowId === props.flowId) {
//         autoLayout();
//       }
//     }, [nodes, edges]);
  
//     function autoLayout() {
//       const { nodes: oldNodes, edges: oldEdges } = useLumosEngineStore.getState();
//       if (oldNodes.length === 0) return;
//       const { nodes: updatedNodes, edges: updatedEdges } = getLayoutedElements(
//         oldNodes,
//         oldEdges,
//       );
//       useLumosEngineStore.getState().setNodesAndEdges(updatedNodes, updatedEdges);
//     }
  
//     const { isNodeHubOpen, openNodeHub, onResetProcessNode } = useNodeHubStore(); // Destructuring state and actions from the store
//      const { modalHubProps: actionModalProps } = useModalHubStore();
  
//     const proOptions = { hideAttribution: true };
  
//     return (
//       <ReactFlowProvider>
   
//           <NodeSlideOver
//             onClose={() => {
//               openNodeHub(!isNodeHubOpen);
//               onResetProcessNode();
//             }}
//             open={isNodeHubOpen}
//           />
//           <ReactFlow
//             nodesDraggable={false}
//             nodesConnectable={false}
//             panOnScroll
//             panOnDrag
//             preventScrolling
//             fitView
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onConnect={onConnect}
//             fitViewOptions={options}
//             nodeTypes={nodeTypes}
//             edgeTypes={edgeTypes}
//             nodes={[...nodes]}
//             edges={[...edges]}
//             deleteKeyCode={null}
//             disableKeyboardA11y={true}
//             proOptions={proOptions}
//             key={props.key}
//             style={{ background: "#f5f5f5" }}
//           >
//             <Controls position="bottom-right" showInteractive={false} />
  
//             <Panel
//               position="top-left"
//               style={
//                 currentRoot === "root"
//                   ? { display: "none" }
//                   : { display: "block" }
//               }
//             >
//               <span
//                 onClick={goBacktoPrevRootNode}
//                 className="mr-2 inline-flex cursor-pointer rounded-md bg-white px-2 py-2 text-xs font-medium text-primary ring-1 ring-inset ring-primary"
//               >
//                 <BackwardIcon className="h-4 w-4" />
//               </span>
//             </Panel>
  
//             <Background />
//           </ReactFlow>
  
//           {actionModalProps.open && <ModalHub {...actionModalProps} />}
 
   
//       </ReactFlowProvider>
//     );
//   };
  
//   export default LumosEngine;
  