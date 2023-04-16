import React, { useCallback, useState } from 'react';
import { Button, TextField } from '@mui/material'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' }, style: { background: 'grey', color: 'white' } ,targetPosition:position.right},
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' }, style: { background: 'blue', color: 'white' } },
  { id: '3', position: { x: 100, y: 200 }, data: { label: '3' }, style: { background: 'red', color: 'white' } },
  { id: '4', position: { x: 150, y: 300 }, data: { label: '4' }, type: 1 },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', style: { stroke: 'blue' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, arrowHeadType: 'arrow', arrowHeadColor: 'blue', style: { stroke: 'blue' } },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeLabel, setNodeLabel] = useState('');
  const [id ,setId] =useState(4)

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const handleCreateNode = () => {
    setId(id+1)
    setNodes((prev) => [...prev, { id:id, position: { x: 0, y: 0 }, data: { label: nodeLabel } }]);
    setNodeLabel('');
  };

  // const nodeColor = (node) => {
  //   switch (node.type) {
  //     case 1:
  //       return '#6ede87';
  //     case 2:
  //       return '#6865A5';
  //     default:
  //       return '#ff0072';
  //   }
  // };

  // const rfStyle = {
  //   backgroundColor: '#B8CEFF',
  // };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        // style={rfStyle}
      >
        <Controls />
        <MiniMap  nodeStrokeWidth={3} zoomable pannable />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
      <form onSubmit={handleCreateNode}>
        <TextField id="node-label"
          label="Node Label"
          variant="outlined"
          value={nodeLabel}
          onChange={(e) => setNodeLabel(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Create Node
        </Button>
      </form>
    </div>
  );
}
