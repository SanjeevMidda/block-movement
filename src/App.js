import "./index.css";
import { OrbitControls, Environment, PivotControls } from "@react-three/drei";

function App() {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <Environment preset="city" />
      <mesh position={[2, 0, -2]}>
        <sphereGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>

      <PivotControls>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </PivotControls>
    </>
  );
}

export default App;
