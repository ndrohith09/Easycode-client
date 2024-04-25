"use strict";var _a,__assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,a=arguments.length;o<a;o++)for(var d in t=arguments[o])Object.prototype.hasOwnProperty.call(t,d)&&(e[d]=t[d]);return e}).apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,o){if(o||2===arguments.length)for(var a,d=0,r=t.length;d<r;d++)!a&&d in t||(a||(a=Array.prototype.slice.call(t,0,d)),a[d]=t[d]);return e.concat(a||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getEdgeById=exports.getEdgeId=exports.getNodesUnderNode=exports.getNodesAttachedWithTargetHandle=exports.getNodesAttachedWithSourceHandle=exports.getNodeById=exports.getReactFlowEdge=exports.updateMetadataOfSwitchNode=exports.updateMetaDataOfIfNode=exports.setMetaDataOfIfNode=exports.updateMetaDataOfLoopV2Block=exports.setMetaDataOfLoopV2Block=exports.removeEdgesOfNodes=exports.getdeleteNodeFunction=exports.setRootNodeOfFlow=exports.getCurrentRoot=exports.createStateValueData=void 0;var reactflow_1=require("reactflow"),LumosEngineStore_1=require("./LumosEngineStore"),types_1=require("components/LumosEngine/Nodes/types/types"),constants_1=require("components/LumosEngine/constants"),deleteBaseBlock_1=require("components/LumosEngine/Actions/DeleteAction/deleteBaseBlock"),deleteIfEseBlock_1=require("components/LumosEngine/Actions/DeleteAction/deleteIfEseBlock"),deleteExtendedIfNode_1=require("components/LumosEngine/Actions/DeleteAction/deleteExtendedIfNode"),deleteLoopBlock_1=require("components/LumosEngine/Actions/DeleteAction/deleteLoopBlock"),deleteSwitchBlock_1=require("components/LumosEngine/Actions/DeleteAction/deleteSwitchBlock"),createStateValueData=function(){var e=LumosEngineStore_1.useLumosEngineStore.getState().myEdges,t=new Map;e.forEach(function(e){var o=e.source,a=e.target,d=t.get(o)||[];d.push(a),t.set(o,d)});var o=new Map;function a(e,o){for(var a=[[e,o]],n=[],s={};a.length>0;)a.forEach(function(e){var o=e[0],a=r(o,d(o,e[1]));s=__assign(__assign({},s),a),(t.get(o)||[]).forEach(function(e){return n.push([e,a])})}),a=n,n=[];return s}function d(e,t){var a,d,r=(0,exports.getNodeById)(e);if(r){o.set(r.id,t),console.log("init before nodeStateValueObjMap",r,t,o);var n=o.get(r.id)||{};console.log("init before myPrevObject",n);var s={nodes:__assign(__assign({},"nodes"in n?n.nodes:{}),t&&"nodes"in t?t.nodes:{}),variables:__assign(__assign({},"variables"in n?n.variables:{}),t&&"variables"in t?t.variables:{})};if(console.log("init before myStateObj",s),Object.keys(variableTypeNodes).includes(r.data.nodetype)){var i=getTitleAndType(r),u=i.title,l=i.itemType;u&&l&&(console.log("init before myStateObj[variables]",s),s.variables[u]={name:u,type:l})}else if(r.data.nodetype===types_1.ProcessNodeEnum.DECLARE_VARIABLE)console.log("init before myStateObj node.data",r.data),r.data.values&&Object.keys(r.data.values).length>0&&(null===(d=r.data.values)||void 0===d||d.variables.forEach(function(e){if(e.name&&e.type){var t={name:e.name,type:e.type};s.variables[e.name]=t}}),console.log("init before myStateObj[variables]",s));else{var p=r.data.nodename,c=r.data.returns;p&&c&&(s.nodes=__assign(__assign({},s.nodes),((a={})[p]=__spreadArray(__spreadArray([],p in s.nodes?s.nodes[p]:[],!0),[c],!1),a)))}return s=__assign(__assign(__assign({},n),t),s),console.log("init before myStateObj after",s),s}}function r(e,t){var o=(0,exports.getNodeById)(e);if(!o||!function(e){var t=(0,exports.getNodeById)(e);return!!t&&[types_1.NodeTypeEnum.UnitBlock,types_1.NodeTypeEnum.ExecutorNode,types_1.NodeTypeEnum.LoopBlockV2].includes(t.type)}(e))return t;var d=o.data.metadata.rootNode;return d?a(d,t):new Error}a(constants_1.ROOT_ID,{}),LumosEngineStore_1.useLumosEngineStore.setState({nodeStateValueObjMap:o})};exports.createStateValueData=createStateValueData;var getTitleAndType=function(e){var t,o,a,d,r;switch(e.data.nodetype){case"COMPLEX_MATHS_EXPR":d=null===(t=e.data.values)||void 0===t?void 0:t.result,r="NUMBER";break;default:d=null===(o=e.data.values)||void 0===o?void 0:o.name,r=(null===(a=variableTypeNodes[e.data.nodetype])||void 0===a?void 0:a.itemType)||"OBJECT"}return{title:d,itemType:r}},getCurrentRoot=function(){return LumosEngineStore_1.useLumosEngineStore.getState().rootStack[0]};exports.getCurrentRoot=getCurrentRoot;var setRootNodeOfFlow=function(e){if((0,exports.getNodeById)(e)){var t=(0,exports.getCurrentRoot)();"root"!==t&&((0,exports.getNodeById)(t).data.metadata.rootNode=e)}};exports.setRootNodeOfFlow=setRootNodeOfFlow;var getdeleteNodeFunction=function(e){return REACT_NODE_AND_DELETE_FUNCTION_MAPPING[e]};exports.getdeleteNodeFunction=getdeleteNodeFunction;var REACT_NODE_AND_DELETE_FUNCTION_MAPPING=((_a={})[types_1.NodeTypeEnum.BaseBlock]=deleteBaseBlock_1.deleteBaseBlock,_a[types_1.NodeTypeEnum.IfElse]=deleteIfEseBlock_1.deleteIfElseBlock,_a[types_1.NodeTypeEnum.ExtendedIfElse]=deleteExtendedIfNode_1.deleteExtendedIfNode,_a[types_1.NodeTypeEnum.LoopBlockV2]=deleteLoopBlock_1.deleteLoopBlock,_a[types_1.NodeTypeEnum.SwitchBlock]=deleteSwitchBlock_1.deleteSwitchBlock,_a[types_1.NodeTypeEnum.AddCaseBlock]=null,_a[types_1.NodeTypeEnum.SwitchV2Node]=null,_a[types_1.NodeTypeEnum.RootBlock]=null,_a[types_1.NodeTypeEnum.ExecutorNode]=null,_a[types_1.NodeTypeEnum.AddBlock]=null,_a[types_1.NodeTypeEnum.AddLoopBlock]=null,_a[types_1.NodeTypeEnum.UnitBlock]=null,_a),removeEdgesOfNodes=function(e){if(!e)return null;var t=new Set;e.forEach(function(e){return t.add(e)});var o=LumosEngineStore_1.useLumosEngineStore.getState(),a=o.myEdges;(0,o.removeEdges)(a.filter(function(e){return t.has(e.source)||t.has(e.target)}).map(function(e){return e.id}))};exports.removeEdgesOfNodes=removeEdgesOfNodes;var setMetaDataOfLoopV2Block=function(e,t,o){var a=(0,exports.getNodeById)(e),d=(0,exports.getNodeById)(t),r=(0,exports.getNodeById)(o);if(!a||!d||!r)return new Error("Error in setting Metadata of ifNode");a.data.metadata||(a.data.metadata={}),a.data.metadata={yes:r.id,no:d.id,rootNode:r.id}};exports.setMetaDataOfLoopV2Block=setMetaDataOfLoopV2Block;var updateMetaDataOfLoopV2Block=function(e,t,o){var a=(0,exports.getNodeById)(e),d=(0,exports.getNodeById)(t),r=(0,exports.getNodeById)(o);if(console.log("loopNodev2",a,d,r),!a||!d||!r||a.type!==types_1.NodeTypeEnum.LoopBlockV2)return new Error("Error while updating metadata of loopNodeV2");var n=a.data.metadata;if(!n)return console.log("Metadata don't exist on loopNodeV2 nodeId ".concat(e,". Error while updating metadata of loopNodeV2")),new Error("Metadata don't exist on loopNodeV2 nodeId ".concat(e,". Error while updating metadata of loopNodeV2"));n.yes===t?n.yes=o:n.no=o,r.data.metadata.sourceId=a.id};exports.updateMetaDataOfLoopV2Block=updateMetaDataOfLoopV2Block;var setMetaDataOfIfNode=function(e,t,o){var a=(0,exports.getNodeById)(e),d=(0,exports.getNodeById)(t),r=(0,exports.getNodeById)(o);if(!a||!d||!r)return new Error("Error in setting Metadata of ifNode");a.data.metadata={true:d.id,false:r.id},d.data.metadata.sourceId=a.id,r.data.metadata.sourceId=a.id};exports.setMetaDataOfIfNode=setMetaDataOfIfNode;var updateMetaDataOfIfNode=function(e,t,o){var a=(0,exports.getNodeById)(e),d=(0,exports.getNodeById)(t),r=(0,exports.getNodeById)(o);if(!a||!d||!r||a.type!==types_1.NodeTypeEnum.IfElse)return new Error("Error while updating metadata of ifNode");var n=a.data.metadata;if(!n)return new Error("Metadata don't exist on ifElse nodeId ".concat(e,". Error while updating metadata of ifNode"));n.true===t?n.true=o:n.false=o,r.data.metadata.sourceId=a.id};exports.updateMetaDataOfIfNode=updateMetaDataOfIfNode;var updateMetadataOfSwitchNode=function(e,t,o){var a=(0,exports.getNodeById)(e),d=(0,exports.getNodeById)(t),r=(0,exports.getNodeById)(o);if(!a||!d||!r||a.type!==types_1.NodeTypeEnum.SwitchBlock)return new Error("Error while updating metadata of switchNode");var n=(0,exports.getEdgeId)(a.id,r.id);if(!n)return new Error("Error while updating metadata of switchNode. Add not found between switch node and newNode");var s=a.data.metadata;if(!s)return new Error("Metadata don't exist on switch nodeId ".concat(e,". Error while updating metadata of ifNode"));var i=s.cases;i=i.map(function(e){return e.nodeId===d.id&&(e.nodeId=r.id,e.edgeId=n),e}),a.data.metadata.cases=i};exports.updateMetadataOfSwitchNode=updateMetadataOfSwitchNode;var getReactFlowEdge=function(e){if(!e.source||!e.target)return null;var t,o,a=(0,exports.getNodeById)(e.source),d=(0,exports.getNodeById)(e.target);if(!a||!d)return null;switch(a.type){case types_1.NodeTypeEnum.BaseBlock:o=d.type!==types_1.NodeTypeEnum.AddBlock,t=null;break;case types_1.NodeTypeEnum.IfElse:o=d.type!==types_1.NodeTypeEnum.AddBlock,t=a.data.metadata.true===d.id?"True":"False";break;case types_1.NodeTypeEnum.ExtendedIfElse:o=!1,t=a.data.metadata.true===d.id?"True":"False";break;case types_1.NodeTypeEnum.UnitBlock:o=!1,t=null;break;case types_1.NodeTypeEnum.LoopBlockV2:o=d.type!==types_1.NodeTypeEnum.UnitBlock,t=a.data.metadata.yes===d.id?"Continues until true":"Ends if false";break;case types_1.NodeTypeEnum.SwitchBlock:for(var r=0,n=a.data.metadata.cases;r<n.length;r++){var s=n[r];if(s.nodeId===d.id){t=s.key;break}}t=t||"new",d.type===types_1.NodeTypeEnum.AddCaseBlock&&(t=null),o=d.type!==types_1.NodeTypeEnum.AddCaseBlock&&d.type!==types_1.NodeTypeEnum.AddBlock;break;case types_1.NodeTypeEnum.ExecutorNode:o=!0,t=null}return{id:e.id,source:a.id,target:d.id,animated:!0,type:"edge",data:{isAdd:o,label:t},markerEnd:{type:reactflow_1.MarkerType.ArrowClosed}}};exports.getReactFlowEdge=getReactFlowEdge;var getNodeById=function(e){var t=LumosEngineStore_1.useLumosEngineStore.getState().myNodesMap;return e&&t.has(e)?t.get(e):null};exports.getNodeById=getNodeById;var getNodesAttachedWithSourceHandle=function(e){if(!e)return null;for(var t=null,o=0,a=LumosEngineStore_1.useLumosEngineStore.getState().myEdges;o<a.length;o++){var d=a[o];d.source===e&&(null===t&&(t=[]),t.push(d.target))}return t};exports.getNodesAttachedWithSourceHandle=getNodesAttachedWithSourceHandle;var getNodesAttachedWithTargetHandle=function(e){if(!e)return null;for(var t=null,o=0,a=LumosEngineStore_1.useLumosEngineStore.getState().myEdges;o<a.length;o++){var d=a[o];d.target===e&&(null===t&&(t=[]),t.push(d.source))}return t};exports.getNodesAttachedWithTargetHandle=getNodesAttachedWithTargetHandle;var getNodesUnderNode=function(e){var t=new Set;return function e(o){if(!o||t.has(o))return[];t.add(o);var a=[o],d=[],r=(0,exports.getNodesAttachedWithSourceHandle)(o);return null==r||r.forEach(function(t){var r=(0,exports.getNodeById)(t);if(d.push((0,exports.getEdgeId)(o,t)),e(t).forEach(function(e){return a.push(e)}),[types_1.NodeTypeEnum.ExecutorNode,types_1.NodeTypeEnum.LoopBlockV2].includes(r.type)){var n=r.data.metadata.rootNode;n&&e(n).forEach(function(e){return a.push(e)})}}),a}(e)};exports.getNodesUnderNode=getNodesUnderNode;var getEdgeId=function(e,t){if(!e||!t)return null;var o=LumosEngineStore_1.useLumosEngineStore.getState().edgeIdMap,a="".concat(e,"-").concat(t);return o.has(a)?o.get(a):null};exports.getEdgeId=getEdgeId;var getEdgeById=function(e){if(!e)return null;var t=LumosEngineStore_1.useLumosEngineStore.getState().myEdgesMap;return t.has(e)?t.get(e):null};exports.getEdgeById=getEdgeById;var variableTypeNodes={BUILD_JSON:{}};